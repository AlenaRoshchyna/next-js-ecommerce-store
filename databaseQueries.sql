-- the file is not gonna run, it's created only to save the quearies for the easy access.

-- Create a products table
CREATE TABLE products (
  id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name varchar(30) NOT NULL,
  category varchar(30) NOT NULL,
  price integer NOT NULL,
  description varchar(700) NOT NULL
);

-- Insert products
INSERT INTO products
  (name, category, price, description)
VALUES
  ('ReverieRealm', 'dreams', 50, 'dreamDescriptionA'),
  ('SlumberWhisper', 'dreams', 50, 'dreamDescriptionB'),
  ('DreamScape', 'dreams', 50, 'dreamDescriptionC'),
  ('FantasiaDreamer', 'dreams', 50, 'dreamDescriptionD'),

-- Read products in the table
SELECT * FROM products;

-- That's the first hand created database
-- export const products = [
--   {
--     id: 1,
--     name: 'ReverieRealm',
--     category: 'dreams',
--     price: '50',
--     description: dreamDescriptionA,
--   },
--   {
--     id: 2,
--     name: 'SlumberWhisper',
--     category: 'dreams',
--     price: '50',
--     description: dreamDescriptionB,
--   },
--   {
--     id: 3,
--     name: 'DreamScape',
--     category: 'dreams',
--     price: '50',
--     description: dreamDescriptionC,
--   },
--   {
--     id: 4,
--     name: 'FantasiaDreamer',
--     category: 'dreams',
--     price: '50',
--     description: dreamDescriptionD,
--   },
-- ];

-- Put long descriptions into variables to make it shorted for database.
-- const dreamDescriptionA =
--   'Mapping the Uncharted Territories of Dreams: This thought-provoking dream represents the boundless possibilities of the ReverieRealm. It features a captivating labyrinth, constructed with mirrors that reflect infinite images of the viewer. The dream inspire viewers to delve into the unexplored territories of their own dreams, gaining a deeper understanding of themselves and their subconscious mind.';
-- const dreamDescriptionB =
--   'Where Whispers Shape Dreams: This evocative dream immerses viewers in an interactive reality-like environment. As they enter the dimly lit space, soft whispers surround them, lulling them into a state of tranquility. The dream features a canopy of delicate, luminescent fibers that gently sway overhead, symbolizing the transformative power of whispers during sleep. Allow whispers to unfold your dream with a sense of serenity and harmony!';
-- const dreamDescriptionC =
--   'A Journey Through Ethereal Realms: In this captivating dream, the viewer is transported into a world of swirling colors and surreal landscapes. It captures its vibrant hues and fluid brushstrokes. The dreamer, depicted as a figure gracefully floating amidst the ethereal scenery, experiences a seamless blend of reality and imagination. The dream evokes a sense of wonder and invites viewers to explore the limitless possibilities of their own dreams.';
-- const dreamDescriptionD =
--   'Portal to an Enchanted Realm: Step into a world of enchantment with the FantasiaDreamer. The room is adorned with intricate, handcrafted sculptures that depict mystical creatures, vibrant flora, and otherworldly landscapes. Soft, ambient music fills the air, creating a harmonious atmosphere. This immersive experience ignites the senses and invites viewers to embrace the whimsical nature of their dreams.';
