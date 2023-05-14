import Image from 'next/image';
import classes from './post-header.module.css';

function PostHeader(props){
    const { title, image } = props;
    return <section className={classes.header}>
        <h1>{title}</h1>
        <Image src={image} alt={title} width='200' height='200' />
    </section>
}

export default PostHeader;