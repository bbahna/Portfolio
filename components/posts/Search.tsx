import { ChangeEventHandler, MouseEventHandler } from 'react';

interface IPostProps {
	click: boolean;
	onClick: MouseEventHandler<SVGSVGElement>;
	onChange: ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ click, onClick, onChange }: IPostProps) => {
	return (
		<div
			className={`relative flex flex-row items-center cursor-pointer ${
				!click && 'theme-bg-hover-2 rounded-2xl duration-100'
			}`}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.2}
				stroke="currentColor"
				className={`absolute w-[22px] h-[22px] ${click ? 'left-[18px]' : 'left-[9px]'}`}
				onClick={onClick}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
				/>
			</svg>
			<input
				type="text"
				className={`mx-1 bg-transparent outline-none appearance-none duration-100 rounded-3xl theme-text-main text-[15px] theme-border theme-border-hover theme-border-focus ${
					click ? 'flex-1 py-2 pl-12 pr-3 border h-[36px]' : 'flex-0 w-[20px] px-4 py-[5px]'
				}`}
				onChange={onChange}
				placeholder={click ? '검색어를 입력해주세요' : ''}
			/>
		</div>
	);
};

export default Search;
