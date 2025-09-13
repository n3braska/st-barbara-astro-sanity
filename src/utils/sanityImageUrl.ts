import imageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { client } from '@utils/sanity-client.ts';

// Create an image URL builder using the client
const builder = imageUrlBuilder(client)

// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
    return builder.image(source)
}