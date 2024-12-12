
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
    height: 7%;
    background-color: #4497f1;
}

    // - - MAIN SECTION - - //

.main-section {
   height: 93%;
    position: relative;
}

.main-section-header {
    height: 15%;
    // border: 1px solid black;
}

    // - MAIN SECTION HEADER - //

.main-section-header h1 {
    text-align: center;
    font-size: 40px;
    // font-family: palatino;
    // color: white;
}

    // - MAIN SECTION BODY - //

.main-section-body {
    position: absolute;
    bottom: 0;
    height: 85%;
    // border: 1px solid black;
    width: 100%;
    display: flex;
    justify-content: space-between;
}

    // - - MEETINGS CAROUSEL - - //

.meetings-carousel {
    width: 65%;
    position: relative;
    border-top: 1px solid #ccc;
    overflow-y: auto;
    padding-bottom: 5%;
}

.carousel-container {
    width: 90%;
    border: 1px solid #5e6261;
    border-radius: 6px;
    margin: auto;
    margin-top: 5%;
}

.carousel-container p {
    font-size: 101%;
}

.carousel-container-header {
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.carousel-container-header h2 {
    
}

.carousel-container-header label {
    font-size: 77.5%;
    font-weight: normal;
    padding-left: 2.5%;
    color: #5e626a;
}

.carousel-container-call-btns {
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.carousel-container-call-btns button {
    padding: 1.5%;
    background-color: #4497f1;
    width: 15%;
    font-size: 100%;
    color: white;
    border: 1px solid  #4497f1;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 2%;
}

.carousel-container-call-details {
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.carousel-container-call-details p {
    font-weight: bolder;
    color: #4497f1;
    line-height: 1;
} 

.carousel-container-call-details label {
    font-weight: normal;
    color: #5e626a;
    padding-left: 2%;
}

.carousel-container-meeting-details {
    padding-left: 2.5%;
    padding-right: 2.5%;
}

.carousel-container-meeting-details p {
    font-weight: normal;
    line-height: 1.85;
}

.carousel-container-all-meetings {
    // margin-bottom: 5%;
    display: flex;
    position: relative;
    justify-content: space-between;
    transition-property: background-color;
}

.carousel-container-all-meetings:hover {
    background-color: #f8fafc;
    cursor: pointer;
}

.carousel-container-all-meetings-total {
    width: 8%;
}

.carousel-container-all-meetings-total span {
    background-color: #bcdcff;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    position: absolute;
    bottom: 0;
    margin-bottom: 12.5px;
    margin-left: 2.5%;
    border-radius: 50%;
    font-weight: bold;
}

.carousel-container-all-meetings-label {
    width: 82%;
}

.carousel-container-all-meetings-label p {
    margin-left: 1.5%;
    font-size: 105%;
}

.carousel-container-all-meetings-dropdown {
    width: 10%;
    text-align: right;
    padding-right: 2.5%;
}

.carousel-container-all-meetings-dropdown img { 
    width: 15px;
    margin-top: 17.5px;
}

.carousel-container-all-meetings-dropdown-img {
    transition-property: transform;
}

.carousel-container-all-meetings-dropdown-img.expanded {
    transform: rotate(180deg);
}

.carousel-container-all-meetings-expandable {
    overflow: hidden;
    transition: max-height 0.5s ease;
    max-height: 52.5px; /* Collapsed height */
    margin-bottom: 50px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
}
  
.carousel-container-all-meetings-expandable.expanded {
    max-height: 500px; /* Large enough to fit all content */
    background-color: transparent;
}

.carousel-container-all-meetings-list {
    // background-color: #f8fafc;
    transition: opacity 0.5s ease;
}

.carousel-container-all-meetings-list.expanded {
    opacity: 0;
}

.carousel-container-all-meetings-list p {
    margin-left: 2.5%;
    line-height: 1;
    font-size: 105%;
}

.carousel-container-all-meetings-list-cell {
    border-top: 1px solid #ccc;
}

    // - - MEETINGS OPTIONS (RIGHT PAGE) - - // 

.meetings-options {
    width: 35%;
    border-top: 1px solid #ccc;
    overflow-y: auto;
}

    // - - CSS TRANSITIONS / ANIMATIONS - - //


.carousel-container-all-meetings,
.carousel-container-all-meetings-dropdown-img {
    transition-duration: var(--def-transition-duration);
    transition-timing-function: ease-in-out;
}

`

export default class LandingPage extends Component {
    constructor () {
        super()
        this.state = {
            isExpanded: false,
        }
    }

    toggleExpand = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
    };

    render () {

        const { isExpanded } = this.state;

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
                                    <div className='carousel-container-header'>
                                        <h2>Tuesday BB Meeting<label>Tuesday 6:00 pm</label></h2>
                                    </div>
                                    <div className='carousel-container-call-btns'>
                                        <button>Zoom</button>
                                        <button>Phone Call</button>
                                    </div>
                                    <div className='carousel-container-call-details'>
                                        <p>Zoom: <label>ID: 865 4264 0439</label> <label>Password: Divine</label></p>
                                        <p>Phone: <label>253-215-8782</label> <label>Access Code: 170965</label></p>
                                    </div>
                                    <div className='carousel-container-meeting-details'>
                                        <p>An online Bible study group is a welcoming and interactive community where people gather virtually to explore scripture, share insights, and deepen their faith. Participants from diverse backgrounds connect through video calls, chat platforms, or dedicated apps, fostering spiritual growth and meaningful discussions. Each session often includes reading passages, group reflections, and guided teachings led by a facilitator or pastor. Members support one another through prayer and encouragement, creating a sense of fellowship despite physical distance. Accessible from anywhere, these groups offer flexibility and convenience, making it easy for believers to engage with God’s Word in a supportive online environment.</p>
                                    </div>
                                    <div
                                    className={`carousel-container-all-meetings-expandable ${isExpanded ? 'expanded' : ''}`}
                                    style={{backgroundColor: isExpanded ? "#f8fafc" : ""}}
                                    >
                                        <div onClick={this.toggleExpand} className='carousel-container-all-meetings'>
                                            <div className='carousel-container-all-meetings-total'>
                                                <span>3</span>
                                            </div>
                                            <div className='carousel-container-all-meetings-label'>
                                                <p>All meeting times</p>
                                            </div>
                                            <div className='carousel-container-all-meetings-dropdown'>
                                                <img className={`carousel-container-all-meetings-dropdown-img ${isExpanded ? 'expanded' : ''}`} src='/assets/icons/dropdown-arrow.png' alt=''/>
                                            </div>
                                        </div>
                                        <div className={`carousel-container-all-meetings-list ${isExpanded ? '' : 'expanded'}`}>
                                            <div className='carousel-container-all-meetings-list-cell'>
                                                <p>Wednesday 6:00 pm</p>
                                            </div>
                                            <div className='carousel-container-all-meetings-list-cell'>
                                                <p>Thursday 6:00 pm</p>
                                            </div>
                                            <div className='carousel-container-all-meetings-list-cell'>
                                                <p>Friday 6:00 pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <div className='carousel-container'>
                                    <div className='carousel-container-header'>
                                        <h2>Tuesday BB Meeting<label>Tuesday 6:00 pm</label></h2>
                                    </div>
                                    <div className='carousel-container-call-btns'>
                                        <button>Zoom</button>
                                        <button>Phone Call</button>
                                    </div>
                                    <div className='carousel-container-call-details'>
                                        <p>Zoom: <label>ID: 865 4264 0439</label> <label>Password: Divine</label></p>
                                        <p>Phone: <label>253-215-8782</label> <label>Access Code: 170965</label></p>
                                    </div>
                                    <div className='carousel-container-meeting-details'>
                                        <p>An online Bible study group is a welcoming and interactive community where people gather virtually to explore scripture, share insights, and deepen their faith. Participants from diverse backgrounds connect through video calls, chat platforms, or dedicated apps, fostering spiritual growth and meaningful discussions. Each session often includes reading passages, group reflections, and guided teachings led by a facilitator or pastor. Members support one another through prayer and encouragement, creating a sense of fellowship despite physical distance. Accessible from anywhere, these groups offer flexibility and convenience, making it easy for believers to engage with God’s Word in a supportive online environment.</p>
                                    </div>
                                    <div className='carousel-container-all-meetings'>
                                        <div className='carousel-container-all-meetings-total'>

                                        </div>
                                        <div className='carousel-container-all-meetings-label'>
                                            <p>See all meetings</p>
                                        </div>
                                        <div className='carousel-container-all-meetings-dropdown'>
                                            
                                        </div>
                                    </div>
                                </div> */}

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