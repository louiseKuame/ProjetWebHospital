

// //Indiquer le port d'ecoute du serveur
// server.listen(5000, ()=>console.log('Serveur running on port 5000'))


import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import passport from 'passport';
import dotenv from 'dotenv'

import database from './connexion.js'

import notreStrategy from './auth/strategies.js'

database.sync()

import rendezvousRoutes from './routes/rendezvousRoutes.js'
import facturationRoutes from './routes/facturationRoutes.js'
import prestationsRoutes from './routes/prestationsRoutes.js'
import hospitalsRoutes from './routes/hospitalsRoutes.js'
import roleRoutes from './routes/roleRoutes.js'
import departmentRoutes from './routes/departmentRoutes.js'
import serviceRoutes from './routes/serviceRoutes.js'
import userRoutes from './routes/userRoutes.js';

const PORT = process.env.PORT || 5000

// console.log('ENV',dotenv.config().parsed)

const app = express()

app.use(helmet())
app.use(compression())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())

passport.use(notreStrategy)

app.use('/rendezvous', rendezvousRoutes)
app.use('/facturation', facturationRoutes)
app.use('/prestations', prestationsRoutes)
app.use('/hospitals', hospitalsRoutes)
app.use('/role', roleRoutes)
app.use('/departments', departmentRoutes)
app.use('/service', serviceRoutes)
app.use('/users', userRoutes)
// app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));



app.listen(PORT, () => console.log(`Serveur running on port ${PORT}`))





