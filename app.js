const express = require('express');
const bodyParser = require('body-parser');
const Nexmo = require ('nexmo');
const ejs = require('ejs');
const socketio = require('socket.io');

// nexmo init 
const nexmo = new Nexmo ({
    apiKey :'ed994881',
    apiSecret :'aZRsJPCUym0oqNb1'
},{debug : true}) ;


// app init 
const app = express();

// templete engine setup 
app.set('view engine','html' );
app.engine('html',ejs.renderFile);

//public folder setup 
app.use(express.static(__dirname + '/public'));

//body parser middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//index route 
app.get('/',(req,res) =>{
 res.render('index'); 
});
// catch from post

app.post('/',(req,res) =>{
  res.send(req.body);
  console.log(req.body);
 const number = req.body.number ;
 const text   = req.body.text ; 
 const from   = req.body.from ;
 console.log(number);
 nexmo.message.sendSms( 
    from , number ,text , {type : 'unicode'},
    (err ,responseData) => {
        if (err){
            console.log(err);
        }else{
            console.dir(responseData);
            const data = {
                id : responseData.messages[0] ['message-id'],
                number :responseData.messages[0] ['to']
                      }
                      // emit to client 
           io.emit('smsStatus',data);
        }
    }
)

});

//server 
const port = 1000 ; 
const server = app.listen(port,() => console.log(`server work on port ${port}`)); 

const io = socketio(server); 
io.on('connection' ,(socket) => {
  console.log('Connected');
  io.on('disconnect' ,() => {
      console.log('Disconnected');
  })
});