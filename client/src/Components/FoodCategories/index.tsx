import React from 'react';

export interface FoodCategoriesProps {
    word: string;
}

export const FoodCategories = (props: FoodCategoriesProps) => {
    return (
        <React.Fragment>
            <h1>{props.word}</h1>
        </React.Fragment>
    )
}