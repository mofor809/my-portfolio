import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, FileDown, MouseIcon, ChevronDown, Calendar } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'experiences', 'skills', 'projects', 'publications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const skills = [
    'Python', 'sklearn', 'pyTorch','Pandas', 'R', 'SQL', 'C++', 'C', 'JavaScript', 'React JS', 'Tailwind CSS', 'FastAPI', 'Firebase', 'Seaborn'
  ];

  const experiences = [
    {
      title: 'Co-founder, Chief Technical Officer',
      context: '@ PACE.ai',
      skills: '',
      date: 'August 2025 - Present',
      description: 'Powering Access to Clean Energy. Building a full-stack application using AI agents to accelerate the due dilligence process for energy access projects in sub-Saharan Africa. Currently building and gaining interest from multiple financiers and developers'
    },
    {
      title: 'Summer Associate',
      context: '@ Boston Consulting Group',
      skills: '',
      date: 'June 2025 - August 2025',
      description: 'Conducted an end-to-end revamp of membership strategy for a local nonprofit. Analyzed data of over 500 members to uncover member behavior and guide key learship decisions. Conducted financial modelling to ensure organization\'s long-term viability'
    },
    {
      title: 'Research Assistant',
      context: '@ Stanford Quantitative Sciences Unit',
      skills: '',
      date: 'January 2025 - Present',
      description: 'Used novel “cheat-sheet” prompting approach to improve accuracy in clinical note classification, improving F1-score by 12%. Engineered pipeline to efficiently extract patient health information from electronic health records using regular expressions'
  
    },
    {
      title: 'Research Assistant',
      context: '@ Stanford Language and Cognition Lab',
      skills: '',
      date: 'June 2024 - December 2024',
      description: 'After personally conducting 14 experiments, created a pipeline using PyTorch Whisper model to transcribe 6 hours of experiments, combining transcriptions with data from Empirica database using R, to create a large textual dataset for analyses.Analyzed dataset using statistical analyses and SBERT Python NLP tools to discover if children can form ad-hoc referential expressions with each other, evaluating accuracy and cosine similarity of sentence semantic vectors. Co-author of manuscript submitted to National Cognitive Science conference'
    },
   
  ];

  const projects = [
    {
      title: 'Quantifying the School to Prison Pipeline in Chicago Public Schools',
      description: 'Data science project to uncover the largest contributors to heightened punitive measures in Chicago public schools, and seeing if this correlated to incarceration rates in the area. Used XGBoost to discover strongest predictors and Bivariate Morans I to uncover if the redlining of Chicago neighborhoods affected the spatial distribution of heavy punitive measures and/or heavy incarceration.',
      github: 'https://github.com/mofor809/Quantifying-School-to-Prison-Pipeline-in-Chicago',
      technologies: ['Python', 'Data Science', 'Statistical Analysis', 'XGBoost']
    },
    
    {
      title: 'Santa Movie Recommender Chat Bot',
      description: 'Interactive chatbot that movies to users based on movies they previously liked. First iteration, chatbot queries users\' preferences using regex and then uses collaborative filtering to find similar movies in a provided database. Second iteration: Chatbot uses OpenAI API to find suitable movies for user ',
      github: 'https://github.com/mofor809/PA7-Chatbot-Collab',
      technologies: ['Python', 'NLP', 'Machine Learning', 'Chatbot', 'Regex', 'Collaborative Filtering']
    },
    {
      title: 'SQL Query Generator',
      description: 'Website that generates SQL queries from natural language descriptions using GPT-4 API.',
      github: 'https://github.com/mofor809/SQL-Query-Generation-Using-GPT-4-API?tab=readme-ov-file',
      technologies: ['Python', 'GPT-4', 'SQL', 'API Integration']
    },
  ];

  const publications = [
    {
      title: 'Preschoolers can form conventional pacts with each other to communicate about novel referents (Pre-print)',
      link: 'https://osf.io/preprints/osf/dpgfw_v1',
      date: 'June 2025',
      description: 'Results of a multi-part preschool age tangrams study. Findings show that childrens\' utterances increase in semantic similarity as their conversation progress, disproving previously held notions in the field.'
    },
    {
      title: 'Curing National Amnesia: The Next Steps Needed for Britain and South Africa to Create a Fulfilling Public Memory Culture',
      link: 'https://stacks.stanford.edu/file/druid:vx823hd7214/PWR%20W24%20HM%20Mofor.pdf',
      date: 'May 2024',
      description: 'Paper uncovering how Britain and South Africa, a former cempire and its colony, reconcile with their troubled colonial pasts. After reviewing how their public memory approaches align and differ, proposes steps forward to create satisfying cultural experience for both populations.'
    },
    {
      title: 'A Comprehensive Analysis of Neurotechnologies in the Context of Human Rights: Consequences, Challenges, and Successes',
      link: null,
      institution: 'United Nations Human Rights Council',
      date: 'July 2023',
      description: 'Advisory paper to the United Nations on the ethical implications of neurotechnology advancement.'
    }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-dark-navy/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-xl font-semibold text-brightest-slate hover:text-primary-accent transition-colors">
            Yannick Mofor
          </a>
          
          {/* Desktop Navigation */}
          <div className="flex items-center space-x-8">
            {['About', 'Experiences', 'Skills', 'Projects', 'Publications', 'Contact'].map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => scrollToSection(sectionId)}
                  className={`text-sm font-medium transition-colors hover:text-primary-accent ${
                    activeSection === sectionId ? 'text-primary-accent' : 'text-primary-text'
                  }`}
                >
                  {item}
                </button>
              );
            })}
            <a href="\resume.docx"
                download="My Resume"
                className="btn-outline w-full justify-center flex items-center"
              >
                <FileDown className="w-4 h-4 mr-2" />
                My Resume
              </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary-text hover:text-primary-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-dark-navy/95 backdrop-blur-sm border-t border-slate-gray/20">
            <div className="container mx-auto px-6 py-4 space-y-4">
              {['About', 'Experiences', 'Skills', 'Projects', 'Publications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-primary-text hover:text-primary-accent transition-colors"
                >
                  {item}
                </button>
              ))}
              <a href="\resume.docx"
                download="My Resume"
                className="btn-outline w-full justify-center flex items-center"
              >
                <FileDown className="w-4 h-4 mr-2" />
                My Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/yannick-mofor-a10106282/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/mofor809" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
            
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-brightest-slate mb-4 leading-tight">
                Yannick Mofor
              </h1>
              <h2 className="text-2xl md:text-3xl text-slate-gray mb-6">
                CS and Data Science Student at Stanford University
              </h2>
              <p className="text-lg text-primary-text mb-8 max-w-lg">
                Passionate about improving the lives of others through software engineering, data science, and emerging technologies.
              </p>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary-accent/20 to-transparent flex items-center justify-center">
              <div className="w-64 h-64 rounded-full bg-component-bg flex items-center justify-center">
                {/* <div className="text-6xl font-bold text-primary-accent">YM</div> */}
                <img src="\headshot.jpeg" alt="YM" className="rounded-full w-64 h-64 object-cover"></img>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
          <MouseIcon className="w-6 h-6 text-slate-gray" />
          <span className="text-sm text-slate-gray">Scroll down</span>
          <ChevronDown className="w-4 h-4 text-slate-gray animate-bounce" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">My Introduction</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-lg bg-component-bg flex items-center justify-center shadow-xl">
                {/* <div className="text-8xl font-bold text-primary-accent/30">YM</div> */}
                <img src="\research_pic.jpg" alt="YM"></img>
              </div>
            </div>
            
            <div className="space-y-8">
              <p className="text-lg text-primary-text leading-relaxed">
                I am a former premed turned computer science major at Stanford, blossoming into a driven technologist. I'm excited about the potential of AI and data science to improve the ways we interact with the world. My experiences across research, engineering, and consulting give me the unique insight to approach challenges in innovative ways
              </p>
              
              {/* <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-accent mb-2">3+</div>
                  <div className="text-sm text-slate-gray">Years<br />Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-accent mb-2">15+</div>
                  <div className="text-sm text-slate-gray">Completed<br />Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-accent mb-2">5+</div>
                  <div className="text-sm text-slate-gray">Research<br />Publications</div>
                </div>
              </div> */}
              
              <button className="btn-primary">
                <FileDown className="w-4 h-4 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section id="experiences" className="section-padding bg-component-bg/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Experiences</h2>
            <p className="section-subtitle">My Journey</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-gray"></div>
              
              {experiences.map((experience, index) => (
                <div key={index} className="relative flex items-start mb-12 last:mb-0">
                  {/* Timeline Node */}
                  <div className="absolute left-4 w-4 h-4 bg-dark-navy border-2 border-primary-accent rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className="ml-16 card hover:transform hover:-translate-y-1 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-brightest-slate mb-2">
                      {experience.title}
                      <span className="text-primary-accent"> {experience.context}</span>
                    </h3>
                    <div className="flex items-center text-slate-gray text-sm mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {experience.date}
                    </div>
                    <p className="text-primary-text">{experience.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Skills</h2>
            <p className="section-subtitle">My Technical Skills</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="skill-tag"
              >
                {skill}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-component-bg/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">Most Recent Work</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="card group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-brightest-slate group-hover:text-primary-accent transition-colors">
                    {project.title}
                  </h3>
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-gray hover:text-primary-accent transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <p className="text-primary-text mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 bg-primary-accent/10 text-primary-accent rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="section-padding">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Publications</h2>
            <p className="section-subtitle">Research & Academic Work</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {publications.map((publication, index) => (
              <div key={index} className="card group">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-brightest-slate group-hover:text-primary-accent transition-colors flex-1 mr-4">
                    {publication.title}
                  </h3>
                  {publication.link && (
                    <a 
                      href={publication.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-gray hover:text-primary-accent transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                {publication.institution && (
                  <p className="text-slate-gray text-sm mb-2">{publication.institution}</p>
                )}
                
                <div className="flex items-center justify-between">
                  <p className="text-primary-text text-sm">{publication.description}</p>
                  <span className="text-slate-gray text-xs">{publication.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-component-bg/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">Contact Me</h2>
            <p className="section-subtitle">Get In Touch</p>
          </div>
          
          <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-primary-accent mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-brightest-slate">Email</h3>
                  <a href="mailto:yannickm@stanford.edu" className="text-slate-gray hover:text-primary-accent transition-colors">
                    yannickm@stanford.edu
                  </a>
                </div>
              </div>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <Linkedin className="w-6 h-6 text-primary-accent mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-brightest-slate">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/yannick-mofor-a10106282/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-gray hover:text-primary-accent transition-colors"
                  >
                    @yannick-mofor-a10106282
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-component-bg py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-brightest-slate mb-2">Yannick Mofor</h3>
              <p className="text-slate-gray">CS & Data Science Student @ Stanford</p>
            </div>
            
            <div className="flex justify-center space-x-6">
              <a href="#projects" className="text-slate-gray hover:text-primary-accent transition-colors">Projects</a>
              <a href="#publications" className="text-slate-gray hover:text-primary-accent transition-colors">Publications</a>
              <a href="#contact" className="text-slate-gray hover:text-primary-accent transition-colors">Contact</a>
            </div>
            
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://www.linkedin.com/in/yannick-mofor-a10106282/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/mofor809" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-slate-gray/20 mt-8 pt-8 text-center">
            <p className="text-slate-gray text-sm">© 2025 Yannick Mofor. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button 
          onClick={() => scrollToSection('home')}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-accent hover:bg-primary-accent/80 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-40"
        >
          <ChevronDown className="w-5 h-5 text-white transform rotate-180" />
        </button>
      )}
    </div>
  );
}

export default App;