import styled from 'styled-components';

export default styled.div`
    align: center;
    margin: 1em;
    padding: 2em;
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
        height: 15em;
        border-radius:15px;
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
        font-size: 12px
    }

    .easyTextSmaller {
        font-family: 'Trebuchet MS';
        font-weight: lighter;
        font-size: smaller
    }

    .easyTextSmallBold {
        font-family: 'Trebuchet MS';
        font-weight: bold;
        font-size: 10px;
        color: red
    }
`