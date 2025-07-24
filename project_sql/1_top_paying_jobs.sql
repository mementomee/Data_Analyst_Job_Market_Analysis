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
SELECT 
    company_dim.name, 
    job_title, 
    job_location, 
    job_schedule_type, 
    salary_year_avg, 
    job_posted_date
FROM 
    job_postings_fact
LEFT JOIN company_dim ON job_postings_fact.company_id = company_dim.company_id
WHERE 
    salary_year_avg IS NOT NULL
    AND job_title_short ILIKE '%data analyst%'
    AND job_work_from_home = FALSE
ORDER BY 
    salary_year_avg DESC
LIMIT 10;
-- This query retrieves the top 10 highest-paying onsite Data Analyst jobs with specified average annual salaries.
/* Key Insights:
Onsite positions average $376K annually
Remote positions average $285K annually
Onsite roles command a $91K premium over remote positions

Career Recommendations for Success:
Target tech companies with unique value propositions 
Develop specialized expertise in AI, autonomous vehicles, or FinTech
Aim for leadership roles - Director positions show significant premiums
Time your job search - August appears to be peak remote hiring season
Leverage the onsite premium - these roles pay 43% more than remote-specific positions
*/