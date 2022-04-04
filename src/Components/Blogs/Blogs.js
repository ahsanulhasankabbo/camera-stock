import React from 'react';

const Blogs = () => {
    return (
        <div className='my-10 md:mx-36 mx-3'>
            <h2 className='text-3xl font-semibold mt-5'>What is context API?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> Context API provides a way to pass data throw the component tree without having to pass props down manually at every level.we all know that in any components data are passes by props.so if we have larger number of components its difficult for us to pass the data every components.sometimes we doesnt need to display all the data in every components.To fixed the problem Context API provides us a way to pass the data without passing the props in every components.if we need to display the data in one components we just need to call the Context API in that component.</p>
            <h2 className='text-3xl font-semibold mt-5'>What is a semantic tag?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> Semantic is nothing but study of the meaning of words or phase in any language. Here in HTML the are many tags by which we can write our code. Some of that tags have meaning and some of them have no meaning. So in HTML language those tags have meaning is known about semantic tag.Like 'table' is a semantic tag because this tag is use for to create a table in a webpage.</p>
            <h2 className='text-3xl font-semibold mt-5'>What is the difference between inline, block and, inline-block?</h2>
            <p> <span className='font-semibold text-xl'>Answer : </span> <br />
                <span className='font-medium'>Inline : </span>In HTML language there are many tags. some tags are block element and some are inline. if a tag add the other properties on his right side and doesnt takes the full width in a line then this tag is known as inline element.<br />
                <span className='font-medium'>Block : </span> Block elements takes the full width of a line.if there have enough space in a line, block element doesnt allow to fullfill the space.</p>
                <span className='font-medium'>Inline-Block : </span> There are a small difference between inline elements and inline-block elements.The difference is the inline-block elements have margin and padding on there every sides and the inline elements doesnt have margin and padding.<br />
        </div>
    );
};

export default Blogs;