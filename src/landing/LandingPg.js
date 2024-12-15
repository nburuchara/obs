
import React, {Component} from 'react'
import styled from 'styled-components'

//? - - FILES - - //
import SearchTerms from '../meetings/MeetingsFile.js'

//? - - CSS - - //
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
    background-color: #f8fafc;
}

    // - - MEETINGS CAROUSEL - - //

.meetings-carousel {
    width: 65%;
    position: relative;
    border-top: 1px solid #cbd5e0;
    overflow-y: auto;
    padding-bottom: 5%;
}

.carousel-container {
    width: 90%;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    margin: auto;
    margin-top: 5%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.1);
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
    border-top: 1px solid #cbd5e0;
    border-bottom: 1px solid #cbd5e0;
}
  
.carousel-container-all-meetings-expandable.expanded {
    max-height: 500px; /* Large enough to fit all content */
    background-color: #f8fafc;
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
    border-top: 1px solid #cbd5e0;
}

    // - - MEETINGS OPTIONS (RIGHT PAGE) - - // 

.meetings-options {
    width: 35%;
    border-top: 1px solid #ccc;
    // border: 1px solid black;
    overflow-y: auto;
}

    // - - SEARCH BAR - - //

.meetings-options-header {
    height: 10%;
    // border: 1px solid black;
    margin-top: 9.5%;
}

.meetings-options-search-bar {
    display: flex;
    justify-content: space-between;
    height: 60%;
    width: 65%;
    border: 1px solid #ccc;
    border-radius: 6px;
    overflow: hidden;
    transition-property: border;
}

.meetings-options-search-bar.clicked {
    border: 1px solid #0078D7;
}

.meetings-options-search-bar-icon {
    width: 11.5%;
    // border: 1px solid black;
    text-align: center;
    background-color: white;
    border-radius: 6px;
}

.meetings-options-search-bar-icon img {
    width: 48%;
    margin-top: 10.5px;
}

.meetings-options-search-bar-input {
    width: 80.5%;
    // border: 1px solid black;
    background-color: white;
}

.meetings-options-search-bar-input input {
    width: 98%;
    height: 92.5%;
    padding-left: 0.5%;
    font-size: 100%;
    border: 1px solid transparent;
    background-color: transparent;
    outline: none;
}

.meetings-options-search-bar-close-icon {
    width: 8%;
    // border: 1px solid black;
    text-align: left;
    border-radius: 5px;
    background-color: white;
}

.meetings-options-search-bar-close-icon img {
    width: 65%;
    margin-top: 10.5px;
    margin-left: 5%;
    cursor: pointer;
}

    // - - CSS TRANSITIONS / ANIMATIONS - - //


.carousel-container-all-meetings,
.carousel-container-all-meetings-dropdown-img,
.meetings-options-search-bar {
    transition-duration: var(--def-transition-duration);
    transition-timing-function: ease-in-out;
}

`

//* - TRIE NODE IMPLEMENTATION (for search functionality) - *//
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }
        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;
        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;
        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }
        return true;
    }
}

export default class LandingPage extends Component {
    constructor () {
        super()
        this.state = {
            isExpanded: false,
            searchBarIsClicked: false,
            searchBarInput: '',
        }
            //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

            //* - SEARCH BAR REFERENCE - *//
        this.searchBarRef = React.createRef();
    }

    componentDidMount() {
        // Add a click event listener to the document
        document.addEventListener('click', this.handleOutsideSearchBarClick);
    }

    componentWillUnmount() {
        // Remove the click event listener to prevent memory leaks
        document.removeEventListener('click', this.handleOutsideSearchBarClick);
    }

    //! - - EXPAND SELECTED 'ALL MEETINGS' TAB - - !//

    toggleExpand = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
    };

    //! - - SEARCH FUNCTIONS - - !//

    searchBarClicked = () => {
        this.setState({
            searchBarIsClicked: true
        })
    }

    handleOutsideSearchBarClick = (event) => {
        // Check if the click is outside the search bar
        if (
            this.searchBarRef.current && 
            !this.searchBarRef.current.contains(event.target)
        ) {
            this.setState({
                searchBarIsClicked: false,
            });
        }
    };

    groupBy = (array, key) => {
        return array.reduce((result, currentValue) => {
            (result[currentValue[key]] = result[currentValue[key]] || []).push(currentValue);
            return result;
        }, {});
    }

    handleSearchChange = (e) => {
        const { searchFilterTitle, searchFilterSelected, menuOption1, menuOption2, menuOption3, menuOption4 } = this.state; 
        let { currentSectionSearching } = this.state;

        this.setState({
            searchBarInput: e.target.value,
            isSearchLoading: true,
            clearSearchBtn: true,
            showDocsPopupHomescreen: false
        });
        
        const searchInput = e.target.value.toLowerCase();
        
        // Clear previous timeout
    
    
        // Set a new timeout to execute after 500ms
        this.searchTimeout = setTimeout(() => {
            if (searchInput.trim() === "") {
                // Reset filteredOptions and loading state
                this.setState({
                    searchedData: "",
                    searchCloseBtn: false,
                    filteredOptions: [],
                    isSearchLoading: false,
                    resultsFound: false,
                    showDocsPopupHomescreen: true,
                    clearSearchBtn: false
                });

            } else {
                this.setState({ isSearchLoading: true, searchedData: searchInput, searchCloseBtn: true }, () => {
                    const filteredOptions = SearchTerms.filter(option => {
                        const name = option.name.toLowerCase();
                        const searchWords = searchInput.toLowerCase().split(' '); // Split search input into words
                        const optionWords = name.split(' '); // Split name into words
                    
                        if (searchWords.length === 1) {
                            // Special case: search input is a single word
                            const searchWord = searchWords[0];
                            return optionWords.some(optionWord => optionWord.startsWith(searchWord));
                        } else {
                            // Combine search words into a single substring
                            const searchSubstring = searchWords.join(' ');
                            return name.includes(searchSubstring);
                        }
                    });
    
                    const resultsFound = filteredOptions.length > 0; // Check if any results were found
    
                    const highlightedOptions = filteredOptions.map(option => ({
                        ...option,
                        highlightedName: this.highlightMatchedCharacters(option, searchInput)
                    }));
    
                    const groupedResults = this.groupBy(highlightedOptions, 'category');
    
                    // Construct trie for each category
                    const trieByCategory = {};
                    Object.entries(groupedResults).forEach(([category, options]) => {
                        trieByCategory[category] = new Trie();
                        options.forEach(option => {
                            trieByCategory[category].insert(option.name.toLowerCase());
                        });
                    });
    
                    // Update state after search logic is complete
                    this.setState({
                        trieByCategory,
                        groupedOptions: groupedResults,
                        filteredOptions: highlightedOptions,
                        isSearchLoading: false, // Hide loading screen
                        resultsFound: resultsFound
                    });
                });
            }
        }, 0); // Set debounce delay to 500ms
    };

    highlightMatchedCharacters(option, searchInput, isSearchLoading) {
        const name = option.name.toLowerCase();
        const searchRegex = new RegExp(`\\b${searchInput}`, 'i');
        const match = name.match(searchRegex);
        
        if (!isSearchLoading && searchInput && match) {
            // Match found and search input is not empty and not loading
            const startIndex = match.index;
            const endIndex = startIndex + searchInput.length;
            const highlightedName = (
                <span>
                    {option.name.substring(0, startIndex)}
                    <span style={{ fontWeight: "bold", color: "#2890B9" }}>
                        {option.name.substring(startIndex, endIndex)}
                    </span>
                    {option.name.substring(endIndex)}
                </span>
            );
            return highlightedName;
        } else {
            // No match found or search input is empty or loading
            return option.name;
        }
    }

    clearSearchBar = () => {
        this.setState({
            searchBarInput: '',
            clearSearchBtn: false
        })
    }

    renderCurrentMeetings = () => {

        const { isExpanded } = this.state;

        return (
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
        )
    }

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, resultsFound, groupedOptions } = this.state;

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
                                {this.renderCurrentMeetings()}
                            </div>
                            <div className='meetings-options'>
                                <div className='meetings-options-header'>
                                    <div 
                                    ref={this.searchBarRef}
                                    className={`meetings-options-search-bar ${searchBarIsClicked ? 'clicked' : ''}`}>
                                        <div className='meetings-options-search-bar-icon'>
                                            <img src='/assets/icons/search-icon.png' alt=''/>
                                        </div>
                                        <div className='meetings-options-search-bar-input'>
                                            <input
                                            id='searchBarInput'
                                            onClick={this.searchBarClicked}
                                            placeholder='Search...'
                                            value={this.state.searchBarInput}
                                            onChange={this.handleSearchChange}
                                            />
                                        </div>
                                        <div className='meetings-options-search-bar-close-icon'>
                                            {this.state.clearSearchBtn && <img onClick={this.clearSearchBar} src='/assets/icons/search-icon-close.png' alt=''/>}
                                        </div>
                                    </div>
                                    {searchInput !== "" && (
                                        <div style={{width: this.state.leftPaneMinimized ? "47%" : ""}} className='searchResults'>
                                            {isSearchLoading && 
                                                <div>
                                                    <p>Loading...</p>
                                                </div>
                                            }
                                            {!isSearchLoading && resultsFound && 
                                                Object.entries(groupedOptions).map(([category, options]) => (
                                                    <div style={{borderBottom: "1px solid #ccc", paddingTop: "1.2%", paddingBottom: "1.2%", position: "sticky"}} key={category}>
                                                        {options.map(option => (
                                                            <div 
                                                            onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                            className='searchResultCell' 
                                                            key={option.id}>
                                                                <p className='searchResultOption'>{option.highlightedName}</p>
                                                                <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'>'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'>'} {option.subCat4}</label> : null } </p> 
                                                            </div>
                                                        ))}
                                                    </div>
                                                ))
                                            }
                                            {!isSearchLoading && !resultsFound && 
                                                <div style={{textAlign: "center"}}>
                                                    <p style={{fontFamily: "dm sans", fontWeight: "bold", marginTop: "4.25%", color: "#2890b9"}}>No results found</p>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </Styles>
        )
    }
}