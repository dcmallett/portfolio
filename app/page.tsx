import { Navbar } from "../components/Navbar/Navbar";
import Home from "./pages/home/page";
import About from "./pages/about/page";
import Projects from "./pages/projects/page";
import Contact from "./pages/contact/page";
import Footer from "../components/Footer/Footer";
export default function HomePage() {
	return (
		<>
			<Navbar />
			<main className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
				<section
					id="home"
					className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
				>
					<Home />
				</section>
				<section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
					<About />
				</section>
				<section
					id="projects"
					className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20"
				>
					<Projects />
				</section>
				<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
					<Contact />
				</section>
				<Footer />
			</main>
		</>
	);
}
