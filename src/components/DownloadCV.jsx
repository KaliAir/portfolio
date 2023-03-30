import React from 'react';
import {motion} from 'framer-motion';
import {AiOutlineCloudDownload} from 'react-icons/ai'

const DownloadCV = ()=>{
	return (
			<motion.button
			whileHover={{
				scale: 1.1,
				textShadow: "0 0 4px rgb(255,255,255)",
				boxShadow: "0 0 4px black"
			}}
			><AiOutlineCloudDownload style={{fontSize:"1.3rem"}}/> Download C.V</motion.button>
		)
}

export default DownloadCV