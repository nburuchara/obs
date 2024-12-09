
import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div  `

    // - - FULL PAGE - - //

.full-page {
    width: 100%;
    height: 100vh;
    position: fixed;
}

.header {
    height: 10%;
    background-color: #4497f1;
}

`

export default class LandingPage extends Component {
    constructor () {
        super()
        this.state = {

        }
    }

    render () {
        return (
            <Styles>
                <div className='full-page'>
                    <div className='header'>
                        
                    </div>
                </div>
            </Styles>
        )
    }
}