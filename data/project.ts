const project: {
	id: number;
	title: string;
	category: string;
	status: string;
	link: string;
	description: string;
	thumbnail?: string;
	date: string;
	hashtags: Array<string>;
}[] = [
	{
		id: 1,
		title: '얼음땡 side project',
		category: 'Next',
		status: '완료',
		link: 'https://www.notion.so/hyoon-share/Next-Portfolio-web-site-ab7b701e0f294a24ab9afded438f9bad?pvs=4',
		description: '6개월 이상 현업 개발자의 팀 사이드 프로젝트 커뮤니티',
		thumbnail: '/project/project_1.png',
		date: '2023.5 ~ 2023.7',
		hashtags: ['비사이드', '팀프로젝트', '아이스브레이킹'],
	},
	{
		id: 2,
		title: 'Portfolio web site',
		category: 'Next',
		status: '완료',
		link: 'https://www.notion.so/hyoon-share/Next-Portfolio-web-site-ab7b701e0f294a24ab9afded438f9bad?pvs=4',
		description: 'Next로 제작한 개인 포트폴리오 웹 사이트',
		thumbnail: '/project/project_2.png',
		date: '2023.4 ~ 2023.5(1차 완료)',
		hashtags: ['개인', '포트폴리오', '다크모드', '반응형'],
	},
	{
		id: 3,
		title: '방명록 CRUD project',
		category: 'React',
		status: '완료',
		link: 'https://www.notion.so/hyoon-share/React-CRUD-project-65d5fbae0b55458585073351af79e3c8?pvs=4',
		description: 'json-server로 CRUD가 가능한 react 개인 프로젝트',
		thumbnail: '/project/project_3.png',
		date: '2022.10 ~ 2023.3',
		hashtags: ['개인', 'CRUD', '방명록'],
	},
	{
		id: 4,
		title: 'Blog project',
		category: 'Gatsby',
		status: '완료',
		link: 'https://www.notion.so/hyoon-share/Gatsby-Blog-project-e00db9d6957c423399c3b62d94a8c64e?pvs=4',
		description: 'gatsby template로 제작한 기술 블로그 개인 프로젝트',
		thumbnail: '/project/project_4.png',
		date: '2022.5 ~ 2022.6',
		hashtags: ['개인', '블로그', '템플릿', '커스터마이징'],
	},
];

export default project;
