import styled from "styled-components";

const PickUpDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width: 900px;
flex-direction: column;
margin: auto;

.two{
    display:flex;
	justify-content: space-evenly;
	align-items:center;
	width: 100%;
	margin: 100px auto;
	margin:bottom: 0 !important
}
.one{
	display:flex;
	justify-content: center;
	align-items:center;
	margin: 100px auto;
	margin:bottom: 0 !important
}
.svg{
    transform: scale(1.75);
    display: flex;
    align-items: center;
    justify-content: center;
	padding:30px;
	background: white;
	border-radius: 50%;
	position:relative;
	transition: 0.3s linear;
	cursor:pointer;
	margin: auto;
}
.paper::before{
	content: "";
	position:absolute;
	top:0;
	bottom:0;
	left: 0;
	right: 0;
	padding: 10px;
	border-radius: 50%;
	background: linear-gradient(45deg, hsl(230, 89%, 62%), hsl(230, 89%, 65%));
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
	z-index:10
}
.rock::before{
	content: "";
	position:absolute;
	top:0;
	bottom:0;
	left: 0;
	right: 0;
	padding: 10px;
	border-radius: 50%;
	background: linear-gradient(45deg, hsl(349, 71%, 52%), hsl(349, 70%, 56%));
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
	z-index:10
}
.scissors::before{
	content: "";
	position:absolute;
	top:0;
	bottom:0;
	left: 0;
	right: 0;
	padding: 10px;
	border-radius: 50%;
	background: linear-gradient(45deg, hsl(39, 89%, 49%), hsl(40, 84%, 53%));
	-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
	z-index:10
}

.svg:hover{
	transform: scale(1.85);
	box-shadow: .5px .5px #ddd;
}
`

export {PickUpDiv}