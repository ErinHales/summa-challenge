INSERT INTO user_info
(name, username, email, password)
VALUES ($1, $2, $3, $4)
RETURNING *;