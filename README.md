# API for send sms messages form web page using nexmo and Node.js-Express 

> in this simple site i show how to implement NEXOM to send sms for mobile 

### about NEXOM 
[Click Here For More About NEXMO ](https://www.nexmo.com) 

## Quick Start

``` bash
# Install dependencies for server
npm install

# you have to change line 9 && 10 by your info from nexmo at app.js 
// nexmo init 
const nexmo = new Nexmo ({
    apiKey :'your key nexmo',
    apiSecret :'your Secret code of nexmo'
},{debug : true}) ;
# you have to put your phone number in line 41 at app.js 

  'your number here  ', number ,text , {type : 'unicode'},

# Run the Express 
nodeomn or npm start 
# Server runs on http://localhost:1000 
```

## App Info

### Author
Abdullah Abu Rtima 

### Version

1.0.0

### License

This project is licensed under the MIT License
