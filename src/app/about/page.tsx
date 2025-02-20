import React from "react";
export function generateMetadata() {
    return {
        title: "About - Mridul",
        description: "Hi. I'm Mridul Bhardwaj, a self-taught python developer from India. I'm a student currently pursuing my bachelors of technology in computer science. I love automation: building software that solves real world problems, usually with the help of AI/ML, is something that I really enjoy. I also am an full stack developer. My everyday tech stack includes Python, DSA, devOps, Git, docker... ",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutmemoji from "@/assets/about/confused-memoji.png";
const AboutPage = () => {
    return (
        <section className=" p-4 w-full lg:max-w-[50%] lg:m-auto">
            <div className="flex flex-col gap-4">
                <h1 className=" text-3xl lg:text-5xl font-bold tracking-wide mt-7">
                    Hi. I&apos;m{" "}
                    <a href="https://x.com/2005Mridul?t=PBebqEd1m6-ZNPOLOPGPxw&s=08" rel="noopener noreferrer" target="_blank" className=" text-balance text-blue-500">
                        Mridul{" "}
                    </a>
                    ✨
                </h1>
                <Image src={aboutmemoji} alt="confused-memoji" height={160} width={160}></Image>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Info />
                    Short Bio
                </h2>
                <p className="text-md lg:text-2xl flex flex-col gap-2 whitespace-break-spaces font-normal">
                    <span>
                        Hi there!✨ I&apos;m Mridul (Maddie) Bhardwaj, a self-taught python developer from India. I&apos;m a student currently pursuing my bachelors of technology in <span className=" font-bold">computer science</span>. I love automation: building software that solves real world problems, usually with the help of AI/ML, is something that I really enjoy. I am also an {" "}
                        <a href="https://github.com/HeyMridul" target="_blank" rel="noopener noreferrer" className=" font-bold text-green-500">
                            full stack developer
                        </a>
                        .
                    </span>

                    <span>
                        My everyday tech stack includes <span className="font-bold">Python, DSA, devOps, Git, Docker... </span>
                    </span>
                    <span>
                        My Operating System of choice are{" "}
                        <a href="https://www.apple.com/in/macos/macos-sequoia/ " target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold uppercase">
                            Mac Os and Linux (Ubuntu/mandriva/Kali)
                        </a>{" "}
                        and{" "}
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" className=" text-lg text-blue-500 font-bold uppercase">
                            VSCode
                        </a>{" "}
                        for IDE.
                    </span>
                    <span>
                        I am a blogger. I have two blogs, about{" "}
                        <Link href={"/blogs"} className=" font-bold capitalize text-lg lg:text-3xl">
                            Open Science and Docker as a DevOps technology
                        </Link>
                    </span>
                    <span>
                        If you feel interest in what I do, drop a visit to my{" "}
                        <Link href={"/projects"} className=" font-bold capitalize text-lg lg:text-3xl">
                            projects
                        </Link>
                    </span>
                </p>
                <div className="flex justify-center flex-wrap gap-8 items-center mt-5 mb-5">
                    <Link href={"/#contact"} className="loadmorebtn flex justify-center items-center">
                        Leave A Message
                    </Link>
                    <Link href={"/projects"} className="loadmorebtn flex justify-center items-center">
                        Visit Projects
                    </Link>
                </div>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Zap />
                    Lets Connect
                </h2>
                <div className="flex gap-2 flex-wrap mt-2 mb-2 items-center">
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
                <p className=" text-md lg:text-2xl whitespace-break-spaces font-normal">
                    I&apos;m excited to connect with others via email (
                    <a href="mailto:mridul.2005.05@gmail.com?body=Hello" rel="noopener noreferrer" target="_blank" className=" text-blue-500 italic font-bold">
                        mridul.2005.05@gmail.com
                    </a>
                    ) and{" "}
                    <a href="t.me/Mridul_Bhardwaj" rel="noopener noreferrer" target="_blank" className="font-bold italic text-blue-500">
                        Telegram
                    </a>{" "}
                    to chat about projects and ideas I&apos;m taking on freelance projects and I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it&apos;s a good fit.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
