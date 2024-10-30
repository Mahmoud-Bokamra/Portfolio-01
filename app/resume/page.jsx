"use client"
import { FaHtml5, FaCss3, FaJs, FaFigma, FaNodeJs ,FaNetworkWired} from 'react-icons/fa'
import { DiPython,DiLinux  } from "react-icons/di"; // Python icon
import { SiFlutter, SiPowerbi, SiTailwindcss, SiNextdotjs } from "react-icons/si"; // Flutter icon
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import { MdOutlineSettingsInputAntenna } from "react-icons/md";
import { SiMicrosoftexcel } from "react-icons/si";
import { RiTeamFill } from "react-icons/ri"
const about = {
  title: "About me",
  icon: "/assets/about.svg",

  description: "A versatile professional with expertise in RF Engineering, System Administration, programming, and data analysis. Skilled in Drive Testing, RNPO, and network optimization using TEMS and Huawei PHU, with experience as a Site Engineer and Team Leader for ZTE and Ericsson. Proficient in Linux (Ubuntu, Red Hat, Solaris) for developing administrative tools, managing servers, and working with databases like Oracle, PostgreSQL, and MySQL. Experienced in Python, JavaScript, Next.js, and Flutter for application development. Specializes in data analysis using Python (pandas, matplotlib, numpy) and Power BI to transform data into actionable insights.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mahmoud Abu-Qamar"
    },
    {
      fieldName: "Residence",
      fieldValue: "Libya/Tripoli/Tajoura"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+218) 92 7633595"
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Libyan"
    },
    {
      fieldName: "Eamil",
      fieldValue: "m.m.abuqamar@gmail.com"
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avaliable"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Arabic"
    },
  ]
}

const experience = {
  icon: "/assets/badge.svg",
  title: "My Eperience",
  description: "With more than 5 years of experience, I specialize in RF Engineering, System Administration, and full-stack development, with skills in Python, JavaScript, Next.js, and data analysis using Power BI with Python.",
  items: [
    {
      company: "ZTE RF Engineer",
      position: "RF Optimization Eng.",
      duration: "2022 - present",
    },
    {
      company: "ZTE, Huawei, Ericson",
      position: "Drive-Test",
      duration: "2018 - 2022",
    },
    {
      company: "ZTE RF Engineer",
      position: "Post-Processing",
      duration: "2018 - 2022",
    },
    {
      company: "Ouminicom",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
    },
    {
      company: "Freelancer",
      position: "App's Development",
      duration: "2022 - present",
    },
    {
      company: "Al-Wadi",
      position: "System Adminstrator",
      duration: "2021 - 2022",
    },

  ]
}

const eduction = {
  icon: "/assets/education.svg",
  title: "My Educations",
  description: "My educational journey has focused on telecommunications, software engineering, and system administration, building a strong foundation in programming, data analysis, and problem-solving across technical disciplines.",
  items: [
    {
      institution: "University of Tripoli",
      degree: "Telecommunication Engineering BSc.",
      duration: "2017 - 2022",
    },
    {
      institution: "ZTE",
      degree: "RF Engineering",
      duration: "2022",
    },
    {
      institution: "ITU",
      degree: "System Adminstrative",
      duration: "2021",
    },
    {
      institution: "Caodeacademy",
      degree: "Full Stack Developer",
      duration: "2021",
    },
    {
      institution: "Udemy",
      degree: "Flutter Applications Developer",
      duration: "2020",
    },
    {
      institution: "Udemy",
      degree: "Power-BI management",
      duration: "2019",
    },
    {
      institution: "ITU",
      degree: "Data Analysis",
      duration: "2019",
    },
    {
      institution: "Caodeacademy",
      degree: "Python Developer",
      duration: "2018",
    },

  ]
}

const skills = {
  title: "My Skills",
  icon: "/assets/skills.svg",
  description: "Skilled in telecommunications, RF Engineering, system administration, and software development. Proficient in Python, JavaScript, Next.js, Flutter, and data analysis using Power BI.",
  skillList: [
    {
      icon: <MdOutlineSettingsInputAntenna  />,
      name: "RF Engineer",
    },
    {
      icon: <DiPython />,
      name: "Python Developer",
    },
    {
      icon: <SiPowerbi />,
      name: "power-BI",
    },
    {
      icon: <DiLinux  />,
      name: "System Adminstrative",
    },
    {
      icon: <SiFlutter />,
      name: "Flutter App's Development",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next-JS",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind-CSS",
    },
    {
      icon: <SiMicrosoftexcel />,
      name: "Microsoft Office",
    },
    {
      icon: <RiTeamFill />,
      name: "Project Management",
    },

  ]
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.2,
          duration: 0.2,
          ease: "easeIn"
        }
      }}
      className='min-h-[88vh] flex items-center justify-center py-12 xl:py-0'

    >
      <div className='container mx-auto'>
        <Tabs defaultValue='experience'
          className='flex flex-col xl:flex-row gap-[60px]'

        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Eperience</TabsTrigger>
            <TabsTrigger value="eduction">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className='min-h-[70vh] w-full'>
            <TabsContent value="experience" className='w-full' >
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <div className="flex flex-row justify-between">
                  <h3 className='text-4xl font-bold'>
                    {experience.title}
                  </h3>
                  <Image
                    src={experience.icon}
                    alt="Experience Icon"
                    width={35}
                    height={35}
                  />
                </div>
                <p className='max-w-600px text-white/60 mx-auto xl:mx-0 text-justify'>{experience.description}</p>
                <ScrollArea className="h-[400px] ">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                    {experience.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-2-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="eduction" className='w-full'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <div className="flex flex-row justify-between">
                  <h3 className='text-4xl font-bold'>
                    {eduction.title}
                  </h3>
                  <Image
                    src={eduction.icon}
                    alt="Eduction Icon"
                    width={35}
                    height={35}
                  />
                </div>
                <p className='max-w-600px text-white/60 mx-auto xl:mx-0 text-justify'>{eduction.description}</p>
                <ScrollArea className="h-[400px] " >
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                    {eduction.items.map((item, index) => {
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-2-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.institution}</p>
                        </div>
                      </li>
                    })}
                  </ul>

                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className='w-full h-full'>
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <div className="flex flex-row justify-between">
                    <h3 className='text-4xl font-bold '>{skills.title}</h3>
                    <Image
                    src={skills.icon}
                    alt="Skills Icon"
                    width={35}
                    height={35}
                  />
                  </div>
                  <p className='mx-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{skills.description}</p>
                </div>
                <ul className='grid grid-cols-2 sm:grid-cols-3 xd:grid-cols-4 xl:gap-[30px] gap-4'>
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>

                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className='w-full h-[120px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                            <div className='text-6xl group-hover:text-accent transition-all duration-300 '>{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className='capitalize'>{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="about" className='w-full text-center xl:text-left'>
              <div className='flex flex-col gap-[30px]'>
                <div className="flex flex-row justify-between">
                  <h3 className='text-4xl font-semibold'>{about.title}</h3>
                  <Image
                    src={about.icon}
                    alt="Experience Icon"
                    width={35}
                    height={35}
                  />
                </div>
                <p className=' text-white/60 mx-1uto xl:mx-0 text-justify'>{about.description}</p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-2-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                        <span className='text-white/60'>{item.fieldName}</span>
                        <span className='text-xl '>{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}

export default Resume