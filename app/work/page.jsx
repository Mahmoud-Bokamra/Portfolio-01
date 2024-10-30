"use client"
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: '01',
    category: 'RF Engineer',
    title: 'SSV sites',
    description: 'Single Site Verification (SSV) validates the performance of a network site post-installation or upgrades. Work with ZTE and Huawei.',
    stack: [
      { name: 'TEMS' }, { name: 'Power-BI' }, { name: 'PHU' },
    ],
    image: '/assets/work/ssv-1.png',
    live: '',
    github: '',
  },
  {
    num: '02',
    category: 'RF Engineer',
    title: 'Cluster Optimization',
    description: 'Cluster Optimization improves the performance and efficiency of a group of interconnected network sites. ZTE and Ericson.',
    stack: [
      { name: 'TEMS' }, { name: 'Power-BI' }, { name: 'NetNumen' },{ name: 'PHU' },
    ],
    image: '/assets/work/cluster-1.png',
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'App\'s Developer',
    title: 'Shop-System',
    description: 'Using Flutter as frontend and Python-DRF in Backend as a server for markets systems',
    stack: [
      { name: 'Flutter' }, { name: 'Python' }, { name: 'Django' },{ name: 'PostgreSQL' },
    ],
    image: '/assets/work/shop-s1.png',
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'System Adminstrator',
    title: 'Bank Server',
    description: 'RedHat with orcle database to apply the systme for Al-jumhoria Bank',
    stack: [
      { name: 'RedHat' }, { name: 'Python' }, { name: 'ODI' },
    ],
    image: '/assets/work/server-1.png',
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'Data Analysis',
    title: '4G converage',
    description: 'Analysis data for 4G coverage in a Tripoli town',
    stack: [
      { name: 'Power-BI' }, { name: 'Pandas' }, { name: 'numpy' },{ name: 'TEMS' },
    ],
    image: '/assets/work/bi-1.png',
    live: '',
    github: '',
  },
]


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1, transition: {
          delay: 2.2, duration: 0.2, ease: "easeIn",
        }
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">

        {projects.map((project,index)=>{
          return (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col xl:flex-row xl:gap-[30px]" key={index}>
                        {/* titel */}
                        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between xl:order-none">
              <div className="flex flex-col gap-[30px] h-[50%]">
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                <p className="text-white/60 text-justify">{project.description}</p>
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex items-center gap-4">
                  {/* live buttonn */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl"></BsArrowUpRight>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                  {/* github */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl"></BsGithub>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Page</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
                        </div>
              
                        {/* Photo */}
                        <div className="xl:w-[75%] xl:h-[75%] rounded-2xl border-4 border-accent overflow-hidden">
              <Image
                src={project.image}
                alt="Sample Image"
                width={750} // Use actual width of the image
                height={750} // Use actual height of the image
                className="rounded-md w-full h-full object-cover"
              />
                        </div>
            </div>
            <div className="my-4 mb-10 border-t border-gray-300" />
        </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default Work
