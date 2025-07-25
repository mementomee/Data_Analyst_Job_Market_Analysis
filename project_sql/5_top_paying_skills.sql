
WITH skill_salary_analysis AS (
    SELECT 
        sd.skills,
        sd.skill_id,
        COUNT(DISTINCT jpf.job_id) as job_count,
        CAST(AVG(jpf.salary_year_avg) AS DECIMAL(10,2)) as avg_yearly_salary,
        CAST(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY jpf.salary_year_avg) AS DECIMAL(10,2)) as median_yearly_salary,
        MIN(jpf.salary_year_avg) as min_salary,
        MAX(jpf.salary_year_avg) as max_salary,
        CAST(STDDEV(jpf.salary_year_avg) AS DECIMAL(10,2)) as salary_std_dev
    FROM job_postings_fact jpf
    INNER JOIN skills_job_dim sjd ON jpf.job_id = sjd.job_id
    INNER JOIN skills_dim sd ON sjd.skill_id = sd.skill_id
    WHERE 
        jpf.job_title_short = 'Data Analyst'
        AND jpf.salary_year_avg IS NOT NULL
        AND jpf.salary_year_avg BETWEEN 30000 AND 300000
    GROUP BY sd.skills, sd.skill_id
    HAVING COUNT(DISTINCT jpf.job_id) >= 10
)

SELECT 
    skills,
    job_count,
    avg_yearly_salary,
    median_yearly_salary,
    min_salary,
    max_salary,
    salary_std_dev,
    CAST(
        (avg_yearly_salary - (SELECT AVG(salary_year_avg) 
                            FROM job_postings_fact 
                            WHERE job_title_short = 'Data Analyst' 
                            AND salary_year_avg IS NOT NULL)) / 
        (SELECT AVG(salary_year_avg) 
         FROM job_postings_fact 
         WHERE job_title_short = 'Data Analyst' 
         AND salary_year_avg IS NOT NULL) * 100 AS DECIMAL(10,2)
    ) as salary_premium_percent
FROM skill_salary_analysis
ORDER BY avg_yearly_salary DESC
LIMIT 25;
-- This query retrieves the top 25 skills for Data Analyst positions based on average yearly salary, including job count, median salary, and salary range.
/* Key Insights:
🚀 The AI/ML Premium Revolution
The most striking finding is that AI and machine learning skills dominate the highest salary tiers:

PyTorch leads at $125K (33% premium) - Deep learning expertise is now premium-tier
TensorFlow at $121K (29% premium) - Traditional ML framework still valuable
Perl at $125K (33% premium) - Surprising legacy language value for data processing

This represents a major evolution from your foundational analysis - while SQL/Python are essential foundations, AI/ML specialization is where the premium dollars are.
📈 The Demand vs. Premium Paradox
Unlike foundational skills that follow demand patterns, premium skills show an interesting inverse relationship:

High-demand skills (Snowflake: 240 jobs, Spark: 186 jobs) offer solid but moderate premiums (17-19%)
Niche specialist skills (Cassandra: 11 jobs, Neo4j: 12 jobs) command much higher premiums (26%+)

💡 Strategic Career Evolution Path
Phase 4 (Premium Specialization) - Building on your SQL+Python+Tableau foundation:

AI/ML Track: Add PyTorch or TensorFlow to your Python skills

Potential salary jump: $95K → $125K (32% increase)
Market positioning: Data Scientist vs. Data Analyst


Big Data Architecture: Combine Spark + Kafka + Airflow

Creates a $112-123K salary bracket
High job availability (300+ combined positions)


Cloud Data Platforms: Specialize in Snowflake + Databricks

Most job opportunities (342 combined positions)
Steady $110-113K salaries with growth potential



🎯 The "Golden Trifecta" Strategy
Based on both analyses, the optimal progression is:

Foundation: SQL + Python (your 22.70% power combo)
Visualization: Add Tableau (proven 17.52% combination)
Premium Specialization: Choose one premium track (AI/ML, Big Data, or Cloud)

This creates a compound premium effect - you're not just adding skills, you're creating a unique value proposition that combines foundational competency with premium specialization.
*/