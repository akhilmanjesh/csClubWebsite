import React from 'react';
import Groups from './Groups';
import WL from "../assets/WL.png";

const SpecialGroup = () => {
    const groups = [
        {
            imageSrc: WL,
            title: 'Group 1',
            description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
            websiteUri: 'https://www.onawhims.com/'
        },
        {
            imageSrc: WL,
            title: 'Group 2',
            description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
            websiteUri: 'https://www.onawhims.com/'
        },
        {
            imageSrc: WL,
            title: 'Group 3',
            description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
            websiteUri: 'https://www.onawhims.com/'
        },
        {
            imageSrc: WL,
            title: 'Group 4',
            description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
            websiteUri: 'https://www.onawhims.com/'
        },
        {
            imageSrc: WL,
            title: 'Group 5',
            description: 'Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah ',
            websiteUri: 'https://www.onawhims.com/'
        }
    ];
    return (
        <div className='w-full bg-gray-200 rounded-3xl flex justify-center items-center pb-4'>
            <div className='flex flex-col w-2/3'>
                <h1 className='text-3xl text-black py-8'>
                    Student Groups and Club Projects
                </h1>
                <p className='text-md pb-4'>
                    Student groups are club creations focused on aspects of product developement in the world of cs. Club projects are club led ventures for idek what to put here come back later
                </p>
                <div className='justify-start grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                        {groups.map((item, index) => (
                        <Groups
                            key={index}
                            imageSrc={item.imageSrc}
                            title={item.title}
                            description={item.description}
                            websiteUri={item.websiteUri}
                        />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default SpecialGroup;