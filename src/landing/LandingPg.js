
import React, {Component} from 'react'
import styled from 'styled-components'

const Styles = styled.div  `

    // - - FULL PAGE - - //

.full-page {
    width: 100%;
    height: 100vh;
    position: fixed;
}

    // - - NAVBAR - - //

.navbar {
    height: 10%;
    background-color: #4497f1;
}

    // - - MAIN SECTION - - //

.main-section {
   height: 90%;
    position: relative;
}

.main-section-header {
    height: 22.5%;
    // border: 1px solid black;
}

    // - MAIN SECTION HEADER - //

.main-section-header h1 {
    text-align: center;
    font-size: 80px;
    // font-family: palatino;
}

    // - MAIN SECTION BODY - //

.main-section-body {
    position: absolute;
    bottom: 0;
    height: 77.5%;
    // border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

    // - - MEETINGS CAROUSEL - - //

.meetings-carousel {
    width: 50%;
    border: 1px solid black;
    overflow-y: scroll;
}

.meetings-options {
    width: 50%;
    border: 1px solid black;
}

.carousel-container {
    width: 90%;
    border: 1px solid #5e6261;
    border-radius: 6px;
    margin: auto;
    margin-top: 5%;
}

.carousel-container label {
    font-size: 80%;
    font-weight: normal;
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
                    <div className='navbar'>
                        
                    </div>
                    <div className='main-section'>
                        <div className='main-section-header'>
                            <h1>Free Online Bible Study</h1>
                        </div>
                        <div className='main-section-body'>
                            <div className='meetings-carousel'>
                                <div className='carousel-container'>
                                    <h2>Tuesday Biblica Meeting<label>Tuesday 6:00 pm</label></h2>
                                    
                                </div>
                            </div>
                            <div className='meetings-options'>

                            </div>
                        </div>
                        
                    </div>
                </div>
            </Styles>
        )
    }
}