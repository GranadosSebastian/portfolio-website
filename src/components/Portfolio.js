import React from 'react';
import portfolio from "../Data/portfolio.js";
import PortfolioItem from "./PortfolioItem.js";

function Portfolio() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md: grid-cols-1 lg:grid-cols-3 gap-4">
                {portfolio.map(project => (
                    <PortfolioItem
                        imgUrl={project.imgUrl}
                        title={project.title}
                        stack={project.stack}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Portfolio;