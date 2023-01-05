import styled from 'styled-components';

export default styled.div`
    margin: 1em;
    padding: 2em;
    /* padding-top: -1em;
    padding-right: -1em;
    padding-left: -1em; */
    border: hidden;
    border-radius: 10px;
    background: #E9E186;
    text-align: left;
    
    
    img{
        display: block;
        margin-left: -20;
        margin-right: -20;
        margin-bottom: 10px;
        width: 50%;
        height: 12em;
        border-radius:10px;
        width: 15em;
        align: center;
    }

    .niceTextWrap {
        overflow-wrap: break-word;
        font-weight: bold;
    }

    .niceTextSmaller {
        font-size: smaller;
    }

    .easyText {
        font-family: 'Trebuchet MS';
        font-weight: lighter;
        font-size: smaller
    }

    .easyTextItalic {
        font-style: italic;
        font-family: 'Trebuchet MS';
        font-weight: lighter;
        font-size: smaller
    }

    .easyTextSmaller {
        font-family: 'Trebuchet MS';
        font-weight: lighter;
        font-size: smaller
    }

`