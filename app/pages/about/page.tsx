const Page = () => {
	return (
		<section>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						About Me
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						Passionate developer with a love for creating beautiful, functional,
						and user-centered digital experiences.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<p className="text-gray-300 text-lg leading-relaxed">
							I&apos;m a full-stack developer with over 5 years of experience
							building web applications. I specialize in React, Node.js, and
							modern web technologies. I love turning complex problems into
							simple, beautiful, and intuitive solutions.
						</p>
						<p className="text-gray-300 text-lg leading-relaxed">
							When I&apos;m not coding, you can find me exploring new
							technologies, contributing to open-source projects, or enjoying a
							good cup of coffee while reading about the latest in tech.
						</p>
						<div className="flex flex-wrap gap-3">
							{/* TODO: change these */}
							{["JavaScript", "React", "Node.js", "CSS", "HTML"].map(
								(skill) => (
									<span
										key={skill}
										className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm"
									>
										{skill}
									</span>
								)
							)}
						</div>
					</div>
					<div className="relative">
						<div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/30">
							<div className="grid grid-col-1 md:grid-cols-2 gap-8">
								{/* EDUCATION */}
								<div>
									<h3 className="text-xl font-semibold text-purple-400 mb-4">
										Education
									</h3>
									<ul className="text-gray-300">
										<li>
											<span className="font-bold">
												B.Sc. Multimedia Computing
											</span>
											<br />
											University of Plymouth
										</li>
									</ul>
								</div>
								{/*SKILLS */}
								<div>
									<h3 className="text-xl font-semibold text-purple-400 mb-4">
										Skills
									</h3>
									<ul className="text-gray-300 list-disc list-inside">
										<li>JavaScript / TypeScript</li>
										<li>React / Next.js</li>
										<li>TailwindCSS</li>
										<li>Golang</li>
										<li>AWS</li>
									</ul>
								</div>
								{/* EXPERIENCE */}
								{/* TODO: CHANGEE COMPANY AND SKILLS */}
								<div>
									<h3 className="text-xl font-semibold text-purple-400 mb-4">
										Experiance
									</h3>
									<ul className="text-gray-400">
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
										<li>
											<span className="font-bold">Fontend Developer</span>
											<br />
											MISCS, 2025 - present
										</li>
									</ul>
								</div>
								{/* CERTIFICATIONS */}
								<div>
									<h3 className="text-xl font-semibold text-purple-400 mb-4">
										Certifications
									</h3>
									<ul className="text-gray-300 list-disc list-inside">
										<li>Certified React Developer</li>
										<li>Agile Scrum Master</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
