SELECT 
    sd.skills,
    COUNT(sjd.job_id) as skill_demand_count,
    ROUND(COUNT(sjd.job_id) * 100.0 / (
        SELECT COUNT(DISTINCT job_id) 
        FROM job_postings_fact 
        WHERE job_title_short = 'Data Analyst'
    ), 2) as percentage_of_jobs
FROM job_postings_fact jpf
INNER JOIN skills_job_dim sjd ON jpf.job_id = sjd.job_id
INNER JOIN skills_dim sd ON sjd.skill_id = sd.skill_id
WHERE jpf.job_title_short = 'Data Analyst'
GROUP BY sd.skills, sd.skill_id
ORDER BY skill_demand_count DESC
LIMIT 6;
-- This query retrieves the top 6 most demanded skills for Data Analyst jobs, counting the number of job postings that require each skill and calculating the percentage of total Data Analyst jobs that require each skill.
/* Key Findings:
SQL (47.12%) - Nearly half of all data analyst jobs require SQL
Excel (34.10%) - Still highly relevant despite advanced tools
Python (29.16%) - Growing importance of programming skills
Tableau (23.68%) - Leading visualization platform
Power BI (20.08%) - Microsoft's visualization solution
R (15.24%) - Niche but valuable for statistical analysis
Career Recommendations:
Focus on mastering SQL and Excel as foundational skills
*/
