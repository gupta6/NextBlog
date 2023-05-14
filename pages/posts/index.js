import Head from "next/head";

import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helper/post-util";

function AllPostsPage(props) {
    return <>
        <Head>
            <title>All Posts</title>
            <meta name="description" content="A list of all frontend related posts." />
        </Head>
        <AllPosts posts={props.posts} />;
    </>
}

export async function getStaticProps() {
    const allPosts = getAllPosts();
    return {
        props: {
            posts: allPosts
        }
    }
}

export default AllPostsPage;