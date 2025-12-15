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
        <li>FastAPI, Django</li>
        <li>LLMs, OpenAI</li>
        <li>Langchain, RAG, Agents</li>
        <li>Generative AI</li></div>
        <div><li>Apache Beam, Dataflow</li>
        <li>SQL, Postgres, ETL</li>
        <li>Apache Spark</li>
        <li>Cloud(AWS, GCP)</li>
        <li>Power BI</li></div>
        <div><li>JavaScript</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Express.js</li>
        <li>Nest.js</li></div>
        
       
    
      
      
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
           Data and AI focused engineer from Addis Ababa University with strong experience in backend systems data engineering and applied AI. At Artekia I built LLM powered tools chatbots and multi agent systems for document workflows legal RAG and travel support. At Aladia I engineered a real time CDC data pipeline on GCP using MongoDB BigQuery Dataflow and Apache Beam. With StartupAgile I developed FastAPI and AWS services LLM based APIs and a Discord customer support bot for crypto traders. Earlier at Addis Home Finder I built a media monitoring and ad detection system using audio fingerprinting. I enjoy building reliable data driven systems and working closely with technical teams.
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
