INSERT INTO categories (name)
VALUES
('Technology'),
('Health'),
('Finance'),
('Education'),
('Entertainment')
ON CONFLICT DO NOTHING;