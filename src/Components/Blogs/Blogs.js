import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 mx-36'>
            <h2 className='text-3xl font-semibold mt-5'>What is context API?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> Context API is a way to share data through the component tree to other component. Context API gives full freedom to share any kind of data like function, state, or, primitive data in the component tree without having to pass props down manually at every level. Context API is great when you are passing data that can be used in any component in your application. Context API as likes the equivalent of global variables for our React components.</p>
            <h2 className='text-3xl font-semibold mt-5'>What is a semantic tag?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> A semantic tag is an element with a meaning. A semantic element clearly describes its meaning to both the browser and the developer. For example, a paragraph tag indicates that the enclosed text is a paragraph. And, browser know how to display a paragraph enclosed with paragraph tag. Semantic tags are helpful for SEO.</p>
            <h2 className='text-3xl font-semibold mt-5'>What is the difference between inline, block and, inline-block?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> <br />
                <span className='font-medium'>Inline : </span> Inline elements don't start on a new line. Inline elements doesn't allow to set css property like height, width, margin and, padding. For example, span tag, img tag are inline elements. <br />
                <span className='font-medium'>Inline-Block : </span> Inline-block elements are similar to inline elements, except they can have padding and margins added on all four sides. We have to 'display:"inline-block"' css property to make inline elements too inline-block elements. <br />
                <span className='font-medium'>Block : </span> Block elements can't add a line-break after the element. Block elements can contain other block elements and inline elements. Block elements take the full width of a website. Block elements accepts width, height, margin, padding etc. For example heading tag, paragraph tag etc. are block elements.</p>
        </div>
    );
};

export default Blogs;