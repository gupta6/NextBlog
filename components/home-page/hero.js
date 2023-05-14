import Image from 'next/image';

import classes from './hero.module.css';

function Hero() {
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/developer.png' alt='Developer Avatar' width={300} height={300} />
        </div>
        <h1>Hi, I'm Kunal</h1>
        <p>I am a frontend developer and I blog about web devlopment - especially frontend frameworks like Next or React.</p>
    </section>
};

export default Hero;