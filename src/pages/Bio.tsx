import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard.tsx";
import { motion } from "framer-motion";
import { BsGithub, BsSearch } from "react-icons/bs";
import { Helmet } from "react-helmet";

const Bio = () => {
  return (
    <>
      <Helmet>
        <title>Bio | Kenth Saya-ang Portfolio</title>
      </Helmet>
      <main className="flex flex-col min-h-[90vh] py-8 container mx-auto">
        <div className="flex flex-col gap-6">
          <h1>Bio</h1>

          <section>
            <h2>Tech Stack</h2>
            <div>Web Dev List of web tech here</div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Bio;
