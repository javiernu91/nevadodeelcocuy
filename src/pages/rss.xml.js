import rss from '@astrojs/rss'
import {getCollection} from 'astro:content'


export async function GET(context) {
 const posts = await getCollection('blogs');
 return rss({
  title: 'blogelecocuy',
  description: 'Explora el Nevado de El Cocuy con nuestras guías detalladas de rutas de senderismo, consejos de viaje, información sobre flora y fauna, y recomendaciones de alojamiento. Planifica tu aventura perfecta en uno de los destinos naturales más espectaculares de Colombia', 
  site: context.site,
  items: posts.map((post) => ({
    ...post.data,
    link: `/blog/${post.slug}/`,
  }))
 }) 
}