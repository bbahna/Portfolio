import Container from '@/components/Container';
import Title from '@/components/Title';
import project from '@/data/project';
import ProjectList from '@/components/project/ProjectList';

const Project = () => {
	return (
		<Container>
			<Title main="🗂️ Project" description="뚝딱뚝딱 프로젝트 공장입니다." />
			<div className="flex flex-wrap">
				{project.map((post) => (
					<ProjectList title={post.title} des={post.description} link={post.link} key={post.id} />
				))}
			</div>
		</Container>
	);
};

export default Project;
