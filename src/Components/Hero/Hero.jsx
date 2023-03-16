import React from 'react'

const Hero = () => {
  return (
    <>
		<div className="sections hero__section">
			<div className="left-wrapper">
				<h1 className='headline'>Design. Develop. Maintain.</h1>
				<div className="subtitle-wrapper">
					<img src="./images/line1.png" alt="Line"/>
					<p className="subtitle">I Think, Therefore I Am</p>
				</div>
				<button className='resume-button'>View My Resume</button>
			</div>
			<div className="right-wrapper">
				<img src="./images/user1.svg" alt="Developer Image" className='user-image'/>
			</div>
		</div>
    </>
  )
}

export default Hero