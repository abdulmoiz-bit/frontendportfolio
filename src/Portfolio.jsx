import React from 'react';
//import { Link } from 'react-scroll';

const Portfolio = () => {
    return (
        <>
            <section className='portfoliocard' id='portfoliocard'>
                <h1>
                    My Portfolio
                </h1>
                <div className='grid'>

                    <article className='testimonial one'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> Ecommerce Store </h3>
                            <p>
                                This Ecommerce Store has contained products fetched by API,
                                a single product page, a cart that is functioned by redux,
                                a billing address form, a smooth slider, and a fully responsive site.
                            </p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjsecommercestore.vercel.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjsecommercestore'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className='testimonial two'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> Admin Dashboard </h3>
                            <p> The React Admin Dashboard has designed by Material UI
                                contained beautiful icons, recharts, products and users list with images.</p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjsadmindashboard.vercel.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjsadmindashboard'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className='testimonial three'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> Calculator </h3>
                            <p>Addition, subtraction, multiplication, and division actions in this calculator using the useReducer hook. </p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjscalculatorr.netlify.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjscalculatorr'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className='testimonial four grid-col-span-2'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> Todo </h3>
                            <p> This is a basic todo app having create and delete function with local storage methods. </p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjstodoapp.vercel.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjstodoapp'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>

                    <article className='testimonial five'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> TextUtils </h3>
                            <p> With this amazing TextUtils app, you can convert text into uppercase,
                                lowercase copy text, word counters, and more with a dark mode theme.  </p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjstextutils.vercel.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjstextutils'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>
                    <article className='testimonial five'>
                        <div className='testimonialtext'>
                            <h3 className='heading'> Expense Tracker </h3>
                            <p>Expense Tracker shows add income amount with a plus and expense amount with a minus.
                                Delete previous amounts with the help of useReducer and ContextAPI.
                            </p>
                            <div className='portfoliobtn'>
                                <a target="_blank" rel="noreferrer" href='https://reactjsexpensetracker.vercel.app/'>
                                    <button className='btn'> View Demo </button> &nbsp; &nbsp;
                                </a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/abdulmoiz-bit/reactjsexpensetracker'>
                                    <button className='btn'> Github </button>
                                </a>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

        </>
    )
}

export default Portfolio