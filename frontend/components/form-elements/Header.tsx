"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Header = () => {
	const [currentSection, setCurrentSection] = useState("home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navItems = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	return (
		<header className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<span className="font-bold text-2xl text-blue-700">DM</span>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-8">
					{navItems.map((item) => (
						<Link
							href={`#${item.id}`}
							key={item.id}
							onClick={() => {
								setCurrentSection(item.id);
								const section = document.getElementById(item.id);
								if (section) {
									section.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className={`font-medium ${
								currentSection === item.id
									? "text-blue-700 border-b-2 border-blue-700"
									: "text-blue-500 hover:text-blue-700"
							}`}
						>
							{item.name}
						</Link>
					))}
				</nav>

				{/* Mobile Navigation */}
				<button
					className="md:hidden text-blue-700"
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
				>
					{mobileMenuOpen ? <IoCloseSharp /> : <GiHamburgerMenu />}
				</button>
			</div>

			{/* TODO: Add in fade transition mobile nav */}
			{mobileMenuOpen && (
				<nav className="md:hidden pt-4 pb-2 px-2">
					{navItems.map((item) => (
						<button
							key={item.id}
							onClick={() => {
								setCurrentSection(item.id);
								setMobileMenuOpen(false);
							}}
							className={`block py-2 px-4 text-blue-500 hover:text-blue-700 ${
								currentSection === item.id ? "font-bold" : ""
							}`}
						>
							{item.name}
						</button>
					))}
				</nav>
			)}
		</header>
	);
};

export default Header;
