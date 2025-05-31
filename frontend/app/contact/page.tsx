import Button from "@/components/button";
import Input from "@/components/form-elements/input";
import Label from "@/components/form-elements/Label";
import Textarea from "@/components/form-elements/textarea";
import { IoIosMail } from "react-icons/io";

const Page = () => {
	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-blue-800 mb-8">Get in Touch</h2>
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="max-w-xl mx-auto lg:w-full">
					<div className="bg-white rounded-lg shadow-md p-8">
						<h3 className="text-xl font-bold text-blue-700 mb-6">
							Send a Message
						</h3>
						<form action="" className="space-y-6">
							<div>
								<Label htmlFor="name" className="text-gray-700">
									Your Name
								</Label>
								<Input
									id="name"
									name="name"
									type="text"
									placeholder="Your Name"
									required
								/>
							</div>
							<div>
								<Label htmlFor="email" className="text-gray-700">
									Email Address
								</Label>
								<Input
									id="email"
									name="email"
									type="email"
									placeholder="Your Email"
									required
								/>
							</div>
							<div>
								<Label htmlFor="subject" className="text-gray-700">
									Subject
								</Label>
								<Input
									id="subject"
									name="subject"
									type="text"
									placeholder="Subject"
									required
								/>
							</div>
							<div>
								<Label htmlFor="message" className="text-gray-700">
									Message
								</Label>
								<Textarea
									id="message"
									name="message"
									placeholder="Your Message"
									rows={5}
									required
								/>
							</div>
							<Button
								type="submit"
								className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
							>
								Send Message
							</Button>
						</form>
					</div>
				</div>
				{/* TODO: ADD / RE AMEND STYLING  */}
				<div className="w-full lg:w-1/2">
					<div className="bg-white rounded-lg shadow-md p-8 h-full">
						<h3>Contact Information</h3>
						<div className="space-y-6">
							<div className="flex items-start">
								<IoIosMail className="text-blue-600 mr-4 mt-1" />
								<div>
									<h4 className="font-medium text-blue-800">Email</h4>
									<a
										href="mailto:contact@me.com"
										className="text-blue-600 hover:underline"
									>
										contact@yourname.com
									</a>
								</div>
							</div>

							{/* social media */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
