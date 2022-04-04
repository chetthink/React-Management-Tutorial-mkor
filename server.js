const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000 ;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/api/customers', (req,res) => {
    res.send([
            {
            "id" : "1",
            "image" : "https://placeimg.com/64/64/any/1",
            "name" : "고찬우",
            "birthday":"961018",
            "gender" : "남자",
            "job": "대학생"
          },
          {
            "id" : "2",
            "image" : "https://placeimg.com/64/64/any/2",
            "name" : "조현아",
            "birthday":"960522",
            "gender" : "여자",
            "job": "치위생사"
          },
          {
            "id" : "3",
            "image" : "https://placeimg.com/64/64/any/3",
            "name" : "케이크",
            "birthday":"220403",
            "gender" : "무생물",
            "job": "디저트"
          }        
    ]);
});

app.listen(port, ()=> console.log(`Listening on port ${port}`));