import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render(){
        return <Html lang="en">
            <Head/>
            <body>
                <Main/>
                <NextScript/>
                <div id='notification'></div>
            </body>
        </Html>
    }
}

export default MyDocument;

// It allows us to declare general structure of our page. 
//Example - Set an attribute on our HTML element or add extra entry points which we could use with react portal 

// The document Head is different from Head Component that we used for setting meta data