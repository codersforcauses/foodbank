import React from 'react';

import "./index.css";

export interface FoodCategoriesProps {
    word: string;
}

export const FoodCategories = (props: FoodCategoriesProps) => {
    const rotate = 180;
    return (
        <React.Fragment>
            <div>
                <div className="grains">
                <svg height="400" width="400" viewBox="0 0 500 500">
                <circle r="250" cx="250" cy="250" fill="transparent"/>
                    <circle className="grains" r="100" cx="250" cy="250" fill="transparent"
                        stroke="#DD8127" strokeWidth="200" strokeDasharray="calc(30 * 628/100) 628"
                        transform="rotate(162, 250, 250) translate(5, 5)"
                    />

                <circle className="vegetables" r="100" cx="250" cy="250" fill="transparent"
                    stroke="#55B586" strokeWidth="200" strokeDasharray="calc(30 * 628/100) 628"
                    transform="rotate(270, 250, 250) translate(5, 5)"
                />

                <circle className="fruit" r="100" cx="250" cy="250" fill="transparent"
                        stroke="#66B944" strokeWidth="200" strokeDasharray="calc(12 * 628/100) 628"
                        transform="rotate(378, 250, 250) translate(5, 5)"
                    />
                <circle className="dairy" r="100" cx="250" cy="250" fill="transparent"
                        stroke="#A684BC" strokeWidth="200" strokeDasharray="calc(12 * 628/100) 628"
                        transform="rotate(421.2, 250, 250) translate(5, 5)"
                    />

                <circle className="meat" r="100" cx="250" cy="250" fill="transparent"
                    stroke="#69A3D8" strokeWidth="200" strokeDasharray="calc(16 * 628/100) 628"
                    transform="rotate(464.4, 250, 250) translate(5, 5)"
                />


                </svg>

                </div>

            </div>
        </React.Fragment>
    )
}