import React, {useRef} from 'react'
import Images from '../images/Images'
import {motion, useScroll, useTransform, AnimatePresence} from 'framer-motion'
import {RiHtml5Line} from 'react-icons/ri'
import {ImCss3} from 'react-icons/im'
import {TbBrandJavascript} from 'react-icons/tb'
import {FaReact} from 'react-icons/fa'
import {FaPhp} from 'react-icons/fa'
import {SiMysql} from 'react-icons/si'
import {SiLaravel} from 'react-icons/si'

const Resume = ({viewportWidth})=>{
	const targetRef = useRef(null)
	const {scrollYProgress} = useScroll({
			target:targetRef,
			offset:["end end", "end start"]
		})

	const imageScale = useTransform(scrollYProgress, [0,.2,.5],[0,.3,.8])
	const imageY = useTransform(scrollYProgress, [0,.3,.5],[-200,-400,-600])
	const bgOpacity = useTransform(scrollYProgress, [0,.3],[1,0])
	const bgScale = useTransform(scrollYProgress, [0,.3],[1,0])
	const bgY = useTransform(scrollYProgress, [0,.2],[0,-400])
	const iconY = useTransform(scrollYProgress, [0,.5,.7],[-200,-400,-500])

	return (
			<AnimatePresence>
			<motion.div className="resume-main"
			initial={{opacity:0}}
			animate={{opacity:1,transition:{duration:1.3}}}
			exit={{opacity:0}}
			>
				<motion.div style={{
					opacity: bgOpacity ,
					scale: bgScale,
					y:bgY ,
				    }} 
					ref={targetRef}
					className="resume-container"
				>
				<img src={Images.ss} alt=""/>
				</motion.div>

				<div className="image-background">
					<motion.img style={{scale:viewportWidth >= 480 ? imageScale: "", y:viewportWidth >= 480 ? imageY:""}} className="resume-image" src={Images.resume} alt=""/>
					<motion.div style={{y:viewportWidth >=480 ? iconY: ""}}  className="programming-icons"
					// animate={{
					// 	y:viewportWidth >=480 ? [-500,-200]:"",
					// 	rotate:viewportWidth >=480 ? 360:0,
					// 	scale:viewportWidth >=480 ? [1,0]: 1,
					// 	transition:{
					// 		duration:viewportWidth >=480 ? 3:"",
					// 		repeat:viewportWidth >=480 ? Infinity:"",
					// 		repeatType:viewportWidth >=480 ? "mirror":""
					// 	}

					// }}
					>
						<RiHtml5Line/>
						<ImCss3/>
						<TbBrandJavascript/>
						<FaReact/>
						<FaPhp/>
						<SiMysql/>
						<SiLaravel/>
					</motion.div>
				</div>
			</motion.div>
			</AnimatePresence>	
		)
}

export default Resume