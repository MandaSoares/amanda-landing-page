import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaInstagram, FaMedium } from "react-icons/fa";
import {
  SiJavascript, SiPython, SiCplusplus, SiPhp, SiHtml5, SiCss3, SiReact,
  SiNodedotjs, SiBootstrap, SiMysql, SiPostgresql, SiMongodb, SiGit,
  SiDocker, SiLinux, SiFigma, SiAmazons3
} from "react-icons/si";
import amandaPhoto from "./assets/amanda.jpg";
import about1 from "./assets/fotoimprensa.jpg";
import about2 from "./assets/fotoequipe.jpg";
import about3 from "./assets/fotosemear.jpg";
import about4 from "./assets/fotoimprensa2.jpg";
import conscientistasImg from "./assets/conscientistas.jpg";
import frmeninasImg from "./assets/frmeninas.jpg";
import ifImg from "./assets/if.jpg";
import inspaceImg from "./assets/inspace.jpg";
import jovemsementeImg from "./assets/jovemsemente.jpg";
import lalaImg from "./assets/lala.jpg";
import sempararImg from "./assets/semparar.jpg";
import tcrpImg from "./assets/tcrp.jpg";
import twpImg from "./assets/twp.jpg";
import maiaImg from "./assets/maia.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

const bounceIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function App() {
  return (
    <div className="relative min-h-screen text-white font-sans overflow-x-hidden bg-gradient-to-r from-[#2d3c4a] via-[#4a3e3d] to-[#966655] animate-gradient-x">
      {/* ===== Global Styles ===== */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease infinite;
        }
        .cursor {
          display: inline-block;
          width: 10px;
          height: 18px;
          background-color: #fff;
          margin-left: 4px;
          animation: blink 1s steps(2, start) infinite;
        }
        @keyframes blink {
          to { visibility: hidden; }
        }
      `}</style>

      {/* ===== Hero Section ===== */}
      <section className="px-8 pt-32 pb-16">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="flex flex-col max-w-3xl">
            <h1 className="text-5xl font-extrabold mb-2 text-white">Olá, I'm Amanda!</h1>
            <p className="text-xl mb-6 text-[#d1d5db]">Aspiring Engineer, Researcher and Developer</p>
            <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-[#444]">
              <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-start space-x-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span className="text-xs text-white ml-4">bash</span>
              </div>
              <div className="px-6 py-4 font-mono text-sm">
                <p><span className="text-green-400">user@amanda</span>:<span className="text-blue-300">~</span>$ whoami</p>
                <p className="ml-4 text-white">Engineer focused on innovation, social impact and smart technologies</p>
                <p className="mt-4"><span className="text-green-400">user@amanda</span>:<span className="text-blue-300">~</span>$ ls skills</p>
                <p className="ml-4 text-white">Problem-solver Computer-Technician Young-Scientist Fullstack-Developer</p>
                <p className="mt-4"><span className="text-green-400">user@amanda</span>:<span className="text-blue-300">~</span>$<span className="cursor"></span></p>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              <button className="bg-white text-[#3d5a80] font-semibold px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">Contato</button>
              <button className="border-2 border-white text-white font-semibold px-6 py-2 rounded-lg hover:bg-white hover:text-[#3d5a80] transition">Ver Projetos</button>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="w-64 h-64 rounded-full bg-[#5f5fc4] border-4 border-white shadow-xl overflow-hidden">
              <img src={amandaPhoto} alt="Amanda" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== About Me Section ===== */}
      <section className="px-6 py-20 bg-[#f5e7d3] text-[#2d3c4a] font-serif">
        <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:flex-row items-start">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-extrabold mb-8 text-center lg:text-left text-[#3b3b3b]">About Me</h2>
            <motion.p
              className="text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              My name is Amanda Soares and I believe that we can be agents of transformation in science and technology. I want to encourage, support, and empower girls in STEM (Science, Technology, Engineering, and Mathematics), promoting a fairer, more diverse, and innovative society.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              I am an enthusiast, an enabler, and an agent of transformation. I believe in the power of science and technology to transform the world and people. I have experience in creating and leading projects that positively impact the lives of girls, awakening their interest and confidence in STEM. My purpose is to apply my knowledge and skills to develop innovative and creative solutions for various sectors.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              One of my projects is ConsCientistas, which I co-founded with other incredible women. It has directly impacted more than 1200 girls and has been supported by organizations like Força Meninas. We inspire and empower girls to become interested and involved in STEM through talks, mentoring and conversation circles. Another project I led was Sem Parar, where I taught girls how to hunt asteroids. It’s a free initiative aimed at awakening girls' interest and passion for the exact and biological sciences. Leading the group, I showed them how to use tools and techniques to identify and analyze celestial objects, with research and activities that bring both knowledge and fun to the students.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              In addition to wanting to continue helping the population access quality information and education in STEM, I have a strong desire to work in the field of astronautics. My goal is to contribute to technological innovations that can impact the space sector. I see this journey as an opportunity not only to achieve a great dream but also to apply my skills to projects that drive scientific and technological progress. I want to participate in innovations that expand human possibilities in space while inspiring future generations to pursue careers in STEM.
            </motion.p>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              My passions guide me both in my personal and professional life. They bring me purpose and happiness, while also teaching me fundamental values such as respect, dedication, humility, and gratitude. My goal is to help create an environment where more people can develop their potential, learn, and express themselves, contributing to a fairer, more inclusive, and innovative society. I want to be actively involved in building the changes I wish to see in the world.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 flex-1 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bounceIn}
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={about1}
              alt="About Amanda 1"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={about2}
              alt="About Amanda 2"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={about3}
              alt="About Amanda 3"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={about4}
              alt="About Amanda 4"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </section>
      
       {/* ===== Some of My Experiences Section ===== */}
       <section className="px-6 py-24 bg-[#966655] text-[#1f2937]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-center mb-16 text-[#ffffff]"
          >
            Some of my experiences
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[{
              title: "Co-founder of ConsCientistas",
              text: "Empowered over 5K girls through talks and workshops. Supported by organizations like Força Meninas, inspiring confidence and interest in STEM fields.",
              href: "https://forcameninas.com.br/conscientistas",
              img: conscientistasImg,
              border: "#5e4630"
            }, {
              title: "Participated in Força Meninas Event",
              text: "Part of the Força Meninas community focused on empowering girls to believe in their power to change the world.",
              href: "https://forcameninas.com.br",
              img: frmeninasImg,
              border: "#944c2e"
            }, {
              title: "Student at IFSP - Bragança Paulista",
              text: "Studying engineering with a passion for creating inclusive and transformative technologies.",
              href: "https://bragancapaulista.ifsp.edu.br/",
              img: ifImg,
              border: "#556b2f"
            }, {
              title: "InSpace Member",
              text: "Engaged with space education initiatives and aspiring to contribute to astronautics.",
              href: "https://www.instagram.com/inspace.project/",
              img: inspaceImg,
              border: "#8b5e3c"
            }, {
              title: "Volunteer at Instituto Semear",
              text: "Supporting and mentoring students for academic and personal success through youth empowerment programs.",
              href: "https://www.institutosemear.org/",
              img: jovemsementeImg,
              border: "#9b4f2c"
            }, {
              title: "Participant in LALA Program",
              text: "Took part in the Latin American Leadership Academy program with a focus on leadership, social impact, and collaboration.",
              href: "https://www.latinamericanleadershipacademy.org/",
              img: lalaImg,
              border: "#3e4d3c"
            }, {
              title: "Leader of Sem Parar",
              text: "Led an initiative that teaches girls to hunt asteroids and explore science through fun and educational research.",
              href: "https://forcameninas.com.br/semparar",
              img: sempararImg,
              border: "#6e453b"
            }, {
              title: "The Climate Reality Project",
              text: "Trained by The Climate Reality Project to advocate for climate action and sustainability.",
              href: "https://www.climaterealityproject.org/",
              img: tcrpImg,
              border: "#1f2937"
            }, {
              title: "The Wellbeing Project",
              text: "Involved in the Wellbeing Project to understand how inner wellbeing fuels social change.",
              href: "https://wellbeing-project.org/",
              img: twpImg,
              border: "#206c62"
            }, {
              title: "Maia",
              text: "Involved in the Wellbeing Project to understand how inner wellbeing fuels social change.",
              href: "https://wellbeing-project.org/",
              img: maiaImg,
              border: "#206c62"
              
            }].map((exp, index) => (
              <motion.a
                key={index}
                href={exp.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-white rounded-2xl p-6 shadow-xl border-l-8 hover:shadow-2xl transition duration-300`}
                style={{ borderColor: exp.border }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={exp.img} alt={exp.title} className="rounded-xl mb-4 object-cover h-48 w-full" />
                <h3 className="text-2xl font-semibold mb-2">{exp.title}</h3>
                <p className="text-base text-gray-700">{exp.text}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}