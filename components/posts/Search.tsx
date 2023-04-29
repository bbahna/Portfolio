import { ChangeEventHandler } from 'react';

interface IPostProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: IPostProps) => {
	return (
		<>
			<div className="relative flex flex-row items-center mb-4">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.2}
					stroke="currentColor"
					className="absolute w-5 h-5 left-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<input
					type="text"
					className="flex-1 py-2 pl-12 pr-3 mx-1 duration-75 bg-transparent border outline-none appearance-none rounded-3xl theme-text-main theme-border theme-border-hover theme-border-focus"
					onChange={onChange}
					placeholder="검색하기"
				/>
			</div>
		</>
	);
};

export default Search;
