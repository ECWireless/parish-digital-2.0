import imageUrlBuilder from '@sanity/image-url'
import client from 'client'

export function urlFor (source) {
  return imageUrlBuilder(client).image(source)
}

export const shortenString = (text, length) => {
  if (text.length > length) {
    return text.slice(0, length).trim() + '...';
  } else {
    return text;
  }
};