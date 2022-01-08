import React from 'react'
import { GameDiv } from './game.styles'
import {ReactComponent as Rock} from '../../images/icon-rock.svg'
import {ReactComponent as Paper} from '../../images/icon-paper.svg'
import {ReactComponent as Scissors} from '../../images/icon-scissors.svg'

const Game = () => {
    return (
        <GameDiv>
            <div className="two">
                <div className="left">
                    {Paper}
                </div>
                <div className="rigth">
                    {Scissors}
                </div>
            </div>
            <div className="one">
                {Rock}
            </div>
        </GameDiv>
    )
}

export default Game
