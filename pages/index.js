import Head from 'next/head';

import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getAllFeaturedPosts } from '../helper/post-util';

function HomePage(props){
    return <>
        <Head>
            <title>Kunal's Blog</title>
            <meta name="description" content="Post about front end development"/>
        </Head>
        <Hero/>
        <FeaturedPosts posts={props.featuredPosts} />
    </>
}

export async function getStaticProps(){
    const featuredPosts = getAllFeaturedPosts();
    return {
        props: {
            featuredPosts
        }
    }
}

export default HomePage;