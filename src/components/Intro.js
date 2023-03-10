import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Sebastian</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Software Developer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hello, My name is Sebastian Granados and I am a software developer, musician, and lifelong learner. Checkout my{' '}
                <a
                    href="https://www.linkedin.com/in/sebastian-granados-354b98aa/"
                    target="_blank"
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel="noreferrer noopener"
                >
                    LinkedIn
                </a>{' '}
                for more information.{' '}
            </p>
        </div>
    )
}

export default Intro;