import React from 'react';
import {motion} from 'framer-motion'
import {AnimatePresence} from 'framer-motion'

const Home = ({htmlProg,cssProg,javascriptProg,reactProg,mysqlProg,phpProg,laravelProg,viewportWidth})=>{
	return (
		<AnimatePresence>
			<motion.div className="home"

			initial={{opacity:0}}
			animate={{opacity:1,transition:{duration:1.3}}}
			exit={{opacity:0}}


			>
				<div className="myskill">
					<h1>My Skills</h1>
				</div>
				<div className="language">
					<h3>HTML</h3>
					<motion.div style={{height:viewportWidth <= 768 ? htmlProg : 15, width: viewportWidth >= 768 ? htmlProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>CSS</h3>
					<motion.div style={{height:viewportWidth <= 768 ? cssProg : 15, width: viewportWidth >= 768 ? cssProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>JS</h3>
					<motion.div style={{height:viewportWidth <= 768 ? javascriptProg : 15, width: viewportWidth >= 768 ? javascriptProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>REACT</h3>
					<motion.div style={{height:viewportWidth <= 768 ? reactProg : 15, width: viewportWidth >= 768 ? reactProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>MYSQL</h3>
					<motion.div style={{height:viewportWidth <= 768 ? mysqlProg : 15, width: viewportWidth >= 768 ? mysqlProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>PHP</h3>
					<motion.div style={{height:viewportWidth <= 768 ? phpProg : 15, width: viewportWidth >= 768 ? phpProg : 15, borderRadius: 2}}></motion.div>
				</div>
				<div className="language">
					<h3>LARAVEL</h3>
					<motion.div style={{height:viewportWidth <= 768 ? laravelProg : 15, width: viewportWidth >= 768 ? laravelProg : 15, borderRadius: 2}}></motion.div>
				</div>
			</motion.div>
		</AnimatePresence>	
		)
}

export default Home