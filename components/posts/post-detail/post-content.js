import ReactMarkdown from 'react-markdown';
import { PrismLight } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import Image from 'next/image';

import classes from './post-content.module.css';
import PostHeader from './post-header';

PrismLight.registerLanguage('js', js);

function PostContent(props){
    const { slug, title, image, content, date} = props.post;
    const imagePath = `/images/posts/${slug}/${image}`;

    const customComponents = {
        img(image){ // when react markdown encounters with any image it call this function. Similarly we have other functions as well to treat other tags.
            const { src, alt } = image;
            return <Image src={`/images/posts/${slug}/${src}`} alt={alt} width={600} height={300}  />
        },
        code(code){
            const { className, children } = code;
            const language = className.split('-')[1];
            return <PrismLight language={language} children={children} style={atomDark} />
        }
    }

    return <article className={classes.content}>
        <PostHeader title={title} image={imagePath}/>
        <ReactMarkdown components={customComponents} >{content}</ReactMarkdown>
        {/* we are overwrtiting how react markdown treats image. Because it is using the default img tag and we are not able to use next's full potential of adjusting the image size and lazy loading. */}
    </article>
}

export default PostContent;