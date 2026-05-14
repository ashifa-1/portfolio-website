import { motion, useReducedMotion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code2,
  Zap,
  ChevronDown,
  Download,
  ExternalLink
} from 'lucide-react';
import { Button, Card, Badge, Section, AnimatedHeading, Carousel, AnimatedName } from '@/components';
import { useMousePosition } from '@/hooks/useMousePosition';

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

  // Mouse interaction for hero
  const { mouseX, mouseY, springX, springY } = useMousePosition();
  const heroGlowX = useTransform(springX, [0, window.innerWidth], [-200, window.innerWidth + 200]);
  const heroGlowY = useTransform(springY, [0, window.innerHeight], [-200, window.innerHeight + 200]);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ashifa-1/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ashifa-mohammed/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/ashifaaa', label: 'LeetCode' },
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
      github: 'https://github.com/ashifa-1/rag-doc-qa',
      demo: 'https://example.com/rag-docqa',
    },
    {
      title: 'Medical Image Segmentation using U-Net',
      description:
        'Implemented U-Net with transfer learning for medical image segmentation and improved interpretability.',
      features: ['Transfer learning', 'Data augmentation', 'Segmentation visualization', 'Imaging dataset processing'],
      tech: ['Python', 'TensorFlow', 'Deep Learning', 'Computer Vision'],
      github: 'https://github.com/ashifa-1/medical-image-analysis-system',
      demo: 'https://example.com/medical-image-segmentation',
    },
    {
      title: 'Real-Time Sentiment Analysis Dashboard',
      description:
        'Built a live sentiment analysis dashboard using LSTM and transformer-based models.',
      features: ['Real-time sentiment classification', '~90% accuracy', 'Optimized preprocessing pipeline', 'Live dashboard visualization'],
      tech: ['Python', 'NLP', 'Transformers', 'LSTM', 'Dashboard UI'],
      github: 'https://github.com/ashifa-1/sentiment-platform',
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

// Hero Particles Component
function HeroParticles() {
  const particles = Array.from({ length: 35 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 25 + 25,
    color: ['var(--accent)', 'var(--accent-cyan)', 'var(--accent-emerald)', 'var(--accent-rose)', 'var(--accent-amber)'][Math.floor(Math.random() * 5)],
    type: Math.random() > 0.6 ? 'glow' : 'particle', // Mix of glows and particles
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'glow' ? 'rounded-full blur-sm' : 'rounded-full'}`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            background: particle.type === 'glow'
              ? `radial-gradient(circle, rgba(${particle.color}, 0.5) 0%, rgba(${particle.color}, 0.2) 60%, transparent 100%)`
              : `rgba(${particle.color}, 0.7)`,
          }}
          animate={{
            x: [0, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
            y: [0, Math.random() * 400 - 200, Math.random() * 300 - 150, 0],
            opacity: [0.2, 0.8, 0.4, 0.2],
            scale: [0.8, 1.4, 1.1, 0.8],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

  return (
    <div className="space-y-16">
      {/* Cinematic Hero Section */}
      <Section id="home" className="relative min-h-[calc(100vh-8rem)] flex items-center overflow-hidden">
        {/* Interactive Hero Background */}
        <motion.div
          style={{ y: heroSlowY }}
          className="absolute inset-0 -z-10"
        >
          {/* Multi-layered gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[rgb(var(--bg))] via-[rgba(var(--accent),0.04)] via-30% to-[rgb(var(--bg))]" />
          <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[rgba(var(--accent-cyan),0.02)] to-transparent opacity-70" />
          <div className="absolute inset-0 bg-gradient-radial from-[rgba(var(--accent),0.03)] via-transparent to-transparent" />

          {/* Interactive cursor-reactive glow */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(circle 400px at ${heroGlowX}px ${heroGlowY}px,
                rgba(var(--accent), 0.06) 0%,
                rgba(var(--accent-cyan), 0.04) 40%,
                transparent 70%)`,
            }}
          />

          {/* Enhanced animated grid with depth */}
          <div className="absolute inset-0 opacity-15">
            <motion.div
              style={{ y: heroMidY }}
              className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent),0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent),0.08)_1px,transparent_1px)] bg-[size:60px_60px]"
            />
            <motion.div
              animate={shouldReduceMotion ? { x: 0, y: 0 } : { x: [0, 20, 0], y: [0, 15, 0] }}
              transition={{
                duration: 25,
                repeat: shouldReduceMotion ? 0 : Infinity,
                ease: 'linear',
              }}
              className="absolute inset-0 bg-[linear-gradient(rgba(var(--accent),0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--accent),0.04)_1px,transparent_1px)] bg-[size:60px_60px]"
            />
          </div>

          {/* Enhanced floating orbs with cinematic lighting */}
          <motion.div
            style={{ y: heroFastY }}
            animate={shouldReduceMotion ? {} : {
              y: [-20, 20, -20],
              rotate: [-4, 4, -4],
              scale: [1, 1.08, 1]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-1/6 left-1/6 w-64 h-64 rounded-full bg-gradient-radial from-[rgba(var(--accent),0.18)] via-[rgba(var(--accent),0.10)] to-transparent blur-3xl opacity-90"
          />
          <motion.div
            style={{ y: heroMidY }}
            animate={shouldReduceMotion ? {} : {
              y: [-16, 16, -16],
              rotate: [4, -4, 4],
              scale: [1.08, 1, 1.08]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94], delay: 2 }}
            className="absolute top-4/5 right-1/6 w-56 h-56 rounded-full bg-gradient-radial from-[rgba(var(--accent-cyan),0.15)] via-[rgba(var(--accent-cyan),0.08)] to-transparent blur-3xl opacity-85"
          />
          <motion.div
            style={{ y: heroSlowY }}
            animate={shouldReduceMotion ? {} : {
              y: [-14, 14, -14],
              rotate: [-3, 3, -3],
              scale: [1, 1.12, 1]
            }}
            transition={{ duration: 14, repeat: Infinity, ease: [0.25, 0.46, 0.45, 0.94], delay: 4 }}
            className="absolute bottom-1/5 left-3/6 w-48 h-48 rounded-full bg-gradient-radial from-[rgba(var(--accent-emerald),0.12)] via-[rgba(var(--accent-emerald),0.06)] to-transparent blur-3xl opacity-80"
          />

          {/* Additional ambient lighting orbs */}
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-gradient-radial from-[rgba(var(--accent-rose),0.10)] to-transparent blur-2xl opacity-60"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
            className="absolute bottom-1/3 left-1/4 w-44 h-44 rounded-full bg-gradient-radial from-[rgba(var(--accent-amber),0.08)] to-transparent blur-2xl opacity-55"
          />
          <motion.div
            animate={shouldReduceMotion ? {} : {
              scale: [0.9, 1.4, 0.9],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
            className="absolute top-2/3 right-2/5 w-36 h-36 rounded-full bg-gradient-radial from-[rgba(var(--accent),0.12)] via-[rgba(var(--accent),0.06)] to-transparent blur-2xl opacity-65"
          />

          {/* Interactive floating particles for hero */}
          <HeroParticles />

          {/* Dynamic mesh gradients */}
          <motion.div
            className="absolute inset-0 opacity-35"
            animate={{
              background: [
                'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent), 0.04) 0deg, transparent 90deg, rgba(var(--accent-cyan), 0.03) 180deg, transparent 270deg)',
                'conic-gradient(from 90deg at 30% 70%, rgba(var(--accent-emerald), 0.04) 0deg, transparent 90deg, rgba(var(--accent-rose), 0.03) 180deg, transparent 270deg)',
                'conic-gradient(from 180deg at 70% 30%, rgba(var(--accent-amber), 0.04) 0deg, transparent 90deg, rgba(var(--accent), 0.03) 180deg, transparent 270deg)',
                'radial-gradient(circle at 25% 25%, rgba(var(--accent), 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(var(--accent-cyan), 0.03) 0%, transparent 50%)',
                'radial-gradient(circle at 50% 10%, rgba(var(--accent-emerald), 0.03) 0%, transparent 50%), radial-gradient(circle at 10% 90%, rgba(var(--accent-rose), 0.03) 0%, transparent 50%)',
                'conic-gradient(from 0deg at 50% 50%, rgba(var(--accent), 0.04) 0deg, transparent 90deg, rgba(var(--accent-cyan), 0.03) 180deg, transparent 270deg)',
              ]
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />

          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.1)] opacity-30" />
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
            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="interactive-element cursor-reactive"
            >
              <Badge variant="glow" className="inline-flex text-sm px-4 py-2">
                <Zap className="mr-2 h-4 w-4" />
                Available for Opportunities
              </Badge>
            </motion.div>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="interactive-element"
            >
              <h1 className="display-font text-[clamp(2rem,4.5vw,3rem)] sm:text-[clamp(2.5rem,5vw,4rem)] md:text-[clamp(3rem,5vw,4.5rem)] lg:text-[clamp(3.5rem,4.8vw,5rem)] font-black tracking-tight leading-[0.95] particle-trail">
                <span className="block bg-gradient-to-r from-[rgb(var(--text))] via-[rgb(var(--accent))] to-[rgb(var(--text))] bg-clip-text text-transparent">
                  Mohammed Ahmad Ashifa
                </span>
              </h1>
            </motion.div>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="dynamic-blur"
            >
              <p className="text-base sm:text-lg md:text-xl text-[rgb(var(--text-secondary))] max-w-3xl leading-relaxed">
                Computer Science undergraduate building engineering-grade AI and full-stack solutions for modern systems.
                I craft intelligent products with scalable ML architecture, real-time reliability, and clean developer-first execution.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#projects" className="interactive-element">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group text-base px-7 py-4 h-auto cursor-reactive"
                >
                  <span className="flex items-center">
                    View Projects
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </a>
              <a href="/Ashifa's resume.pdf" download="Ashifa's resume.pdf" className="interactive-element">
                <Button
                  variant="outline"
                  size="lg"
                  className="group text-base px-7 py-4 h-auto border-2 hover:border-[rgb(var(--accent))] cursor-reactive"
                >
                  <span className="flex items-center">
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </span>
                </Button>
              </a>
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
                  <p className="text-xl font-semibold text-[rgb(var(--text))]">{card.value}</p>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
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
                      <h3 className="text-lg sm:text-xl font-semibold text-[rgb(var(--text))] mb-3">{item.title}</h3>
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
                        <h3 className="text-2xl font-semibold text-[rgb(var(--text))]">{experience.title}</h3>
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
                      <h3 className="text-2xl font-semibold text-[rgb(var(--text))]">{category.title}</h3>
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
                      <h3 className="text-2xl font-semibold text-[rgb(var(--text))]">{project.title}</h3>
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
                      <h3 className="text-xl font-semibold text-[rgb(var(--text))]">{education.title}</h3>
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
                      <span className="font-medium text-[rgb(var(--text))]">{platform.label}</span>
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
            © 2026 Mohammed Ahmad Ashifa. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://github.com/ashifa-1"
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
