import Home from "@/app/home/page";
import About from "@/app/about/page";
import Header from "@/components/form-elements/Header";
import Projects from "@/app/projects/page";
import Contact from "@/app/contact/page";
const page = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-blue-50 text-gray-800 font-sans flex flex-col items-center justify-center">
				<section id="home">
					<Home />
				</section>
				<section id="about">
					<About />
				</section>
				<section id="projects">
					<Projects />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</main>
		</>
	);
};

export default page;
