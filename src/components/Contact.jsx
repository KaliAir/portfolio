import React from "react"
import {BsFillFilePersonFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {FaPencilAlt} from "react-icons/fa"

const Contact = ()=>{

	return (

		<div className="contact-container">
			
			<div className="thank-you">
				<h1>Get in touch</h1>
				<p>thank you for visiting my portfolio</p>
			</div>
			<form className="contact-form" method='POST'>
				<div className="name">
					<BsFillFilePersonFill className="name-icon"/>
					<input type="text" placeholder="Name" required/>
				</div>
				<div className="email">
					<MdEmail className="email-icon"/>
					<input type="email" placeholder="Email" required/>
				</div>
				<div className="text-container">
					<FaPencilAlt className="text-icon"/>
					<textarea  class="text-area" placeholder="Message" required></textarea>
				</div>

				<button className="form-button" type="submit">Submit</button>
			</form>

		</div>

		)

}

export default Contact