#--INTRODUCTION 

nous allons apprendre à créer un exemple d'authentification MERN JWT complet : 
application de connexion et d'enregistrement avec React.js + Node.js Express + MongoDB. 
Le serveur principal utilise Node.js Express avec jsonwebtoken pour l'authentification 
et l'autorisation JWT, Mongoose pour interagir avec la base de données MongoDB.
Le front-end sera créé avec React (avec/sans Redux), React Router, Axios.
Nous utiliserons également Bootstrap et effectuerons la validation du formulaire.

##--EXPLICATION
Il s'agira d'une authentification MERN complète, avec Node.js Express pour le back-end et React.js pour le front-end. 
L'accès est vérifié par l'authentification JWT.

L'utilisateur peut créer un nouveau compte, se connecter avec un nom d'utilisateur et un mot de passe.
Autorisation par le rôle de l'Utilisateur (admin, modérateur, utilisateur)

Via Express routes, HTTP request that matches a route will be checked by CORS Middleware before coming to Security layer.

###--Security layer includes:

JWT Authentication Middleware: verify Register, verify token
Authorization Middleware: check User’s roles with record in MongoDB database
An error message will be sent as HTTP response to Client when the middlewares throw any error, .

Controllers interact with MongoDB Database via Mongoose library and send HTTP response (token, user information, data based on roles…) to Client.

####--Technology
Express 4.17.1
bcryptjs 2.4.3
jsonwebtoken 8.5.1
mongoose 5.9.1
MongoDB



###########################################Front-end with React, React Router
#--Technologie
Nous allons utiliser ces modules :
React 16
react-router-dom 5
axios 0.19.2
react-validation 3.0.7
Bootstrap 
validator 12.2.0
