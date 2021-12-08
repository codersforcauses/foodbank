import React from 'react'
import {useRouter,NextRouter} from 'next/router'

interface Props {

}

const Town = (props: Props) => {
    const route:NextRouter = useRouter()
    const {id} = route.query
    return (
        <div>
            Town a{id} 
        </div>
    )
}

export default Town