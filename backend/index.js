const express = require('express');
const userRouter = require('./router/userRouter');



const app = express();

const port = 5000;

app.use(express.json());
app.use('/user',userRouter);





app.listen(port,()=>{console.log('server started...')});