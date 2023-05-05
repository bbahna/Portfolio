const project: {
	id: number;
	title: string;
	stack: string;
	status: string;
	link: string;
	description: string;
	image: string;
	date: string;
	hashtag: Array<string>;
}[] = [
	{
		id: 1,
		title: '사이드 팀 프로젝트',
		stack: 'Next',
		status: '진행 중',
		link: 'https://hyoon-share.notion.site/Next-B-side-15-880043ad85274f1280b5181cec657a42',
		description: '6개월 이상 현업 개발자의 팀 사이드 프로젝트 커뮤니티',
		image: '/project/project_1.png',
		date: '2023.5 ~ 2023.7(예정)',
		hashtag: ['비사이드', '15기', '아이스브레이킹'],
	},
	{
		id: 2,
		title: 'Portfolio web site',
		stack: 'Next',
		status: '완료',
		link: 'https://hyoon-share.notion.site/Next-Portfolio-web-site-b7621739363b4bc4b9aaca6677cfc6d5',
		description: 'Next로 제작한 개인 포트폴리오 웹 사이트',
		image: '/project/project_2.png',
		date: '2023.4',
		hashtag: ['개인', '포트폴리오', '다크모드', '반응형'],
	},
	{
		id: 3,
		title: '방명록 CRUD project',
		stack: 'React',
		status: '완료',
		link: 'https://hyoon-share.notion.site/React-Guest-book-CRUD-project-86245cbd544048b9889a4a9a6dadad29',
		description: 'json-server로 CRUD가 가능한 react 개인 프로젝트',
		image: '/project/project_3.png',
		date: '2022.10, 2023.3',
		hashtag: ['개인', 'CRUD', '방명록'],
	},
	{
		id: 4,
		title: 'Blog project',
		stack: 'Gatsby',
		status: '완료',
		link: 'https://hyoon-share.notion.site/Gatsby-Gastby-Blog-project-25dccf89f2bd4c95a18ba9150335bd17',
		description: 'gatsby template로 제작한 기술 블로그 개인 프로젝트',
		image: '/project/project_4.png',
		date: '2022.5 ~ 2022.6',
		hashtag: ['개인', '블로그', '템플릿', '커스터마이징'],
	},
];

export default project;
