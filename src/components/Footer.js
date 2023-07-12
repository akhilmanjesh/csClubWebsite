import React from 'react';

const Footer = () => {

    return (
        <div className='bg-gray-900 w-full items-center'>
            <div className='flex flex-col items-center w-full'>
                <h1 className='text-3xl text-white py-6'>
                    Connect With Us!
                </h1>
                <div className='flex flex-row justify-around text-lg w-full pb-4'>
                <a 
                        href='https://www.instagram.com/sjsucsclub/' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white text-black rounded-md px-2 py-2'>
                        Discord
                    </a>
                    <a 
                        href='https://www.instagram.com/sjsucsclub/' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white text-black rounded-md px-2 py-2'>
                        Instagram
                    </a>
                    <a 
                        href='https://www.instagram.com/sjsucsclub/' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white text-black rounded-md px-2 py-2'>
                        Facebook
                    </a>
                    <a 
                        href='https://www.instagram.com/sjsucsclub/' 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='bg-white text-black rounded-md px-2 py-2'>
                        Github
                    </a>
                </div>
                <div className='pb-2'>
                    {/* <p className='text-sm text-white'>
                        Site designed by  
                        <a 
                            href="https://akhilmanjesh.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className='text-purple-500 underline pl-1'>
                            Akhil Manjesh
                        </a>
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;
