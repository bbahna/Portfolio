const Title = ({ main, description }: { main: string; description: string }) => {
	return (
		<>
			<h1 className="my-3 text-3xl font-extrabold">{main}</h1>
			<p className="pb-3 mb-4 text-gray-700 border-b border-1 border-y-gray-300">{description}</p>
		</>
	);
};

export default Title;
