import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  projectId : '5rw0qerx',
  dataset: "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion,
  useCdn,
  perspective: 'raw',
})


const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}