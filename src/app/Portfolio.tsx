"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronRight,
  Menu,
  X,
  PhoneCall,
  Download,
} from "lucide-react";
import Image from "next/image";
import ProfileImage from "../../public/Yajat_pic.jpg";
import logo from "./yj3.png";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const workExperience = [
  {
    title: "Associate Software Engineer",
    company: "Webkorps Services India Pvt Ltd",
    date: "October 2022 - Present",
    points: [
      "Over 2 years of experience in software development with a strong focus on web technologies",
      "Developed and maintained scalable web applications using ReactJS and NestJS enhancing user experience",
      "Created and managed responsive UI components with HTML, SCSS, and Tailwind for seamless usability",
      "Worked extensively on GraphQL and REST APIs for efficient data exchange and integration",
      "Collaborated closely with cross-functional Agile teams, contributing to a 95% on-time project delivery rate",
    ],
  },
];

const projects = [
  {
    title: "Asset Management Tool",
    description:
      "Cloud-based asset management tool for tracking, auditing, and managing assets with customizable workflows and mobile support.",
    tech: ["ReactJS", "NestJS", "AWS", "Tailwind"],
    links: {
      github: "#",
      external: "https://www.assetpanda.com/",
    },
  },
  {
    title: "Job Matching Platform",
    description:
      "Job recruitment platform that connects job seekers with employers, streamlining the hiring process through advanced matching algorithms and user-friendly interfaces.",
    tech: ["ReactJS", "Tailwind"],
    links: {
      github: "#",
      external: "https://www.scoutr.team/",
    },
  },
  {
    title: "E-Commerce Platform",
    description:
      "Global retailer specializing in athletic footwear, apparel, and accessories. Managed front-end development and component migration.",
    tech: ["ReactJS", "Redux", "SCSS", "Node.js", "Jest"],
    links: {
      github: "#",
      external: "https://www.footlocker.co.in/",
    },
  },
];

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");

      if (window.scrollY > lastScrollY) {
        setIsVisible(false); // Scrolling Down
        navbar?.classList.remove("shadow-xl");
      } else {
        setIsVisible(true); // Scrolling Up
        navbar?.classList.add("shadow-xl");
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleCall = () => {
    window.location.href = `tel:${"+91 79878-83945"}`;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="bg-[#0a192f] text-[#8892b0] min-h-screen">
      {/* Navigation */}
      <nav
        className={`fixed w-full px-6 py-4 bg-[#0a192f]/90 backdrop-blur-sm z-50 transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#hero-section" className="text-[#64ffda] font-mono">
            <Image
              src={logo}
              alt="Profile"
              width={50}
              height={44}
              className="rounded  transition-all"
            />
          </a>
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <X
                className="text-[#64ffda] w-8 h-8 cursor-pointer"
                onClick={toggleMenu}
              />
            ) : (
              <Menu
                className="text-[#64ffda] w-8 h-8 cursor-pointer"
                onClick={toggleMenu}
              />
            )}
          </div>
          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row md:space-x-8 md:mt-0 mt-4 md:pb-0 pb-4 absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a192f] md:bg-transparent`}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-sm font-mono hover:text-[#64ffda] transition-colors px-6 py-2 md:px-0"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                onClick={() => setIsMenuOpen(false)} // Close on selection
              >
                <span className="text-[#64ffda]">{i + 1}.</span> {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
      <main className="max-w-6xl mx-auto px-6  pt-12">
        <div className="fixed left-8 bottom-16 hidden lg:flex flex-col items-center gap-6">
          <a
            href="https://github.com/YajatJaiswal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yajat-jaiswal-57266b202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
          <a href="mailto:yajat.jswl@gmail.com">
            <Mail
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
          <div className="w-[2px] h-20 bg-[#8892b0]" />
        </div>

        {/* Email */}
        <div className="fixed right-8 bottom-16 hidden lg:flex flex-col items-center gap-6">
          <a
            href="mailto:yajat.jswl@gmail.com"
            className="writing-vertical-rl text-[#8892b0] hover:text-[#64ffda] transition"
          >
            yajat.jswl@gmail.com
          </a>
          <div className="w-[2px] h-20 bg-[#8892b0]" />
        </div>

        {/* Hero Section */}
        <motion.section
          id="hero-section"
          className="min-h-screen flex flex-col justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[#64ffda] mb-5">Hi, my name is</div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#ccd6f6] mb-4">
            Yajat Jaiswal.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-[#8892b0] mb-6">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-lg mb-12">
            I'm a software engineer specializing in building exceptional digital
            experiences. Currently, I'm focused on building accessible,
            human-centered products at Webkorps Services.
          </p>
          <div className="flex items-center justify-center lg:justify-normal">
            <a
              href="/Yajat-Jaiswal-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center border lg:w-[10%] border-[#64ffda] text-[#64ffda] px-7 py-4 rounded-tl rounded-bl  hover:bg-[#64ffda]/10 transition-colors"
            >
              Resume
            </a>
            <a
              href="/Yajat-Jaiswal-CV.pdf"
              download="Yajat_Jaiswal_Resume"
              className="flex items-center justify-center border border-[#64ffda] text-[#64ffda] p-4 rounded-tr rounded-br hover:bg-[#64ffda]/10 transition-colors"
            >
              <Download />
            </a>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-24">
          <h2 className="flex items-center text-2xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono mr-2">01.</span>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="mb-4">
                Hello! I'm Yajat, a software engineer with over 2 years of
                experience in developing and maintaining dynamic web
                applications. I enjoy creating things that live on the internet,
                whether that be websites, applications, or anything in between.
              </p>
              <p className="mb-4">
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 font-mono text-sm">
                {[
                  "JavaScript",
                  "TypeScript",
                  "React",
                  "Node.js",
                  "NestJS",
                  "AWS",
                ].map((tech) => (
                  <li key={tech} className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-[#64ffda] mr-2" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative group">
              <div className="relative z-10">
                <Image
                  src={ProfileImage}
                  alt="Profile"
                  width={300}
                  height={300}
                  className="rounded grayscale hover:grayscale-0 transition-all"
                />
                <div className="absolute w-[300px] inset-0 border-2 border-[#64ffda] rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24">
          <h2 className="flex items-center text-2xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono mr-2">02.</span>
            Where I've Worked
          </h2>
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-[#ccd6f6] mb-2">
                {job.title}{" "}
                <span className="text-[#64ffda]">@ {job.company}</span>
              </h3>
              <p className="font-mono text-sm mb-4">{job.date}</p>
              <ul className="space-y-4">
                {job.points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <ChevronRight className="w-4 h-4 text-[#64ffda] mr-2 mt-1 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <h2 className="flex items-center text-2xl font-bold text-[#ccd6f6] mb-8">
            <span className="text-[#64ffda] font-mono mr-2">03.</span>
            Some Things I've Worked on
          </h2>
          <div className="space-y-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="relative md:grid md:grid-cols-12 items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div
                  className={`md:col-span-10 ${
                    index % 2 === 0 ? "md:col-start-1 md:row-start-1" : ""
                  }`}
                >
                  <p className="font-mono text-[#64ffda] text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-[#ccd6f6] mb-4">
                    {project.title}
                  </h3>
                  <div className="bg-[#112240] p-6 rounded-lg mb-4">
                    <p>{project.description}</p>
                  </div>
                  <ul className="flex flex-wrap gap-3 font-mono text-sm mb-4">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="flex">
                    <a
                      href={project.links.external}
                      target="_blank"
                      className="text-[#ccd6f6] hover:text-[#64ffda]"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-col justify-between lg:items-start items-center gap-8 py-24"
        >
          <h2 className="text-2xl font-bold text-[#ccd6f6] ">
            <span className="text-[#64ffda] font-mono mr-2">04.</span>
            What's Next?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] ">
            Get In Touch
          </h3>
          <p className="max-w-md ">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to
            you!
          </p>
          <a
            href="mailto:yajat.jswl@gmail.com"
            className="inline-block border border-[#64ffda] text-[#64ffda] px-7 py-4 rounded hover:bg-[#64ffda]/10 transition-colors"
          >
            Say Hello
          </a>

          {/* Number of Author */}
          {/* <div className="pt-4 flex flex-col gap-2">
            <span className="number">+91 79878-83945</span>

            <div
              className="flex items-center justify-center gap-4 border border-[#64ffda] text-[#64ffda] py-4 rounded hover:bg-[#64ffda]/10 transition-colors"
              onClick={handleCall}
            >
              <PhoneCall width={16} height={16} />
              <span className="text">Call Now</span>
            </div>
          </div> */}
        </section>
      </main>
      {/* Footer */}
      <footer className="py-6 text-center font-mono text-sm flex flex-col gap-4">
        <div className="lg:hidden flex items-center justify-center gap-4">
          <a
            href="https://github.com/YajatJaiswal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yajat-jaiswal-57266b202/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
          <a href="mailto:yajat.jswl@gmail.com">
            <Mail
              className="text-[#8892b0] hover:text-[#64ffda] transition"
              size={24}
            />
          </a>
        </div>
        <p>Built by Yajat Jaiswal</p>
      </footer>
    </div>
  );
}
