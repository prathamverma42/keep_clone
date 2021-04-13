import express from 'express';
import BodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import NoteRouter from './routes/routes.js';
const app = express();

app.use(BodyParser.json());
app.use(cors());

app.use('/',NoteRouter);

const CONNECTION_URI="mongodb+srv://pverma42:prathamverma26142@cluster1.mkm8i.mongodb.net/test";
const PORT = 5000;

mongoose.connect(CONNECTION_URI,{useUnifiedTopology:true,useFindAndModify:false,useNewUrlParser: true,useCreateIndex: true})
.then(app.listen(PORT),console.log(`Server started running at PORT ${PORT}`))
.catch( (error) => {  console.log(error.message);   }   );
    