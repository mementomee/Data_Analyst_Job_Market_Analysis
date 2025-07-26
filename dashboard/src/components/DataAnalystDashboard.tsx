import React from 'react';
import { RemoteChart } from './charts/RemoteChart';
import { SkillsChart } from './charts/SkillsChart';
import { SkillPairsChart } from './charts/SkillPairsChart';
import { PayingChart } from './charts/PayingChart';
import { PayingPairsChart } from './charts/PayingPairsChart';

export const DataAnalystDashboard = () => {
  console.log('DataAnalystDashboard component is rendering');
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  console.log('Dashboard component loaded successfully');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2 text-white">📊 Data Analyst Market Dashboard</h1>
            <p className="text-xl opacity-90 text-white">Comprehensive analysis of 196,593 Data Analyst job postings</p>
            <div className="mt-4 inline-flex items-center px-4 py-2 bg-white/20 rounded-full">
              <span className="animate-pulse">🔴</span>
              <span className="ml-2 text-white">Updated: July 2024</span>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('executive-summary')}
              className="px-4 py-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors"
            >
              🎖️ Executive Summary
            </button>
            <button 
              onClick={() => scrollToSection('remote-comparison')}
              className="px-4 py-2 rounded-full bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors"
            >
              📈 Remote vs Office
            </button>
            <button 
              onClick={() => scrollToSection('top-skills')}
              className="px-4 py-2 rounded-full bg-green-100 text-green-800 hover:bg-green-200 transition-colors"
            >
              🎯 Most Demanded Skills
            </button>
            <button 
              onClick={() => scrollToSection('skill-combinations')}
              className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-800 hover:bg-indigo-200 transition-colors"
            >
              🔧 Skill Combinations
            </button>
            <button 
              onClick={() => scrollToSection('premium-skills')}
              className="px-4 py-2 rounded-full bg-orange-100 text-orange-800 hover:bg-orange-200 transition-colors"
            >
              💰 Premium Skills
            </button>
            <button 
              onClick={() => scrollToSection('ultra-premium')}
              className="px-4 py-2 rounded-full bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
            >
              🏆 Ultra-Premium Pairs
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        
        {/* Executive Summary Section */}
        <section id="executive-summary" className="mb-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg mb-8 border border-border/50">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-foreground mb-2">🚀 Data Analyst Career Intelligence</h2>
              <p className="text-lg text-muted-foreground mb-4">Your strategic roadmap to maximizing earning potential in data analytics</p>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                📈 Analysis of 196,593 job postings • Updated 2024
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div className="bg-card p-6 rounded-xl text-center shadow-card border-l-4 border-analytics-blue hover:shadow-elegant transition-shadow">
                <div className="text-3xl font-bold text-analytics-blue mb-1">$98.3K</div>
                <div className="text-sm font-semibold text-card-foreground mb-1">Market Average</div>
                <div className="text-xs text-muted-foreground">Remote = On-site pay</div>
                <div className="text-xs text-analytics-blue mt-2">💼 Equal opportunity</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-card border-l-4 border-analytics-green hover:shadow-elegant transition-shadow">
                <div className="text-3xl font-bold text-analytics-green mb-1">$425K</div>
                <div className="text-sm font-semibold text-card-foreground mb-1">Leadership Peak</div>
                <div className="text-xs text-muted-foreground">SVP-level positions</div>
                <div className="text-xs text-analytics-green mt-2">🎯 Management track</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-card border-l-4 border-analytics-purple hover:shadow-elegant transition-shadow">
                <div className="text-3xl font-bold text-analytics-purple mb-1">SQL</div>
                <div className="text-sm font-semibold text-card-foreground mb-1">Foundation Skill</div>
                <div className="text-xs text-muted-foreground">47% of all jobs</div>
                <div className="text-xs text-analytics-purple mt-2">⚡ Non-negotiable</div>
              </div>
              <div className="bg-card p-6 rounded-xl text-center shadow-card border-l-4 border-analytics-orange hover:shadow-elegant transition-shadow">
                <div className="text-3xl font-bold text-analytics-orange mb-1">+71%</div>
                <div className="text-sm font-semibold text-card-foreground mb-1">Premium Ceiling</div>
                <div className="text-xs text-muted-foreground">Niche combinations</div>
                <div className="text-xs text-analytics-orange mt-2">🔥 Specialization pays</div>
              </div>
            </div>

            {/* Career Progression */}
            <div className="bg-card p-6 rounded-lg shadow-card mb-6 border border-border/50">
              <h3 className="text-xl font-semibold text-card-foreground mb-6 text-center">🚀 Optimal Career Progression</h3>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                  <div className="text-2xl mb-2">🏗️</div>
                  <div className="font-bold text-card-foreground">Foundation</div>
                  <div className="text-xl font-bold text-analytics-blue">$75K</div>
                  <div className="text-sm text-muted-foreground">SQL + Excel</div>
                  <div className="text-xs text-muted-foreground">(0-1 year)</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                  <div className="text-2xl mb-2">⚡</div>
                  <div className="font-bold text-card-foreground">Acceleration</div>
                  <div className="text-xl font-bold text-analytics-green">$90K</div>
                  <div className="text-sm text-muted-foreground">+ Python</div>
                  <div className="text-xs text-muted-foreground">(1-2 years)</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="font-bold text-card-foreground">Visualization</div>
                  <div className="text-xl font-bold text-analytics-purple">$100K</div>
                  <div className="text-sm text-muted-foreground">+ Tableau/Power BI</div>
                  <div className="text-xs text-muted-foreground">(2-3 years)</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                  <div className="text-2xl mb-2">🤖</div>
                  <div className="font-bold text-card-foreground">Specialization</div>
                  <div className="text-xl font-bold text-analytics-red">$118K</div>
                  <div className="text-sm text-muted-foreground">+ AI/ML</div>
                  <div className="text-xs text-muted-foreground">(3-4 years)</div>
                </div>
                <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                  <div className="text-2xl mb-2">💎</div>
                  <div className="font-bold text-card-foreground">Mastery</div>
                  <div className="text-xl font-bold text-analytics-orange">$152K</div>
                  <div className="text-sm text-muted-foreground">Premium Combos</div>
                  <div className="text-xs text-muted-foreground">(4+ years)</div>
                </div>
              </div>
            </div>

            {/* Strategic Insight */}
            <div className="bg-gradient-warning/10 p-5 rounded-lg border-l-4 border-analytics-yellow">
              <div className="flex items-center">
                <div className="text-2xl mr-3">💡</div>
                <div>
                  <h4 className="font-bold text-analytics-yellow mb-1">Strategic Insight</h4>
                  <p className="text-foreground font-medium">The data analytics market rewards strategic skill building over random technology accumulation. Build foundations first, then specialize for premium earnings.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remote vs Office Section */}
        <section id="remote-comparison" className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">📈 Remote vs On-site: Market Reality</h2>
            
            <RemoteChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-analytics-purple/5 p-6 rounded-lg hover:shadow-card transition-shadow border border-analytics-purple/20">
                <h3 className="text-lg font-semibold text-analytics-purple mb-4">🏠 Remote Work</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Average Salary:</span>
                    <span className="font-bold text-2xl text-analytics-purple">$98,557</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Positions:</span>
                    <span className="font-bold text-analytics-green">747</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market Share:</span>
                    <span className="font-bold">11.7%</span>
                  </div>
                  <div className="text-sm text-analytics-purple bg-analytics-purple/10 p-2 rounded">
                    Range: $50K - $256K
                  </div>
                </div>
              </div>
              
              <div className="bg-analytics-blue/5 p-6 rounded-lg hover:shadow-card transition-shadow border border-analytics-blue/20">
                <h3 className="text-lg font-semibold text-analytics-blue mb-4">🏢 On-site Work</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Average Salary:</span>
                    <span className="font-bold text-2xl text-analytics-blue">$98,108</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Available Positions:</span>
                    <span className="font-bold text-analytics-green">5,662</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Market Share:</span>
                    <span className="font-bold">88.3%</span>
                  </div>
                  <div className="text-sm text-analytics-blue bg-analytics-blue/10 p-2 rounded">
                    Range: $50K - $285K
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-analytics-blue/5 p-6 rounded-lg mt-6 border border-analytics-blue/20">
              <h4 className="font-semibold text-analytics-blue mb-3">💡 Key Insights</h4>
              <ul className="space-y-2 text-foreground">
                <li>• <strong>No salary discrimination</strong>: Remote and on-site offer identical compensation</li>
                <li>• <strong>Limited remote options</strong>: Only 11.7% of Data Analyst jobs offer remote work</li>
                <li>• <strong>Market reality</strong>: 88.3% of opportunities require physical presence</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Most Demanded Skills Section */}
        <section id="top-skills" className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">🎯 Most In-Demand Skills</h2>
            
            <SkillsChart />
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-analytics-blue/5 p-4 rounded-lg text-center hover:shadow-card transition-shadow border border-analytics-blue/20">
                <h4 className="font-semibold text-analytics-blue text-lg">SQL</h4>
                <p className="text-2xl font-bold text-analytics-blue">92,628</p>
                <p className="text-sm text-muted-foreground">jobs (47.12%)</p>
              </div>
              <div className="bg-analytics-green/5 p-4 rounded-lg text-center hover:shadow-card transition-shadow border border-analytics-green/20">
                <h4 className="font-semibold text-analytics-green text-lg">EXCEL</h4>
                <p className="text-2xl font-bold text-analytics-green">67,031</p>
                <p className="text-sm text-muted-foreground">jobs (34.10%)</p>
              </div>
              <div className="bg-analytics-purple/5 p-4 rounded-lg text-center hover:shadow-card transition-shadow border border-analytics-purple/20">
                <h4 className="font-semibold text-analytics-purple text-lg">PYTHON</h4>
                <p className="text-2xl font-bold text-analytics-purple">57,326</p>
                <p className="text-sm text-muted-foreground">jobs (29.16%)</p>
              </div>
              <div className="bg-analytics-orange/5 p-4 rounded-lg text-center hover:shadow-card transition-shadow border border-analytics-orange/20">
                <h4 className="font-semibold text-analytics-orange text-lg">TABLEAU</h4>
                <p className="text-2xl font-bold text-analytics-orange">46,554</p>
                <p className="text-sm text-muted-foreground">jobs (23.68%)</p>
              </div>
              <div className="bg-analytics-red/5 p-4 rounded-lg text-center hover:shadow-card transition-shadow border border-analytics-red/20">
                <h4 className="font-semibold text-analytics-red text-lg">POWER BI</h4>
                <p className="text-2xl font-bold text-analytics-red">39,468</p>
                <p className="text-sm text-muted-foreground">jobs (20.08%)</p>
              </div>
              <div className="bg-muted p-4 rounded-lg text-center hover:shadow-card transition-shadow">
                <h4 className="font-semibold text-card-foreground text-lg">R</h4>
                <p className="text-2xl font-bold text-muted-foreground">30,075</p>
                <p className="text-sm text-muted-foreground">jobs (15.30%)</p>
              </div>
            </div>
            
            <div className="bg-analytics-green/5 p-6 rounded-lg mt-6 border border-analytics-green/20">
              <h4 className="font-semibold text-analytics-green mb-2">🏗️ Foundation Strategy</h4>
              <p className="text-foreground">SQL + Excel covers 60%+ of entry-level requirements. Python adds versatility for career acceleration.</p>
            </div>
          </div>
        </section>

        {/* Skill Combinations Section */}
        <section id="skill-combinations" className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">🔧 Most Popular Skill Combinations</h2>
            
            <SkillPairsChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">SQL + Python</h4>
                <p className="text-xl font-bold text-primary">44,630 jobs</p>
                <p className="text-sm text-muted-foreground">22.70% of market</p>
                <p className="text-xs text-primary mt-2">💪 The ultimate power combo</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">SQL + Tableau</h4>
                <p className="text-xl font-bold text-primary">34,434 jobs</p>
                <p className="text-sm text-muted-foreground">17.52% of market</p>
                <p className="text-xs text-primary mt-2">📊 BI specialist track</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">SQL + Excel</h4>
                <p className="text-xl font-bold text-primary">34,254 jobs</p>
                <p className="text-sm text-muted-foreground">17.42% of market</p>
                <p className="text-xs text-primary mt-2">🏗️ Foundation combo</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">SQL + Power BI</h4>
                <p className="text-xl font-bold text-primary">26,424 jobs</p>
                <p className="text-sm text-muted-foreground">13.44% of market</p>
                <p className="text-xs text-primary mt-2">🏢 Microsoft ecosystem</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">Python + R</h4>
                <p className="text-xl font-bold text-primary">25,588 jobs</p>
                <p className="text-sm text-muted-foreground">13.02% of market</p>
                <p className="text-xs text-primary mt-2">🔬 Data science track</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg hover:shadow-card transition-shadow border border-primary/20">
                <h4 className="font-semibold text-primary">Python + Tableau</h4>
                <p className="text-xl font-bold text-primary">23,233 jobs</p>
                <p className="text-sm text-muted-foreground">11.82% of market</p>
                <p className="text-xs text-primary mt-2">⚡ Modern analytics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Skills Section */}
        <section id="premium-skills" className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">💰 Highest-Paying Skills</h2>
            
            <PayingChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
              <div className="bg-analytics-red/5 p-4 rounded-lg border-l-4 border-analytics-red hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-red">PyTorch</h4>
                  <span className="text-analytics-red font-bold">+33.4%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$125,226</p>
                <p className="text-sm text-muted-foreground">20 jobs available</p>
                <p className="text-xs text-analytics-red mt-2">🤖 Deep learning premium</p>
              </div>
              <div className="bg-analytics-orange/5 p-4 rounded-lg border-l-4 border-analytics-orange hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-orange">Perl</h4>
                  <span className="text-analytics-orange font-bold">+32.8%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$124,686</p>
                <p className="text-sm text-muted-foreground">20 jobs available</p>
                <p className="text-xs text-analytics-orange mt-2">📜 Legacy systems value</p>
              </div>
              <div className="bg-analytics-yellow/5 p-4 rounded-lg border-l-4 border-analytics-yellow hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-yellow">Kafka</h4>
                  <span className="text-analytics-yellow font-bold">+31.1%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$123,076</p>
                <p className="text-sm text-muted-foreground">39 jobs available</p>
                <p className="text-xs text-analytics-yellow mt-2">⚡ Real-time streaming</p>
              </div>
              <div className="bg-analytics-green/5 p-4 rounded-lg border-l-4 border-analytics-green hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-green">TensorFlow</h4>
                  <span className="text-analytics-green font-bold">+28.5%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$120,647</p>
                <p className="text-sm text-muted-foreground">24 jobs available</p>
                <p className="text-xs text-analytics-green mt-2">🧠 ML framework leader</p>
              </div>
              <div className="bg-analytics-blue/5 p-4 rounded-lg border-l-4 border-analytics-blue hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-blue">Cassandra</h4>
                  <span className="text-analytics-blue font-bold">+26.1%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$118,407</p>
                <p className="text-sm text-muted-foreground">11 jobs available</p>
                <p className="text-xs text-analytics-blue mt-2">💾 NoSQL expertise</p>
              </div>
              <div className="bg-analytics-purple/5 p-4 rounded-lg border-l-4 border-analytics-purple hover:shadow-card transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-analytics-purple">Scala</h4>
                  <span className="text-analytics-purple font-bold">+23.0%</span>
                </div>
                <p className="text-xl font-bold text-card-foreground">$115,480</p>
                <p className="text-sm text-muted-foreground">59 jobs available</p>
                <p className="text-xs text-analytics-purple mt-2">🔥 Big data processing</p>
              </div>
            </div>
            
            <div className="bg-analytics-purple/5 p-6 rounded-lg mt-6 border border-analytics-purple/20">
              <h4 className="font-semibold text-analytics-purple mb-2">🚀 AI/ML Revolution</h4>
              <p className="text-foreground">Deep learning skills (PyTorch, TensorFlow) now command premium salaries. The market is shifting toward AI-powered analytics.</p>
            </div>
          </div>
        </section>

        {/* Ultra-Premium Combinations Section */}
        <section id="ultra-premium" className="mb-16">
          <div className="bg-card p-8 rounded-lg shadow-card border border-border/50">
            <h2 className="text-2xl font-bold text-card-foreground mb-6 text-center">🏆 Ultra-Premium Skill Combinations ($150K+)</h2>
            
            <PayingPairsChart />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-gradient-to-r from-analytics-red/5 to-analytics-orange/5 p-6 rounded-lg border-l-4 border-analytics-red hover:shadow-elegant transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-analytics-red">🥇 Go + MATLAB</h4>
                  <span className="text-analytics-red font-bold text-lg">+70.6%</span>
                </div>
                <p className="text-2xl font-bold text-card-foreground mb-2">$159,335</p>
                <p className="text-sm text-muted-foreground mb-2">5 jobs available • Consistency: 2.78</p>
                <div className="bg-card p-3 rounded border-l-4 border-analytics-blue">
                  <p className="text-sm font-medium text-analytics-blue">💼 Financial Modeling</p>
                  <p className="text-xs text-muted-foreground">Quantitative finance & algorithmic trading</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-analytics-purple/5 to-analytics-blue/5 p-6 rounded-lg border-l-4 border-analytics-purple hover:shadow-elegant transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-analytics-purple">🥈 Scala + Oracle</h4>
                  <span className="text-analytics-purple font-bold text-lg">+68.6%</span>
                </div>
                <p className="text-2xl font-bold text-card-foreground mb-2">$157,500</p>
                <p className="text-sm text-muted-foreground mb-2">6 jobs available • Consistency: 2.77</p>
                <div className="bg-card p-3 rounded border-l-4 border-analytics-purple">
                  <p className="text-sm font-medium text-analytics-purple">🏢 Enterprise Big Data</p>
                  <p className="text-xs text-muted-foreground">Large-scale data processing systems</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-analytics-green/5 to-analytics-blue/5 p-6 rounded-lg border-l-4 border-analytics-green hover:shadow-elegant transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-analytics-green">🥉 Python + Atlassian</h4>
                  <span className="text-analytics-green font-bold text-lg">+66.4%</span>
                </div>
                <p className="text-2xl font-bold text-card-foreground mb-2">$155,468</p>
                <p className="text-sm text-muted-foreground mb-2">6 jobs available • Consistency: 3.85</p>
                <div className="bg-card p-3 rounded border-l-4 border-analytics-green">
                  <p className="text-sm font-medium text-analytics-green">🔧 DevOps Automation</p>
                  <p className="text-xs text-muted-foreground">Development automation with enterprise tools</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-analytics-blue/5 to-primary/5 p-6 rounded-lg border-l-4 border-analytics-blue hover:shadow-elegant transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-semibold text-analytics-blue">🏆 SQL Server + Kafka</h4>
                  <span className="text-analytics-blue font-bold text-lg">+65.4%</span>
                </div>
                <p className="text-2xl font-bold text-card-foreground mb-2">$154,500</p>
                <p className="text-sm text-muted-foreground mb-2">5 jobs available • Consistency: 6.17</p>
                <div className="bg-card p-3 rounded border-l-4 border-analytics-blue">
                  <p className="text-sm font-medium text-analytics-blue">⚡ Real-time Analytics</p>
                  <p className="text-xs text-muted-foreground">Streaming data pipelines & event-driven architectures</p>
                </div>
              </div>
            </div>
            
            <div className="bg-analytics-orange/5 p-6 rounded-lg border-l-4 border-analytics-orange mt-8">
              <h4 className="font-semibold text-analytics-orange mb-3">💡 Strategic Insight: The $150K+ Opportunity</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-medium text-analytics-orange mb-2">🎯 The Pattern</h5>
                  <ul className="text-sm text-foreground space-y-1">
                    <li>• <strong>Scarcity creates value</strong>: 5-7 jobs per combination</li>
                    <li>• <strong>Problem-solving focus</strong>: Each combo solves specific industry needs</li>
                    <li>• <strong>Compound expertise</strong>: Not just adding skills, but creating solutions</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-analytics-orange mb-2">🚀 Success Strategy</h5>
                  <p className="text-sm text-foreground">Don't just add skills linearly. Engineer combinations that solve complete business problems and create irreplaceable expertise in the market.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-analytics-primary to-analytics-secondary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          {/* Author Section */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-analytics-accent to-analytics-orange inline-block text-transparent bg-clip-text">
              <h3 className="text-2xl font-bold mb-2 text-white">Nazar Petrashchuk</h3>
            </div>
            <p className="text-primary-foreground/90 text-lg mb-1">Data Analyst</p>
            <p className="text-primary-foreground/70 text-sm">Building insights from data to drive business decisions</p>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            <a 
              href="mailto:petrasuknazar@gmail.com" 
              className="flex items-center gap-2 bg-background/10 hover:bg-analytics-accent/20 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span>📧</span>
              <span className="text-sm font-medium">Email</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/nazar-petrashchuk-b781472aa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background/10 hover:bg-analytics-accent/20 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span>💼</span>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/mementomee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background/10 hover:bg-analytics-accent/20 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span>💻</span>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href="https://t.me/mementomee" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background/10 hover:bg-analytics-accent/20 px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border border-white/20"
            >
              <span>💬</span>
              <span className="text-sm font-medium">Telegram</span>
            </a>
          </div>

          {/* Dashboard Info */}
          <div className="text-center border-t border-white/20 pt-6">
            <p className="mb-2 text-primary-foreground/90">📊 Data Analyst Market Dashboard</p>
            <p className="text-primary-foreground/70 text-sm mb-4">Created based on SQL analysis of 196,593 job postings • 2024</p>
            <button
              onClick={() => scrollToSection('executive-summary')}
              className="text-analytics-accent hover:text-analytics-orange transition-colors text-sm"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
