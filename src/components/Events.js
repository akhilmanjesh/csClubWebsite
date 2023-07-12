import React from 'react';

const Events = ({ event }) => {
    const { title, description, date } = event;
    return (
        <div className="bg-gray-200 max-w-md rounded-lg overflow-hidden w-1/3 shadow-md shadow-gray-200 m-4 flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <div className="px-6 py-4 w-max flex-grow">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base overflow-auto">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                <span className="text-left px-3 py-1 text-sm font-semibold text-gray-700">
                    Date: {date}
                </span>
            </div>
        </div>
    )
}

export default Events;
