INSERT INTO categories (name) VALUES
  ('Vehicles'),
  ('Toys & Games'),
  ('Beauty & Health'),
  ('Pet Supplies'),
  ('Services'),
  ('Restaurants & Food'),
  ('Real Estate'),
  ('Automotive Services'),
  ('Health & Wellness'),
  ('Education & Classes'),
  ('Events & Venues'),
  ('Retail & Shops'),
  ('Tech & IT Services'),
  ('Construction & Trade');

-- Insert subcategories for Vehicles
INSERT INTO subcategories (name, category_id) VALUES
('Cars', (SELECT id FROM categories WHERE name = 'Vehicles')),
('Motorcycles', (SELECT id FROM categories WHERE name = 'Vehicles')),
('Bicycles', (SELECT id FROM categories WHERE name = 'Vehicles')),
('Car Parts', (SELECT id FROM categories WHERE name = 'Vehicles'));

-- Insert subcategories for Toys & Games
INSERT INTO subcategories (name, category_id) VALUES
('Board Games', (SELECT id FROM categories WHERE name = 'Toys & Games')),
('Action Figures', (SELECT id FROM categories WHERE name = 'Toys & Games')),
('Educational Toys', (SELECT id FROM categories WHERE name = 'Toys & Games')),
('Baby Toys', (SELECT id FROM categories WHERE name = 'Toys & Games'));

-- Insert subcategories for Beauty & Health
INSERT INTO subcategories (name, category_id) VALUES
('Skincare', (SELECT id FROM categories WHERE name = 'Beauty & Health')),
('Haircare', (SELECT id FROM categories WHERE name = 'Beauty & Health')),
('Supplements', (SELECT id FROM categories WHERE name = 'Beauty & Health')),
('Personal Care', (SELECT id FROM categories WHERE name = 'Beauty & Health'));

-- Insert subcategories for Pet Supplies
INSERT INTO subcategories (name, category_id) VALUES
('Dog Accessories', (SELECT id FROM categories WHERE name = 'Pet Supplies')),
('Cat Food', (SELECT id FROM categories WHERE name = 'Pet Supplies')),
('Aquariums', (SELECT id FROM categories WHERE name = 'Pet Supplies')),
('Pet Toys', (SELECT id FROM categories WHERE name = 'Pet Supplies'));

-- Insert subcategories for Services
INSERT INTO subcategories (name, category_id) VALUES
('Cleaning', (SELECT id FROM categories WHERE name = 'Services')),
('Moving Help', (SELECT id FROM categories WHERE name = 'Services')),
('Repairs', (SELECT id FROM categories WHERE name = 'Services')),
('Freelance Services', (SELECT id FROM categories WHERE name = 'Services'));

-- Insert subcategories for Restaurants & Food
INSERT INTO subcategories (name, category_id) VALUES
('Fast Food', (SELECT id FROM categories WHERE name = 'Restaurants & Food')),
('Cafés', (SELECT id FROM categories WHERE name = 'Restaurants & Food')),
('Catering', (SELECT id FROM categories WHERE name = 'Restaurants & Food')),
('Food Trucks', (SELECT id FROM categories WHERE name = 'Restaurants & Food'));

-- Insert subcategories for Real Estate
INSERT INTO subcategories (name, category_id) VALUES
('Homes for Sale', (SELECT id FROM categories WHERE name = 'Real Estate')),
('Apartments', (SELECT id FROM categories WHERE name = 'Real Estate')),
('Commercial Spaces', (SELECT id FROM categories WHERE name = 'Real Estate')),
('Land', (SELECT id FROM categories WHERE name = 'Real Estate'));

-- Insert subcategories for Automotive Services
INSERT INTO subcategories (name, category_id) VALUES
('Repair Shops', (SELECT id FROM categories WHERE name = 'Automotive Services')),
('Car Wash', (SELECT id FROM categories WHERE name = 'Automotive Services')),
('Detailing', (SELECT id FROM categories WHERE name = 'Automotive Services')),
('Dealerships', (SELECT id FROM categories WHERE name = 'Automotive Services'));

-- Insert subcategories for Health & Wellness
INSERT INTO subcategories (name, category_id) VALUES
('Clinics', (SELECT id FROM categories WHERE name = 'Health & Wellness')),
('Therapists', (SELECT id FROM categories WHERE name = 'Health & Wellness')),
('Spas', (SELECT id FROM categories WHERE name = 'Health & Wellness')),
('Massage Services', (SELECT id FROM categories WHERE name = 'Health & Wellness'));

-- Insert subcategories for Education & Classes
INSERT INTO subcategories (name, category_id) VALUES
('Tutors', (SELECT id FROM categories WHERE name = 'Education & Classes')),
('Training Centers', (SELECT id FROM categories WHERE name = 'Education & Classes')),
('Online Courses', (SELECT id FROM categories WHERE name = 'Education & Classes')),
('Workshops', (SELECT id FROM categories WHERE name = 'Education & Classes'));

-- Insert subcategories for Events & Venues
INSERT INTO subcategories (name, category_id) VALUES
('Event Spaces', (SELECT id FROM categories WHERE name = 'Events & Venues')),
('Wedding Planners', (SELECT id FROM categories WHERE name = 'Events & Venues')),
('DJs', (SELECT id FROM categories WHERE name = 'Events & Venues')),
('Catering Services', (SELECT id FROM categories WHERE name = 'Events & Venues'));

-- Insert subcategories for Retail & Shops
INSERT INTO subcategories (name, category_id) VALUES
('Clothing Stores', (SELECT id FROM categories WHERE name = 'Retail & Shops')),
('Electronics', (SELECT id FROM categories WHERE name = 'Retail & Shops')),
('Bookstores', (SELECT id FROM categories WHERE name = 'Retail & Shops')),
('Gift Shops', (SELECT id FROM categories WHERE name = 'Retail & Shops'));

-- Insert subcategories for Tech & IT Services
INSERT INTO subcategories (name, category_id) VALUES
('Web Development', (SELECT id FROM categories WHERE name = 'Tech & IT Services')),
('IT Support', (SELECT id FROM categories WHERE name = 'Tech & IT Services')),
('Software Development', (SELECT id FROM categories WHERE name = 'Tech & IT Services')),
('Hosting Services', (SELECT id FROM categories WHERE name = 'Tech & IT Services'));

-- Insert subcategories for Construction & Trade
INSERT INTO subcategories (name, category_id) VALUES
('Electricians', (SELECT id FROM categories WHERE name = 'Construction & Trade')),
('Plumbers', (SELECT id FROM categories WHERE name = 'Construction & Trade')),
('Builders', (SELECT id FROM categories WHERE name = 'Construction & Trade')),
('Handymen', (SELECT id FROM categories WHERE name = 'Construction & Trade'));