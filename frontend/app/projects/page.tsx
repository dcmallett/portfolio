"use client";
import { useState } from "react";

const Page = () => {
	const [activeTab, setActiveTab] = useState<keyof typeof projects>("frontend");

	// Example project data
	const projects = {
		frontend: [
			{
				id: 1,
				title: "Frontend Project 1",
				description: "Description for frontend project 1",
			},
			{
				id: 2,
				title: "Frontend Project 2",
				description: "Description for frontend project 2",
			},
		],
		backend: [
			{
				id: 1,
				title: "Backend Project 1",
				description: "Description for backend project 1",
			},
			{
				id: 2,
				title: "Backend Project 2",
				description: "Description for backend project 2",
			},
		],
		fullstack: [
			{
				id: 1,
				title: "Full-stack Project 1",
				description: "Description for full-stack project 1",
			},
			{
				id: 2,
				title: "Full-stack Project 2",
				description: "Description for full-stack project 2",
			},
		],
	};

	const renderProjects = () => {
		// Get the projects for the active tab
		const activeProjects = projects[activeTab] || [];

		// Map over the projects and render them
		return activeProjects.map((project) => (
			<div key={project.id} className="p-4 border rounded shadow">
				<h3 className="text-xl font-semibold">{project.title}</h3>
				<p className="text-gray-600">{project.description}</p>
			</div>
		));
	};

	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-blue-800 mb-8">My Projects</h2>
			<div className="mb-4">
				<button
					className={`px-4 py-2 mr-2 ${
						activeTab === "frontend" ? "bg-blue-800 text-white" : "bg-gray-200"
					}`}
					onClick={() => setActiveTab("frontend")}
				>
					Frontend
				</button>
				<button
					className={`px-4 py-2 mr-2 ${
						activeTab === "backend" ? "bg-blue-800 text-white" : "bg-gray-200"
					}`}
					onClick={() => setActiveTab("backend")}
				>
					Backend
				</button>
				<button
					className={`px-4 py-2 ${
						activeTab === "fullstack" ? "bg-blue-800 text-white" : "bg-gray-200"
					}`}
					onClick={() => setActiveTab("fullstack")}
				>
					Full Stack
				</button>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{renderProjects()}
			</div>
		</section>
	);
};

export default Page;
