const express = require('express');
var path = require("path");
const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors())

const listdata = {
    "data":[
    {
          "id" :1,
          "name":"testData1",
          "value":"CONSTANT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 1"
    },
    {
          "id" :2,
          "name":"testData2",
          "value":"MULTIPLY",
          "config":"rootEVAL",
          "status":"InActive",
          "Dec":"This is to test for node render 2"
    },
    {
          "id" :3,
          "name":"testData3",
          "value":"CONSTANT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 3"
    },
    {
          "id" :4,
          "name":"testData4",
          "value":"ADD",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 4"
    },
    {
          "id" :5,
          "name":"testData5",
          "value":"ADD",
          "config":"rootEVAL",
          "status":"InActive",
          "Dec":"This is to test for node render 5"
    },
    {
          "id" :6,
          "name":"testData6",
          "value":"SUBTRACT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 6"
    },
    {
          "id" :7,
          "name":"testData7",
          "value":"CONSTANT",
          "config":"rootEVAL",
          "status":"InActive",
          "Dec":"This is to test for node render 7"
    },
    {
          "id" :8,
          "name":"testData8",
          "value":"SUBTRACT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 8"
    },
    {
          "id" :9,
          "name":"testData9",
          "value":"SUBTRACT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 9"
    },
    {
          "id" :10,
          "name":"testData10",
          "value":"SUBTRACT",
          "config":"rootEVAL",
          "status":"Active",
          "Dec":"This is to test for node render 9"
    }
    ]
}
var displaydata = {
    "data" : [{
    "id":1,
    "name":"prodData1",
    "value":"CONSTANT",
    "config":"rootEVAL",
    "status":"Active",
    "Desc":"This is to display for node render 1"
    },
    {
    "id":2,
    "name":"prodData2",
    "value":"MULTIPLY",
    "config":"rootEVAL",
    "status": "Active",
    "Desc": "This is to display for node render 2"
    },
    {
    "id":3,
    "name":"prodData3",
    "value":"CONSTANT",
    "config":"rootEVAL",
    "status":"InActive",
    "Desc":"This is to display for node render 3"
    },
    {
    "id":4,
    "name":"prodData4",
    "value":"ADD",
    "config":"rootEVAL",
    "status":"InActive",
    "Desc":"This is to display for node render 4"
    },
    {
    "id":5,
    "name":"prodData5",
    "value":"ADD",
    "config":"rootEVAL",
    "status":"Active",
    "Desc":"This is to display for node render 5"
    },
    {
    "id":6,
    "name":"prodData6",
    "value":"SUBTRACT",
    "config":"rootEVAL",
    "status":"Active",
    "Desc":"This is to display for node render 6"
    },
    {
    "id":7,
    "name":"prodData7",
    "value":"CONSTANT",
    "config":"rootEVAL",
    "status":"InActive",
    "Desc":"This is to display for node render 7"
    }]
    }
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api',(req, res) => {
    res.json(listdata);
});
app.get('/api/:id',(req, res) => {
    let id = req.params.id;
    json = displaydata['data'].filter(function(item){
        if(id==item['id']){
            return item
        }
        
    })
    if(json[0]){
      res.json(json[0]);
    }
    else{
      res.json({
            "id":'',
            "name":'',
            "value":'',
            "config":'',
            "status":'',
            "Desc":''
            })
    }
});

app.get('/', function (req, res) {
      res.sendFile(path.join(__dirname, 'build', 'index.html'));
    });

app.listen(port, () => console.log(`Running on port ${port}!`))