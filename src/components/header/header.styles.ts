import styled from 'styled-components'

const HeaderDiv = styled.div`
	display:flex;
	justify-content: space-between;
	border: 3px solid hsl(217, 16%, 45%); 
	border-radius: 10px;
	padding: 20px;
	margin: 0 auto;
	max-width: 900px;

	h1{
		color: white;
		max-width: 50px;
	}

	.score{
		display:flex;
		justify-content:space-between;
		align-items:center;
		flex-direction: column;
		background:white;
		padding: 27px;
		border-radius: 10px;
	}

	.score span:nth-child(1){
		color: hsl(229, 64%, 46%);
		font-size: 15px;
	}

	.score span:nth-child(2){
		color: hsl(229, 25%, 31%);
		font-size: 35px;
	}
` 


export {HeaderDiv}