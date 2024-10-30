"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ImWhatsapp } from "react-icons/im";
import { FaTelegram } from "react-icons/fa";
import Link from 'next/link';


import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue ,SelectGroup} from '@/components/ui/select';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const info = [
  {
    icon: <FaMapMarkerAlt />,
    href:"https://maps.app.goo.gl/xnMccghs5UkLWPUs8?g_st=awb",
    title: 'Address',
    description: 'Libya, Tripoli, Tajoura',
  },
  {
    icon: <FaPhoneAlt />,
    href:"tel:+218927633595",
    title: 'Phone',
    description: '(+218) 92 7633595',
  },
  {
    icon: <ImWhatsapp />,
    href:"https://wa.me/218927633595",
    title: 'Whatsapp',
    description: '(+218) 92 7633595',
  },
  {
    icon: <FaTelegram />,
    href:"https://t.me/mahmoudAbuQamar1",
    title: 'Telegram',
    description: '(+218) 92 7633595',
  },
  {
    icon: <FaEnvelope />,
    href:"mailto:m.m.abuqamar@gmail.com",
    title: 'Email',
    description: 'm.m.abuqamar@gmail.com',
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.2,
          duration: 0.2,
          ease: "easeIn",

        }
      }}
      className='py-6'
    >
      <div className="container mx-auto">
        {/* <div className='flex flex-col xl:flex-row gap-[30px]'> */}
          {/* form
           */}
          {/* {newFunction()} */}

          {/* info */}
            <div className='h-[50px]'></div>
          <div className='flex-1 flex items-center xl:justify-start order-1 xl:order-none mb-8 xl:mb-0'>
            <ul className='flex flex-col gap-10'>
              {info.map((item,index)=> {
                return (
                  <Link href={item.href}>
                    <li key={index} className='flex items-center gap-6 '>
                      <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
                        <div className='text-[28px]'>{item.icon}</div>
                      </div>
                      <div className='flex-1'>
                        <p className='text-white/60'>{item.title}</p>
                        <h3 className='text-xl'>{item.description}</h3>
                      </div>
                    </li>
                  </Link>
                )
              })}
            </ul>
          </div>

        </div>
      {/* </div> */}
    </motion.section>
  )
}

export default Contact

function newFunction() {
  return <div className="xl:w-[54%] order-2 xl:order-none">
    <form className='flex flex-col gap-6 p-10 bg-[#17171c] rounded-xl'>
      <h3 className='text-4xl text-accent'>Let's work tohether</h3>
      <p className='text-white/60'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic voluptatem, consequatur at magni accusantium nostrum quia accusamus corporis! Architecto, sint.
      </p>
      {/* input/ */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <Input type="firstname" placeholder="First Name" />
        <Input type="lastname" placeholder="Last Name" />
        <Input type="email" placeholder="Email Address" />
        <Input type="phone" placeholder="Phone Number" />
      </div>
      {/* select */}
      <Select>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="select a service" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Select a service</SelectLabel>
            <SelectItem value="est">Web dev</SelectItem>
            <SelectItem value="cst">Designer</SelectItem>
            <SelectItem value="mst">logo desing</SelectItem>

          </SelectGroup>
        </SelectContent>
      </Select>
      {/* textarea  */}
      <Textarea className="h-[200px]" placeholder="Type your message here." />
      <Button size="md" className="max-w-40" disabled={true}>Send message</Button>


    </form>
  </div>;
}
