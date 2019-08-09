CREATE TABLE roles (
    role_id SERIAL PRIMARY KEY,
    role_name TEXT UNIQUE NOT NULL
);
CREATE TABLE genres (
    genre_id SERIAL PRIMARY KEY,
    genre_type TEXT UNIQUE NOT NULL
);
CREATE TABLE users
(
 user_id SERIAL PRIMARY KEY,
 username TEXT UNIQUE NOT NULL,
 pass TEXT NOT NULL,
 email TEXT NOT NULL,
 first_name TEXT NOT NULL,
 last_name TEXT NOT NULL,
 rold_id INTEGER REFERENCES roles(role_id)
);
CREATE TABLE movies
(
 movie_id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 genre_id INTEGER REFERENCES genre(genre_id),
 release_year INTEGER NOT NULL,
 origin TEXT NOT NULL,
 director TEXT NOT NULL,
 plot TEXT NOT NULL,
 );
CREATE TABLE friends
(
 freinds_id SERIAL PRIMARY KEY,
 my_user INTEGER NOT NULL REFERENCES users(user_id),
 other_user INTEGER NOT NULL REFERENCES users(user_id),
 CONSTRAINT pk_friends PRIMARY KEY (my_user, other_user)
 );
CREATE TABLE favorites
(
 favorite_id SERIAL PRIMARY KEY,
 movie_id INTEGER NOT NULL REFERENCES movies(movie_id)),
 user_id INTEGER NOT NULL REFERENCES users(user_id)),
 CONSTRAINT pk_favorites PRIMARY KEY (movie_id, user_id)
);
CREATE TABLE followers
(
 followers_id SERIAL PRIMARY KEY,
 being_followed INTEGER NOT NULL REFERENCES users(user_id)),
 follower INTEGER NOT NULL REFERENCES users(user_id)),
 CONSTRAINT pk_followers PRIMARY KEY (being_followed, follower)
 );
CREATE TABLE ice_cream (
    ice_cream_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    brand_id INTEGER REFERENCES brand(brand_id)
);
CREATE TABLE ice_cream_flavor (
    ice_cream_id INT NOT NULL REFERENCES ice_cream(ice_cream_id),
    flavor_id INT NOT NULL REFERENCES flavor(flavor_id),
    CONSTRAINT pk_ice_cream_flavor PRIMARY KEY  (ice_cream_id, flavor_id)
);