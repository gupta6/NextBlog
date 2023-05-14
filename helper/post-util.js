import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirPath = path.join(process.cwd(), 'posts'); 

// Gray matter is a package that allow us to read markdown file and split it into meta data and actual markdown content.

export const getPostData = (postFileIdentifier) => {
    const slug = postFileIdentifier.replace(/\.md$/, ''); // Removes file extension
    const filePath = path.join(postsDirPath, slug);
    const fileContent = fs.readFileSync(`${filePath}.md`, 'utf-8');
    const { data, content } = matter(fileContent);

    return { slug, ...data, content };
}

export function getPostFiles(){
    const postFiles = fs.readdirSync(postsDirPath); // It will give us array of strings(filenames) present in the directory.

    return postFiles; 
}

export function getAllPosts(){
    const postFiles = getPostFiles(postsDirPath);
    const postData = postFiles.map(fileName => getPostData(fileName));
    postData.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return postData;
}

export function getAllFeaturedPosts(){
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.isFeatured);
}