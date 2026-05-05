import React, { useState } from 'react';
import { Menu, X, Download, Mail, Phone, MapPin, MessageCircle, Send, ChevronDown, Award, BookOpen, Zap } from 'lucide-react';

const ResumeWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setchatMessages] = useState([
    {
      type: 'bot',
      text: "Hi, I'm Ezhil Assistant! You can ask me about Ezhil's education, skills, achievements, or career interests. What would you like to know?"
    }
  ]);
  const [chatInput, setChatInput] = useState('');

  // Chatbot knowledge base
  const chatbotKB = {
    greeting: {
      keywords: ['hi', 'hello', 'hey', 'greetings'],
      response: "Hi there! I'm Ezhil Assistant. Feel free to ask me about Ezhil's education, skills, achievements, career interests, or anything related to her professional profile."
    },
    about: {
      keywords: ['tell me about', 'who is', 'about ezhil', 'introduce', 'profile'],
      response: "Ezhil Malar M is a technology graduate with an MCA and B.Sc in Software Application. She has strong academic achievements including University First Rank in B.Sc and University 17th Rank in MCA. She has foundational programming knowledge and is positioned toward AI tools, automation, Power Platform, and RPA-related roles."
    },
    skills: {
      keywords: ['skills', 'technical', 'what can she do', 'expertise'],
      response: "Her core skills include C, C++, Java, ASP.NET basics, database fundamentals, and Windows operating systems. She also has modern skills in AI/LLM tools (ChatGPT, Claude, Gemini), Microsoft Power Platform (Power Apps, Power Automate, Power BI), RPA tools (UiPath, Pega), n8n workflow automation, and design tools (Adobe Photoshop, PageMaker, CorelDraw)."
    },
    achievements: {
      keywords: ['achievements', 'awards', 'ranks', 'accomplishments', 'recognition'],
      response: "Her key achievements include: University First Rank in B.Sc (93.3%), University 17th Rank in MCA (90%), Best Outgoing Student Award 2013-2014, and multiple subject topper awards in Allied Mathematics, Applied Physics, Programming in Java, Database Management, and Resource Management."
    },
    education: {
      keywords: ['education', 'degree', 'studies', 'background', 'college'],
      response: "She holds an MCA from Karpaga Vinayaga College of Engineering & Technology (90%) and a B.Sc in Software Application from Vidhyasagar Women's College (93.3%). She completed her 12th Standard at St. Marys Girls Higher Secondary School (80.5%) and 10th Standard at Aruna Matric Higher Secondary School (85.6%)."
    },
    automation: {
      keywords: ['automation', 'rpa', 'suitable', 'roles', 'traineeship'],
      response: "Yes, she's well-suited for automation roles! She has strong academic foundation in technology and is actively building skills in Power Automate, UiPath, Pega RPA, n8n, and AI-assisted workflow automation. She would be ideal for trainee, junior, or support-level automation positions."
    },
    ai: {
      keywords: ['ai', 'artificial intelligence', 'generative', 'llm', 'chatgpt', 'claude'],
      response: "She's familiar with modern LLM and Generative AI tools including ChatGPT, Claude, Gemini, and Perplexity. Her skills also cover AI-assisted content creation, prompt engineering, AI research, and resume/chatbot automation."
    },
    powerplatform: {
      keywords: ['power platform', 'power apps', 'power automate', 'power bi', 'dataverse'],
      response: "She's learning Microsoft Power Platform, including Power Apps, Power Automate, Power BI, and Dataverse basics. This is a key growth area for her, making her suitable for Power Platform associate or trainee roles."
    },
    contact: {
      keywords: ['contact', 'email', 'phone', 'reach', 'location'],
      response: "You can reach Ezhil at: Email: ezhilmohan03@gmail.com | Phone: 9944036713 | Location: Sithalapakkam, Chengalpattu District, Tamil Nadu."
    },
    languages: {
      keywords: ['language', 'speak', 'tamil', 'english'],
      response: "She is fluent in Tamil and English."
    },
    conference: {
      keywords: ['conference', 'presentation', 'research', 'face recognition'],
      response: "She presented 'Appearance Based Holistic Approaches to Face Recognition' at the National Conference on Global Technology at Vidhyasagar Women's College on February 21, 2015. This demonstrates her research and technical presentation skills."
    },
    strengths: {
      keywords: ['strength', 'soft skills', 'qualities', 'characteristics'],
      response: "Her key strengths include: Good listener, Hard worker, Willingness to learn, Team facilitator, Adaptable to new technologies, Strong academic discipline, and Detail-oriented & organized."
    },
    teaching: {
      keywords: ['teaching', 'experience', 'tutor', 'educator', 'xseed', 'pedagogy', 'prasan'],
      response: "Ezhil has 3 years of teaching experience at Prasan Vidhaya Bala Mandhir using the XSEED pedagogical framework, which emphasizes structured, process-driven education. She also continues freelance tutoring. This background gives her strong skills in documentation, SOP adherence, clear communication, and adaptability—all highly valuable for IT support and automation roles."
    },
    sop: {
      keywords: ['sop', 'standard operating procedure', 'documentation', 'process', 'workflow'],
      response: "Her teaching background with XSEED has given her strong expertise in following and creating Standard Operating Procedures (SOPs), process documentation, and structured workflows. She understands the importance of clear documentation and consistent process execution—critical for IT operations and automation support."
    },
    communication: {
      keywords: ['communication', 'teach', 'explain', 'support', 'training'],
      response: "Her teaching experience demonstrates exceptional communication and training skills. She can break down complex concepts, support diverse learners, and provide clear explanations—abilities directly applicable to IT support, user training, and automation implementation roles where explaining technical processes to non-technical users is essential."
    }
  };

  const getDefaultResponse = () => "I'm not sure about that. You can ask me about Ezhil's education, skills, achievements, AI tool knowledge, automation suitability, contact info, or career interests!";

  const findResponse = (userMessage) => {
    const lowerMsg = userMessage.toLowerCase();

    for (const data of Object.values(chatbotKB)) {
      if (data.keywords.some(keyword => lowerMsg.includes(keyword))) {
        return data.response;
      }
    }
    return getDefaultResponse();
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const userMessage = { type: 'user', text: chatInput };
    setchatMessages(prev => [...prev, userMessage]);

    // Get bot response
    const botResponse = findResponse(chatInput);
    setTimeout(() => {
      setchatMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 300);

    setChatInput('');
  };

  const handleQuickQuestion = (question) => {
    setchatMessages(prev => [...prev, { type: 'user', text: question }]);
    const response = findResponse(question);
    setTimeout(() => {
      setchatMessages(prev => [...prev, { type: 'bot', text: response }]);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                EM
              </div>
              <span className="text-xl font-bold text-slate-900">Ezhil Malar</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['About', 'Education', 'Skills', 'Achievements', 'Career', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a href="/resume.pdf" download="Ezhil_Malar_M_Resume.pdf" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center gap-2 cursor-pointer">
                <Download size={16} />
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-slate-200 pt-4">
              {['About', 'Education', 'Skills', 'Achievements', 'Career', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a href="/resume.pdf" download="Ezhil_Malar_M_Resume.pdf" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center gap-2 cursor-pointer">
                <Download size={16} />
                Resume
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full">
            <p className="text-sm font-semibold text-blue-700">Welcome to My Digital Profile</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Ezhil Malar M
          </h1>

          <p className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Technology Graduate | Automation & AI Tools Enthusiast | Power Platform & RPA Learner
          </p>

          <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A highly motivated technology graduate with strong academic achievements, programming fundamentals, design tool exposure, and growing expertise in AI tools, automation platforms, and digital productivity systems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="/resume.pdf" download="Ezhil_Malar_M_Resume.pdf" className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-md cursor-pointer">
              <Download size={20} />
              Download Resume
            </a>
            <button
              onClick={() => setChatOpen(true)}
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle size={20} />
              Chat with Assistant
            </button>
            <a
              href="mailto:ezhilmohan03@gmail.com"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all transform hover:scale-105 font-semibold flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">About</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              <p className="text-lg text-slate-200 leading-relaxed">
                Ezhil Malar M is a technology graduate with an MCA and B.Sc in Software Application, known for strong academic performance, university ranking, and a consistent willingness to learn. She has foundational knowledge in programming, databases, design tools, and operating systems.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                With <strong>3 years of teaching experience at Prasan Vidhaya Bala Mandhir</strong> utilizing the <strong>XSEED pedagogical framework</strong>, she has demonstrated exceptional skills in structured communication, process documentation, and adaptability to diverse learning needs. She combines this with <strong>ongoing freelance tutoring experience</strong>, showcasing her ability to work independently and manage multiple responsibilities simultaneously.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                She is now expanding into modern workplace technologies such as LLM tools, Generative AI, Microsoft Power Platform, RPA, and workflow automation—positioning herself as a capable professional for automation-focused, AI-assisted, and digital operations roles. Her teaching background provides a strong foundation in following standard operating procedures, training delivery, and user support.
              </p>
              <p className="text-lg text-slate-200 leading-relaxed">
                Her career objective is to grow with an organization and become a reputed professional by effectively contributing to business goals through technology, continuous learning, automation, and digital transformation.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg space-y-4">
              <div className="flex items-start gap-3">
                <BookOpen className="text-blue-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-blue-400">Academic Excellence</p>
                  <p className="text-sm text-slate-300">University ranks & topper awards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="text-purple-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-purple-400">Modern Skills Focus</p>
                  <p className="text-sm text-slate-300">AI, RPA, Power Platform, automation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="text-green-400 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-green-400">Quick Learner</p>
                  <p className="text-sm text-slate-300">Continuous learning mindset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Professional Experience</h2>
          <div className="space-y-6">
            {[
              {
                role: 'Teaching Professional & Pedagogy Specialist',
                organization: 'Prasan Vidhaya Bala Mandhir',
                duration: '3 Years',
                details: [
                  'Specialized training in XSEED pedagogical framework—a structured, process-driven teaching methodology',
                  'Demonstrated proficiency in curriculum delivery, student assessment, and adaptive teaching strategies',
                  'Strong experience in documentation, standard operating procedures (SOPs), and structured communication',
                  'Managed classroom operations, resource allocation, and individualized learning support'
                ]
              },
              {
                role: 'Freelance Tutor',
                organization: 'Self-Employed | Ongoing',
                duration: 'Till Date',
                details: [
                  'Independent management of tutoring clients and scheduling',
                  'Personalized curriculum design and student progress tracking',
                  'Flexible problem-solving and adaptability to diverse learning styles',
                  'Client relationship management and performance reporting'
                ]
              }
            ].map((job, idx) => (
              <div key={idx} className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-600">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                    <p className="text-blue-700 font-semibold">{job.organization}</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-semibold">
                    {job.duration}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.details.map((detail, didx) => (
                    <li key={didx} className="text-slate-700 flex items-start gap-3">
                      <span className="text-blue-600 mt-1 font-bold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 mt-6">
              <h4 className="font-bold text-slate-900 mb-2">🎓 Why Teaching Experience Matters for IT Support Roles:</h4>
              <p className="text-slate-700 leading-relaxed">
                Teaching experience with XSEED pedagogy directly translates to IT support and digital operations excellence: structured problem-solving (SOP adherence), clear communication with diverse users, patience with technical learners, documentation skills, and the ability to break down complex processes into understandable steps—core competencies for IT support, automation training, and user enablement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: 'Master of Computer Applications (MCA)',
                college: 'Karpaga Vinayaga College of Engineering & Technology',
                percentage: '90%',
                details: 'Strong academic performance with university ranking'
              },
              {
                degree: 'B.Sc in Software Application',
                college: 'Vidhyasagar Women\'s College',
                percentage: '93.3%',
                details: 'University First Rank - Outstanding academic achievement'
              },
              {
                degree: '12th Standard (Higher Secondary)',
                college: 'St. Marys Girls Higher Secondary School',
                percentage: '80.5%',
                details: 'Strong foundation in academics'
              },
              {
                degree: '10th Standard (Secondary)',
                college: 'Aruna Matric Higher Secondary School',
                percentage: '85.6%',
                details: 'Solid academic foundation'
              }
            ].map((edu, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-blue-600 mt-2"></div>
                  {idx !== 3 && <div className="w-1 h-20 bg-blue-200 mt-2"></div>}
                </div>
                <div className="pb-4 flex-grow">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                        <p className="text-slate-600">{edu.college}</p>
                      </div>
                      <span className="inline-block px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-bold">
                        {edu.percentage}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{edu.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                category: 'Teaching & Pedagogy',
                level: 'Expert',
                skills: ['XSEED Framework', 'Curriculum Design', 'Process Documentation', 'SOP Development', 'Student Assessment']
              },
              {
                category: 'Programming Fundamentals',
                level: 'Foundation',
                skills: ['C', 'C++', 'Java', 'ASP.NET basics']
              },
              {
                category: 'AI & LLM Tools',
                level: 'Learning',
                skills: ['ChatGPT', 'Claude', 'Gemini', 'Perplexity']
              },
              {
                category: 'Generative AI & Prompt Engineering',
                level: 'Exploring',
                skills: ['Prompt Engineering', 'AI-assisted Research', 'Content Automation', 'Resume/Chatbot Automation']
              },
              {
                category: 'Microsoft Power Platform',
                level: 'Learning',
                skills: ['Power Apps', 'Power Automate', 'Power BI', 'Dataverse basics']
              },
              {
                category: 'RPA & Automation',
                level: 'Intermediate',
                skills: ['UiPath', 'Pega RPA', 'n8n Workflow Automation', 'API-based Automation']
              },
              {
                category: 'Design & Publishing Tools',
                level: 'Familiar',
                skills: ['Adobe Photoshop', 'Adobe PageMaker', 'CorelDraw', 'Azhagi']
              },
              {
                category: 'Web Basics',
                level: 'Foundation',
                skills: ['HTML', 'CSS', 'JavaScript basics', 'Database Fundamentals']
              },
              {
                category: 'Productivity Tools',
                level: 'Intermediate',
                skills: ['Microsoft Office Suite', 'Google Workspace', 'Windows OS']
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 mb-2">{skillGroup.category}</h3>
                <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded mb-3">
                  {skillGroup.level}
                </span>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sidx) => (
                    <span key={sidx} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Achievements & Awards</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🏆',
                title: 'University First Rank',
                desc: 'B.Sc in Software Application',
                detail: '93.3% - Outstanding Academic Performance'
              },
              {
                icon: '🎯',
                title: 'University 17th Rank',
                desc: 'Master of Computer Applications',
                detail: '90% - Strong Academic Standing'
              },
              {
                icon: '⭐',
                title: 'Best Outgoing Student',
                desc: 'Academic Year 2013-2014',
                detail: 'Recognized for excellence and contribution'
              },
              {
                icon: '📚',
                title: 'Subject Topper',
                desc: 'Multiple Subjects',
                detail: 'Allied Mathematics, Applied Physics, Programming in Java, DBMS, Resource Management'
              },
              {
                icon: '🎖️',
                title: 'Class Topper Award',
                desc: 'University Exams',
                detail: 'Overall top performance across semesters'
              },
              {
                icon: '📝',
                title: 'Research Presentation',
                desc: 'National Conference',
                detail: '"Appearance Based Holistic Approaches to Face Recognition"'
              }
            ].map((achievement, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h3 className="font-bold text-slate-900 mb-1">{achievement.title}</h3>
                <p className="text-sm text-blue-700 font-semibold mb-2">{achievement.desc}</p>
                <p className="text-sm text-slate-600">{achievement.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference & Research */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Research & Presentations</h2>

          <div className="bg-white rounded-lg border-2 border-blue-500 p-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="text-4xl">🎤</div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  "Appearance Based Holistic Approaches to Face Recognition"
                </h3>
                <div className="space-y-2 text-slate-700">
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Conference:</span> National Conference on Global Technology
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Venue:</span> Vidhyasagar Women's College, Chengalpattu
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="font-semibold">Date:</span> February 21, 2015
                  </p>
                  <p className="mt-4 text-slate-600">
                    This research presentation demonstrates technical knowledge in computer vision, face recognition algorithms, and academic research methodology. It reflects Ezhil's exposure to advanced technology research and presentation skills.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Certifications & Proficiencies</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'XSEED Pedagogy', icon: '🎓' },
              { name: 'Adobe Photoshop', icon: '🎨' },
              { name: 'Adobe PageMaker', icon: '📄' },
              { name: 'CorelDraw', icon: '✏️' },
              { name: 'Azhagi (Tamil)', icon: '🔤' },
              { name: 'Typewriting in English', icon: '⌨️' },
              { name: 'Database Management', icon: '💾' },
              { name: 'Windows Operating System', icon: '🖥️' }
            ].map((cert, idx) => (
              <div key={idx} className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-6 text-center border border-purple-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{cert.icon}</div>
                <p className="font-semibold text-slate-900">{cert.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-slate-900">Key Strengths</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Good Listener', emoji: '👂' },
              { title: 'Hard Worker', emoji: '💪' },
              { title: 'Willingness to Learn', emoji: '📚' },
              { title: 'Team Facilitator', emoji: '🤝' },
              { title: 'Adaptable to Tech', emoji: '⚙️' },
              { title: 'Academic Discipline', emoji: '🎓' },
              { title: 'Detail-Oriented', emoji: '🔍' },
              { title: 'Well Organized', emoji: '📊' }
            ].map((strength, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 text-center border border-slate-200 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-2">{strength.emoji}</div>
                <p className="font-semibold text-slate-900">{strength.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Interests */}
      <section id="career" className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Career Interests</h2>

          <p className="text-lg mb-8 leading-relaxed max-w-3xl">
            Open to learning-focused technology, automation, and digital operations roles. Actively seeking positions that combine modern technology exposure with growth opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              'IT User Support & Help Desk (leveraging teaching communication skills)',
              'Application Support & Technical Training',
              'Automation Support & Administration',
              'Power Platform-based Workflow Solutions',
              'RPA Process Automation',
              'SOP Documentation & Process Optimization',
              'Digital Operations & Workflow Improvement',
              'User Enablement & Technical Onboarding',
              'AI-assisted Business Operations',
              'Data & Reporting Support'
            ].map((role, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/20 rounded-lg p-4">
                <ChevronDown size={20} className="flex-shrink-0" />
                <span className="font-semibold">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-slate-900">Get In Touch</h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                label: 'Email',
                value: 'ezhilmohan03@gmail.com',
                href: 'mailto:ezhilmohan03@gmail.com'
              },
              {
                icon: Phone,
                label: 'Phone',
                value: '9944036713',
                href: 'tel:9944036713'
              },
              {
                icon: MapPin,
                label: 'Location',
                value: 'Sithalapakkam, Chengalpattu District, Tamil Nadu',
                href: '#'
              }
            ].map((contact, idx) => {
              const Icon = contact.icon;
              return (
                <a
                  key={idx}
                  href={contact.href}
                  className="bg-slate-50 rounded-lg p-6 text-center hover:bg-blue-50 transition-colors group"
                >
                  <Icon className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-slate-600 mb-1">{contact.label}</p>
                  <p className="font-semibold text-slate-900 group-hover:text-blue-600">{contact.value}</p>
                </a>
              );
            })}
          </div>

          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-8 text-center">
            <p className="text-lg font-semibold text-slate-900 mb-4">
              Open to learning-focused technology, automation, and digital operations roles.
            </p>
            <p className="text-slate-700">
              Ready to contribute to innovative projects and grow as a technology professional.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Chatbot */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-110 flex items-center justify-center z-30"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chatbot Window */}
      {chatOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-h-96 bg-white rounded-lg shadow-2xl flex flex-col z-40 border border-slate-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div>
              <h3 className="font-bold">Ask about Ezhil</h3>
              <p className="text-xs text-blue-100">Ezhil Assistant</p>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-white hover:bg-white/20 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {chatMessages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-slate-200 text-slate-900 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          {chatMessages.length === 1 && (
            <div className="px-4 py-3 border-t border-slate-200 bg-white space-y-2">
              <p className="text-xs font-semibold text-slate-600">Quick questions:</p>
              <div className="space-y-2">
                {[
                  'Tell me about Ezhil',
                  'What are her skills?',
                  'Is she good for automation?'
                ].map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleQuickQuestion(q)}
                    className="w-full text-left text-xs p-2 hover:bg-blue-50 rounded border border-slate-200 text-slate-700 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input Area */}
          <form onSubmit={handleChatSubmit} className="border-t border-slate-200 p-3 bg-white rounded-b-lg flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2026 Ezhil Malar M | Technology Graduate | Digital Profile</p>
        </div>
      </footer>
    </div>
  );
};

export default ResumeWebsite;
