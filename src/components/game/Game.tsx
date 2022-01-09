import React, {FC, useEffect, useState} from 'react'
import {Props} from '../main/model'
import { GameDiv } from './game.styles'
import {ReactComponent as Rock} from '../../images/icon-rock.svg'
import {ReactComponent as Paper} from '../../images/icon-paper.svg'
import {ReactComponent as Scissors} from '../../images/icon-scissors.svg'

const Game: FC<Props> = ({pick, setPick}) => {

    const [house, setHouse] = useState<string>("")

    useEffect(() =>{
        let arr=['paper', 'scissors', 'rock']
        setHouse(arr[Math.floor(Math.random() * arr.length)])
    }, [pick])

    useEffect(() =>{

    }, [])


    return (
        <GameDiv>
            {
                pick === 'rock' 
                ? <div className="left">
                    <p>You Picked</p>
                    <div id="rock" className="svg rock">
                    <Rock />
                </div>
                    </div> 
                : pick === "paper" 
                ? <div className="left">
                    <p>You Picked</p>
                    <div id="paper" className="svg paper">
                    <Paper />
                </div>
                    </div> 
                : <div className="left">
                    <p>You Picked</p>
                    <div id="scissors" className="svg scissors">
                    <Scissors />
                </div>
                    </div>
            }
            <div className="rigth">
                <p>
                    The House Picked
                </p>
            </div>
        </GameDiv>
    )
}

export default Game
