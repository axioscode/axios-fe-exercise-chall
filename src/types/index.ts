export type Article = {
  id: string
  headline: string
  topics: [{
    name: string
  }]
  published_date: string
  byline_photo: string
  permalink: string
  authors: [{
    display_name: string
  }]
  primary_image: {
    alt_text: string
    base_image_url: string
  }
  social_image: {
    alt_text: string
    base_image_url: string
  }
  primary_section: string
  base_image_url: string
  crops: {
    '1x1': {}
    '4x3': {}
    '16x9': {}
  }
}
