import Container from '@/components/Container';
import Title from '@/components/Title';
import project from '@/data/project';
import ProjectList from '@/components/project/ProjectList';

const Project = () => {
	return (
		<Container>
			<Title main="🗂️ Project" description="뚝딱뚝딱 프로젝트 공장입니다." />
			<div className="flex flex-wrap max-lg:max-w-[664px] max-md:content-center mx-auto my-0 max-md:flex-col">
				{project.map((post) => (
					<ProjectList
						key={post.id}
						title={post.title}
						stack={post.stack}
						status={post.status}
						link={post.link}
						description={post.description}
						image={post.image}
						date={post.date}
						hashtag={post.hashtag}
					/>
				))}
			</div>
		</Container>
	);
};

export default Project;
