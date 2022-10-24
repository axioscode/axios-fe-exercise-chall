import Head from 'next/head'
import ArticleContainer from '../containers/ArticleContainer'
import CarouselContainer from '../containers/CarouselContainer'
import '../styles/main.scss'

const Index = () => {
  return (
    <>
      <Head>
        <title> Camille&apos;s Front End Exercise</title>
        <link rel="stylesheet" href="https://use.typekit.net/vox0qmv.css"></link>
      </Head>
      <CarouselContainer>
        <ArticleContainer />
      </CarouselContainer>
    </>
  )
}

export default Index
