import Image from "next/image";
const Page = () => {
	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-blue-800 mb-8">About Me</h2>
			<div className="bg-white shadow-md rounded-lg p-8">
				<div className="flex flex-col md:flex-row gap-8">
					<div className="w-full md:w-1/3 flex justify-center">
						<div>
							<Image
								src={"/dan.jpg"}
								alt="Dan Mallett"
								width={320}
								height={320}
							/>
						</div>
					</div>
					<div className="w-full md:w-2/3">
						<h3 className="text-xl font-bold text-blue-700 mb-4">Who I Am</h3>
						<p className="text-blue-800 mb-4">
							Hello! I&apos;m a passionate web developer with over 5 years of
							experience in creating responsive and user-friendly websites. I
							specialize in modern JavaScript frameworks and have a strong eye
							for design.
						</p>
						<p className="text-blue-800 mb-6">
							When I&apos;m not coding, you can find me hiking, reading sci-fi
							novels, or experimenting with new recipes in the kitchen.
						</p>

						<h3 className="text-xl font-bold text-blue-700 mb-4">My Skills</h3>
						<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
							{[
								`JavaScript`,
								`React`,
								`GoLang`,
								`HTML/CSS`,
								`TailwindCSS`,
								`AWS`,
								`MongoDB`,
							].map((skill) => (
								<div
									key={skill}
									className="bg-blue-50 border border-blue-200 rounded-md px-3 py-2 text-center text-blue-700"
								>
									{skill}
								</div>
							))}
						</div>

						{/* //TODO: Potentially move out of this area just 1 below */}
						<h3 className="text-xl font-bold text-blue-700 mb-4">Experiance</h3>
						<div className="space-y-4">
							<div className="border-l-4 border-blue-300 pl-4">
								<h4 className="font-bold text-blue-900">
									Full Stack Developer
								</h4>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
