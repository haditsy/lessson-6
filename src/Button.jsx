import React from 'react'
import { styled } from 'styled-components'

const Button = () => {

  return (
    <div>
        <StyledOutlined>outlined</StyledOutlined>
        <StyledContained>contained</StyledContained>
        <StyledWarning>warning</StyledWarning>
        <StyledDanger>danger</StyledDanger>
    </div>
  )
}

const StyledOutlined = styled('button')`
    margin-top: 20px;
    width: 198px;
    height: 48px;
    margin-right: 40px;
    padding: 16px 68px;
    border: 1px solid #1F6ED4;
    color: #1F6ED4;
    background-color: white;
    font-size: 18px;
    border-radius: 10px;
    &:hover{
      border: 3px solid #1F6ED4;
    } 
    &:active{
      color: white;
      background-color: #1F6ED4;
    }
    &:disabled{
      border: 1px solid #C9C9C9;
      color: #C9C9C9;
    }
`

const StyledContained = styled('button')`
    margin-top: 20px;
    width: 198px;
    height: 53px;
    margin-right: 40px;
    font-size: 18px;
    color: white;
    background-color: #1F6ED4;
    border-radius: 10px;
    border: none;
    &:hover{
      background-color:#4C94F0;
    } 
    &:active{
      background-color: #0052BC;
    }
    &:disabled{
      background-color: #C9C9C9;
    }
`
const StyledWarning = styled('button')`
    margin-top: 20px;
    width: 198px;
    height: 42px;
    margin-right: 40px;
    background-color: #F37705;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    &:hover{
      background-color: #FF912B;
    } 
    &:active{
   
      background-color: #CF6300;

    }
    &:disabled{
      background-color: #C9C9C9;
    }
`
const StyledDanger = styled('button')`
    margin-top: 20px;
    width: 198px;
    height: 47px;
    margin-right: 40px;
    background-color: #DF2D2D;
    border-radius: 10px;
    border: none;
    color: white;
    font-size: 18px;
    &:hover{
      background-color: #E54343;
    } 
    &:active{
      background-color: #C20B0B;
    }
    &:disabled{
      background-color: #C9C9C9;
    }
`
export default Button