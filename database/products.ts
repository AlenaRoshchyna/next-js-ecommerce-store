import { cache } from 'react';
import { Product } from '../migrations/1685891399-createTableProducts';
import { sql } from './connect';

/* const dreamDescriptionA =
  'Mapping ...';
const dreamDescriptionB =
  'Where Whispers ...';
const dreamDescriptionC =
  'A Journey ...';
const dreamDescriptionD =
  'Portal to...';

export const products = [
  {id: 1, name: 'ReverieRealm', category: 'dreams'; price: '50', description: dreamDescriptionA,},
  {id: 2, name: 'SlumberWhisper', category: 'dreams',
price: '50', description: dreamDescriptionB,},
  {id: 3, name: 'DreamScape', category: 'dreams', price: '50', description: dreamDescriptionC,},
  {id: 4, name: 'FantasiaDreamer', category: 'dreams', price: '50', description: dreamDescriptionD,},
];

export function getProductById(id) {
  return products.find((product) => product.id === id);
} */

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
    SELECT * FROM products
 `;
  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
    SELECT
      *
    FROM
      products
    WHERE
      id = ${id}
  `;
  return product;
});
