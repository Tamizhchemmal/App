import React from 'react'
import { styled } from 'styled-components'

function Imagecard({imagesource}) {
  return (
    <>
    <Card>
      <Image source={imagesource}/>
    </Card>
    </>
  )
}

export default Imagecard

const Card=styled.View`
width:400px;
height:250px;
border-radius:15px;
overflow:hidden;
background-color:white;
margin:5px;`;


 const Image=styled.Image`
 width:100%;
 height:100%;
 `;