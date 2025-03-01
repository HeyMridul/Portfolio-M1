import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { GitHubLogoIcon, LinkedInLogoIcon, RocketIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, MailPlus, MouseIcon, Terminal } from "lucide-react";
// import Image from "next/image";
import Link from "next/link";

// import clock from "@/assets/clock.svg";
import { projectArray } from "@/assets/projects/projectsArray";
import CopyCmd from "@/components/CopyCmd";
import Card from "@/components/projects/card";
import Contact from "@/components/shared/Contact";
import Skills from "@/components/skills/Skills";
import Terminalcomp from "@/components/terminal/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";
const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Hey, I&apos;m Mridul</h1>
                    {/* <Image src={clock} alt="coffeCup" className="w-12 rotate-12 h-12 lg:w-16 lg:h-16" /> */}
                </div>
                <h1 className=" font-bold lg:text-3xl">
                    I am a <TypingAnimation />
                </h1>
                <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                I am a  <span className="  text-blue-500 uppercase font-bold">2nd-year undergraduate student</span> and aspiring <span className=" uppercase text-blue-500 font-bold tracking-wider">full stack developer</span> with a solid foundation in  <span className="  text-blue-500 uppercase font-bold">web development.</span> Proficient in  <span className="  text-blue-500 uppercase font-bold">Python ,C ,C++</span>, I am excited about the potential of <span className=" uppercase text-blue-500 font-bold tracking-wider">AI and Machine Learning</span> to drive innovation. I actively seek opportunities to learn and contribute my skills to challenging projects. 
                </p>
                <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
                    {/* <CopyCmd /> */}
                    <Link href={"https://drive.google.com/file/d/1VLJqYTke7ROZOXWl6UznyzMMv812p6iH/view?usp=drivesdk"} className="loadmorebtn text-center lg:mb-8">
                           Download Resume
                            {/* <ChevronRight /> */}
                        </Link>
                    <a href="https://github.com/HeyMridul" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://x.com/2005Mridul?t=PBebqEd1m6-ZNPOLOPGPxw&s=08" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:mridul.2005.05@gmail.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/mridul-bhardwaj-09975a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>

                <div className=" opacity-70 mt-12 justify-center flex items-center flex-col">
                    <MouseIcon size={40} className=" animate-bounce" />
                    <span className="text-sm font-medium">Scroll Down</span>
                </div>

                <Skills />

                <div className="mt-12 lg:mt-28">
                    <div className="own</span>flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Terminal
                    </div>
                    <Terminalcomp />
                </div>

                {/* projects */}
                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Projects
                    </div>

                    <div className="flex gap-8 w-full justify-center items-center pl-4 pr-4 flex-col pb-7 md:pb-0">
                        <div className="mt-6 relative place-items-center grid grid-cols-1 md:grid-cols-2 gap-8">
                            {projectArray
                                .filter((_, index) => index === 0 || index === 5)
                                .map((item, index) => (
                                    <Card item={item} index={index} key={index} />
                                ))}
                        </div>
                        <Link href={"/projects"} className="loadmorebtn text-center lg:mb-8">
                            Load More
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
                <Contact />
            </div>
        </section>
    );
};

export default page;
