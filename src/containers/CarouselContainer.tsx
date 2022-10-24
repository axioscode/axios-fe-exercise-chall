/**  @function CarouselContainer fetches resources from `api` @returns list of article's and respective data */
import React, { useState } from 'react'
import styled from 'styled-components'
import ArticleContainer from './ArticleContainer'

type CarouselContainerType = {
  image:
    | string
    | 'https://images.axios.com/hol-a_EPscfm7wP9VmBiFaXF5R0=/647x0:3802x3155/52x0/2022/06/17/1655483160408.jpg'
}
const CarouselContainer = (props: CarouselContainerType) => {
  const [count, setCounter] = useState(0)
  const navigateTo = (index: number) => {
    // @TO-DO add carousel navigation functionality
  }
  return (
    <>
      <CarouselContainerStyle>
        <ArticleContainer />
      </CarouselContainerStyle>
      <ArrowLeft className="prev" onClick={() => navigateTo(-1)}>
      <ArrowLeftSvg/>
      </ArrowLeft>
      <ArrowRight className="next" onClick={() => navigateTo(1)}>
      <ArrowRightSvg/>
      </ArrowRight>

    </>
  )
}

const ArrowRightSvg = () => {
  return <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1.7037L26 26L2 50.2963" stroke="#BABABE" strokeWidth="3" strokeLinejoin="round" />
</svg>
}
const ArrowLeftSvg = () => {
  return <svg width="28" height="52" viewBox="0 0 28 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26 50.2963L2 26L26 1.7037" stroke="#BABABE" strokeWidth="3"  strokeLinejoin="round"/>
</svg>

}
const ArrowButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  width: 44px;
  height: 44px;
  position: absolute;
  left: 95.56%;
  right: 1.07%;
  top: 46.3%;
  bottom: 50.05%;
`
const ArrowLeft = styled(ArrowButton)`
  position: fixed;
  left: 3%;
  top: 25%;
  border-radius: 100%;
  `
  const ArrowRight = styled(ArrowButton)`
  position: fixed;
  left: 93%;
  top: 25%;
  border-radius: 100%;
`

const CarouselContainerStyle = styled.div`
  position: inherit;
  display: flex;
  flex: auto;
  width: fit-content;
  align-items: initial;
  overflow: hidden;
`

export default CarouselContainer
