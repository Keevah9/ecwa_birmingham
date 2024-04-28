"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Button from "./Button";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";

export const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Potography Portfolio Website",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "Project 3 description",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "Food Ordering Application",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "React Firebase Template",
        description: "Authentication and CRUD operations",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Roadmap",
        description: "Project 5 description",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];
interface ProjectProps{
    data: any
}
const ProjectsSection = (props:ProjectProps) => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag:any) => {
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
        <div id="projects" className="overflow-splide max-container">
            <h2 className="text-center ">
                Our Sermons
            </h2>
            <div className=" flex mb-6 flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="God"
                    isSelected={tag === "God"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Love"
                    isSelected={tag === "Love"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Giving"
                    isSelected={tag === "Giving"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Praise"
                    isSelected={tag === "Praise"}
                />
            </div>
            <ul ref={ref} className="">
                <Splide
                    className="splide"
                    hasTrack={false}
                    options={{
                        //@ts-ignore
                        rewind: "true",
                        perPage: 3,
                        perMove: 1,
                        pagination: false,
                        arrows: false,
                        lazyLoad: "nearby",
                        gap: "1.5rem",
                        snap: true,
                        speed: 1000,
                        easing: "linear",
                        interval: 5000,
                        type: "loop",
                        autoplay: true,
                        breakpoints: {
                            "1024": {
                                arrows: false,
                                perPage: 2,
                            },
                            "920": {
                                arrows: false,
                                perPage: 2,
                            },
                            "540": {
                                arrows: false,
                                perPage: 1,
                            },
                        },
                    }}
                >
                    <SplideTrack className="splide__track">

                        {props.data.map((project: any, index: number) => (

                            <SplideSlide
                                key={project.id}
                                className="splide__splide"
                            >
                            <motion.li
                                key={index}
                                variants={cardVariants}
                                initial="initial"
                                animate={isInView ? "animate" : "initial"}
                                transition={{ duration: 0.3, delay: index * 0.4 }}
                            >
                                <ProjectCard
                                    Preacher={project.attributes.Sermons.Preacher}
                                    
                                    title={project.attributes.Sermons.SectionTitle || project.title}
                                    description={project.description}
                                    imgUrl={project?.attributes.Sermons.Image?.data?.attributes?.url || project.image}
                                    gitUrl={`/sermons/${project.attributes.Sermons.LinkUrl}`}
                                    previewUrl={project.attributes.Sermons.Youtube || project.url}
                                />
                            </motion.li>
                            </SplideSlide>
                        ))}


                        


                    
                        



                    </SplideTrack>
                </Splide>
                
            </ul>
        </div>
    );
};

export default ProjectsSection;