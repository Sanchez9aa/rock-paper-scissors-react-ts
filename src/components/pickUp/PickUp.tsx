import { PickUpDiv } from './pickUp.styles'
import {ReactComponent as Rock} from '../../images/icon-rock.svg'
import {ReactComponent as Paper} from '../../images/icon-paper.svg'
import {ReactComponent as Scissors} from '../../images/icon-scissors.svg'
import { FC } from 'react'

const Props = {
    pick: string,
    setPick: React.Dispatch<React.SetStateAction<string>>
}

const PickUp: FC<Props> = (pick, setPick) => {
    return (
        <PickUpDiv>
            <div className="two">
                <div className="svg paper">
                    <Paper fill='hsl(229, 25%, 31%)'/>
                </div>
                <div className="svg scissors">
                    <Scissors/>
                </div>
            </div>
            <div className="one">
            <div className="svg rock">
                <Rock/>
            </div>
            </div>
        </PickUpDiv>
    )
}
export default PickUp