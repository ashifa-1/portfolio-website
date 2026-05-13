import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Cpu,
  Zap,
  ChevronDown,
  Download,
  ExternalLink
} from 'lucide-react';
import { Button, Card, Badge, Section, AnimatedHeading } from '@/components';

export function Home() {
  const { scrollY } = useScroll();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const shouldReduceMotion = useReducedMotion();

  const heroSlowY = useTransform(scrollY, [0, 1200], [0, -120]);
  const heroMidY = useTransform(scrollY, [0, 1200], [0, -70]);
  const heroFastY = useTransform(scrollY, [0, 1200], [0, -40]);

  const floatingAnimation = shouldReduceMotion
    ? { y: 0, rotate: 0 }
    : { y: [-10, 10, -10], rotate: [-2, 2, -2] };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ashifa-mohammed', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ashifa-mohammed', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/ashifa-mohammed', label: 'LeetCode' },
    { icon: Mail, href: 'mailto:mdashifa12@gmail.com', label: 'Email' },
  ];

  const skillCategories = [
    {
      title: 'Programming Languages',
      items: ['Java', 'Python', 'JavaScript', 'C++', 'C'],
    },
    {
      title: 'Frameworks & Tools',
      items: ['React', 'Node.js', 'Django', 'FastAPI', 'Git', 'Docker', 'Linux'],
    },
    {
      title: 'AI / ML',
      items: ['NLP', 'Deep Learning', 'RAG', 'Vector Embeddings', 'Transfer Learning'],
    },
    {
      title: 'Core CS',
      items: ['DSA', 'OOP', 'DBMS', 'Operating Systems'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'SQL'],
    },
  ];

  const projectList = [
    {
      title: 'RAG-Based Document Q&A System',
      description:
        'Built a Retrieval-Augmented Generation system using embeddings and vector databases for intelligent document querying.',
      features: ['Chunking pipeline', 'Embeddings', 'Vector retrieval', 'LLM response generation', 'Reduced hallucinations by ~30%'],
      tech: ['Python', 'FastAPI', 'NLP', 'Vector DB', 'LLMs'],
      github: 'https://github.com/ashifa-mohammed/rag-docqa',
      demo: 'https://example.com/rag-docqa',
    },
    {
      title: 'Medical Image Segmentation using U-Net',
      description:
        'Implemented U-Net with transfer learning for medical image segmentation and improved interpretability.',
      features: ['Transfer learning', 'Data augmentation', 'Segmentation visualization', 'Imaging dataset processing'],
      tech: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/ashifa-mohammed/medical-unet',
      demo: 'https://example.com/medical-unet',
    },
    {
      title: 'Real-Time Sentiment Analysis Dashboard',
      description:
        'Built a live sentiment analysis dashboard using LSTM and transformer-based models.',
      features: ['Real-time sentiment classification', '~90% accuracy', 'Optimized preprocessing pipeline', 'Live dashboard visualization'],
      tech: ['Python', 'NLP', 'Transformers', 'LSTM', 'Dashboard UI'],
      github: 'https://github.com/ashifa-mohammed/sentiment-dashboard',
      demo: 'https://example.com/sentiment-dashboard',
    },
  ];

  const experienceList = [
    {
      title: 'MERN Stack Developer Intern',
      company: 'Aim Technologies',
      period: 'May 2025 – July 2025',
      highlights: [
        'Developed full-stack MERN applications with responsive UIs.',
        'Built REST APIs and implemented authentication systems.',
        'Optimized backend performance and database queries.',
        'Collaborated on debugging, testing, and deployment workflows.',
      ],
    },
    {
      title: 'Cybersecurity Virtual Experience',
      company: 'Deloitte (Forage)',
      period: '2024',
      highlights: [
        'Analyzed simulated security breach scenarios.',
        'Identified vulnerabilities and suspicious activity.',
        'Documented security findings with clarity and precision.',
      ],
    },
  ];

  const achievements = [
    { label: 'DSA', value: '250+ problems' },
    { label: 'NPTEL IoT', value: 'Elite + Gold (90%)' },
    { label: 'Certifications', value: 'NLP, Deep Learning, AI' },
  ];

  const educationHistory = [
    {
      title: 'B.Tech in Computer Science & Engineering',
      institution: 'Aditya Engineering College',
      date: '2024 – Present',
      note: 'CGPA: 9.07',
    },
    {
      title: 'Diploma in Computer Engineering',
      institution: 'Andhra Polytechnic',
      date: '2021 – 2024',
      note: '89.9%',
    },
    {
      title: 'Schooling',
      institution: 'St. Joseph’s Convent School',
      date: '2021 Batch',
      note: '83%',
    },
  ];

  return (
    <div className="space-y-24">
      {/* Cinematic Hero Section */}
      <Section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <motion.div
          style={{ y: heroSlowY }}
          className="absolute inset-0 -z-10"
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--bg))] via-[rgba(var(--accent),0.03)] to-[rgb(var(--bg))]" />

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              style={{ y: heroMidY }}
              className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent),0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent),0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
            />
            <motion.div
              animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: [0, 15, 0], y: [0, 10, 0] }}
              transition={{
                duration: 22,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent),0.05)_1px,transparent_1px)] bg-[size:50px_50px]"
            />
          </div>

          {/* Floating Orbs */}
          <motion.div
            style={{ y: heroFastY }}
            animate={floatingAnimation}
            transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'easeInOut' }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[rgba(var(--accent),0.1)] to-[rgba(var(--accent),0.05)] blur-xl"
          />
          <motion.div
            style={{ y: heroMidY }}
            animate={floatingAnimation}
            transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-[rgba(var(--accent-cyan),0.1)] to-[rgba(var(--accent-cyan),0.05)] blur-xl"
          />
          <motion.div
            style={{ y: heroSlowY }}
            animate={floatingAnimation}
            transition={{ duration: 6, repeat: shouldReduceMotion ? 0 : Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-[rgba(var(--accent-emerald),0.1)] to-[rgba(var(--accent-emerald),0.05)] blur-xl"
          />
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            style={{ y: heroFastY }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <Badge variant="glow" className="inline-flex text-sm px-4 py-2">
                <Zap className="mr-2 h-4 w-4" />
                Available for Opportunities
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={itemVariants} className="mb-6">
              <h1 className="display-font text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight leading-none">
                <span className="block bg-gradient-to-r from-[rgb(var(--text))] via-[rgb(var(--accent))] to-[rgb(var(--text))] bg-clip-text text-transparent">
                  Mohammed Ahmad Ashifa
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-[rgb(var(--text-secondary))] max-w-4xl leading-relaxed">
                Computer Science undergraduate with hands-on experience in{' '}
                <span className="text-[rgb(var(--accent))] font-semibold">scalable machine learning systems</span>,{' '}
                <span className="text-[rgb(var(--accent))] font-semibold">real-time applications</span>,{' '}
                <span className="text-[rgb(var(--accent))] font-semibold">NLP</span>,{' '}
                <span className="text-[rgb(var(--accent))] font-semibold">deep learning</span>, and{' '}
                <span className="text-[rgb(var(--accent))] font-semibold">full-stack development</span>.
              </h2>
            </motion.div>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-12">
              <p className="text-lg md:text-xl lg:text-2xl font-light text-[rgb(var(--text-secondary))] max-w-3xl leading-relaxed italic">
                "Building intelligent systems, scalable web applications, and AI-powered experiences."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 mb-16">
              <Button
                variant="gradient"
                size="lg"
                className="group text-lg px-8 py-4 h-auto"
              >
                <span className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group text-lg px-8 py-4 h-auto border-2 hover:border-[rgb(var(--accent))]"
              >
                <span className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </span>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="mb-20">
              <div className="flex items-center gap-8">
                <span className="text-sm font-medium text-[rgb(var(--text-secondary))] uppercase tracking-wider">
                  Connect
                </span>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 rounded-full bg-[rgba(var(--surface),0.5)] backdrop-blur-sm border border-[rgba(var(--border),0.3)] hover:border-[rgb(var(--accent))] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(var(--accent),0.2)]"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    >
                      <social.icon className="h-5 w-5 text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--accent))] transition-colors" />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(var(--accent),0.1)] to-[rgba(var(--accent),0.05)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-sm font-medium text-[rgb(var(--text-secondary))] uppercase tracking-wider">
                  Expertise
                </span>
                <div className="flex flex-wrap gap-3">
                  {[
                    'Python', 'TensorFlow', 'PyTorch', 'React', 'Node.js',
                    'TypeScript', 'AWS', 'Docker', 'NLP', 'Computer Vision'
                  ].map((tech, index) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + index * 0.05 }}
                      className="px-4 py-2 rounded-full bg-[rgba(var(--accent),0.1)] border border-[rgba(var(--accent),0.2)] text-sm font-medium text-[rgb(var(--accent))]"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2 text-[rgb(var(--text-secondary))]"
            >
              <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating AI Elements */}
        <motion.div
          animate={floatingAnimation}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 right-20 hidden lg:block"
        >
          <div className="relative">
            <Cpu className="h-12 w-12 text-[rgba(var(--accent),0.6)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--accent),0.2)] to-transparent rounded-full blur-md -z-10" />
          </div>
        </motion.div>

        <motion.div
          animate={floatingAnimation}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
          className="absolute bottom-32 left-20 hidden lg:block"
        >
          <div className="relative">
            <Code2 className="h-10 w-10 text-[rgba(var(--accent-cyan),0.6)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(var(--accent-cyan),0.2)] to-transparent rounded-full blur-md -z-10" />
          </div>
        </motion.div>
      </Section>

{/* About Section */}
      <Section id="about">
        <div className="max-w-6xl mx-auto space-y-12">
          <AnimatedHeading as="h2" className="text-center mb-8">
            About Me
          </AnimatedHeading>

          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] items-start">
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed">
                  Computer Science undergraduate with hands-on experience in building scalable machine learning
                  systems, real-time applications, and full-stack solutions. I design and deliver intelligent
                  products that are engineering-grade, robust, and built for production.
                </p>
                <p className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed">
                  My work is rooted in NLP and deep learning, backed by a strong DSA foundation, and driven by
                  a passion for creating intelligent applications that solve real problems with elegant systems.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-5xl font-black text-[rgb(var(--accent))]">9.07</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    CGPA
                  </p>
                </Card>
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-5xl font-black text-[rgb(var(--accent))]">250+</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    DSA problems
                  </p>
                </Card>
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-5xl font-black text-[rgb(var(--accent))]">5+</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    ML systems
                  </p>
                </Card>
              </div>
            </motion.div>

            <div className="space-y-4">
              {[
                {
                  title: 'Technical Interests',
                  description:
                    'NLP, deep learning, retrieval-augmented generation, vector embeddings, and transfer learning for intelligent products.',
                },
                {
                  title: 'Current Focus',
                  description:
                    'Building scalable FastAPI and MERN systems, improving inference throughput, and shipping AI solutions with reliability.',
                },
                {
                  title: 'Development Philosophy',
                  description:
                    'Write clean, testable code with a systems-first mindset, prioritize performance, and deliver maintainable solutions.',
                },
                {
                  title: 'Engineering Mindset',
                  description:
                    'Approach every challenge with algorithmic rigor, strong problem-solving discipline, and a product-centric lens.',
                },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="hero-glass p-6 rounded-3xl border border-[rgba(255,255,255,0.12)] shadow-xl"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-[rgb(var(--text-secondary))] leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Experience
          </AnimatedHeading>

          <div className="relative">
            <div className="hidden md:block absolute left-8 top-6 bottom-6 w-px bg-[rgba(var(--accent),0.18)]" />

            <div className="space-y-8">
              {experienceList.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="relative md:pl-16"
                >
                  <div className="absolute left-0 top-6 h-5 w-5 rounded-full bg-[rgb(var(--accent))] ring-8 ring-[rgba(var(--accent),0.15)]" />
                  <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.1)] shadow-2xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div>
                        <p className="text-[rgb(var(--accent))] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
                          {experience.company}
                        </p>
                        <h3 className="text-2xl font-semibold text-white">{experience.title}</h3>
                      </div>
                      <span className="text-sm font-medium text-[rgb(var(--text-secondary))]">
                        {experience.period}
                      </span>
                    </div>

                    <ul className="mt-6 space-y-3 text-[rgb(var(--text-secondary))]">
                      {experience.highlights.map((item) => (
                        <li key={item} className="flex gap-3 items-start">
                          <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Skills
          </AnimatedHeading>

          <div className="grid gap-6 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.1)] shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[rgb(var(--text-secondary))] uppercase tracking-[0.3em] text-xs font-semibold mb-2">
                        {category.title}
                      </p>
                      <h3 className="text-2xl font-semibold text-white">{category.title}</h3>
                    </div>
                    <div className="h-12 w-12 rounded-3xl bg-[rgba(var(--accent),0.12)] flex items-center justify-center text-[rgb(var(--accent))]">
                      <span className="text-xl font-bold">{category.items.length}</span>
                    </div>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center justify-center rounded-full border border-[rgba(var(--accent),0.18)] bg-[rgba(var(--accent),0.08)] px-4 py-2 text-sm font-medium text-[rgb(var(--accent))]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Projects
          </AnimatedHeading>

          <div className="grid gap-8 xl:grid-cols-3">
            {projectList.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-120px' }}
              >
                <Card variant="glass" animate hover className="p-8 group border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <p className="text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))] mb-2">
                        Project
                      </p>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="View GitHub repository" className="text-[rgb(var(--accent))] hover:text-[rgb(var(--text))] transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo" className="text-[rgb(var(--accent))] hover:text-[rgb(var(--text))] transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-[rgb(var(--text-secondary))] leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex gap-3 items-start">
                        <span className="mt-1 h-2 w-2 rounded-full bg-[rgb(var(--accent))]" />
                        <span className="text-[rgb(var(--text-secondary))] leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tool) => (
                      <Badge key={tool} className="bg-[rgba(var(--accent),0.12)] text-[rgb(var(--accent))] border border-[rgba(var(--accent),0.2)]">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Achievements & Education Section */}
      <Section id="achievements">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Achievements & Education
          </AnimatedHeading>

          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Key Achievements</h3>
                <div className="grid gap-4 sm:grid-cols-3">
                  {achievements.map((achievement) => (
                    <div key={achievement.label} className="rounded-3xl bg-[rgba(var(--surface),0.08)] p-5 border border-[rgba(255,255,255,0.08)]">
                      <p className="text-3xl font-bold text-[rgb(var(--accent))]">{achievement.value}</p>
                      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[rgb(var(--text-secondary))]">
                        {achievement.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-4"
            >
              {educationHistory.map((education) => (
                <Card key={education.title} variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{education.title}</h3>
                      <p className="text-[rgb(var(--text-secondary))]">{education.institution}</p>
                    </div>
                    <span className="text-sm text-[rgb(var(--accent))] font-medium">{education.date}</span>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))]">{education.note}</p>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Contact
          </AnimatedHeading>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <p className="text-[rgb(var(--text-secondary))] text-lg leading-relaxed">
                Ready to collaborate on intelligent applications, scalable systems, and AI-powered products.
                Reach out for project partnerships, internships, or technical conversations.
              </p>
              <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))] mb-2">Email</p>
                <a
                  href="mailto:mdashifa12@gmail.com"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-[rgb(var(--accent))] hover:text-[rgb(var(--text))] transition-colors"
                >
                  mdashifa12@gmail.com
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-100px' }}
              className="space-y-6"
            >
              <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                <p className="text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))] mb-4">Platforms</p>
                <div className="grid gap-4">
                  {socialLinks.slice(0, 3).map((platform) => (
                    <a
                      key={platform.label}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between rounded-3xl border border-[rgba(var(--accent),0.18)] bg-[rgba(var(--accent),0.06)] px-5 py-4 transition-all hover:-translate-y-1 hover:border-[rgb(var(--accent))]"
                    >
                      <span className="font-medium text-white">{platform.label}</span>
                      <ExternalLink className="h-5 w-5 text-[rgb(var(--accent))] transition-colors group-hover:text-[rgb(var(--text))]" />
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-[rgba(var(--border),0.2)] py-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 md:flex-row items-center justify-between px-6">
          <p className="text-sm text-[rgb(var(--text-secondary))]">
            © 2026 Ashifa Mohammed. Built for intelligent systems, product-grade AI, and premium engineering portfolios.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/ashifa-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] transition-colors"
              aria-label="Visit GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/ashifa-mohammed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--accent))] transition-colors"
              aria-label="Visit LinkedIn"
            >
              LinkedIn
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(var(--accent),0.2)] bg-[rgba(var(--accent),0.06)] px-4 py-2 text-sm text-[rgb(var(--accent))] transition-all hover:-translate-y-0.5"
              aria-label="Scroll to top"
            >
              Top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
