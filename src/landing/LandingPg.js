
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
    // position: fixed;
}

    // - - NAVBAR - - //

.navbar {
    margin: auto;
    height: 60px;
    background-color: #4497f1;
    max-width: 1920px;
}

    // - - MAIN SECTION - - //

.main-section {
    position: relative;
    height: 1000px;
    position: relative;
    max-width: 1920px;
    margin: auto;
    overflow-y: auto;
    border-bottom: 5px solid red;
}

    // - MAIN SECTION HEADER - //

.main-section-header {
    height: 149px;
    position: relative;
    // border: 1px solid black;
    // border-bottom: 1px solid red;
}

.header-title-container { 
    position: absolute;
    top: 0;
    width: 100%;
    height: 74.5px;
    // border: 1px solid black;  
}

.header-title-container h1 {
    text-align: center;
    font-size: 250%;
    margin-top: 1%;
    // font-family: palatino;
    color: white;
}

.header-details-container-left button {
    position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 0.8%;
    margin-left: 0.8%;
    padding: 0.8%;
    border-radius: 5px;
    background-color: #4497f1;
    border: 1px solid #4497f1;
    color: white;
    font-weight: bold;
    cursor: pointer;
    width: 10%;
}

.header-details-container-right button {
    position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 0.8%;
    margin-right: 0.8%;
    padding: 1%;
    border-radius: 5px;
    background-color: #4497f1;
    border: 1px solid #4497f1;
    color: white;
    font-weight: bold;
    font-size: 100%;
    cursor: pointer;
    width: 19%;
}

    // - MAIN SECTION BODY - //

.main-section-body {
    // max-width: 1920px;
    position: absolute;
    bottom: 0;
    height: 85%;
    // border: 1px solid black;
    // width: 100%;
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
    width: 95%;
    border: 1px solid #cbd5e0;
    border-radius: 6px;
    margin-left: 1.25%;
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

.carousel-container-meeting-details textarea {
    width: 100%;
    line-height: 1.85;
    font-family: Arial, sans-serif;
    resize: none;
    font-size: 100%;
    min-height: 250px;
    border: none;
    outline: none;
    background-color: transparent;
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
    height: 20%;
    // border: 1px solid black;
    margin-top: 9.5%;
    position: relative;
}

.meetings-options-search-bar {
    display: flex;
    justify-content: space-between;
    height: 40px;
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
    height: 100%;
    display: grid;
    place-items: center;
}

.meetings-options-search-bar-icon img {
    width: 45%;
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

.searchResults {
    z-index: 5;
    width: 65%;
    max-height: 350px;
    border: 1px solid #ccc;
    background-color: white;
    margin-top: 8px;
    border-radius: 5px;
    padding: 2%;
    overflow-y: scroll;
    position: relative;
}

.searchResults.empty {
    opacity: 0;
}

.searchResultCell {
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    border-radius: 6px;
}

.searchResultCell:hover {
    background-color: #dcecfd;
    cursor: pointer;
}

.searchResultOption {
    margin-left: 2.5%;
    margin-right: 1.5%;
    font-size: 90%;
    margin-bottom: 0px;
}

.searchResultCategory {
    margin-left: 2.5%;
    margin-top: 3px;
    font-size: 70%;
}

    // - - MEETING TIME ZONE SELECTOR - - //


.timezone-container {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border: 1px solid #ccc;
    width: 60%;
    align-items: center;
    border-radius: 5px;
    margin-top: 10px;
}

.timezone-container-img {
    width: 13%;
    display: flex; /* Use flexbox to center the clock icon */
    justify-content: center; /* Horizontally center the clock icon */
    align-items: center; /* Vertically center the clock icon */
}

.select-wrapper {
    position: relative;
    width: 87%; /* Matches the select element's width */
    margin-top: 0px;
    // border: 1px solid black;
    text-align: right;
}

.clock-icon {
    width: 16px; /* Size of the clock icon */
    height: 16px; /* Size of the clock icon */
    pointer-events: none; /* Prevent the icon from interfering with user interaction */
}

#timezoneDropdown {
    outline: none;
    width: 100%;
    padding: 10px;
    padding-left: 0px;
    font-size: 16px;
    z-index: 1;
    border: 0px solid #ccc;
    border-radius: 5px;
    padding-right: 20px; /* Add padding to the right */
    appearance: none; /* Remove default browser styling for the arrow */
    -webkit-appearance: none; /* Remove WebKit styling */
    -moz-appearance: none; /* Remove Firefox styling */
    background-image: url('/assets/icons/dropdown-down-arrow.png'); /* Optional: Add a custom arrow icon */
    background-repeat: no-repeat;
    background-position: calc(100% - 10px) center; /* Adjust arrow position */
    background-size: 10px; /* Adjust the size of the arrow */
}

    // - - MEETING SUBMIT PAGE - - /

.meeting-submit-details {
    position: relative;
    width: 50%;
    // border: 1px solid black;
    border-top: 1px solid #ccc;
    padding-left: 1.5%;
    padding-right: 1.5%;
}

.meeting-submit-confirm {
    position: relative;
    width: 50%;
    border-top: 1px solid #ccc;
    padding-left: 1.5%;
    padding-right: 1.5%;
}

    // - SUBMIT FORM - //

.meeting-submit-input-form-page-1 {
    // border: 1px solid black;
    // position: absolute;
    // bottom: 0;
    // width: 100%;
    // height: 81%;
}

.meeting-submit-input-form-page-1 h4 {
    margin-bottom: 10px;
}

.meeting-submit-input-form-page-1 span {
    color: red;
}

.meeting-submit-input-form-page-1 input {
    width: 75%;
    font-size: 100%;
    padding: 8px;
    border: 1px solid #5e626a;
    outline: none;
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

            //* - MAIN BODY COMPONENTS - *//
            showMeetingList: true,
            showAddMeeting: false,

            //* - SINGLE MEETING COMPONENTS - *//
            isExpanded: false,

            //* - SEARCH BAR COMPONENTS - *//
            searchBarIsClicked: false,
            searchBarInput: '',

            //* - TIME ZONE COMPONENTS - *//
            showTimezones: true,
            timezones: [], // List of timezones
            selectedTimezone: "", // Selected timezone,

            data: [], // Stores fetched Firestore data
            input: "", // Stores textarea input
        }
            //* - TRIE NODE (for search functionality) - *//
        this.trie = new Trie(); // Initialize the trie

            //* - SEARCH BAR REFERENCE - *//
        this.searchBarRef = React.createRef();
    }

    componentDidMount() {
        // Add a click event listener to the document
        document.addEventListener('click', this.handleOutsideSearchBarClick);
        const timezones = [
            "Africa/Abidjan",
            "Africa/Accra",
            "Africa/Addis_Ababa",
            "Africa/Algiers",
            "Africa/Asmara",
            "Africa/Bamako",
            "Africa/Bangui",
            "Africa/Banjul",
            "Africa/Bissau",
            "Africa/Blantyre",
            "Africa/Brazzaville",
            "Africa/Bujumbura",
            "Africa/Cairo",
            "Africa/Casablanca",
            "Africa/Ceuta",
            "Africa/Conakry",
            "Africa/Dakar",
            "Africa/Dar_es_Salaam",
            "Africa/Djibouti",
            "Africa/Douala",
            "Africa/El_Aaiun",
            "Africa/Freetown",
            "Africa/Gaborone",
            "Africa/Harare",
            "Africa/Johannesburg",
            "Africa/Juba",
            "Africa/Kampala",
            "Africa/Khartoum",
            "Africa/Kigali",
            "Africa/Kinshasa",
            "Africa/Lagos",
            "Africa/Libreville",
            "Africa/Lome",
            "Africa/Luanda",
            "Africa/Lubumbashi",
            "Africa/Lusaka",
            "Africa/Malabo",
            "Africa/Maputo",
            "Africa/Maseru",
            "Africa/Mbabane",
            "Africa/Mogadishu",
            "Africa/Monrovia",
            "Africa/Nairobi",
            "Africa/Ndjamena",
            "Africa/Niamey",
            "Africa/Nouakchott",
            "Africa/Ouagadougou",
            "Africa/Porto-Novo",
            "Africa/Sao_Tome",
            "Africa/Tripoli",
            "Africa/Tunis",
            "Africa/Windhoek",
            "America/Adak",
            "America/Anchorage",
            "America/Anguilla",
            "America/Antigua",
            "America/Araguaina",
            "America/Argentina/Buenos_Aires",
            "America/Argentina/Catamarca",
            "America/Argentina/Cordoba",
            "America/Argentina/Jujuy",
            "America/Argentina/La_Rioja",
            "America/Argentina/Mendoza",
            "America/Argentina/Rio_Gallegos",
            "America/Argentina/Salta",
            "America/Argentina/San_Juan",
            "America/Argentina/San_Luis",
            "America/Argentina/Tucuman",
            "America/Argentina/Ushuaia",
            "America/Aruba",
            "America/Asuncion",
            "America/Atikokan",
            "America/Bahia",
            "America/Bahia_Banderas",
            "America/Barbados",
            "America/Belem",
            "America/Belize",
            "America/Blanc-Sablon",
            "America/Boa_Vista",
            "America/Bogota",
            "America/Boise",
            "America/Cambridge_Bay",
            "America/Campo_Grande",
            "America/Cancun",
            "America/Caracas",
            "America/Cayenne",
            "America/Cayman",
            "America/Chicago",
            "America/Chihuahua",
            "America/Costa_Rica",
            "America/Creston",
            "America/Cuiaba",
            "America/Curacao",
            "America/Danmarkshavn",
            "America/Dawson",
            "America/Dawson_Creek",
            "America/Denver",
            "America/Detroit",
            "America/Dominica",
            "America/Edmonton",
            "America/Eirunepe",
            "America/El_Salvador",
            "America/Fort_Nelson",
            "America/Fortaleza",
            "America/Glace_Bay",
            "America/Goose_Bay",
            "America/Grand_Turk",
            "America/Grenada",
            "America/Guadeloupe",
            "America/Guatemala",
            "America/Guayaquil",
            "America/Guyana",
            "America/Halifax",
            "America/Havana",
            "America/Hermosillo",
            "America/Indiana/Indianapolis",
            "America/Indiana/Knox",
            "America/Indiana/Marengo",
            "America/Indiana/Petersburg",
            "America/Indiana/Tell_City",
            "America/Indiana/Vevay",
            "America/Indiana/Vincennes",
            "America/Indiana/Winamac",
            "America/Inuvik",
            "America/Iqaluit",
            "America/Jamaica",
            "America/Juneau",
            "America/Kentucky/Louisville",
            "America/Kentucky/Monticello",
            "America/Kralendijk",
            "America/La_Paz",
            "America/Lima",
            "America/Los_Angeles",
            "America/Lower_Princes",
            "America/Maceio",
            "America/Managua",
            "America/Manaus",
            "America/Marigot",
            "America/Martinique",
            "America/Matamoros",
            "America/Mazatlan",
            "America/Menominee",
            "America/Merida",
            "America/Metlakatla",
            "America/Mexico_City",
            "America/Miquelon",
            "America/Moncton",
            "America/Monterrey",
            "America/Montevideo",
            "America/Montserrat",
            "America/Nassau",
            "America/New_York",
            "America/Nipigon",
            "America/Nome",
            "America/Noronha",
            "America/North_Dakota/Beulah",
            "America/North_Dakota/Center",
            "America/North_Dakota/New_Salem",
            "America/Nuuk",
            "America/Ojinaga",
            "America/Panama",
            "America/Pangnirtung",
            "America/Paramaribo",
            "America/Phoenix",
            "America/Port-au-Prince",
            "America/Port_of_Spain",
            "America/Porto_Velho",
            "America/Puerto_Rico",
            "America/Punta_Arenas",
            "America/Rainy_River",
            "America/Rankin_Inlet",
            "America/Recife",
            "America/Regina",
            "America/Resolute",
            "America/Rio_Branco",
            "America/Santarem",
            "America/Santiago",
            "America/Santo_Domingo",
            "America/Sao_Paulo",
            "America/Scoresbysund",
            "America/Sitka",
            "America/St_Barthelemy",
            "America/St_Johns",
            "America/St_Kitts",
            "America/St_Lucia",
            "America/St_Thomas",
            "America/St_Vincent",
            "America/Swift_Current",
            "America/Tegucigalpa",
            "America/Thule",
            "America/Thunder_Bay",
            "America/Tijuana",
            "America/Toronto",
            "America/Tortola",
            "America/Vancouver",
            "America/Whitehorse",
            "America/Winnipeg",
            "America/Yakutat",
            "America/Yellowknife",
            "Antarctica/Casey",
            "Antarctica/Davis",
            "Antarctica/DumontDUrville",
            "Antarctica/Macquarie",
            "Antarctica/Mawson",
            "Antarctica/Palmer",
            "Antarctica/Rothera",
            "Antarctica/Syowa",
            "Antarctica/Troll",
            "Antarctica/Vostok",
            "Arctic/Longyearbyen",
            "Asia/Aden",
            "Asia/Almaty",
            "Asia/Amman",
            "Asia/Anadyr",
            "Asia/Aqtau",
            "Asia/Aqtobe",
            "Asia/Ashgabat",
            "Asia/Atyrau",
            "Asia/Baghdad",
            "Asia/Bahrain",
            "Asia/Baku",
            "Asia/Bangkok",
            "Asia/Barnaul",
            "Asia/Beirut",
            "Asia/Bishkek",
            "Asia/Brunei",
            "Asia/Chita",
            "Asia/Choibalsan",
            "Asia/Colombo",
            "Asia/Damascus",
            "Asia/Dhaka",
            "Asia/Dili",
            "Asia/Dubai",
            "Asia/Dushanbe",
            "Asia/Famagusta",
            "Asia/Gaza",
            "Asia/Hebron",
            "Asia/Ho_Chi_Minh",
            "Asia/Hong_Kong",
            "Asia/Hovd",
            "Asia/Irkutsk",
            "Asia/Jakarta",
            "Asia/Jayapura",
            "Asia/Jerusalem",
            "Asia/Kabul",
            "Asia/Kamchatka",
            "Asia/Karachi",
            "Asia/Kathmandu",
            "Asia/Khandyga",
            "Asia/Kolkata",
            "Asia/Krasnoyarsk",
            "Asia/Kuala_Lumpur",
            "Asia/Kuching",
            "Asia/Kuwait",
            "Asia/Macau",
            "Asia/Magadan",
            "Asia/Makassar",
            "Asia/Manila",
            "Asia/Muscat",
            "Asia/Nicosia",
            "Asia/Novokuznetsk",
            "Asia/Novosibirsk",
            "Asia/Omsk",
            "Asia/Oral",
            "Asia/Phnom_Penh",
            "Asia/Pontianak",
            "Asia/Pyongyang",
            "Asia/Qatar",
            "Asia/Qostanay",
            "Asia/Qyzylorda",
            "Asia/Riyadh",
            "Asia/Sakhalin",
            "Asia/Samarkand",
            "Asia/Seoul",
            "Asia/Shanghai",
            "Asia/Singapore",
            "Asia/Srednekolymsk",
            "Asia/Taipei",
            "Asia/Tashkent",
            "Asia/Tbilisi",
            "Asia/Tehran",
            "Asia/Thimphu",
            "Asia/Tokyo",
            "Asia/Tomsk",
            "Asia/Ulaanbaatar",
            "Asia/Urumqi",
            "Asia/Ust-Nera",
            "Asia/Vientiane",
            "Asia/Vladivostok",
            "Asia/Yakutsk",
            "Asia/Yangon",
            "Asia/Yekaterinburg",
            "Asia/Yerevan",
            "Atlantic/Azores",
            "Atlantic/Bermuda",
            "Atlantic/Canary",
            "Atlantic/Cape_Verde",
            "Atlantic/Faroe",
            "Atlantic/Madeira",
            "Atlantic/Reykjavik",
            "Atlantic/South_Georgia",
            "Atlantic/St_Helena",
            "Atlantic/Stanley",
            "Australia/Adelaide",
            "Australia/Brisbane",
            "Australia/Broken_Hill",
            "Australia/Darwin",
            "Australia/Eucla",
            "Australia/Hobart",
            "Australia/Lindeman",
            "Australia/Lord_Howe",
            "Australia/Melbourne",
            "Australia/Perth",
            "Australia/Sydney",
            "Europe/Amsterdam",
            "Europe/Andorra",
            "Europe/Astrakhan",
            "Europe/Athens",
            "Europe/Belgrade",
            "Europe/Berlin",
            "Europe/Bratislava",
            "Europe/Brussels",
            "Europe/Bucharest",
            "Europe/Budapest",
            "Europe/Busingen",
            "Europe/Chisinau",
            "Europe/Copenhagen",
            "Europe/Dublin",
            "Europe/Gibraltar",
            "Europe/Guernsey",
            "Europe/Helsinki",
            "Europe/Isle_of_Man",
            "Europe/Istanbul",
            "Europe/Jersey",
            "Europe/Kaliningrad",
            "Europe/Kiev",
            "Europe/Kirov",
            "Europe/Lisbon",
            "Europe/Ljubljana",
            "Europe/London",
            "Europe/Luxembourg",
            "Europe/Madrid",
            "Europe/Malta",
            "Europe/Mariehamn",
            "Europe/Minsk",
            "Europe/Monaco",
            "Europe/Moscow",
            "Europe/Oslo",
            "Europe/Paris",
            "Europe/Podgorica",
            "Europe/Prague",
            "Europe/Riga",
            "Europe/Rome",
            "Europe/Samara",
            "Europe/San_Marino",
            "Europe/Sarajevo",
            "Europe/Saratov",
            "Europe/Simferopol",
            "Europe/Skopje",
            "Europe/Sofia",
            "Europe/Stockholm",
            "Europe/Tallinn",
            "Europe/Tirane",
            "Europe/Ulyanovsk",
            "Europe/Uzhgorod",
            "Europe/Vaduz",
            "Europe/Vatican",
            "Europe/Vienna",
            "Europe/Vilnius",
            "Europe/Volgograd",
            "Europe/Warsaw",
            "Europe/Zagreb",
            "Europe/Zaporozhye",
            "Europe/Zurich",
            "Indian/Antananarivo",
            "Indian/Chagos",
            "Indian/Christmas",
            "Indian/Cocos",
            "Indian/Comoro",
            "Indian/Kerguelen",
            "Indian/Mahe",
            "Indian/Maldives",
            "Indian/Mauritius",
            "Indian/Mayotte",
            "Indian/Reunion",
            "Pacific/Apia",
            "Pacific/Auckland",
            "Pacific/Bougainville",
            "Pacific/Chatham",
            "Pacific/Chuuk",
            "Pacific/Easter",
            "Pacific/Efate",
            "Pacific/Enderbury",
            "Pacific/Fakaofo",
            "Pacific/Fiji",
            "Pacific/Funafuti",
            "Pacific/Galapagos",
            "Pacific/Gambier",
            "Pacific/Guadalcanal",
            "Pacific/Guam",
            "Pacific/Honolulu",
            "Pacific/Kanton",
            "Pacific/Kiritimati",
            "Pacific/Kosrae",
            "Pacific/Kwajalein",
            "Pacific/Majuro",
            "Pacific/Marquesas",
            "Pacific/Midway",
            "Pacific/Nauru",
            "Pacific/Niue",
            "Pacific/Norfolk",
            "Pacific/Noumea",
            "Pacific/Pago_Pago",
            "Pacific/Palau",
            "Pacific/Pitcairn",
            "Pacific/Pohnpei",
            "Pacific/Port_Moresby",
            "Pacific/Rarotonga",
            "Pacific/Saipan",
            "Pacific/Tahiti",
            "Pacific/Tarawa",
            "Pacific/Tongatapu",
            "Pacific/Wake",
            "Pacific/Wallis",
        ];

        const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        this.setState({
            timezones,
            selectedTimezone: userTimezone
        });

        // this.fetchData();

    }

    componentWillUnmount() {
        // Remove the click event listener to prevent memory leaks
        document.removeEventListener('click', this.handleOutsideSearchBarClick);
    }

    //! - - EXPAND SINGLE MEETING 'ALL MEETINGS' TAB - - !//

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
            showDocsPopupHomescreen: false,
            showTimezones: false
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
                    clearSearchBtn: false,
                    showTimezones: true
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
                    <span style={{ fontWeight: "bold", color: "#4497f1" }}>
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
            clearSearchBtn: false,
            showTimezones: true
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
                    <p>An online Bible study group is a welcoming and interactive community where people gather virtually to explore scripture, share insights, and deepen their faith. Participants from diverse backgrounds connect through video calls, chat platforms, or dedicated apps, fostering spiritual growth and meaningful discussions. Each session often includes reading passages, group reflections, and guided teachings led by a facilitator or pastor. Members support one another through prayer and encouragement, creating a sense of fellowship despite physical distance. Accessible from anywhere, these groups offer flexibility and convenience, making it easy for believers to engage with God’s Word in a supportive online environment another text.</p>
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


    //! - - TIME ZONE FUNCTIONS - - !//

    handleChange = (event) => {
        this.setState({ selectedTimezone: event.target.value });
    };

    render () {

        const { searchBarIsClicked, searchInput, isSearchLoading, resultsFound, groupedOptions } = this.state;
        const { timezones, selectedTimezone } = this.state;

        return (
            <Styles>
                <div className='full-page'>
                    <div className='navbar'>
                        
                    </div>
                    <div className='main-section'>
                        <div className='main-section-header'>
                            <div className='header-title-container'>
                                <h1>Free Online Bible Study</h1>
                            </div>
                            <div className='header-details-container'>
                                <div className='header-details-container-left'>
                                    <button>Donate</button>
                                </div>
                                <div className='header-details-container-right'>
                                    <button>+ New Meeting</button>
                                </div>
                            </div>
                        </div>
                        {this.state.showMeetingList && 
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
                                        {this.state.showTimezones && 
                                            <div className='timezone-container'>
                                                <div className='timezone-container-img'>
                                                    <img src="/assets/icons/clock-icon.png" alt="Clock Icon" className="clock-icon" />
                                                </div>
                                                <div className="select-wrapper">
                                                    <select
                                                    id="timezoneDropdown"
                                                    value={selectedTimezone}
                                                    onChange={this.handleChange}
                                                    >
                                                    {timezones.map((timezone) => (
                                                        <option key={timezone} value={timezone}>
                                                        {timezone}
                                                        </option>
                                                    ))}
                                                    </select>
                                                </div>
                                            </div>
                                        }
                                        {searchInput !== "" && (
                                            <div className={`searchResults ${this.state.searchBarInput === '' ? 'empty' : ''}`}>
                                                {isSearchLoading && 
                                                    <div>
                                                        <p>Loading...</p>
                                                    </div>
                                                }
                                                {!isSearchLoading && resultsFound && 
                                                    Object.entries(groupedOptions).map(([category, options]) => (
                                                        <div style={{borderBottom: "1px solid #ccc", paddingTop: "1.5%", paddingBottom: "1.5%", position: "sticky"}} key={category}>
                                                            {options.map(option => (
                                                                <div 
                                                                onClick={() => this.searchedTermClicked(category, option, option.page)}
                                                                className='searchResultCell' 
                                                                key={option.id}>
                                                                    <p className='searchResultOption'>{option.highlightedName}</p>
                                                                    <p className='searchResultCategory'>{category} {option.subCat1 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat1}</label> : null } {option.subCat2 ? <label style={{cursor: "pointer"}}>{'|'} {option.subCat2}</label> : null } {option.subCat3 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat3}</label> : null } {option.subCat4 ? <label style={{cursor: "pointer"}}> {'|'} {option.subCat4}</label> : null } </p> 
                                                                </div>
                                                            ))}
                                                        </div>
                                                    ))
                                                }
                                                {!isSearchLoading && !resultsFound && 
                                                    <div style={{textAlign: "center"}}>
                                                        <p style={{fontWeight: "bold", marginTop: "4.25%", color: "#4497f1"}}>No results found</p>
                                                    </div>
                                                }
                                            </div>
                                        )}

                    

                                    </div>
                                </div>
                            </div>
                        }
                        {this.state.showAddMeeting && 
                            <div className='main-section-body'>
                                <div className='meeting-submit-details'>
                                    <h2>Meeting Submission Form</h2>
                                    <p>If you have a Bible study group that meets digitally — via phone, chat, video conference, etc — (or you want to create a new one) please share participation information with us, so we can include it in the online directory.</p>

                                    <div className='meeting-submit-input-form-page-1'>
                                        <h4>Group Name <span>*</span></h4>
                                        <input
                                        placeholder="e.g. Tuesday Men's Weekly Study"
                                        />
                                    </div>
                                </div>
                                <div className='meeting-submit-confirm'>
                                    <p>This is a longer text to see if it will stretch out the text box. This is a longer text to see if it will stretch out the text box.</p>
                                </div>
                            </div>
                        }

                        <div style={{position: "absolute", bottom: "0"}}>
                            <h2>plop</h2>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}