/**  @function ArticleContainer fetches resources from `api` @returns list of article's and respective data */
import React, { useEffect, useState } from 'react'
import { Article } from '../components'
import { fetchIds, getStory } from '../pages/api/article'

export default function ArticleContainer() {
  const [show, setShow] = useState(false)
  const [stories, setStories] = useState([])

  useEffect(() => {
    const fetchContent = async () => {
      const ids = await fetchIds()
      for (let i = 0; i < ids.results.length; i++) {
        const story = await getStory(ids.results[i])
        setStories((state) => [...state, story])
      }
    }
    setShow(true)
    fetchContent()
  }, [])

  return <>{show && stories.map((e, i) => <Article key={e.slug || `story-${i}`} article={e} />)}</>
}
