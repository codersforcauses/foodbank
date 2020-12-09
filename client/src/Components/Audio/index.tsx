import React from 'react';

interface Props {
    soundFile: any;
    loop: boolean;
}
const Audio = ({ soundFile, loop }: Props) => {
    console.log("playing music");
    return (
        <audio autoPlay={true} loop={loop}>
            <source src={soundFile} type="audio/mpeg"></source>
        </audio>
    )
}

export default Audio