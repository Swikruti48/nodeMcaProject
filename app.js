const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json());
app.use(cors());

const port = 3001;

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, './index.html'));
});

app.post('/senddata', (req, res) => {
	var note = (req.body.note);
	console.log(note);

	var mod_spawn = require("child_process").spawn;		
	var process = mod_spawn('python',["./write.py",note] ); 

	process.stdout.on('data', function(data) {

		if(data.toString().indexOf("ERROR")>= 0){

			console.log("ERROR OCCURED" + data)
			res.write(data);
			res.end();

		}
		else{

			console.log("ResultFromPython :\n"+data);

			res.write(data);
			res.end();

		}
	})

});


app.get('/read', (req, res) => {
	const fs = require('fs');
	const data = fs.readFileSync('read.txt', 'utf8');

	res.send('<p>' + data + '</p>');
});

app.listen(port, () => console.log('App is listening on port '+port+':'));