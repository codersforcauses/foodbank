import React from 'react'
import {useRouter,NextRouter} from 'next/router'
import Footer from "@components/Footer"

interface Props {

}

const Town = (props: Props) => {
    const route:NextRouter = useRouter()
    const {id} = route.query
    return (
        <div>
            Town a{id}
            <Footer /> 
        </div>
    )
}

export default Town