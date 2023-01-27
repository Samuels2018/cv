import React, {Fragment} from 'react'
import Hero from '../components/Hero'
import HowIMaked from '../components/HowIMaked'
import Questions from '../components/Questions'
import MySkills from '../components/MySkills'
import About from '../components/About'

const Landing = () => {
	return (
		<Fragment>
			<Hero />
			<HowIMaked />
			<MySkills />
			<About />
			<Questions />
		</Fragment>
	)
}

export default Landing