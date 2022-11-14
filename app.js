const express= require('express');
const firebase=require('firebase/app');
const app= express();
const port= process.env.PORT || 4000;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNNORCUH5rLP8qk34FcKhTQxebDZtX95U",
    authDomain: "exercise-five-410bf.firebaseapp.com",
    projectId: "exercise-five-410bf",
    storageBucket: "exercise-five-410bf.appspot.com",
    messagingSenderId: "582383822954",
    appId: "1:582383822954:web:3ade9fc657841b4eee0213"
  };
  
  firebase.initializeApp(firebaseConfig);
 
  const indexRoute = require('./routes/index.js');
  const singlePostRoute = require("./routes/singlePost.js");
  const createPostRoute = require("./routes/createPost.js");
  
  
  app.use('/', indexRoute) ;
  app.use('/post', singlePostRoute) ;
  app.use('/create', createPostRoute) ;
  
  
  
   
  app.listen(port, () => {
    console.log(`Working! here is the port: ${port}`)
  })  