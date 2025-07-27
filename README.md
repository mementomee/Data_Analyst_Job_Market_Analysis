
# 📊 Data Analyst Job Market Analysis 2024

> **🚀 [Explore the Interactive Dashboard →](https://mementomee.github.io/Project2/)**

A comprehensive analysis of the Data Analyst job market based on 196,593 real job postings, revealing key insights about salaries, skills demand, and career progression opportunities.

---

## 📖 Introduction

This project answers critical questions for aspiring and current Data Analysts:

- **💰 What skills command the highest salaries?**
- **📈 Which skills are most in-demand by employers?**
- **🏠 How does remote work affect compensation?**
- **🚀 What's the optimal career progression path?**
- **💎 Which skill combinations offer premium earnings?**

The analysis transforms nearly 200,000 job postings into actionable career intelligence through SQL analysis and interactive visualizations.

---

## 🎯 Background

### The Challenge
The data analyst job market is rapidly evolving with new tools, technologies, and methodologies. Professionals need data-driven insights to make informed decisions about:
- Skill development priorities
- Salary expectations
- Career progression strategies
- Market opportunities

### The Solution
This project leverages a comprehensive dataset of job postings to provide:
- **Evidence-based career guidance**
- **Market-accurate salary insights**
- **Strategic skill development roadmaps**
- **Interactive data exploration tools**

### Data Source
- **Dataset Size:** 196,593 job postings
- **Time Period:** 2023-2024
- **Geographic Scope:** Global (US-focused)
- **Job Categories:** Data Analyst positions and related roles

---

## 🛠️ Tools I Used

### **Data Analysis & Processing**
- **PostgreSQL** - Complex data querying and analysis
- **SQL** - Data extraction, transformation, and aggregation
- **Python** - Data cleaning and preprocessing

### **Visualization & Dashboard**
- **React** - Interactive dashboard framework
- **TypeScript** - Type-safe development
- **Chart.js** - Dynamic data visualizations
- **Tailwind CSS** - Modern responsive design

### **Development & Deployment**
- **Vite** - Fast build tool and development server
- **GitHub Actions** - Automated deployment pipeline
- **GitHub Pages** - Live dashboard hosting
- **shadcn/ui** - Professional UI components

### **Data Architecture**
```
Raw Job Data → PostgreSQL → SQL Analysis → CSV Exports → React Dashboard → GitHub Pages
```

---

## 🔍 The Analysis

### 1. **Skills Demand Analysis**
**Question:** Which skills are most requested by employers?

**Approach:**
```sql
SELECT 
    skills,
    COUNT(job_id) as job_count,
    ROUND(COUNT(job_id) * 100.0 / total_jobs.count, 2) as percentage
FROM job_postings_fact
INNER JOIN skills_job_dim ON job_postings_fact.job_id = skills_job_dim.job_id
INNER JOIN skills_dim ON skills_job_dim.skill_id = skills_dim.skill_id
WHERE job_title_short = 'Data Analyst'
GROUP BY skills, total_jobs.count
ORDER BY job_count DESC;
```

**Key Findings:**
- **SQL dominates** with 47.12% of job requirements (92,628 positions)
- **Excel remains critical** at 34.10% market penetration  
- **Python leads programming** languages at 29.16%
- **Visualization tools** (Tableau: 23.68%, Power BI: 20.08%) show strong demand

### 2. **Salary Premium Analysis**
**Question:** Which skills command the highest salary premiums?

**Approach:**
```sql
SELECT 
    skills,
    ROUND(AVG(salary_year_avg), 0) as avg_salary,
    COUNT(job_id) as job_count,
    ROUND((AVG(salary_year_avg) - overall_avg.avg_salary) / overall_avg.avg_salary * 100, 1) as salary_premium
FROM job_postings_fact
INNER JOIN skills_job_dim ON job_postings_fact.job_id = skills_job_dim.job_id
INNER JOIN skills_dim ON skills_job_dim.skill_id = skills_dim.skill_id
WHERE salary_year_avg IS NOT NULL AND job_title_short = 'Data Analyst'
GROUP BY skills
ORDER BY salary_premium DESC;
```

**Key Findings:**
- **PyTorch** offers +82.1% salary premium ($181,500 avg)
- **Deep Learning** technologies command premium rates
- **Legacy systems** (Perl, Oracle) maintain high value
- **Streaming technologies** (Kafka) show strong premiums

### 3. **Remote Work Impact Study**
**Question:** How does remote work affect opportunities and compensation?

**Key Findings:**
- **No salary discrimination:** Remote ($98,557) vs On-site ($98,108)
- **Limited availability:** Only 11.7% of positions offer remote work
- **Market reality:** 88.3% still require physical presence
- **Equal opportunity:** Remote roles span all skill levels

### 4. **Optimal Skill Combinations**
**Question:** Which skill pairs maximize earning potential?

**Key Findings:**
- **PyTorch + SQL:** +82.1% premium ($181,500)
- **Scala + Oracle:** +68.6% premium ($157,500)
- **Python + Atlassian:** +66.4% premium ($155,468)

### 5. **Career Progression Mapping**
**Question:** What's the optimal path to maximize career growth?

**Strategic Framework:**
1. **Foundation (0-1 year):** SQL + Excel → $75K
2. **Acceleration (1-2 years):** + Python → $90K
3. **Visualization (2-3 years):** + Tableau/Power BI → $100K
4. **Specialization (3-4 years):** + AI/ML → $118K
5. **Mastery (4+ years):** Premium combinations → $152K+

---

## 🎓 What I Learned

### **Technical Skills**
- **Advanced SQL:** Complex joins, window functions, statistical analysis
- **Data Visualization:** Translating complex data into intuitive charts
- **React Development:** Building interactive, responsive dashboards
- **CI/CD Deployment:** Automated deployment pipelines with GitHub Actions

### **Analytical Insights**
- **Market Intelligence:** How to extract actionable insights from large datasets
- **Statistical Analysis:** Identifying trends, outliers, and correlations
- **Data Storytelling:** Presenting findings that drive decision-making
- **User Experience:** Designing dashboards for different audience needs

### **Professional Development**
- **Career Strategy:** Data-driven approach to professional growth
- **Skill Prioritization:** Focusing on high-impact, high-demand capabilities
- **Market Positioning:** Understanding salary benchmarks and opportunities
- **Continuous Learning:** Importance of staying current with market demands

---

## 🏆 Conclusions

### **For Aspiring Data Analysts**
1. **Start with SQL + Excel** - These foundation skills cover 60%+ of entry-level requirements
2. **Add Python early** - Programming skills accelerate career progression
3. **Invest in visualization** - Tableau or Power BI skills unlock mid-level positions
4. **Consider specialization** - AI/ML skills command significant premiums

### **For Career Progression**
1. **Strategic skill building beats random accumulation** - Focus on high-impact combinations
2. **Remote work requires premium skills** - Limited positions demand exceptional capabilities
3. **Niche specializations pay off** - Deep expertise in specific areas commands premiums
4. **Leadership transition** - Management track offers highest earning potential ($425K peak)

### **Market Reality Check**
1. **Skills matter more than location** - Remote and on-site offer equal compensation
2. **Experience compounds** - Each skill tier unlocks significantly higher earnings
3. **Demand drives value** - Most requested skills don't always pay the most
4. **Timing is crucial** - Early adoption of emerging tech pays dividends

### **Action Plan for Success**
- **Year 1:** Master SQL, Excel, basic Python
- **Year 2:** Add visualization tools (Tableau/Power BI)
- **Year 3:** Specialize in AI/ML or cloud technologies
- **Year 4+:** Develop leadership skills or deep technical expertise

---

## 🔗 Project Links

- **📊 Live Dashboard:** https://mementomee.github.io/Project2/
- **💻 Source Code:** https://github.com/mementomee/Project2
- **📈 SQL Analysis:** [View SQL Queries](https://github.com/mementomee/Project2/tree/main/project_sql)
- **💬 Contact:** [@mementomee](https://t.me/mementomee)

---

## 📄 Project Structure

```
Project2/
├── dashboard/                 # React dashboard application
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── charts/          # Chart visualizations
│   │   └── pages/           # Application pages
│   ├── public/              # Static assets
│   └── package.json         # Dependencies
├── project_sql/             # SQL analysis files
│   ├── 1_comparison_remote_vs_onsite.sql
│   ├── 2_top_skills_analysis.sql
│   └── 3_salary_analysis.sql
├── csv_result/              # Analysis results
├── .github/workflows/       # CI/CD configuration
└── README.md               # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/mementomee/Project2.git
cd Project2/dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5173
```

### Deployment
The dashboard automatically deploys to GitHub Pages on every push to the main branch.

---

## 📊 Dashboard Features

- **📈 Interactive Charts** - Hover for detailed insights
- **📱 Responsive Design** - Works on all devices
- **🎨 Color-coded Categories** - Easy visual navigation
- **⚡ Fast Performance** - Optimized loading and rendering
- **🔗 Social Sharing** - Share insights easily

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mementomee/Project2/issues).

---

## ⭐ Show Your Support

If this project helped you, please give it a ⭐️!

**Connect on [Linkedin](www.linkedin.com/in/nazar-petrashchuk-b781472aa)**

---

*Last updated: July 2025 | Data current as of July 2024*
