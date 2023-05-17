import { Dispatch, SetStateAction } from 'react';
import { categorys } from '@/data/categorys';

interface CategoryListProps {
	sellect: string;
	setSellect: Dispatch<SetStateAction<string>>;
	setClick: Dispatch<SetStateAction<boolean>>;
}

export default function CategoryList({ sellect, setSellect, setClick }: CategoryListProps) {
	return (
		<div className="flex flex-wrap gap-3">
			{categorys.map((category) => {
				return (
					<button
						type="button"
						onClick={() => {
							setSellect(category.keyword);
							setClick(false);
						}}
						key={category.keyword}
						className={`px-3 py-1 theme-bg-3 text-[15px] rounded-2xl ${
							category.keyword == sellect && 'theme-bg-main-light text-[#fff]'
						}`}
					>
						{category.title}
					</button>
				);
			})}
		</div>
	);
}
