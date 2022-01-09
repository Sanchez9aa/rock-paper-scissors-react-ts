import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*{
		font-family: Barlow, sans-serif;
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}
	body{
		min-height: 100vh;
		background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
		padding:40px;
	}
`

const MainDiv = styled.div`
	display:flex;
	flex-direction:column;
`

export { GlobalStyle, MainDiv }