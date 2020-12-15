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
                <svg height="400" width="400" viewBox="0 0 400 400">
                <circle r="200" cx="200" cy="200" fill="transparent"/>
                    <circle className="grains" r="100" cx="200" cy="200" fill="transparent"
                        stroke="#DD8127" strokeWidth="200" strokeDasharray="calc(30 * 628/100) 628"
                        transform="rotate(162, 200, 200)"
                    />

                <circle className="vegetables" r="100" cx="200" cy="200" fill="transparent"
                    stroke="#55B586" strokeWidth="200" strokeDasharray="calc(30 * 628/100) 628"
                    transform="rotate(270, 200, 200)"
                />

                <circle className="fruit" r="100" cx="200" cy="200" fill="transparent"
                        stroke="#66B944" strokeWidth="200" strokeDasharray="calc(12 * 628/100) 628"
                        transform="rotate(378, 200, 200)"
                    />
                <circle className="dairy" r="100" cx="200" cy="200" fill="transparent"
                        stroke="#A684BC" strokeWidth="200" strokeDasharray="calc(12 * 628/100) 628"
                        transform="rotate(421.2, 200, 200)"
                    />

                <circle className="meat" r="100" cx="200" cy="200" fill="transparent"
                    stroke="#69A3D8" strokeWidth="200" strokeDasharray="calc(16 * 628/100) 628"
                    transform="rotate(464.4, 200, 200)"
                />


                </svg>

                </div>

            </div>
        </React.Fragment>
    )
}