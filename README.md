# gutematch
A CRUD web-app for make and join in matches with other players, to be disputed in real life.

The logic and control of the match is conditioned from the database.

## Server
Is build with Node JS using Express.

It uses the **'pg'** postgreSQL library to create a pool connection and call the queries with all the params taken from the body or the url param needed in all the functions/procedures.

The response can be a table or a returned function message from database, later parsed in a json, or a server message.


**To improve:** error responses and 'developing||production' config (also in front-end).