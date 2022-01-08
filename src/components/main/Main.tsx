import React from 'react'
import Game from '../game/Game'
import Header from '../header/Header'
import { GlobalStyle } from './main.styled'

const Main = () => {
    return (
        <>
            <GlobalStyle/>
			<Header/>
            <Game/>
        </>
    )
}

export default Main
