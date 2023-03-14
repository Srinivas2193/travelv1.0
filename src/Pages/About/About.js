import React from 'react';
import info from './../../Assets/Images/landing.png';
import avatar1 from './../../Assets/Images/avatar1.png';
import avatar2 from './../../Assets/Images/avatar2.png';
import avatar3 from './../../Assets/Images/avatar3.png';
import avatar4 from './../../Assets/Images/avatar4.png';
import avatar5 from './../../Assets/Images/avatar5.png';

const About = () => {
  return (
    <>
        <div className='mt-20 '>
        <h2 className='text-[35px] text-blue-500 text-center'>India's favourite trip planning website. Coming soon to <br/> the entire world.</h2>
         {/* <h2 className='text-3xl ml-72 text-gray-800'>Now, we are breaking ground with our technology.</h2> */}
        <br/>
        <img className='ml-72' src={info} alt='landing info' width='50%' height='300px' />

            <br/>
            
            <div className='columns-2'>
                    <p className='mx-6 text-justify'>Planning every single trip needs answers to a number of questions. Holidify is attempting to collect all the information that you will ever need to plan your trip - from when, where and how, to more hidden gems in every destination, Holidify is the one-stop solution to all your travel planning needs. Our travel guides are editorially curated, so you can trust that they will lead you to the right path. We have invested extensive resources over the last 8 years to build exhaustive, in-depth content for all destinations - to find answers to all your questions.We started with a focus on India - and are proud to be building a global company out of India - but our ambitions are global. Soon enough, you will be able to research your trip to any destination around the world on Holidify.</p>
            </div>
            <br/>
            <hr className='divide-blue-700'/>
            <br/>
            <h3 className='text-4xl text-black text-center font-bold'>People</h3>
            <br/>
            <div>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar1} alt='avatar1 pic' />
                <p className='text-1xl text-justify mx-5 '>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.

                    He is a member of the SEBI Security Markets Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                </p>
            </div>

            <br/>

            <div className='columns-2'> 
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar2} alt='avatar2 pic' />
                <p className='text-1xl text-justify mx-5'>Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches.

                </p>
            </div>

            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar3} alt='avatar3 pic' />
                <p className='text-1xl text-justify mx-5'>Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day.Today, Zerodha has changed the landscape of the Indian broking industry.


                </p>
            </div>

            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar4} alt='avatar4 pic' />
                <p className='text-1xl text-justify mx-5'>Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess.Today, Zerodha has changed the landscape of the Indian broking industry.

                    He is a member of the SEBI Security Markets Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).

                </p>
            </div>
            <br/>
            <div className='columns-2'>
                <img className='inline-block ml-36 h-44 w-44 rounded-full ring-2 ring-white' src={avatar5} alt='avatar5 pic' />
                <p className='text-1xl text-justify mx-5'>Seema worked with an international airline business for over 6 years before joining us. She uses her experience of liasing with people from various backgrounds to ensure that our ever expanding support team maintains highest quality. She is an extremely disciplined fitness enthusiast.
                n avid reader, he always appreciates a good game of chess.Today, Zerodha has changed the landscape of the Indian broking industry.

                </p>
            </div>
            <br/>


            </div>
        </div>
        </>
  )
}

export default About