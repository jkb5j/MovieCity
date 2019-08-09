INSERT INTO roles (role_name)
VALUES ('admin'), ('user');

INSERT INTO genres (genre_type)
VALUES ('action'), ('family'), ('horror'), ('sci-fi'), ('animation'),
('anime'), ('drama'), ('thriller'), ('comedy'), ('musical'),
('anthology film'), ('biopic'), ('romance'), ('adventure'),
('crime'), ('documentary'), ('mystery'), ('superhero'), ('suspense'),
('western'), ('zombie');

INSERT INTO users (username, pass, email, first_name, last_name, role_id)
VALUES (('nepgear'), ('pass'), ('bluebrenu@moviecity.com'), ('brenton'), ('byrd'), (2)),
	   (('bd1'), ('pass'), ('brettdavis@moviecity.com'), ('brett'), ('davis'), (2)),
	   (('jkb5j'), ('pass'), ('jkb5j@moviecity.com'), ('joseph'), ('boakye'), (1));