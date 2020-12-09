import { Character } from "lib/types";
import React, { useState } from "react";

interface Props {
    character: Character;
}

export const CharacterTab = ({ character }: Props) => {

    // const superheroMode = false;
    const [superheroMode, setSuperheroMode] = useState(false);

    const onClickTransform = () => {
        setSuperheroMode(!superheroMode);
    }

    const details = (character: Character, superheroMode: boolean) => {

        const displayData = superheroMode ? (<>
            <h2 className="text-4xl">{character.superName}</h2>
            <h3 className="text-3xl">Superpowers</h3>
            {character.superpowers}
            <h3 className="text-3xl">Use</h3>
            {character.use}
            <h3 className="text-3xl">Likes...</h3>
            {character.superLikes}
        </>) : (<>
            <h2 className="text-4xl">{character.name}</h2>
            <h3 className="text-3xl">About</h3>
            { character.about}
            <h3 className="text-3xl">Likes...</h3>
            { character.likes}
            <h3 className="text-3xl">Recipe</h3>
            { character.recipe}
        </>
            );


        return <>
            {displayData}
            <div className="grid grid-cols-2">
                <div >Location: {character.location}</div>
                <div >Alias: {superheroMode ? character.name : character.superName}</div>
            </div>
        </>
    }

    const characterCard = (character: Character, superheroMode: boolean) => {

        return superheroMode ? (
            <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                <div className="...">{details(character, superheroMode)}</div>
                <div className="..."> <img src={character.superAvatar} alt={character.superName}/></div>
            </div>
        ) :
            (
                <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                    <div className="..."><img src={character.avatar} alt={character.name}/></div>
                    <div className="...">{details(character, superheroMode)}</div>
                </div>
            );
    }


    return (
        <div className="items-center justify-center" >
            <div className="rounded bg-grey-light w-2/4 ">
                {characterCard(character, superheroMode)}
            </div>
            {/* TODO replace with button */}
            <div className="bg-green-500" onClick={onClickTransform}>
                Transform!!!!
            </div>
        </div>
    );






}