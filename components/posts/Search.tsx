import { ChangeEventHandler } from 'react';

interface IPostProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: IPostProps) => {
	return (
		<>
			<div className="flex flex-row relative items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.2}
					stroke="currentColor"
					className="w-5 h-5 absolute left-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<input
					type="text"
					className="flex-1 mx-1 pl-12 pr-3 py-2 rounded-3xl theme-text-main bg-transparent outline-none appearance-none border theme-border theme-border-hover theme-border-focus duration-75"
					onChange={onChange}
					placeholder="검색하기"
				/>
			</div>
		</>
	);
};

export default Search;
