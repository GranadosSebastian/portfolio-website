import React from 'react';

function PortfolioItem({title, imgUrl, stack, link}) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-700 ease-in-out hover:-translate-y-1 hover:scale-105 border-2 border-stone-900 dark:border-white rounded-md overflow-hidden">
            <img
                src={imgUrl}
                alt="portfolio"
                className="w-full h-36 md:48 object-cover cursor-pointer"
            />
            <div className="w-full p-4">
                <h3 className="text-lg m:text-xl mb-2 md:mb-3 font-semibold dark:text-white">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sms">
                    {stack.map(item => (
                        <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900
                        dark:border-white rounded-md dark:text-white">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
        </a>
    )
}

export default PortfolioItem;