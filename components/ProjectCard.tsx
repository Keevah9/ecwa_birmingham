import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Socials from "./Socials";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, Preacher }: any) => {
    return (
        <div className="bg-white shadow-md mb-2 rounded-[10px]">
            <div
                className="h-52 bg-blac  md:h-72 rounded-[10px] relative group"               
            >
                <div className="relative h-[300px] w-full"> 
                {/* <Image src={imgUrl} height={300} width={100} layout="fill"/> */}
                    {/* <iframe
                        title="Embedded Content"
                        width="100%"
                        height="315"
                        src={'https://www.youtube.com/watch?v=ZpMLLv0ZJb4'}
                       
                        allowFullScreen
                    ></iframe> */}
                    <iframe
                        title="YouTube Video"
                        width="100%"
                        height="300px"
                        src={`${previewUrl}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    
                </div>
                
            </div>
            <div className="text-white rounded-b-[10px] mt-6 py-6 px-6">
                <h4 className="leading-[32px] max-w-[17rem] mb-5">{title}</h4>
                <p className="text-[#ADB7BE]">Sermon By: <span>{Preacher}</span></p>
                <p className="text-[#ADB7BE] mt-2 mb-8"> Categories:  <span>God,</span> <span>Love</span></p>

                <Button title="Read More" link={gitUrl} type={"button"}/>
            </div>
        </div>
    );
};

export default ProjectCard;