"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Ecommerce Admin",
    description: "Full-stack administrative web application for an e-commerce platform.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yohannes-07/e-commerce-admin",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "CDC ETL Pipeline (GCP)",
    description: "Engineered a real-time Change Data Capture pipeline using Apache Beam, Dataflow, and BigQuery.",
    image: "/images/projects/2.png",
    tag: ["All", "Data"],
    gitUrl: "#", 
    previewUrl: "https://aladia.io/",
  },
  {
    id: 3,
    title: "Legal RAG Chatbot", 
    description: "Built a legal document RAG chatbot for Spanish police officers for intelligent search.", 
    image: "/images/projects/3.png", 
    tag: ["All", "AI"],
    gitUrl: "#", 
    previewUrl: "https://chatpol.com/",
  },
  {
    id: 4,
    title: "Amharic Text Summarization",
    description: "Fine-tuned MT5 model for Amharic extractive summarization, achieving a Rouge score of 0.75.",
    image: "/images/projects/4.png",
    tag: ["All", "AI"],
    gitUrl: "https://huggingface.co/yohannesahunm/mt5-small-Amharic-text-summaization",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Multi-Agent Chatbot",
    description: "A web-searching, reasoning chatbot built with LangGraph, Groq/Gemini LLMs, and a FastAPI backend.",
    image: "/images/projects/5.png",
    tag: ["All", "AI"],
    gitUrl: "https://github.com/yohannes-07/chatbot",
    previewUrl: "https://chatbot-73h5.vercel.app/",
  },
  {
    id: 6,
    title: "Umoja Airways Multi-Agent System", 
    description: "Created a LangGraph system for bookings, flight-status, and travel support.", 
    image: "/images/projects/6.png", 
    tag: ["All", "AI"],
    gitUrl: "#", 
    previewUrl: "https://www.umojaairways.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="AI/Data"
          isSelected={tag === "AI" || tag === "Data"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
