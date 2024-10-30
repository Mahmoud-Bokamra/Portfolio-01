import Link from "next/link";
import {FaFacebook,FaLinkedinIn,FaGithub,FaWhatsapp,FaTelegram

} from 'react-icons/fa';

const socials = [
  {icon:<FaLinkedinIn/>,path:"https://www.linkedin.com/in/mahmoud-abu-qamar-1286a3258/"},
  {icon:<FaFacebook/>,path:"https://www.facebook.com/profile.php?id=100094660560878"},
  {icon:<FaGithub/>,path:""},
  {icon:<FaWhatsapp/>,path:"https://wa.me/218927633595"},
  {icon:<FaTelegram/>,path:"https://t.me/mahmoudAbuQamar1"},
]
const Socials = ({containerStyles,iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>{
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Socials