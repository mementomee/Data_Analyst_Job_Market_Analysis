
SELECT 
    CASE 
        WHEN job_work_from_home = TRUE THEN 'Remote'
        WHEN job_work_from_home = FALSE THEN 'On-site'
    END AS work_type,
    COUNT(*) AS job_count,
    ROUND(AVG(salary_year_avg)::numeric, 2) AS avg_salary,
    ROUND(PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary_year_avg)::numeric, 2) AS median_salary,
    MIN(salary_year_avg) AS min_salary,
    MAX(salary_year_avg) AS max_salary,
    ROUND(STDDEV(salary_year_avg)::numeric, 2) AS salary_stddev
FROM 
    job_postings_fact
LEFT JOIN 
    company_dim ON job_postings_fact.company_id = company_dim.company_id
WHERE 
    salary_year_avg IS NOT NULL
    AND job_title_short ILIKE '%data analyst%'
    AND job_work_from_home IS NOT NULL
    AND salary_year_avg BETWEEN 50000 AND 300000  
GROUP BY 
    job_work_from_home
ORDER BY 
    avg_salary DESC;
    -- This query compares remote and on-site Data Analyst job postings, calculating job counts, average, median, min, max, and standard deviation of salaries, filtering for valid salary ranges and work-from-home status.
  