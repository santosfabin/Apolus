import { motion } from "motion/react";
import {
  Code2,
  Layout,
  Cpu,
  Palette,
  Zap,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Smartphone,
  Globe,
  Instagram
} from "lucide-react";
import { useState, useEffect, FormEvent } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Portfólio", href: "#portfolio" },
    { name: "Processo", href: "#processo" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-apolus-black/80 backdrop-blur-lg py-4 border-bottom border-white/5" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-40 h-20 rounded-lg flex items-center justify-center">
            {/* Logo e Mascote */}
            <img src="\img\apolus\apolus_name.png" alt="Girl in a jacket" width="700" height="900" />
            <Zap className="text-apolus-black fill-apolus-black" size={24} />
          </div>

        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-apolus-green transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" className="btn-primary py-2 px-6 text-sm">
            Orçamento
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-apolus-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-white/70 hover:text-apolus-green"
            >
              {link.name}
            </a>
          ))}
          <a href="#contato" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary text-center">
            Orçamento
          </a>
        </motion.div>
      )}
    </nav>
  );
};



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">

      {/* BACKGROUND BLURS PROFUNDIDADE */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-apolus-purple/20 blur-[160px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-apolus-green/10 blur-[160px] rounded-full" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-apolus-purple/10 blur-[180px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 lg:gap-12 items-center relative z-10">

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-apolus-purple/20 border border-apolus-purple/30 text-apolus-purple text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-apolus-purple rounded-full animate-pulse" />
            Freelance Squad
          </div>

          <h1 className="text-5xl lg:text-7xl font-display font-bold leading-[1.05] mb-6">
            Transformamos ideias em{" "}
            <span className="relative inline-block">
              <img
                src="/img/font/e_font.png"
                alt="experiências"
                className="inline-block h-[65px] lg:h-[95px] drop-shadow-2xl"
              />
              <span className="absolute inset-0 bg-apolus-yellow/7 blur-xl -z-10 rounded-full" />
            </span>{" "}
            digitais.
          </h1>

          <p className="text-lg text-white/60 mb-8 max-w-lg">
            Somos a Apolus, um estúdio digital independente que cria sites modernos,
            rápidos e estrategicamente planejados para destacar sua marca e gerar
            oportunidades reais no ambiente online.
          </p>

          <div className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto md:mx-0">
            <a href="#contato" className="btn-primary flex items-center justify-center gap-2 w-full whitespace-nowrap">
              Solicitar Orçamento <ArrowRight size={20} />
            </a>
            <a href="#portfolio" className="btn-secondary flex items-center justify-center w-full">
              Ver Projetos
            </a>
          </div>
        </motion.div>

        {/* UNIVERSO + MASCOTE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-md aspect-square">

            {/* PLANETA GIRANDO ATRÁS */}
            <motion.img
              src="/img/apolus/internet_trans.png"
              className="absolute top-3 left-[8px] w-full h-full object-contain z-0 opacity-50  drop-shadow-[0_0_20px_purple]"
              animate={{
                rotate: -360
              }}
              style={{ scale: 0.95 }}
              transition={{
                duration: 50,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* ELEMENTOS DO UNIVERSO */}
            <svg
              viewBox="0 0 500 500"
              className="absolute -inset-9 w-[120%] h-[120%] z-5"
            >

              {/* Anel orbital */}
              <motion.circle
                cx="250"
                cy="250"
                r="240"
                fill="none"
                stroke="#236506"
                strokeOpacity="0.3"
                strokeWidth="2"
                strokeDasharray="8 10"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ originX: "50%", originY: "50%" }}
              />

              {/* estrelas */}
              <motion.circle
                cx="250"
                cy="30"
                r="6"
                fill="#FFC300"
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                style={{ originX: "250px", originY: "250px" }}
              />
              {/* estrelas */}
              <motion.circle
                cx="250"
                cy="30"
                r="6"
                fill="#FFC300"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                style={{ originX: "-250px", originY: "-250px" }}
              />


            </svg>

            {/* CHÃO DE LUZ */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-72 h-24 bg-apolus-green/30 blur-2xl rounded-full opacity-60" />

            {/* MASCOTE */}
            <motion.img
              src="/img/apolus/apolus_trans.png"
              className="absolute inset-0 w-[70%] h-[70%] object-contain z-10 mx-auto my-auto"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />



            {/* GLOW FRONTAL */}
            <div className="absolute inset-0 bg-apolus-purple/20 blur-3xl -z-10 rounded-full" />

          </div>
        </motion.div>

      </div>
    </section>
  );
};

const About = () => {
  const stats = [
    { label: "Projetos Entregues", value: "50+" },
    { label: "Clientes Satisfeitos", value: "30+" },
    { label: "Anos de Experiência", value: "5+" },



  ];

  const items = [
    {
      title: "Sobre",
      text: "A Apolus é uma dupla de desenvolvedores web focada em criar experiências digitais modernas, rápidas e visualmente marcantes."
    },
    {
      title: "Objetivo",
      text: "Nosso objetivo é desenvolver sites, landing pages, interfaces e sistemas personalizados que ajudem empresas e projetos a se destacarem na internet."
    },
    {
      title: "Valores",
      text: "Trabalhamos com atenção aos detalhes, tecnologia moderna e evolução constante para entregar soluções digitais eficientes e de alta qualidade."
    }
  ];

  return (
    <section
      id="sobre"
      className="relative py-24 bg-apolus-dark/60 low-poly-bg overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">

            <img
              src="/img/font/qs_font.png"
              alt="Quem Somos"
              className="w-64 md:w-72 object-contain mx-auto md:mx-0"
            />

            <div className="space-y-6 pt-4">

              {items.map((item, index) => (
                <div key={index} className="flex items-start gap-4">

                  <div className="mt-1 p-2 rounded-xl">
                    <img
                      src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndld21zNjdxaTdyMGFodHpwcWQzbDV0dWFqcWJyaWVzd241M3Q1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RjpwS3HEFqgdALfARj/giphy.gif"
                      alt="Cristal"
                      className="w-16 h-7"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-sm text-white/60 mt-1">
                      {item.text}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* DUPLA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Kaique */}
            <div className="group relative glass-card p-6 text-center backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-apolus-green/40">

              <div className="relative mb-6">

                {/* Glow */}
                <div className="absolute inset-0 bg-apolus-green/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>


                <img
                  src="/img/devs/kaique_card.png"
                  alt="Kaique - Desenvolvedor Front-end"
                  className="relative rounded-2xl w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>

              {/*Redes Sociais - Kaique*/}
              <div className="flex gap-4 justify-center">
                <a
                  href="https://github.com/KaicolaDS"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                >
                  <Github size={20} />
                </a>

                <a
                  href="https://www.linkedin.com/in/kaique-araujo-fernandes/"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <h3 className="font-bold text-lg">Kaique Fernandes</h3>
              <p className="text-sm text-white/60 mt-1">
                Front-end
              </p>
            </div>

            {/* Fabiano */}
            <div className="group relative glass-card p-6 text-center backdrop-blur-xl border border-white/10 rounded-2xl transition-all duration-500 hover:scale-105 hover:border-apolus-purple/40">

              <div className="relative mb-6">

                <div className="absolute inset-0 bg-apolus-purple/20 blur-2xl rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>


                <img
                  src="/img/devs/fabiano_card.png"
                  alt="Nome - Desenvolvedor"
                  className="relative rounded-2xl w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition duration-500"
                />
              </div>
              {/*Redes Sociais - Fabiano*/}
              <div className="flex gap-4 justify-center">
                <a
                  href="http://github.com/santosfabin/"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/santosfabin/"
                  className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all"
                >
                  <Linkedin size={20} />
                </a>
              </div>
              <h3 className="font-bold text-lg">Fabiano Santos</h3>
              <p className="text-sm text-white/60 mt-1">
                Back-end

              </p>


            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

/* Tecnologias e Competências */
const Services = () => {
  const technologies = [
    {
      title: "Planejamento, Versionamento & Colaboração",
      stack: "Git, GitHub, Kanban e Xmind",
      desc: "Trabalhamos com planejamento estratégico e controle de versões para garantir organização, colaboração entre desenvolvedores e entregas consistentes ao longo do projeto.",
      color: "border-apolus-purple/20"
    },
    {
      title: "Design & UX/UI",
      stack: "Figma, Wireframes, Prototipagem e Axure RP",
      desc: "Planejamos cada detalhe do visual e da navegação para que seu site seja agradável, profissional e fácil de usar.",
      color: "border-apolus-green/20"
    },
    {
      title: "Frontend",
      stack: "HTML5, CSS3, React, TypeScript e Next.js",
      desc: "Criamos interfaces modernas, organizadas e fáceis de usar, garantindo que seu site seja bonito, intuitivo e funcione perfeitamente em qualquer dispositivo.",
      color: "border-apolus-green/20"
    },
    {
      title: "Backend & Runtime",
      stack: "Node.js, PHP, Laravel e Python",
      desc: "Desenvolvemos toda a parte interna do site para garantir que ele funcione com segurança, rapidez e estabilidade, mesmo com muitos acessos ao mesmo tempo. Utilizamos também automações e recursos modernos para tornar processos mais inteligentes e eficientes.",
      color: "border-apolus-yellow/20"
    },
    {
      title: "Banco de Dados",
      stack: "PostgreSQL e MySQL",
      desc: "Estruturamos e protegemos as informações do seu negócio para que tudo fique organizado, seguro e acessível sempre que necessário.",
      color: "border-apolus-purple/20"
    },
    {
      title: "Autenticação & Segurança",
      stack: "JSON Web Token (JWT)",
      desc: "Implementamos camadas de segurança para proteger dados e garantir que apenas pessoas autorizadas tenham acesso a áreas específicas do sistema.",
      color: "border-apolus-yellow/20"
    },
    {
      title: "Pagamentos & Integrações",
      stack: "Stripe, Mercado Pago e Abacate Pay",
      desc: "Integramos sistemas de pagamento e ferramentas externas para automatizar processos e facilitar a experiência dos seus clientes. Também implementamos integrações para lojas virtuais e plataformas de venda online.",
      color: "border-apolus-green/20"
    },
    {
      title: "SEO & Performance",
      stack: null,
      desc: "Otimizamos seu site para que ele carregue rápido e tenha mais chances de aparecer nos mecanismos de busca como o Google.",
      color: "border-apolus-yellow/20"
    },
    {
      title: "Contrato & Transparência",
      stack: null,
      desc: "Formalizamos todos os projetos com contrato validado por advogado, assegurando seus direitos, prazos e entregas combinadas.",
      color: "border-apolus-yellow/20"
    }
  ];

  return (
    <section id="servicos" className="py-24">
      <div className="max-w-8xl mx-auto px-14">
        {/* Título da seção "Tecnologias & Competências" */}
        <div className="text-center mb-16 flex flex-col items-center">
          <img
            src="/img/font/tc_font.png"
            alt="Tecnologias & Competências"
            className="w-104 md:w-112 object-contain"
          />

          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Utilizamos ferramentas modernas, planejamento estratégico e metodologias ágeis
            para desenvolver projetos digitais performáticos e escaláveis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }} className={`glass-card p-8 border-t-4 ${tech.color} group transition-all duration-300 hover:shadow-[0_0_20px_rgba(97,238,69,1)]`}

            >

              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZndld21zNjdxaTdyMGFodHpwcWQzbDV0dWFqcWJyaWVzd241M3Q1ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/RjpwS3HEFqgdALfARj/giphy.gif"
                  alt="plumbob gif"
                  className="w-6 h-6"
                />

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {tech.title}
                  </h3>

                  {tech.stack && (
                    <span className="block text-sm text-white/40 font-medium mt-1 transition-all duration-300 group-hover:text-apolus-green group-hover:drop-shadow-[0_0_8px_rgba(97,238,69,1)]">
                      {tech.stack}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-white/50 leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


const Portfolio = () => {
  const projects = [
    {
      title: "Vitor Araujo Advogado",
      category: "Site Institucional",
      image: "https://ldjadvocacia.com.br/wp-content/uploads/2022/11/lady-justice-law-library-concept-1-2048x1365.jpg",
      link: "#"
    },
    {
      title: "Garimpo",
      category: "Aplicação Web",
      image: "https://picsum.photos/seed/eco/800/600",
      link: "#"
    },
    {
      title: "CryptoVault App",
      category: "Mobile / Fintech",
      image: "https://picsum.photos/seed/crypto/800/600",
      link: "#"
    },
    {
      title: "Aura E-commerce",
      category: "Development",
      image: "https://picsum.photos/seed/aura/800/600",
      link: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-apolus-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <img
              src="/img/font/P_font.png"
              alt="Portfólio"
              className="w-34 md:w-54 mb-4 object-contain mx-auto md:mx-0"
            />

            <p className="text-white/60 mb-0 text-center md:text-left">Conheça alguns dos nosso projetos recentes que mostram como transformamos ideias em soluções digitais modernas e eficientes.</p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-video cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-apolus-black via-apolus-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-apolus-green text-xs font-bold uppercase tracking-widest mb-2">{project.category}</span>
                <h3 className="text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Ricardo Silva",
      role: "CEO na TechNova",
      text: "A equipe da Apolus superou todas as nossas expectativas. O sistema que desenvolveram para nossa logística reduziu custos em 20% no primeiro mês.",
      avatar: "https://picsum.photos/seed/ricardo/100/100"
    },
    {
      name: "Juliana Mendes",
      role: "Marketing na Bloom",
      text: "Nossa nova landing page ficou incrível! O design low poly trouxe uma identidade única que nossos clientes adoraram. Conversão subiu drasticamente.",
      avatar: "https://picsum.photos/seed/juliana/100/100"
    },
    {
      name: "Marcos Oliveira",
      role: "Founder da StartUp X",
      text: "Profissionalismo impecável. Cumpriram todos os prazos e deram sugestões que melhoraram muito o produto final. Recomendo fortemente!",
      avatar: "https://picsum.photos/seed/marcos/100/100"
    }
  ];
  /*
    return (
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-display font-bold text-center mb-16">O que dizem sobre nós</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={i} className="glass-card p-8 flex flex-col justify-between">
                <p className="text-white/70 italic mb-8">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full border-2 border-apolus-green" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <p className="text-xs text-white/40">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );*/
};

const Process = () => {
  const steps = [
    { title: "Imersão", desc: "Entendemos profundamente seu negócio, objetivos e público para identificar oportunidades e definir o direcionamento do projeto." },
    { title: "Proposta", desc: "Apresentamos uma proposta clara com escopo, prazos e investimento definidos, garantindo alinhamento total antes do início." },
    { title: "Design", desc: "Criamos protótipos e interfaces com foco em usabilidade, performance e uma identidade visual forte e memorável." },
    { title: "Construção", desc: "Transformamos o design em um projeto real, com código limpo, escalável e comunicação constante durante todo o processo." },
    { title: "Entrega", desc: "Realizamos testes rigorosos, publicação do projeto e oferecemos suporte contínuo para garantir estabilidade e evolução." }
  ];

  return (
    <section id="processo" className="py-24 bg-apolus-dark/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <img
            src="/img/font/np_font.png"
            alt="Nosso Processo"
            className="w-64 md:w-72 object-contain mb-4"
          />
          <p className="text-white/60 max-w-xl">
            Transparência e método em cada etapa do desenvolvimento.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-white/5 -z-10" />

          {steps.map((step, i) => (
            <div key={i} className="text-center group">
              <div className="w-16 h-16 bg-apolus-dark border border-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-apolus-green transition-colors duration-300">
                <span className="text-2xl font-display font-bold text-apolus-green">{i + 1}</span>
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <img
              src="/img/font/vc_font.png"
              alt="Vamos Conversar?"
              className="w-64 md:w-72 mb-4 object-contain mx-auto md:mx-0"
            />

            <p className="text-white/60 mb-12 text-center md:text-left">Tem um projeto em mente? Preencha o formulário ou entre em contato pelos nossos canais oficiais.</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-apolus-green/10 rounded-xl flex items-center justify-center text-apolus-green">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">WhatsApp</p>
                  <a href="https://wa.me/5511913491733" className="hover:text-apolus-green transition-colors duration-500" ><p className="font-bold">+55 (11) 91349-1733</p></a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-apolus-purple/10 rounded-xl flex items-center justify-center text-apolus-purple">
                  <Globe size={24} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                  <p className="font-bold">contato@apolus.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Nome</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-apolus-green transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-apolus-green transition-colors"
                  placeholder="seu@email.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-apolus-green transition-colors resize-none"
                  placeholder="Conte-nos sobre seu projeto"
                />
              </div>
              <button type="submit" className="btn-primary w-full">
                {isSubmitted ? "Mensagem Enviada!" : "Enviar Mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-apolus-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">

            <img src="\img\apolus\apolus_name.png" alt="Girl in a jacket" width="120" height="200" />

            <p className="text-white/40 text-sm max-w-sm">
              Transformando o complexo em simples. Sua equipe de freelancers especializada em entregar excelência digital.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3 text-sm text-white/40">
              <li><a href="#sobre" className="hover:text-apolus-green transition-colors">Sobre nós</a></li>
              <li><a href="#servicos" className="hover:text-apolus-green transition-colors">Serviços</a></li>
              <li><a href="#portfolio" className="hover:text-apolus-green transition-colors">Portfólio</a></li>
              <li><a href="#contato" className="hover:text-apolus-green transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-5">Redes Sociais</h4>

            <ul className="space-y-3 text-sm text-white/40">
              <li className="mb-1"><a >Fabiano Santos</a></li>
              <div className="flex gap-4 mb-4">
                <a href="http://github.com/santosfabin/" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all">
                  <Github size={20} />
                </a>
      
                <a href="https://www.linkedin.com/in/santosfabin/" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-purple hover:text-apolus-black transition-all">
                  <Linkedin size={20} />
                </a>
              </div>

              <li className="mb-1"><a>Kaique Araujo Fernandes</a></li>
              <div className="flex gap-4">
                <a href="https://github.com/KaicolaDS" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/kaique-araujo-fernandes/" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-apolus-green hover:text-apolus-black transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20">
          <p>© 2026 Apolus Freelance Squad. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
