import styled from 'styled-components'

export const SButton = styled.button`
  text-decoration: none;
  display: inline-block;
  margin: 10px 20px;
  padding: 10px 30px;
  position: relative;
  border: 2px solid #f1c40f;
  color: #f1c40f;
  font-family: 'Montserrat', sans-serif;
  transition: 0.4s;
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: auto;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.4s;
  }

  &:hover:after {
    border-color: #f1c40f;
    width: calc(100% - 10px);
    height: calc(100% + 10px);
  }
`
