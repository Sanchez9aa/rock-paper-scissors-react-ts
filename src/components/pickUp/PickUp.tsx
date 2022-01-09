import React, { FC, useRef } from 'react'
import { PickUpDiv } from './pickUp.styles'
import {ReactComponent as Rock} from '../../images/icon-rock.svg'
import {ReactComponent as Paper} from '../../images/icon-paper.svg'
import {ReactComponent as Scissors} from '../../images/icon-scissors.svg'
import {Props} from '../main/model'


const PickUp: FC<Props> = ({pick, setPick}) => {

    const handleClick = (e:React.MouseEvent<HTMLElement>) =>{
        setPick(e.currentTarget.id)
    } 

    return (
        <PickUpDiv>
            <div className="two">
                <div id="paper" className="svg paper" onClick={(e:React.MouseEvent<HTMLElement>) => handleClick(e)}>
                    <Paper />
                </div>
                <div id="scissors" className="svg scissors" onClick={(e:React.MouseEvent<HTMLElement>) => handleClick(e)}> 
                    <Scissors/>
                </div>
            </div>
            <div className="one">
            <div id="rock" className="svg rock" onClick={(e:React.MouseEvent<HTMLElement>) => handleClick(e)}>
                <Rock/>
            </div>
            </div>
        </PickUpDiv>
    )
}
export default PickUp