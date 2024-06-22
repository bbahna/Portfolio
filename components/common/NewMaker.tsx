import { postProps } from '../posts/PostList';

const NewMaker = ({ post }: postProps) => {
	// New Date Label
	const daySubtract = Math.abs(new Date().getTime() - new Date(post!.date).getTime());
	const dayAgo = Math.floor(daySubtract / (1000 * 60 * 60 * 24));

	return (
		<>
			{dayAgo <= 30 && (
				<span className="absolute px-[6px] leading-[21px] ml-2 bottom-[6px] text-[9px] font-light rounded-md text-[#fefefe] theme-bg-main-dark">
					New
				</span>
			)}
		</>
	);
};

export default NewMaker;
