import React, { useRef, useEffect } from 'react';
import { CodeBracketIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';

function App() {
  const skills = [
    { name: 'Java', icon: '☕', level: 'Advanced' },
    { name: 'C++', icon: '💻', level: 'Advanced' },
    { name: 'HTML/CSS', icon: '🌐', level: 'Advanced' },
    { name: 'JavaScript', icon: '📜', level: 'Advanced' },
    { name: 'React', icon: '⚛️', level: 'Intermediate' },
    { name: 'Python', icon: '🐍', level: 'Intermediate' },
    { name: 'Node.js', icon: '🟢', level: 'Intermediate' },
    { name: 'MongoDB', icon: '🍃', level: 'Intermediate' },
    { name: 'SQL', icon: '🗄️', level: 'Intermediate' },
    { name: 'Firebase', icon: '🔥', level: 'Intermediate' },
    { name: 'Docker', icon: '🐳', level: 'Beginner' },
    { name: 'Git', icon: '📦', level: 'Advanced' },
  ];

  const education = [
    {
      school: 'VIT Bhopal University',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      period: 'Oct 2022 - May 2026',
      location: 'Bhopal, MP',
      details: 'CGPA: 8.6 / 10',
    },
    {
      school: 'Central Academy Sr. Sec. School',
      degree: 'Higher Secondary Examination (Class XII)',
      period: 'April 2020 - April 2021',
      location: 'Alwar, Rajasthan',
      details: '84%',
    },
    {
      school: 'Step By Step Public School',
      degree: 'High School Examination (Class X)',
      period: 'April 2018 - April 2019',
      location: 'Alwar, Rajasthan',
      details: '93%',
    },
  ];

  const projects = [
    {
      title: 'ML-Based Retina Health Analysis Web App',
      description: 'Streamlit-based web app leveraging ML to analyze retina images and determine retinal health status. Advanced image processing, feature extraction, and real-time analysis.',
      technologies: ['Python', 'Streamlit', 'Machine Learning'],
      period: 'Jan 2025',
      image: 'retina_health.png'
    },
    {
      title: 'Carpool',
      description: 'Comprehensive ride-booking and rental platform. Intuitive UI using HTML, CSS, JavaScript, Python. Backend with Docker for deployment and scalability.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Python', 'Docker'],
      period: 'Jan 2024 - Ongoing',
      image: 'carpool.png'
    },
    {
      title: 'Smart Agriculture – IoT-based Smart Irrigation',
      description: 'IoT-driven smart irrigation system with real-time sensor monitoring, Android app, and cloud-based management. Improved crop yield and water usage.',
      technologies: ['IoT', 'Sensors', 'Android', 'Firebase'],
      period: 'Jan 2024 - June 2024',
      image: 'smart_agriculture.png'
    },
  ];

  const achievements = [
    'Solved 500+ questions on CodeChef, GeeksForGeeks, LeetCode, HackerRank in Java.',
    'Semi-Finalist of Smart India Hackathon.',
    'Participated in multiple hackathons and competitions on Unstop, Hack2Skill, GeeksforGeeks, enhancing problem-solving skills and hands-on experience in software development.'
  ];

  const activities = [
    'Mozilla Firefox club VIT Bhopal | Lead of Content Team | Jan 2024 - Present',
    'BashCraft Club — Tech Co-Lead',
    'Member of NSS — Participated and organized in various events',
  ];

  const activitiesCreative = [
    {
      title: "Mozilla Firefox Club VIT Bhopal",
      role: "Lead of Content Team",
      period: "Jan 2024 - Present",
      icon: "mmm.png",
      color: "bg-orange-500"
    },
    {
      title: "BashCraft Club",
      role: "Tech Co-Lead",
      period: "",
      icon: "bcc.png",
      color: "bg-blue-600"
    },
    {
      title: "NSS",
      role: "Member, Organizer",
      period: "",
      icon: "nss.png",
      color: "bg-green-600"
    }
  ];

  const codingProfiles = [
    { name: 'LeetCode', url: 'https://leetcode.com/u/rnkbansal123/', icon: 'leet code.png' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/codex5105', icon: 'code_chef.png' },
    { name: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/rnkbansks3h/', icon: 'gfg.png' },
  ];

  const certificates = [
    {
      title: 'Applied Machine Learning in Python',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: '/Applid machine learning in python.png',
    },
    {
      title: 'Business Analyst and Management',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: 'Business analyst and management.png',
    },
    {
      title: 'Digital Marketing and Ecommerce',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: 'digital marketing and ecommerce.png',
    },
    {
      title: 'Embedded System and IoT',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: '/Emb.png',
    },
    {
      title: 'Journey to Cloud Envisioning',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: 'journey to cloud envisoning your solution.png',
    },
    {
      title: 'Full Stack Developer MERN',
      organization: 'SmartBridge (in partnership with MongoDB)',
      date: 'April 22, 2025',
      credentialId: 'CC-FSD-2025-12607',
      image: 'mern_certificate.png',
    },
    {
      title: 'Node.js Developer Path',
      organization: 'MongoDB, Inc.',
      date: '04-11-2025',
      credentialId: 'MDBmgs2omoxke',
      image: 'node_JS doveloper path.png',
    },
    {
      title: 'Self Managed',
      organization: 'Your Organization',
      date: 'Year',
      credentialId: 'Credential ID',
      image: 'SELF MANAGED.png',
    },
  ];

  const carouselRef = useRef(null);
  const isPaused = useRef(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationFrameId;
    let scrollAmount = carousel ? carousel.scrollLeft : 0;

    function animate() {
      if (carousel && !isPaused.current) {
        scrollAmount += 1; // Adjust speed here
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
        }
        carousel.scrollLeft = scrollAmount;
      }
      animationFrameId = requestAnimationFrame(animate);
    }

    animate();

    // Pause auto-scroll on hover
    const handleMouseEnter = () => {
      isPaused.current = true;
    };
    const handleMouseLeave = () => {
      isPaused.current = false;
    };

    if (carousel) {
      carousel.addEventListener('mouseenter', handleMouseEnter);
      carousel.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (carousel) {
        carousel.removeEventListener('mouseenter', handleMouseEnter);
        carousel.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="section bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left side - Name and About */}
            <div className="flex-1 text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
                Rajat Bansal
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-4">B.Tech CSE Student | Web Developer</p>
              <div className="text-gray-300 leading-relaxed text-lg mb-6">
                <p>
                  Passionate about building scalable web apps, machine learning, and IoT. Experienced in full-stack development, hackathons, and technical leadership. Always eager to learn and solve real-world problems with technology.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-4">
                <a href="tel:+918306595696" className="hover:text-blue-400 transition-colors flex items-center"><PhoneIcon className="h-5 w-5 mr-1" /> +91 8306595696</a>
                <a href="mailto:rajatbansal2022@vitbhopal.ac.in" className="hover:text-blue-400 transition-colors flex items-center"><EnvelopeIcon className="h-5 w-5 mr-1" /> rajatbansal2022@vitbhopal.ac.in</a>
                <a href="https://www.linkedin.com/in/rajat-bansal-b63355255/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                  <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/RNKbansal23" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                  <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
                  GitHub
                </a>
                <a href="https://drive.google.com/file/d/1Rnfo8Bqh_9plG_0tLe_Chbuo_FA50-Nq/view" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">
                  <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 8H14a2 2 0 0 1-2-2V3.414zM6 4h5v4a4 4 0 0 0 4 4h4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4zm6 10a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1z"/></svg>
                  Resume
                </a>
                <span className="flex items-center"><MapPinIcon className="h-5 w-5 mr-1" /> Bhopal, MP</span>
              </div>
            </div>
            {/* Right side - Profile Picture */}
            <div className="flex-1 flex justify-center">
              <div className="w-[500px] h-[500px] rounded-full overflow-hidden border-4 border-blue-500 shadow-lg transform hover:scale-105 transition-transform duration-300">
               <img 
  src="/Profile_pic.jpg" 
  alt="Rajat Bansal" 
  className="w-full h-full object-cover object-center"
  style={{ objectPosition: 'center 0%' }}
/>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2 className="heading">Education</h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className="card flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">{edu.school}</h3>
                <p className="text-blue-400 mb-1">{edu.degree}</p>
                <p className="text-gray-400 text-sm">{edu.details}</p>
              </div>
              <div className="text-right md:text-left mt-2 md:mt-0">
                <p className="text-gray-300">{edu.period}</p>
                <p className="text-gray-400 text-sm">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-gray-800">
        <h2 className="heading">Technical Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="card text-center transform hover:scale-105 transition-transform">
              <span className="text-4xl mb-3">{skill.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-blue-400">{skill.level}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="heading">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img 
                  src={process.env.PUBLIC_URL + "/" + project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex items-center mb-4">
                <CodeBracketIcon className="h-8 w-8 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
              <p className="text-gray-300 mb-2">{project.description}</p>
              <div className="mb-2">
                <h4 className="text-blue-400 mb-1">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm">{project.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section bg-gray-800">
        <h2 className="heading">Achievements</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-3 max-w-3xl mx-auto">
          {achievements.map((ach, idx) => (
            <li key={idx}>{ach}</li>
          ))}
        </ul>
      </section>

      {/* Activities Section */}
      <section id="activities" className="section bg-gray-900">
        <h2 className="heading">Activities</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {activitiesCreative.map((act, idx) => (
            <div key={idx} className={`card flex flex-col items-center p-6 shadow-xl ${act.color} bg-opacity-20`}>
              <img src={process.env.PUBLIC_URL + "/" + act.icon} alt={act.title} className="w-16 h-16 mb-4 rounded-full shadow" />
              <h3 className="text-xl font-bold mb-2 text-center">{act.title}</h3>
              <p className="text-blue-300 mb-1 text-center">{act.role}</p>
              <p className="text-gray-300 text-center">{act.period}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="section bg-gray-800">
        <h2 className="heading">Coding Profiles</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {codingProfiles.map((profile, idx) => (
            <a
              key={idx}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center card w-40 hover:scale-105 transition-transform"
            >
              <img src={process.env.PUBLIC_URL + "/" + profile.icon} alt={profile.name} className="w-16 h-16 mb-2" />
              <span className="text-lg font-semibold text-blue-400">{profile.name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section bg-gray-800">
        <h2 className="heading">Certificates</h2>
        <div
          className="overflow-x-auto whitespace-nowrap certificates-scrollbar"
          ref={carouselRef}
          style={{ cursor: 'grab' }}
        >
          <div className="flex gap-8 py-4 min-w-full flex-nowrap">
            {[...certificates, ...certificates].map((cert, idx) => (
              <div key={idx} className="card flex-shrink-0 w-80 flex flex-col items-center">
                {cert.image && (
                  <img src={process.env.PUBLIC_URL + "/" + cert.image} alt={cert.title} className="w-full max-w-xs mb-4 rounded shadow" />
                )}
                <h3 className="text-xl font-bold mb-1 text-center">{cert.title}</h3>
                <p className="text-blue-400 mb-1 text-center">{cert.organization}</p>
                <p className="text-gray-300 text-center">Issued: {cert.date}</p>
                <p className="text-gray-400 text-center text-sm">Certificate ID: {cert.credentialId}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            <a href="https://github.com/RNKbansal23" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
              <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
              GitHub
            </a>
            <a href="https://linkedin.com/in/rajat-bansal-b63355255/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
              <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/></svg>
              LinkedIn
            </a>
            <a href="https://drive.google.com/file/d/1Rnfo8Bqh_9plG_0tLe_Chbuo_FA50-Nq/view" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center">
              <svg className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 8H14a2 2 0 0 1-2-2V3.414zM6 4h5v4a4 4 0 0 0 4 4h4v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4zm6 10a1 1 0 0 1 1 1v2h-2v-2a1 1 0 0 1 1-1z"/></svg>
              Resume
            </a>
          </div>
          <p className="text-gray-400">© 2024 Rajat Bansal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App; 
