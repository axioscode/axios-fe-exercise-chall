import { Constants } from '../../utils'

export const getStory = async (id) => {
  const content_endpoint = `${Constants.API_HOST}/api/render/content`
  try {
    const res = await fetch(`${content_endpoint}/${id}`)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}
export const fetchIds = async () => {
  const steam_endpoint = `${Constants.API_HOST}/api/render/stream/content`
  try {
    const res = await fetch(steam_endpoint)
    const data = await res.json()
    return data
  } catch (err) {
    console.error(err)
  }
}
