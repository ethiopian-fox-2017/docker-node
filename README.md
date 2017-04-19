# docker-node

this is a basic example of using docker to run database server, server itself, and the client.

every running container will be interacting each others, for example: client will send request to the server and process the request. if there is any request that need an access to the database, the server will access the database server and get the data. Once the server has the data that has been requested, the server are going to send a response back to the client.

in this case, i create a simple (might be messy) forum-type single-page web application.

## The Database Server
[Database Server](https://hub.docker.com/r/arfanizar/mongodb-server-app/)

run the images with this command : `sudo docker run -itd --net=host arfanizar/mongodb-server-app`

## The Server
[Server](https://hub.docker.com/r/arfanizar/hacktivoverflow-server-app/)

run the images with this command : `sudo docker run -itd --net=host arfanizar/hacktivoverflow-server-app`

## The Client
[Client](https://hub.docker.com/r/arfanizar/client-app/)

run the images with this command : `sudo docker run -p 8080:80 -d arfanizar/client-app`

access the client from http://localhost:8080
