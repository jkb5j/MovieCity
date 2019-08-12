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
 role_id INTEGER REFERENCES roles(role_id)
);

CREATE TABLE movies
(
 movie_id SERIAL PRIMARY KEY,
 title TEXT NOT NULL,
 genre_id INTEGER REFERENCES genres(genre_id),
 release_year INTEGER NOT NULL,
 origin TEXT NOT NULL,
 director TEXT NOT NULL,
 plot TEXT NOT NULL
 );

CREATE TABLE friends
(
 my_user INTEGER NOT NULL REFERENCES users(user_id),
 other_user INTEGER NOT NULL REFERENCES users(user_id),
 CONSTRAINT pk_friends PRIMARY KEY (my_user, other_user)
 );

CREATE TABLE favorites
(
 movie_id INTEGER NOT NULL REFERENCES movies(movie_id),
 user_id INTEGER NOT NULL REFERENCES users(user_id),
 CONSTRAINT pk_favorites PRIMARY KEY (movie_id, user_id)
);

CREATE TABLE followers
(
 being_followed INTEGER NOT NULL REFERENCES users(user_id),
 follower INTEGER NOT NULL REFERENCES users(user_id),
 CONSTRAINT pk_followers PRIMARY KEY (being_followed, follower)
 );