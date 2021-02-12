import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'
import MegaLogo from './MegaLogo'
import TopIcons from './TopIcons'

/*const Container = styled.div.attrs({
    className: 'container',
})``
*/
const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-light bg-light',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
//originalmente todo estaba dentro de <Container></Container> sin div
            <div>
                <MegaLogo/>
                <TopIcons></TopIcons>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </div>
        )
    }
}

export default NavBar