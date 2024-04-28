import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
import Socials from "./Socials";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, Preacher }: any) => {
    return (
        <div className="bg-white rounded-[10px]">
            <div
                className="h-52 bg-blac md:h-72 rounded-[10px] relative group"               
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
                    <div className="overla items-center justify-center absolute -bottom-5 flex gap-4 left-28 right- w-40 bg-ecwaorang  ">
                        <Link
                            href={`${previewUrl}`}
                            className="h-10 w-10 mr- bg-ecwaorang  border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                        >
                            <a target="_blank" className="w-12 h-12 bg-ecwaorange rounded-[5px]">
                                <Socials InLink={""}/>
                            </a>
                            {/* <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" /> */}
                        </Link>
                       
                    </div>
                </div>
                
            </div>
            <div className="text-white rounded-b-[10px] mt-10 py-6 px-6">
                <h4 className="leading-[32px] max-w-[17rem] mb-5">{title}</h4>
                <p className="text-[#ADB7BE]">Sermon By: <span>{Preacher}</span></p>
                <p className="text-[#ADB7BE] mt-2 mb-8"> Categories:  <span>God,</span> <span>Love</span></p>

                <Button title="Read More" link={gitUrl} type={"button"}/>
            </div>
        </div>
    );
};

export default ProjectCard;