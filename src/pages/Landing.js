import React from 'react';
import NavBar from "../components/NavBar";
import Events from "../components/Events";
import bannerImage from "../assets/CS_Club_Banner_1.png";
import SpecialGroup from '../components/SpecialGroups';
import Footer from '../components/Footer';

const Landing  = () => {
    const clubEvents = [
        { title: 'Event 1', description: 'This is event 1', date: '2023-07-15' },
        { title: 'Event 2', description: 'This is event 2', date: '2023-07-16' },
        { title: 'Event 3', date: '2023-07-17' },
    ];
    
    return (
        <div className='flex flex-col items-center'>
            <NavBar/>
            <div className='w-4/5 flex flex-col items-center'>
                <div className="flex flex-row mx-10 my-5">
                    <div className="flex flex-col items-center justify-around w-1/2">
                        <h1 className="text-4xl text-center mr-8 w-1/2">
                            We are SJSU's largest coding community!
                        </h1>
                        <div className="flex items-center justify-around mt-5 w-1/2">
                            <button className="px-4 py-2 bg-gray-200 text-black rounded">Join Us</button>
                            <button className="px-4 py-2 bg-gray-200 text-black rounded">IG</button>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5">
                        <img className="rounded-3xl" src={bannerImage} alt="CS Club Banner"/>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-stretch w-full">
                    {clubEvents.map((event, index) => (
                        <Events key={index} event={event} />
                    ))}
                </div>
                <SpecialGroup/>
            </div>
            <Footer/>
        </div>
    )
}

export default Landing;
