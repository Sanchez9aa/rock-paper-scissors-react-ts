import PickUp from '../pickUp/PickUp'
import Header from '../header/Header'
import { GlobalStyle , MainDiv} from './main.styled'
import {useState } from 'react'
import Game from '../game/Game'

const Main = () => {

    const [pick, setPick] = useState<string>("")
    const [game, setGame] = useState<number>(0)
    

    return (
        <>
            <GlobalStyle/>
			<Header game={game}/>
            {
                pick === "" ?  
                <PickUp pick={pick} setPick={setPick}/>
                : <Game pick={pick} setPick={setPick}/>  
            }
                
        </>
    )
}

export default Main
