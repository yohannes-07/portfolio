"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 flex gap-12 ">
        <div><li>Python</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li></div>
        <div><li>Nest.js</li>
        <li>Express.js</li>
        <li>NodeJs</li>
        <li>ExpressJs</li>
        <li></li>SQL</div>
        <div><li>FastAPI</li>
        <li>Django, Flask</li>
        <li>Cloud(AWS, GCP)</li>
        <li>Apache Beam, Dataflow</li>
        <li>Langchain, RAG, Agents</li></div>
        
       
    
      
      
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc space-y-4 pl-2">
        <li>Addis Ababa Institute of Technology,
          Bachelor of Science In Software
          Engineering Computing Technology
          (Artificial Intelligence Stream)
        </li>
        <li>A2SV (African to Silicon Valley)
            Data Structures and Algorithms
        </li>
        <li>A2SV (African to Silicon Valley)
            Web Development
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 space-y-2">
        <li>
          <a 
          className="hover:text-blue-500 hover:underline"
          href="https://drive.google.com/file/d/1UrYbqrnw7zps99iyFuTDZvXxN8AUGnGJ/view?usp=sharing">
            CODEMASTER coding contest
          </a>
        </li>

        <li>
          <a 
            className="hover:text-blue-500 hover:underline"
            href="https://drive.google.com/file/d/1r_Op1Tffwg70cxZY3-rtQvdhoNTtHAXv/view?usp=share_link">
              The Ethiopian Higher Education Entrance Qualification Certificate, 2021
            </a>
          </li>
        <li>

          <a 
          className="hover:text-blue-500 hover:underline"
          href="https://drive.google.com/file/d/1OmI8M57J4j94fu2R13i1oiCSTArqtgNF/view?usp=sharing">
            Ethiopian General Secondary Education Certificate, 2018
          </a>
        </li>
        <li>
          <a 
            className="hover:text-blue-500 hover:underline"
            href="https://drive.google.com/file/d/1WQvbtza9SEkoPNqgpSFca_JvrgVoBE6_/view?usp=sharing">
            Academic achievement  from Grade 9 to12 
          </a>
        </li>
        
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-16 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image alt="about image" src="/images/about_image.jpeg" className="rounded-xl" width={800} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I&apos;m a fourth-year software engineering student specializing in AI. With a strong foundation in full-stack web development and various frameworks, proficiency in managing relational and non-relational databases, and a solid grasp of Agile methodologies, data structures, algorithms, and machine learning foundations, I&apos;m passionate about crafting innovative solutions and approaching complex challenges in the ever-evolving world of technology. My goal is to make a meaningful impact by harnessing the power of software engineering and AI to shape the future.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
