
WITH skill_pairs_salary AS (
    SELECT 
        s1.skills as skill_1,
        s2.skills as skill_2,
        CONCAT(s1.skills, ' + ', s2.skills) as skill_combination,
        COUNT(DISTINCT jpf.job_id) as job_count,
        CAST(AVG(jpf.salary_year_avg) AS DECIMAL(10,2)) as avg_salary,
        MIN(jpf.salary_year_avg) as min_salary,
        MAX(jpf.salary_year_avg) as max_salary,
        CAST(STDDEV(jpf.salary_year_avg) AS DECIMAL(10,2)) as salary_std_dev,
        CAST(
            (AVG(jpf.salary_year_avg) - (
                SELECT AVG(salary_year_avg) 
                FROM job_postings_fact 
                WHERE job_title_short = 'Data Analyst' 
                AND salary_year_avg IS NOT NULL
                AND salary_year_avg BETWEEN 30000 AND 300000
            )) / (
                SELECT AVG(salary_year_avg) 
                FROM job_postings_fact 
                WHERE job_title_short = 'Data Analyst' 
                AND salary_year_avg IS NOT NULL
                AND salary_year_avg BETWEEN 30000 AND 300000
            ) * 100 AS DECIMAL(10,2)
        ) as salary_premium_percent
        
    FROM job_postings_fact jpf
    INNER JOIN skills_job_dim sjd1 ON jpf.job_id = sjd1.job_id
    INNER JOIN skills_dim s1 ON sjd1.skill_id = s1.skill_id
    INNER JOIN skills_job_dim sjd2 ON jpf.job_id = sjd2.job_id
    INNER JOIN skills_dim s2 ON sjd2.skill_id = s2.skill_id
    
    WHERE 
        jpf.job_title_short = 'Data Analyst'
        AND jpf.salary_year_avg IS NOT NULL
        AND jpf.salary_year_avg BETWEEN 30000 AND 300000
        AND s1.skill_id < s2.skill_id  
        
    GROUP BY s1.skills, s2.skills
    HAVING COUNT(DISTINCT jpf.job_id) >= 5
    ORDER BY avg_salary DESC
)

SELECT 
    skill_combination,
    job_count,
    avg_salary,
    salary_premium_percent,
    min_salary,
    max_salary,
    salary_std_dev,
    CASE 
        WHEN salary_std_dev > 0 THEN 
            CAST((avg_salary / salary_std_dev) AS DECIMAL(10,2))
        ELSE NULL 
    END as consistency_score

FROM skill_pairs_salary

ORDER BY avg_salary DESC
LIMIT 20;

-- This query retrieves the top skill pairs for Data Analyst positions, calculating average salary, minimum and maximum salaries, standard deviation, and a consistency score based on the average salary divided by the standard deviation.
/* Key Insights:
The Ultra-Premium Discovery ($155K+)
The most shocking revelation: Certain skill combinations command salaries that rival senior engineering roles:

Go + MATLAB: $159K (71% premium) - Scientific computing meets systems programming
Scala + Oracle: $157K (69% premium) - Enterprise big data with database mastery
Python + Atlassian: $155K (66% premium) - Development automation with enterprise tools

This represents a quantum leap from your foundational analysis. While SQL+Python averaged ~$95K, these combinations push well into the $150K+ range.
The "Reliability Sweet Spot"

The consistency score reveals which combinations offer predictable high earnings:
SQL Server + Kafka: $155K (6.17 consistency) - Most reliable ultra-premium combination
PostgreSQL + Linux: $144K (6.08 consistency) - Dependable open-source stack
MongoDB + Hadoop: $154K (4.62 consistency) - Modern NoSQL + big data

Strategic Evolution: Beyond Foundation Skills
Phase 5 (Combination Mastery) - Building on all previous phases:
Your career progression now looks like:

Foundation: SQL + Python ($95K baseline)
Visualization: Add Tableau ($105K range)
Individual Premium: Add PyTorch/TensorFlow ($125K range)
Combination Premium: Strategic pairings ($145-159K range)

The Three Premium Pathways
Based on this data, three distinct $150K+ career paths emerge:

1. Enterprise Systems Architect
SQL Server + Kafka ($155K)
PostgreSQL + Linux ($144K)
Focus: Real-time enterprise data systems

2. AI/Scientific Computing Specialist
Go + MATLAB ($159K)
NumPy + TensorFlow ($149K)
Focus: High-performance scientific applications

3. Modern Data Platform Engineer
Databricks + Redshift ($151K)
MongoDB + Spark ($143K)
Focus: Cloud-native analytics platforms

Market Intelligence: The Demand Paradox
Critical insight: Unlike foundational skills, premium combinations show an inverse relationship between job count and salary:

Highest paying combinations: 5-6 jobs available
Most jobs (12): Still $144K+ average
Implication: Extreme specialization creates scarcity value

Actionable Strategy: The Combination Blueprint
For immediate impact (building on your SQL+Python foundation):

Quick Win: Add Tableau → Perl + Tableau combination (12 jobs at $144K)
Enterprise Track: Learn Kafka → SQL Server + Kafka ($155K with 6.17 consistency)
AI Track: Master TensorFlow → NumPy + TensorFlow ($149K)

The key insight: Don't just add skills linearly. Engineer combinations that solve complete business problems and create unique value propositions in the market.
This analysis fundamentally changes the data analyst salary ceiling from ~$125K to $160K+ through strategic skill combination mastery.
*/


