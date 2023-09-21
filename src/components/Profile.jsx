import React,{useState} from 'react';
import Images from '../images/Images';
import {FaTwitter} from 'react-icons/fa';
import {ImFacebook} from 'react-icons/im';
import {RiInstagramFill} from 'react-icons/ri';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineDingtalk} from 'react-icons/ai';
import {IoIosPaper} from 'react-icons/io';
import {BsPersonWorkspace} from 'react-icons/bs';
import {BsFillPhoneFill} from 'react-icons/bs'
import {motion, useAnimation} from 'framer-motion';
import DownloadCV from './DownloadCV';
import {Outlet,Link} from 'react-router-dom'




const portfolioVariant = {
	animateCover:{
		scale:[100,50,70,0],
		y:-110,
		borderRadius:"20%",
		transition:{
			delay:.2,
			duration: 2,
			type:"spring"
		}
	}
}

const Profile = ({targetRef})=>{

	const [cover, setCover] = useState(false)

	const skill = useAnimation();
	const cv = useAnimation();
	const contact = useAnimation();

	const handleSkill = ()=>{
		skill.start({rotate:360,transition:{duration:.7}})
	}

	const handleCV = ()=>{
		cv.start({y:[0,-20,-30,22,0],rotateX:[0,45,-45,45,0],transition:{duration:1}})
	}

	const handleContact = ()=>{
		contact.start({rotate:[0,-45,45,-45,45,0],transition:{duration:.6}})
	}
	


	return (
			<div className="main-container">
				<div className="left"></div>
				
				<div  className="main-profile" onClick={()=> setCover(true)}>

					<motion.div className="cover"
					variants={portfolioVariant}
					animate={cover ? "animateCover" : ""}
					>
						<motion.div animate={{y:[0,-20,0,-40,-15,-40,0],x:[0,0,0,35,48,35,0],rotate:[0,360,360,360,360,360],transition:{delay:1,duration:2,repeat:Infinity,repeatType:"mirror"}}}>P</motion.div>.
						o.r.t.f.o.l.i.o
					</motion.div>

					<div ref={targetRef} className="profile-container">

						<img className="pp" src={Images.pp} alt=""/>

						<div className="social-container">
							<p>
								Hi I'm Jhon
							</p>
							<div className="links-items">
								<a rel="noreferrer"  href="https://twitter.com/" target="_blank"><FaTwitter/></a>
								<a rel="noreferrer"  href="https://web.facebook.com/jhonjmmallari/" target="_blank"><ImFacebook/></a>
								<a rel="noreferrer"  href="https://instagram.com/" target="_blank"><RiInstagramFill/></a>
								<a rel="noreferrer"  href="https://github.com/KaliAir" target="_blank"><AiFillGithub/></a>
							</div>
						</div>
						<p className="role">Full Stack Web Developer</p>

						<div className="menu-container">
							<Link to="/home" className="menu-items" onClick={()=> handleSkill()}>
								<motion.div animate={skill}><AiOutlineDingtalk/></motion.div>
								<span>Skill</span>
							</Link>
							<Link to="/resume" className="menu-items" onClick={()=> handleCV()}>
								<motion.div animate={cv}><IoIosPaper/></motion.div>
								<span>C V</span>
							</Link>
							<Link className="menu-items">
								<div><BsPersonWorkspace/></div>
								<span>Work</span>
							</Link>
							<Link to="/contact" className="menu-items" onClick={()=> handleContact()}>
								<motion.div animate={contact}><BsFillPhoneFill/></motion.div>
								<span>Contact</span>
							</Link>
						</div>

						<div className="welcome">
							<h1>About Me</h1>
							<p>Hi, I'm Jhon Juben Mallari, a web developer with experience in HTML, CSS, JavaScript, React, PHP, MySQL, and Laravel. I'm passionate about creating beautiful and functional websites that deliver a great user experience. When I'm not coding, you can find me exploring the great outdoors or trying out new recipes in the kitchen. Thanks for visiting my portfolio, and feel free to get in touch!</p>
						</div>

					</div>
					{/*----------------Home Drp Down----------------*/}
					<Outlet/>

					<div className="dl">
						<DownloadCV/>
					</div>
				</div>

				<div className="right"></div>
			</div>	
		)
}

export default Profile