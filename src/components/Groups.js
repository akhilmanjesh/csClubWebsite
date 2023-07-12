import React from 'react';

const Groups = ({imageSrc, title, description, websiteUri}) => {
    return (
        <div className='border border-gray-400 p-2 rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'>
            <div className='flex flex-col items-center'>
                <img src={imageSrc} alt={title} className='rounded-full h-[64px]' />
                <h1 className='text-2xl text-gray-600'>
                    {title}
                </h1>
                <p className='text-md text-black text-center pb-4'>
                    {description}
                </p>
                <a href={websiteUri} target='_blank' rel='noopener noreferrer'>
                    <button className='px-4 py-2 bg-blue-500 text-white rounded'>Website</button>
                </a>
            </div>
        </div>
    )
}

export default Groups;
