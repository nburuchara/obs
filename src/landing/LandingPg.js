
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
    width: 65%;
    border: 1px solid black;
    overflow-y: scroll;
}

.meetings-options {
    width: 35%;
    border: 1px solid black;
}

.carousel-container {
    width: 90%;
    border: 1px solid #5e6261;
    border-radius: 6px;
    margin: auto;
    margin-top: 5%;
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.carousel-container h2 {

}

.carousel-container label {
    font-size: 77.5%;
    font-weight: normal;
    padding-left: 2.5%;
}

.carousel-container-call-btns button {
    padding: 1.5%;
    background-color: #4497f1;
    width: 15%;
    font-size: 100%;
    color: white;
    border: 1px solid  #4497f1;
    border-radius: 5px;
}

.carousel-container p {
    line-height: 1.5;
    font-weight: normal;
    font-size: 101%;
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
                                    <div className='carousel-container-call-btns'>
                                        <button>Zoom</button>
                                    </div>
                                    <p>An online Bible study group is a welcoming and interactive community where people gather virtually to explore scripture, share insights, and deepen their faith. Participants from diverse backgrounds connect through video calls, chat platforms, or dedicated apps, fostering spiritual growth and meaningful discussions. Each session often includes reading passages, group reflections, and guided teachings led by a facilitator or pastor. Members support one another through prayer and encouragement, creating a sense of fellowship despite physical distance. Accessible from anywhere, these groups offer flexibility and convenience, making it easy for believers to engage with God’s Word in a supportive online environment.</p>
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