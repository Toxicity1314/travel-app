import styled from 'styled-components';

export default styled.button`
    text-decoration: none;
    margin-left: 20px;
    margin-top: 1em;
    padding: 1em;
    color: black;
    border: solid;
  
  &.active,
  &:hover
  {
    outline: none;
    background-color: #55c2da;
    border: solid;
  }
`