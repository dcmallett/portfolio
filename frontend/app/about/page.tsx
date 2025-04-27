import React from "react";
import Image from "next/image";

const about = () => {
	return (
		<section className="py-24 bg-white">
			<div className="container mx-auto px-4 max-w-6xl">
				<h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
					About me
				</h2>
				<Image
					src="/dan.jpg"
					alt="dan"
					width={128}
					height={128}
					className="rounded-full mx-auto mb-4"
				/>

				<h3 className="text-xl font-bold text-blue-900 text-center">Dan</h3>
				<p className="text-gray-600 text-center">Full Stack Engineer</p>

				{/* todo: re write all text */}
				<p className="mb-4">
					I am a full stack engineer with a passion for building web
					applications. I have experience in various technologies including
					Typescript, React, Nextjs, TailwindCSS, AWS and Golang. I enjoy
					learning new technologies and improving my skills. In my free time, I
					like to work on personal projects and contribute to open source.
				</p>
				<p className="mb-10">
					When I am m not coding or designing, you can find me hiking, reading
					design books, or experimenting with new web technologies.
				</p>

      <div className="flex flex-wrap gap-2">
        
      </div>

			</div>
		</section>
	);
};

export default about;
