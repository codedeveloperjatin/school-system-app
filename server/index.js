import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import studentRoutes from './routes/student.js';
// we imported the router const from student.js , we can change the name of that const here as long as we keep 
// the name unchanged in our code here.

const app = express();


app.use('/students', studentRoutes);

app.use(bodyParser.json({limit: "20mb", extended:true}));
app.use(bodyParser.urlencoded({limit: "20mb", extended:true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://dbUser:dbUser@cluster0.utifn.mongodb.net/test?retryWrites=true&w=majority';
// creation of database. i created a new project and set up a new cluster then added new user permissions 
// then set up the env and connected to my application.

const PORT = process.env.PORT || 5000;
// this will live our app on one of the two selected ports.

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser:true, useUnifiedTopology:true
    })
    .then(() => app.listen(PORT, () => 
            console.log(`connection to the server successfull and running on port: ${PORT} `)
    ))
    .catch((err) => console.log(err.message));

mongoose.set('useFindAndModify', false);


