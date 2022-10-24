/**  @function Article @returns the layout for one article by consuming the `api` results */
import styled from 'styled-components'
import Link from 'next/link'
import React from 'react'
import { Article as ArticleType } from '../types'

type ArticleProps = {
  article: ArticleType
}
// @TO-DO refactor styles to be more reusable
const SvgArrow = () => {
  return <svg width="24" height="9" viewBox="0 0 24 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.3536 4.85355C24.5488 4.65829 24.5488 4.34171 24.3536 4.14645L21.1716 0.964466C20.9763 0.769204 20.6597 0.769204 20.4645 0.964466C20.2692 1.15973 20.2692 1.47631 20.4645 1.67157L23.2929 4.5L20.4645 7.32843C20.2692 7.52369 20.2692 7.84027 20.4645 8.03553C20.6597 8.2308 20.9763 8.2308 21.1716 8.03553L24.3536 4.85355ZM0 5H24V4H0V5Z" fill="#2257DA"/>
</svg>

}
const Arrow = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 24px;
  height: 0px;
  left: 1175px;
  top: 328.5px;
  border: 1px solid #2257da;
`

const ArticleWrapperDiv = styled.div`
    height: auto;
    width: 70vw;
    flex-direction: column;
    overflow: hidden;
    margin-right: 30px;
    padding: 5em;
`
const ArticleImg = styled.img`
  object-fit: contain;
width: 20vmax;

`
const Header = styled.h4`
  font-family: 'Roboto';
  color: #333335;
`
const Text = styled.p`
  font-family: 'Roboto';
`
const DateText = styled(Text)`
width: 173px;
height: 21px;
font-style: normal;
font-weight: 400;
font-size: 0.8em;
line-height: 150%;
color: #656568;
`
const AuthorText = styled(DateText)`
color: #26998e;
font-variant: all-petite-caps;
`
const Topic = styled(Text)`
  color: #AB7D36;
`
const LinkText = styled(Link)`
  color: #2257DA;
  position: absolute;
  width: 86px;
  height: 18px;
  left: 1077px;
  top: 320.5px;
`
const ButtomDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;
`

export default function Article({ article }: ArticleProps) {
  // @TO-DO redo with better validation
  const imageUrl = article.primary_image
    ? article.primary_image.base_image_url
    : article.social_image.base_image_url

  const altText = article.primary_image
    ? article.primary_image.alt_text
    : article.social_image.alt_text

    let formattedDate = new Date(article.published_date)
  return (
    <ArticleWrapperDiv>
      <Link href={article.permalink} passHref={true}>
        <ArticleImg src={imageUrl} alt={altText} />
      </Link>
        <Topic>{true && article.topics[0].name}</Topic>
      <Header>{article.headline}</Header>
        <AuthorText>{article.authors[0].display_name}</AuthorText>
        <ButtomDiv>
        <DateText>{formattedDate.toDateString()}</DateText>
        <Text>{true && article.primary_section}</Text>
        {/*  @TO-DO clean up styling */}
      <LinkText href={article.permalink}>
        <a>Go Deeper <SvgArrow/> </a>
      </LinkText>
        </ButtomDiv>
    </ArticleWrapperDiv>
  )
}
