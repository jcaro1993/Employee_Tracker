var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Westcoast123",
    database: "employee_db"
});

// connect to the mysql server and sql database
connection.connect((err) => {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("connected on port 3306")
    start()
})

function start() {
    inquirer
        .prompt({
            type: 'list',
            message: "what would you like to do ?",
            choices: ["add department", "add role", "add employee", "view departments", "view roles", "view employee", "Update employee roles"],
            name: "choices"
        }).then((response) => {
            console.log(response.choices)
            switch (response.choices) {
                case "add department":
                    addDepartment()
                    break;
                case "view departments":
                    viewDepartments()
                    break;
                    // ADD THE REST !!!!!!!!!!! ROLE , EMPLOYEE
            }
        })
}

function viewDepartments() {
    connection.query("SELECT * FROM department;", (err, res) => {
        if (err) throw err;
        console.table(res)
        start()
    })
}

function addDepartment() {
    inquirer
        .prompt([{
                type: "number",
                message: "dwhats department ID",
                name: "depId"
            },
            {
                type: "input",
                message: "what is the department name",
                name: "department_name"
            }
        ]).then((answer) => {
            "INSERT INTO employee_db.department SET ?;",
            answer,
            (err, res) => {
                if (err) throw err;
                console.log("department added")
                start()
            }
        })
}

// runs node
// inquired with questions
// if they answer
// run function for that answer