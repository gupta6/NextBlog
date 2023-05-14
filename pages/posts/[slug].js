import Head from "next/head";

import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../helper/post-util";

function PostDetailsPage(props) {
    return <>
        <Head>
            <title>{props.post.title}</title>
            <meta name="description" content={props.post.excerpt} />
        </Head>
        <PostContent post={props.post} />
    </>
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;
    const post = getPostData(slug);
    return {
        props: {
            post: post
        }
    }
}

export function getStaticPaths() { // For dynamic paths we also need getStaticPaths so next can know which concrete slug value it should need to pre-generate
    const filePaths = getPostFiles();
    const slugs = filePaths.map(filePath => filePath.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug: slug } })),
        fallback: false
    }
}

export default PostDetailsPage;