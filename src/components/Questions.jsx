import React from 'react'
import { ReactComponent as Question } from "../assets/question.svg";

const Questions = () => {
	return (
		<section id="ask" className="skills dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<div className="flex items-center justify-center">

			<h2 className="px-4 mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
			<Question className="h-20 w-20" />
		</div>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-3 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-semibold">Where can i see your work ?</h3>
				<p className="mt-1 dark:text-gray-400">Email me and i will prepare work samples relevant to your project
				with accoumpanying details</p>
			</div>
			<div>
				<h3 className="font-semibold">Are you currently available ?</h3>
				<p className="mt-1 dark:text-gray-400">I am currently available at this time for full-time positions or new product design proyects</p>
			</div>
			<div>
				<h3 className="font-semibold">How much do you Charge ?</h3>
				<p className="mt-1 dark:text-gray-400">Email me and i will compile a custom quote and provide details on my hourly rate an availability</p>
			</div>
		</div>
	</div>
</section>
	)
}

export default Questions