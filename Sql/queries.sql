
/* Showing the favorite movie list of one user */
/* findMyFavMovies */
SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id)
LEFT JOIN genres ON (movies.genre_id = genres.genre_id)
WHERE user_id = 1;

/* Showing the favorite mvies list of a user by the genre */
/* findMyFavMoviesByGenre */
SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id)
LEFT JOIN genres ON (movies.genre_id = genres.genre_id)
WHERE genre_type = 'comedy' AND user_id = 1
ORDER BY movie_id;

/* findMyFavMoviesByOrigin */
SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id)
LEFT JOIN genres ON (movies.genre_id = genres.genre_id)
WHERE origin = 'Japanese' AND user_id = 1
ORDER BY movie_id;

/* findMyFavMoviesByTitle */
SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id)
LEFT JOIN genres ON (movies.genre_id = genres.genre_id)
WHERE title = 'Arrietty' AND user_id = 1
ORDER BY movie_id;

/* Updating a users favorite movie */
/* updateFavMovieList */ 
UPDATE favorites
SET movie_id = 1, user_id = 1
WHERE movie_id = 11 AND user_id = 1;

/* Removing a users favorite movie */
/*unfavorite */ 
DELETE FROM favorites
WHERE movie_id = 1 AND user_id = 1;

/* findMyFollowers */
SELECT * FROM followers
LEFT JOIN users bf ON (followers.being_followed = bf.user_id)
LEFT JOIN users f ON (followers.follower = f.user_id)
WHERE being_followed = 1;

/* unfollow */
DELETE FROM followers
WHERE follower = 1 AND being_followed = 2;

/* findMyFriends */
SELECT * FROM friends
LEFT JOIN users mu ON (friends.my_user = mu.user_id)
LEFT JOIN users ou ON (friends.other_user = ou.user_id)
WHERE my_user = 1;

/* unfriend */
DELETE FROM friends
WHERE my_user = 1 AND other_user = 2;
DELETE FROM friends
WHERE my_user = 2 AND other_user = 1;

/* showGenres */ 
SELECT * FROM genres
ORDER BY genre_type;

/* showMovies */
SELECT * FROM movies
LEFT JOIN genres USING (genre_id)
ORDER BY genre_type;

/* findMoviesByGenre */
SELECT * FROM movies
LEFT JOIN genres USING (genre_id)
WHERE genre_type = 'action'
ORDER BY genre_type;

/* findMoviesByTitle */
SELECT * FROM movies
LEFT JOIN genres USING (genre_id)
WHERE title = 'The Ghazi Attack'
ORDER BY genre_type;

/* findMoviesByOrigin */
SELECT * FROM movies
LEFT JOIN genres USING (genre_id)
WHERE origin = 'Bollywood'
ORDER BY genre_type;

/*
*   Showing the users table
*   Showing how to find by username
*/
/* findAllUsers */
SELECT * FROM users
WHERE role_id = 2;

/* findByUsername */
SELECT * FROM users
WHERE username = 'nepgear';

/* updateMyInfo */
UPDATE users
SET username = 'neptune', pass = 'pass', email = 'bluebrenu@moviecity.com', first_name = 'brent', last_name = 'byrd'
WHERE user_id = 1;