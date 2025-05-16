"use client";
import Image from "next/image";
import { useState } from "react";
const Page = () => {
	const [currentSection, setCurrentSection] = useState("home");
	return (
		<>
			<section className="flex-grow px-6 py-8">
				<div className="max-w-7xl mx-auto">
					{currentSection === "home" && (
						<section className="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
							<div className="w-full md:1/2">
								<h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">
									Hi I&apos;m <span className="text-blue-600">Dan Mallett</span>
								</h1>
								<h2 className="text-2xl font-medium text-blue-700 mb-6">
									Full Stack Develioer
								</h2>
								<p className="text-lg text-blue-800 mb-6">
									I am a full stack developer with a passion for creating
									beautiful and functional web applications. I have experience
									in a variety of technologies, including React, Node.js, and
									MongoDB. I am always looking to learn new skills and improve
									my craft.
								</p>
								<div className="flex space-x-4">
									<button
										onClick={() => setCurrentSection("projects")}
										className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md flex items-center"
									>
										View Projects
									</button>
									<button
										onClick={() => setCurrentSection("contact")}
										className="border border-blue-600 text-blue-600 hover:bg-blue-50 py-2 px-6 rounded-md"
									>
										Contact me
									</button>
								</div>
							</div>
							<div className="w-full md:w-1/2 flex justify-center">
								<div className="bg-blue-200 w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center text-blue-800 font-medium">
									<Image
										src={"/dan.jpg"}
										alt="Dan Mallett"
										width={320}
										height={320}
										className="rounded-full"
									/>
								</div>
							</div>
						</section>
					)}
				</div>
			</section>
		</>
	);
};

export default Page;
