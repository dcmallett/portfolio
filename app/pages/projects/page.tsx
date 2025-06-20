"use client";
import Link from "next/link";
import { useState } from "react";

const Page = () => {
	const projects = [
		{
			id: 1,
			title: "Design System",
			description:
				"A comprehensive design system built with React and Storybook, featuring reusable components and consistent styling.",
			category: "frontend",
			technologies: ["React", "Storybook", "CSS"],
			icon: "🎨",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 2,
			title: "API Gateway",
			description:
				"A robust API gateway built with Node.js and Express, featuring authentication, rate limiting, and microservices integration.",
			category: "backend",
			technologies: ["Node.js", "Express", "MongoDB"],
			icon: "⚙️",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 3,
			title: "E-Commerce Platform",
			description:
				"A complete e-commerce solution with React frontend, Node.js backend, and integrated payment processing.",
			category: "fullstack",
			technologies: ["React", "Node.js", "Stripe"],
			icon: "🚀",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 4,
			title: "Mobile Dashboard",
			description:
				"A responsive dashboard interface built with React and Chart.js, featuring real-time data visualization.",
			category: "frontend",
			technologies: ["React", "Chart.js", "Tailwind"],
			icon: "📱",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 5,
			title: "Auth Service",
			description:
				"A secure authentication service with JWT tokens, OAuth integration, and role-based access control.",
			category: "backend",
			technologies: ["Node.js", "JWT", "OAuth"],
			icon: "🔒",
			liveUrl: "#",
			githubUrl: "#",
		},
		{
			id: 6,
			title: "Chat Application",
			description:
				"A real-time chat application with WebSocket support, message history, and user presence indicators.",
			category: "fullstack",
			technologies: ["React", "Socket.io", "Node.js"],
			icon: "💬",
			liveUrl: "#",
			githubUrl: "#",
		},
	];

	const [activeFilter, setActiveFilter] = useState("All");

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-blac/20">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						My Projects
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
						Here are some of my recent projects that showcase my skills and
						expertise.
					</p>

					{/* FILTER BUTTONS */}
					<div className="flex flex-wrap justify-center gap-4 mb-12">
						{["All", "frontend", "backend", "fullstack"].map((filter) => (
							<button
								key={filter}
								onClick={() => setActiveFilter(filter)}
								className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
									activeFilter === filter
										? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
										: "bg-gradient-500/20 text-purple-300 hover:purple-500/30"
								}`}
							>
								{filter.charAt(0).toUpperCase() + filter.slice(1)}
							</button>
						))}
					</div>
				</div>
				{/* project grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className="group bg-gradient-to-br from-gray-800/50 to-purple-900/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
						>
							<div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mb-6 flex items-center justify-center">
								<div className="text-6xl">{project.icon}</div>
							</div>
							<h3 className="text-xl font-bold mb-3 text-purple-300">
								{project.title}
							</h3>
							<p className="text-gray-400 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mb-4">
								{project.technologies.map((tech) => (
									<span
										key={tech}
										className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								<Link
									href={project.liveUrl}
									className="text-purple-400 hover:text-purple-300 transition-colors"
								>
									Live Demo
								</Link>
								<Link
									href={project.githubUrl}
									className="text-purple-400 hover:text-purple-300 transition-colors"
								>
									GitHub
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Page;
