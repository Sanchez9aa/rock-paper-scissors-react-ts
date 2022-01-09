import PickUp from '../pickUp/PickUp'
import Header from '../header/Header'
import { GlobalStyle , MainDiv} from './main.styled'
import { useState } from 'react'

const Main = () => {

    const [pick, setPick] = useState<string>("")

    return (
        <>
            <GlobalStyle/>
			<Header/>
            <PickUp pick={pick}/>    
        </>
    )
}

export default Main
