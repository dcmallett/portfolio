const Page = () => {
	return (
		<section className="py-12">
			<h2 className="text-3xl font-bold text-blue-800 mb-8">Get in Touch</h2>
			<div className="flex flex-col lg-flex-row gap-8">
				<div className="w-full lg:w-1/2">
					<div className="bg-white rounded-lg shadow-md p-8">
						<h3 className="text-xl font-bold text-blue-700 mb-6">
							Send Me a Message
						</h3>
						<form className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-blue-700 mb-2">
									Your Name
								</label>
								<input
									type="text"
									id="name"
									className="w-full px-4 py-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
									placeholder="Enter your name"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Page;
