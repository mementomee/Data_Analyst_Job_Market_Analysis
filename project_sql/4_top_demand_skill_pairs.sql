

WITH top_skills AS (
    SELECT sd.skills, sd.skill_id
    FROM job_postings_fact jpf
    INNER JOIN skills_job_dim sjd ON jpf.job_id = sjd.job_id
    INNER JOIN skills_dim sd ON sjd.skill_id = sd.skill_id
    WHERE jpf.job_title_short = 'Data Analyst'
    GROUP BY sd.skills, sd.skill_id
    ORDER BY COUNT(sjd.job_id) DESC
    LIMIT 10
),

top_skill_pairs AS (
    SELECT 
        ts1.skills as skill_1,
        ts2.skills as skill_2,
        COUNT(DISTINCT sjd1.job_id) as pair_count
    FROM top_skills ts1
    CROSS JOIN top_skills ts2
    INNER JOIN skills_job_dim sjd1 ON ts1.skill_id = sjd1.skill_id
    INNER JOIN skills_job_dim sjd2 ON ts2.skill_id = sjd2.skill_id AND sjd1.job_id = sjd2.job_id
    INNER JOIN job_postings_fact jpf ON sjd1.job_id = jpf.job_id
    WHERE ts1.skill_id < ts2.skill_id 
    AND jpf.job_title_short = 'Data Analyst'
    GROUP BY ts1.skills, ts2.skills
)

SELECT 
    CONCAT(skill_1, ' + ', skill_2) as skill_pair,
    skill_1,
    skill_2,
    pair_count,
    ROUND(pair_count * 100.0 / (
        SELECT COUNT(DISTINCT job_id) 
        FROM job_postings_fact 
        WHERE job_title_short = 'Data Analyst'
    ), 2) as percentage_of_total_jobs
FROM top_skill_pairs
ORDER BY pair_count DESC
LIMIT 10;
-- This query retrieves the top 10 most common skill pairs for Data Analyst jobs, counting how many job postings require each pair and calculating the percentage of total Data Analyst jobs that require each pair.
/* Key Findings:
Most Valuable Skill Combinations
SQL + Python (22.70%) - The ultimate power combo for modern data analysis
SQL + Tableau (17.52%) - Perfect for business intelligence roles
SQL + Excel (17.42%) - The foundational combination that never goes out of style

Strategic Patterns
SQL is the Universal Foundation: Appearing in 60% of top skill pairs, SQL truly is the backbone of data analysis careers.
Three Distinct Career Paths Emerge:
Traditional BI Path: SQL + Excel + Power BI
Modern Analytics Path: SQL + Python + R
Visualization Specialist: SQL + Tableau + Python

Programming is Differentiating: Python + R combination (13.02%) shows that programming skills are increasingly valuable for advanced positions.
Refined Career Recommendations
Phase 1 (Foundation): Master SQL + Excel first (combined in 17.42% of jobs)
Phase 2 (Acceleration): Add Python to SQL (creates the 22.70% premium combination)
Phase 3 (Specialization): Choose your visualization tool - Tableau for broader market (17.52%) or Power BI for Microsoft-centric environments (13.44%)
*/