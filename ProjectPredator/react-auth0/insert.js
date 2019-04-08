var mysql = require("mysql");
var express = require('express');
var cors = require('cors');
var app = express();

// Create connection.
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Crystallam1',
    database: 'projectpredators'
});

// Connect to the browser
connection.connect(err => {
    if(err){
        return err
    }
});

app.use(cors());

/** 
 * app.get('/', (req, res) => {
 * res.send('Hello World');
 * });
*/

// Insert data
app.get('/secret/add', (req, res) =>{
    const {f_name, l_name, job_title, salary, finished_projects } = req.query;
    const INSERT_PREDATORS_QUERY = `INSERT INTO predators (f_name, l_name, job_title, salary, finished_projects ) VALUES('${f_name}','${l_name}','${job_title}', ${salary}, ${finished_projects})`;
    connection.query(INSERT_PREDATORS_QUERY, (err, results) => {
        if (err){
            return res.send(err);
        }else{
            return res.send("sucessful adding stuff");
        }
    })
});

// Search all data
app.get('/secret', (req, res) => {
    // Initialize all of queries
    const SELECT_ALL_FROM_PREDATORS_QUERY = `SELECT * FROM predators`;
	connection.query(SELECT_ALL_FROM_PREDATORS_QUERY, (err, results) =>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});


app.get('/secret/:id', (req, res) => {
    const SELECT_ALL_FROM_PREDATORS_WHERE_ID_QUERY = `SELECT * FROM predators WHERE ID = ? ORDER BY ID ASC`;
	connection.query(SELECT_ALL_FROM_PREDATORS_WHERE_ID_QUERY,[req.params.id], (err, results) =>{
		if(err){
			return res.send(err)
		}else{
			return res.json({
				data: results
			})
		}
	});
});


// Delete specific id number.
app.get('/secret/delete/:id', (req, res) =>{
    const DELETE_FROM_PREDATORS_WHERE_ID = `DELETE FROM predators WHERE ID = ?`;
    connection.query(DELETE_FROM_PREDATORS_WHERE_ID, [req.params.id], (err, results) => {
        if (err){
            return res.send(err)
        }else{
            return res.send('Successfully deleted!')
        }
    });
});

// Listen to port 4000
app.listen(4000, () =>{
    console.log("Server is running on port 4000")
});