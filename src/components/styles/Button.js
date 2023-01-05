import styled from 'styled-components';

export default styled.button`
    width: 40px;
    height: 40px;
    text-decoration: bold;
    margin-left: 1em;
    margin-top: 1em;
    color: black;
    border: hidden;
    border-radius:20px
    border-bottom-style:solid;
  
  &.active,
  &:hover
  {
    width: 40px;
    height: 40px;
    outline: none;
    background-color: #00B7BD;
    border: hidden;
    border-radius: 20px;
    align: center;
  }
`