import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	contentType: 'mdx',
	filePathPattern: `**/*.mdx`,
	fields: {
		title: { type: 'string', required: true },
		date: { type: 'string', required: true },
		thumbnail: { type: 'string', required: false },
		description: { type: 'string', required: true },
	},
}));

export default makeSource({
	contentDirPath: 'posts',
	documentTypes: [Post],
});
