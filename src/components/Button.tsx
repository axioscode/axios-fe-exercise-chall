/** Button component */
import React from 'react'
import styled from 'styled-components'
// @TO-DO  make styling responsive and component reusable
const Button = () => {
  return (
    <>
      <ButtonStyle> Visit Axios.com </ButtonStyle>
    </>
  )
}

const ButtonStyle = styled.button`
  display: inline-block;
  height: 2.5em;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 22.1875em;
  background: transparent;
  color: white;
  border: 2px solid white;
  background: #2257da;
  border-radius: 6px;
`

export default Button
