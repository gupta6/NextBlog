import { useEffect, useRef, useState } from 'react';

import Notification from '../ui/notification';
import classes from './contact-form.module.css';

async function sendRequest(message){
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"              
        },
        body: JSON.stringify(message)
    })

    const data = await response.json();

    if(!response.ok){
        throw new Error(data.message);
    }

    return data;
}

function ContactForm(){
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();
    const [ reqStatus, setReqStatus ] = useState();
    const [ responseMessage, setResponseMessage ] = useState();

    useEffect(() => {
        if(reqStatus === 'error' || reqStatus === 'success'){
            const timer = setTimeout(() => {
                setReqStatus(null);
                setResponseMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [reqStatus]);

    async function fomrHandler(e){
        e.preventDefault();
        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const msg = messageRef.current.value;
        const data = { email, name, msg}
        
        setReqStatus('pending');
        
        try{
            const result = await sendRequest(data);
            setReqStatus('success');
            setResponseMessage(result.message);
        }
        catch(err){
            setReqStatus('error');
            setResponseMessage(err);
        }
    }

    return <section className={classes.contact}>
        <h1>Contact Us</h1>
        <form className={classes.form} onSubmit={fomrHandler}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input ref={emailRef} type='email' id='email' required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input ref={nameRef} type='text' id='name' required/>
                </div>
            </div>
            <div className={classes.control}>
                <label htmlFor='message'>Your Message</label>
                <textarea ref={messageRef} id='message' rows={5} required/>
            </div>
            <div className={classes.actions}>
                <button>Send Message</button>
            </div>
        </form>
        {reqStatus && <Notification title={reqStatus} status={reqStatus} message={responseMessage} />}
    </section>
}

export default ContactForm;