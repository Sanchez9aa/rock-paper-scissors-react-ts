import { HeaderDiv } from './header.styles'

const Header = () => {
	return (
		<HeaderDiv>
			<h1>
				Rocks
				Papers
				Scissors
			</h1>
			<div className="score">
				<span>SCORE</span>
				<span>0</span>
			</div>
		</HeaderDiv>
	)
}

export default Header
