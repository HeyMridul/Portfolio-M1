import React from "react";
import Image from "next/image";
export function generateMetadata() {
    return {
        title: "Blogs - Maddie",
        description: "Here are my blogs, were I try to spread open and reliable knowledge and to build simple but effective tutorials.",
        openGraph: {
            images: "https://cdn.discordapp.com/attachments/1079039236302446705/1207210027333718096/SHIVA_1.png?ex=65ded0f3&is=65cc5bf3&hm=c511a0d118dae42adfc43114877d0689863f328da2dcc78c02826d271a5cd27f&",
        },
    };
}
import Link from "next/link";

import reactmemoji from "@/assets/blogs/memoji.png";
import { blogArray } from "@/assets/blogs/blogArray";
import workscribble from "@/assets/projects/work-scribble.svg";
import Card from "@/components/projects/card";
const Blogs = () => {
    return (
        <div className=" lg:max-w-[50%] lg:m-auto min-h-max overflow-hidden ">
            <div className="flex w-full justify-between items-center pr-3 ">
                <Image src={workscribble} height={300} width={300} alt="work-scribble" priority className=" lg:mt-6" />
                <Image src={reactmemoji} height={140} width={140} alt="reaction-memoji" className=" fill-black dark:fill-white"></Image>
            </div>
            <div className="flex pl-4 pr-4 flex-col pb-7 md:pb-0">
                <div className="mt-6 grid place-items-center grid-cols-1 md:grid-cols-2 gap-8">
                    {blogArray.map((item, index) => (
                        <Card item={item} index={index} key={index} />
                    ))}
                </div>
            </div>
            <div className="flex mt-7 justify-center items-center pb-8">
                {/* <div className="flex mt-10">
                    <h1>Coming Soon</h1>
                    </div> */}
                <Link href={"/about"} className="loadmorebtn flex justify-center items-center">
                    About Me
                </Link>
            </div>
        </div>
    );
};

export default Blogs;
