"use client";
import { useState } from "react";

const Page = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setTimeout(() => {
			setIsSubmitting(true);
			setSubmitMessage("Message sent successfully!");
			setFormData({ name: "", email: "", message: "" });
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8">
			<div className="max-w-4xl">
				<div className="text-center mb-16">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<p className="text-gray-400 text-lg max-w-2xl mx-auto">
						I&apos;m always open to discussing new opportunities and interesting
						projects. Let&apos;s create something amazing together!
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
								<svg
									className="w-6 h-6 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-purple-300">Email</h3>
								<p className="text-gray-400">dcmallett28@gmail.com</p>
							</div>
						</div>

						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
								<svg
									className="w-6 h-6 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									></path>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-purple-300">Phone</h3>
								<p className="text-gray-400">+1 (555) 123-4567</p>
							</div>
						</div>

						<div className="flex items-center space-x-4">
							<div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
								<svg
									className="w-6 h-6 text-purple-400"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
							</div>
							<div>
								<h3 className="text-lg font-semibold text-purple-300">
									Location
								</h3>
								<p className="text-gray-400">San Francisco, CA</p>
							</div>
						</div>
					</div>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-300 mb-2"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleInputChange}
								className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus: outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
								placeholder="Your Name"
								required
							/>
						</div>
						<div>
							<label
								className="block text-sm font-medium text-gray-300 mb-2"
								htmlFor="email"
							>
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								value={formData.email}
								onChange={handleInputChange}
								className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
								required
								placeholder="Your Email"
							/>
						</div>
						<div>
							<label
								className="block text-sm font-medium text-gray-300 mb-2"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								value={formData.message}
								onChange={handleInputChange}
								className="w-full px-4 py-3 bg-gray-800/50 border border-purple-500/30 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-white"
								required
								placeholder="Your Message"
							></textarea>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
								isSubmitting
									? "bg-gray-600 cursor-not-allowed"
									: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
							}`}
						>
							{isSubmitting ? "Sending..." : "Send Message"}
						</button>
						{submitMessage && (
							<div className="text-center text-green-400 font-medium">
								{submitMessage}
							</div>
						)}
					</form>
				</div>
			</div>
		</section>
	);
};

export default Page;
