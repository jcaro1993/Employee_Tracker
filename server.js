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

async function start() {

    const results = await inquirer
        .prompt({
            type: 'list',
            message: "what would you like to do ?",
            choices: ["add department", "add role", "add employee", "view departments", "view role", "view employee", "Update employee roles"],
            name: "choices"
        });
    switch (results.choices) {
        case "add department":
            addDepartment()
            break;

        case "view departments":
            viewDepartments()
            break;

        case "add role":
            addRole()
            break;

        case "view role":
            viewRole()
            break;

        case "Update employee roles":
            updateEmployeerole()
            break;

        case "add employee":
            addEmployee()
            break;

        case "view employee":
            ViewEmployee()
            break;
    }
}

// department function
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
                message: "whats department ID",
                name: "id"
            },
            {
                type: "input",
                message: "what is the department name",
                name: "department_name"
            },
        ]).then((answer) => {
            console.table(answer)
            connection.query("INSERT INTO employee_db.department SET ?;",
                answer,
                (err, res) => {
                    if (err) throw err;
                    console.log("department added")
                    start()
                })
        })
}

// role function

// function viewRole() {
//     connection.query("SELECT * FROM role;", (err, res) => {
//         if (err) throw err;
//         console.table(res)
//         start()
//     })
// }

function  viewRole() {          
    connection.query("SELECT role.id, role.title, department.department_name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;",  function(err,  res)  {
        if (err) throw  err;            
        console.table(res);           
        start()          
    });
}

function addRole() {
    inquirer
        .prompt([{
                type: "number",
                message: "whats thier role ID ",
                name: "id"
            },
            {
                type: "input",
                message: "what is their title",
                name: "title"
            },
            {
                type: "number",
                message: "what is their anuanlly salary",
                name: "salary"
            },
            {
                type: "number",
                message: "whats thier department ID ",
                name: "department_id"
            }
        ]).then((answer) => {

            connection.query("INSERT INTO employee_db.role SET ?;",
                answer,
                (err, res) => {
                    if (err) throw err;
                    console.log("role added")
                    start()
                })
        })
}

// employee function

function ViewEmployee() {
    connection.query("SELECT * FROM employee;", (err, res) => {
        if (err) throw err;
        console.table(res)
        start()
    })
}

function addEmployee() {
    inquirer
        .prompt([{
                type: "number",
                message: "what is employees ID ",
                name: "id"
            },
            {
                type: "input",
                message: "what is Employee first name",
                name: "first_name"
            },
            {
                type: "input",
                message: "what is Employee last name",
                name: "last_name"
            },
            {
                type: "number",
                message: "what is employees role ID ",
                name: "role_id"
            },
            {
                type: "number",
                message: "what is thier managers ID ",
                name: "manager_id"
            }
        ]).then((answer) => {
            connection.query("INSERT INTO employee_db.employee SET ?;",
                answer,
                (err, res) => {
                    if (err) throw err;
                    console.log("employee added")
                    start()
                })
        })
}

// update employee function 

function updateEmployeerole() {
    connection.query("SELECT * FROM employee", function(err, results) {
        if (err) throw err;

        inquirer
            .prompt([{
                    name: "choice",
                    type: "rawlist",
                    choices: function() {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].first_name);
                        }
                        return choiceArray;
                    },
                    message: "what employee do you want to update ?"
                }

            ])
            .then(function(answer) {
                console.log(answer.choice)
                connection.query("SELECT * FROM role", function(err, results) {
                    if (err) throw err;

                    inquirer
                        .prompt([{
                                name: "choice",
                                type: "rawlist",
                                choices: function() {
                                    var choiceArray = [];
                                    for (var i = 0; i < results.length; i++) {
                                        choiceArray.push(results[i].title);
                                    }
                                    return choiceArray;
                                },
                                message: "what role do you want to update ?"
                            }

                        ])
                        .then(function(answer) {
                            console.log(answer.choice)


                        })
                });

            })
    });
}