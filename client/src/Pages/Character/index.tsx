
import { CharacterTab } from 'Components/CharacterTab';
import { Character } from 'lib/types';
import React from 'react'
import { useParams } from 'react-router';
import fireman from "lib/mock/fireman.jpg";
import normalman from "lib/mock/normalman.jpg";


interface ParamTypes {
    id: string
}

const mockCharacter: Character = {
    name: "Bread",
    superName: "Toast",
    avatar: normalman,
    superAvatar: fireman,
    superpowers: "Makes you fiery, you can't see me",
    use: "Feel good, carb load",
    likes: "Potatoes",
    superLikes: "Apples",
    location: "grainField",
    about: "Johnnn Ceeeena",
    recipe: "bread with chocolate syrup"
}

const CharacterPage: React.FC = () => {
    const { id } = useParams<ParamTypes>();
    console.log(id);
    // TODO get data from DB

    return (
        <div className="items-center justify-center">
            <CharacterTab character={mockCharacter} />
        </div>
    );
}

export default CharacterPage
