const Title = ({ main, description }: { main: string; description: string }) => {
	return (
		<>
			<h1 className="mb-2 text-3xl font-extrabold lg:mb-4 lg:text-4xl mt-7 theme-text-0">{main}</h1>
			<p className="pb-5 mb-5 border-b lg:text-xl theme-text-3 border-1 theme-border-y">{description}</p>
		</>
	);
};

export default Title;
