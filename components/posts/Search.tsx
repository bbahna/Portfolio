import { ChangeEventHandler } from 'react';

interface IPostProps {
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: IPostProps) => {
	return (
		<>
			<div className="search-box">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.2}
					stroke="currentColor"
					className="w-5 h-5 mx-2 "
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
					/>
				</svg>
				<input
					type="text"
					className="flex-1 mx-1 text-teal-400 bg-transparent outline-none appearance-none"
					onChange={onChange}
					placeholder="검색하기"
				/>
			</div>
			<style jsx>{`
				.search-box {
					display: flex;
					margin-top: 20px;
					margin-bottom: 5px;
					padding: 10px;
					border: 1px solid #ddd;
					border-radius: 20px;
					align-items: center;
				}
			`}</style>
		</>
	);
};

export default Search;
