const Title = ({ main, description }: { main: string; description: string }) => {
	return (
		<>
			<h1 className="my-3 text-3xl font-extrabold theme-text-0">{main}</h1>
			<p className="pb-3 mb-4 theme-text-3 border-b border-1 theme-border-y">{description}</p>
		</>
	);
};

export default Title;
