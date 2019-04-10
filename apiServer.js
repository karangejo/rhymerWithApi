const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
        origin: 'http://localhost:3000'
}));

app.route('/').get(function(req,res){
        const word = req.query.word;
        console.log('word: ',word);
        const url ='https://api.datamuse.com/words?rel_rhy=' + word;
        console.log('url: ',url);

        request(url, function(error,response,body){
                console.log('error: ',error);
                console.log('response: ', response && response.statusCode);
                console.log('body: ',body);
                res.send(body);
        });
 
})

app.listen(3010, function(){
        console.log('Server started on port 3010');
});
