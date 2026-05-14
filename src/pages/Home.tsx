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
import { Button, Card, Badge, Section, AnimatedHeading, Carousel, AnimatedName } from '@/components';

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
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [-2, 2, -2],
      transition: { duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] },
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
      github: 'https://github.com/ashifa-1/rag-docqa',
      demo: 'https://example.com/rag-docqa',
    },
    {
      title: 'Medical Image Segmentation using U-Net',
      description:
        'Implemented U-Net with transfer learning for medical image segmentation and improved interpretability.',
      features: ['Transfer learning', 'Data augmentation', 'Segmentation visualization', 'Imaging dataset processing'],
      tech: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/ashifa-1/medical-unet',
      demo: 'https://example.com/medical-unet',
    },
    {
      title: 'Real-Time Sentiment Analysis Dashboard',
      description:
        'Built a live sentiment analysis dashboard using LSTM and transformer-based models.',
      features: ['Real-time sentiment classification', '~90% accuracy', 'Optimized preprocessing pipeline', 'Live dashboard visualization'],
      tech: ['Python', 'NLP', 'Transformers', 'LSTM', 'Dashboard UI'],
      github: 'https://github.com/ashifa-1/sentiment-dashboard',
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

  const educationTimeline = [...educationHistory].reverse();

  return (
    <div className="space-y-16">
      {/* Cinematic Hero Section */}
      <Section id="home" className="relative min-h-[calc(100vh-8rem)] flex items-center overflow-hidden">
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
            animate={shouldReduceMotion ? {} : {
              y: [-10, 10, -10],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-[rgba(var(--accent),0.1)] to-[rgba(var(--accent),0.05)] blur-xl"
          />
          <motion.div
            style={{ y: heroMidY }}
            animate={shouldReduceMotion ? {} : {
              y: [-10, 10, -10],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.5 }}
            className="absolute top-3/4 right-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-[rgba(var(--accent-cyan),0.1)] to-[rgba(var(--accent-cyan),0.05)] blur-xl"
          />
          <motion.div
            style={{ y: heroSlowY }}
            animate={shouldReduceMotion ? {} : {
              y: [-10, 10, -10],
              rotate: [-2, 2, -2]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94], delay: 3 }}
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
            className="mx-auto max-w-4xl space-y-8"
          >
            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <Badge variant="glow" className="inline-flex text-sm px-4 py-2">
                <Zap className="mr-2 h-4 w-4" />
                Available for Opportunities
              </Badge>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <h1 className="display-font text-[clamp(2.8rem,6.4vw,4rem)] sm:text-[clamp(3.6rem,7.2vw,5.2rem)] md:text-[clamp(4.4rem,6.4vw,6rem)] lg:text-[clamp(5.2rem,5.6vw,6.8rem)] font-black tracking-tight leading-[0.95] sm:leading-[0.95] lg:leading-[0.9]">
                <span className="block bg-gradient-to-r from-[rgb(var(--text))] via-[rgb(var(--accent))] to-[rgb(var(--text))] bg-clip-text text-transparent">
                  Mohammed Ahmad
                  <br />
                  Ashifa
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}>
              <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--text-secondary))] max-w-3xl leading-relaxed">
                Computer Science undergraduate building engineering-grade AI and full-stack solutions for modern systems.
                I craft intelligent products with scalable ML architecture, real-time reliability, and clean developer-first execution.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="gradient"
                size="lg"
                className="group text-base px-7 py-4 h-auto"
              >
                <span className="flex items-center">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group text-base px-7 py-4 h-auto border-2 hover:border-[rgb(var(--accent))]"
              >
                <span className="flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </span>
              </Button>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="space-y-4">
              <p className="text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                Connect
              </p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[rgba(var(--surface),0.5)] p-3 text-[rgb(var(--text-secondary))] transition-colors hover:text-[rgb(var(--accent))]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }} className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Projects', value: '3 active builds' },
                { label: 'Experience', value: '2 tech internships' },
                { label: 'Focus', value: 'AI + Full-stack' },
                { label: 'Learning', value: 'Advanced systems' },
              ].map((card) => (
                <Card key={card.label} variant="glass" animate hover className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(var(--bg),0.05)] p-5 shadow-xl">
                  <p className="text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))] mb-3">
                    {card.label}
                  </p>
                  <p className="text-xl font-semibold text-white">{card.value}</p>
                </Card>
              ))}
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

          <div className="grid gap-8 grid-cols-1 items-start">
            <motion.div
              variants={itemVariants}
              className="space-y-8"
            >
              <div className="space-y-4">
                <p className="text-[rgb(var(--text-secondary))] text-base sm:text-lg leading-relaxed">
                  Computer Science undergraduate with hands-on experience in building scalable machine learning
                  systems, real-time applications, and full-stack solutions. I design and deliver intelligent
                  products that are engineering-grade, robust, and built for production.
                </p>
              </div>

              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(var(--accent))]">9.07</p>
                  <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    CGPA
                  </p>
                </Card>
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(var(--accent))]">250+</p>
                  <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    DSA problems
                  </p>
                </Card>
                <Card variant="glass" animate hover className="p-6">
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black text-[rgb(var(--accent))]">5+</p>
                  <p className="mt-3 text-xs sm:text-sm uppercase tracking-[0.35em] text-[rgb(var(--text-secondary))]">
                    ML systems
                  </p>
                </Card>
              </div>

              <motion.div variants={itemVariants} className="space-y-4">
                <Carousel
                  itemsPerView={1}
                  responsive={[
                    { breakpoint: 768, itemsPerView: 2 },
                    { breakpoint: 1280, itemsPerView: 2 },
                  ]}
                  gap={20}
                  showDots={false}
                  className="pb-2"
                >
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
                      <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{item.title}</h3>
                      <p className="text-[rgb(var(--text-secondary))] text-sm sm:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </Carousel>
              </motion.div>
            </motion.div>

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
            <Carousel
              itemsPerView={1}
              responsive={[{ breakpoint: 1024, itemsPerView: 2 }]}
              gap={24}
              showDots={true}
              showArrows={true}
              className="pb-2"
            >
              {experienceList.map((experience, index) => (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="relative"
                >
                  <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.1)] shadow-2xl min-h-[340px]">
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
            </Carousel>
          </div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Skills
          </AnimatedHeading>

          <Carousel
            itemsPerView={1}
            responsive={[
              { breakpoint: 768, itemsPerView: 2 },
              { breakpoint: 1280, itemsPerView: 3 },
            ]}
            gap={24}
            showDots={true}
            showArrows={true}
            className="pb-2"
          >
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
          </Carousel>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Projects
          </AnimatedHeading>

          <Carousel
            itemsPerView={1}
            responsive={[{ breakpoint: 1024, itemsPerView: 2 }]}
            gap={24}
            showDots={true}
            showArrows={true}
            className="pb-2"
          >
            {projectList.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-120px' }}
              >
                <Card variant="glass" animate hover className="p-8 group border border-[rgba(255,255,255,0.08)] shadow-2xl overflow-hidden min-h-[380px]">
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
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="View live demo" className="text-[rgb(var(--accent))] hover:text-[rgb(var(--accent-cyan))] transition-colors">
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
          </Carousel>
        </div>
      </Section>

      {/* Achievements Section */}
      <Section id="achievements">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Achievements
          </AnimatedHeading>

          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                  <p className="text-3xl font-bold text-[rgb(var(--accent))]">{achievement.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-[rgb(var(--text-secondary))]">
                    {achievement.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education">
        <div className="max-w-6xl mx-auto space-y-10">
          <AnimatedHeading as="h2" className="text-center mb-8">
            Education
          </AnimatedHeading>

          <div className="relative space-y-8 border-l border-[rgba(var(--accent),0.18)] pl-8">
            {educationTimeline.map((education, index) => (
              <motion.div
                key={education.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative"
              >
                <span className="absolute left-[-1.9rem] top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--accent))] text-sm font-semibold text-black">
                  {index + 1}
                </span>
                <Card variant="glass" animate hover className="p-8 border border-[rgba(255,255,255,0.08)] shadow-2xl">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{education.title}</h3>
                      <p className="text-[rgb(var(--text-secondary))]">{education.institution}</p>
                    </div>
                    <span className="text-sm text-[rgb(var(--accent))] font-medium">{education.date}</span>
                  </div>
                  <p className="text-[rgb(var(--text-secondary))]">{education.note}</p>
                </Card>
              </motion.div>
            ))}
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
        <div className="max-w-3xl mx-auto flex flex-col gap-4 md:flex-row items-center justify-between px-6">
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
