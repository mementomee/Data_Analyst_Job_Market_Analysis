SELECT 
    company_dim.name,
    job_title,
    job_location,
    job_schedule_type,
    salary_year_avg,
    job_posted_date
FROM 
    job_postings_fact
JOIN 
    company_dim ON job_postings_fact.company_id = company_dim.company_id
WHERE 
    salary_year_avg IS NOT NULL
    AND job_title_short ILIKE '%data analyst%'
    AND job_work_from_home = TRUE
ORDER BY 
    salary_year_avg DESC
LIMIT 10;
-- This query retrieves the top 10 highest-paying remote Data Analyst jobs with specified average annual salaries.