import { HeaderDiv } from './header.styles'
import {GameProps} from '../main/model'
import { FC } from 'react'
const Header: FC<GameProps> = ({game}) => {
	return (
		<HeaderDiv>
			<h1>
				Rocks
				Papers
				Scissors
			</h1>
			<div className="score">
				<span>SCORE</span>
				<span>{game}</span>
			</div>
		</HeaderDiv>
	)
}

export default Header
