"use client"

import Photo from '@/components/Photo';
import Socials from '@/components/Socials';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Home = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/MahmoudAbuQamar-CV7.pdf";
    link.download = "MahmoudAbuQamar-CV7.pdf"; // This sets the downloaded file name
    link.click();
  };
  return (
    <section>
      <div className="container mx-5  xl:mx-[100px] h-full">

        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className='text-center xl:text-left order-2 xl:order-none'>
            {/* <span className='text-xl'>Software Developer</span> */}
            <h1 className='h1 mb-6'>Hello I'm <br /><span className='text-accent'>
            <motion.div
            initial={{opacity:0}}
            animate={{
              opacity:1,
              transition:{
                delay:2.2,duration:0.2,ease:"easeIn",
              }
            }}
            >
              <Typewriter
                      words={["Mahmoud Abu-Qamar.", "RF Telecom Eng.", "System Adminstrator.", "Programming Developer."]}
                      loop={true}
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={2000}
                      cursor="true"
                      
              
                    />
            </motion.div>
              </span></h1>
            <p className='max-w-[500px] mb-9 text-white/80 text-left md:text-justify'>
            RF Telecommunication engineer with experience in Python and Oracle Data Integrator, specializing in data-driven applications and visualizations with Power BI. I bring a strong technical foundation and a commitment to building impactful solutions.
            </p>
            <div className='flex flex-col xl:flex-row items-center gap-8'>
              <Button
              onClick={handleDownload}
                // as="a"
                // href="/MahmoudAbuQamar-CV7.pdf"
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                // download
              >
                <span>Download CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 xl:mb-0'>
                <Socials containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-white rounded-full flex justify-center items-center text-white text-[24px] hover:bg-accent hover:text-primary hover:border-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo/>
          </div>
        </div>
      </div>
      <Stats/>
    </section>
  )
}

export default Home