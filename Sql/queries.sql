/*
*   Showing all the movies that are favorited by the users
*   Showing how to filter the list
*/
SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id);

SELECT * FROM favorites
LEFT JOIN users USING (user_id)
LEFT JOIN movies USING (movie_id)
WHERE user_id = 2
ORDER BY movie_id;

/*
*  Showing all of the following relations
*  Showing how to filter the followers table
**/
SELECT * FROM followers
LEFT JOIN users bf ON (followers.being_followed = bf.user_id)
LEFT JOIN users f ON (followers.follower = f.user_id);

SELECT being_followed, bf.username, bf.user_id, follower, f.username, f.user_id FROM followers
LEFT JOIN users bf ON (followers.being_followed = bf.user_id)
LEFT JOIN users f ON (followers.follower = f.user_id);

/*
*   Showing the friends table
*   Showing how to filter the friends table
*/
SELECT * FROM friends
LEFT JOIN users mu ON (friends.my_user = mu.user_id)
LEFT JOIN users ou ON (friends.other_user = ou.user_id);

SELECT my_user, mu.username, mu.user_id, other_user, ou.username, ou.user_id FROM friends
LEFT JOIN users mu ON (friends.my_user = mu.user_id)
LEFT JOIN users ou ON (friends.other_user = ou.user_id);

/*
*   Showing the genres table
*/
SELECT * FROM genres;

/*
*   Showing the movies table
*/
SELECT * FROM movies;

/*
*   Showing the roles table
*/
SELECT * FROM roles;

/*
*   Showing the users table
*/
SELECT * FROM users;