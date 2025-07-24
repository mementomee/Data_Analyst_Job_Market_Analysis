WITH top_paying_jobs AS (
SELECT
    job_id,
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
ORDER BY 
    salary_year_avg DESC
LIMIT 20
)

SELECT
top_paying_jobs.*,
skills
FROM top_paying_jobs
INNER JOIN skills_job_dim ON top_paying_jobs.job_id = skills_job_dim.job_id
INNER JOIN skills_dim ON skills_job_dim.skill_id = skills_dim.skill_id
ORDER BY
    salary_year_avg DESC 
-- This query retrieves the top 20 highest-paying Data Analyst job postings with their associated skills, joining job, company, and skills tables, ordered by average yearly salary in descending order.