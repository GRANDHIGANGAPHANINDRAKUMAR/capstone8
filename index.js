let userForm = document.getElementById("form");

let retrieveEntries = () => {
    let storedEntries = localStorage.getItem("user-entry");
    let entries = [];

    if (storedEntries) {
        entries = JSON.parse(storedEntries);
    }

    return entries;
};

let users = retrieveEntries();

let displayEntries = () => {
    let entries = retrieveEntries();

    let tableEntries = entries.map((entry) => {
        const dataName = `<td>${entry.name}</td>`;
        const dataEmail = `<td>${entry.email}</td>`;
        const dataPassword = `<td>${entry.password}</td>`;
        const dataDob = `<td>${entry.Dob}</td>`;
        const dataCheckbox = `<td>${entry.checkbox}</td>`;

        return `<tr>${dataName} ${dataEmail} ${dataPassword} ${dataDob} ${dataCheckbox}</tr>`;
    }).join("\n");

    let table = `<table>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>DOB</th>
            <th>Checkbox</th>
        </tr>
        ${tableEntries}
    </table>`;

    document.getElementById("user-table").innerHTML = table;
};

let saveUser = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const Dob = document.getElementById("Dob").value;
    const checkbox = document.getElementById("checkbox").checked;

    if(validate(Dob)){
        document.getElementById("sample").innerHTML="The age should between 18 and 55";
        return 
    }

    let entry = {
        name,
        email,
        password,
        Dob,
        checkbox
    };
    users.push(entry);
    localStorage.setItem("user-entry", JSON.stringify(users));
    userForm.reset();
    location.reload()
    displayEntries();
};
let dat=document.getElementById("Dob").value;
userForm.addEventListener("submit", saveUser);
displayEntries();
userForm.reset();
let sample=document.getElementById("sample");
function validate(dob)
    {
        var currentDate = new Date();
        var day = currentDate.getDate()
        var month = (currentDate.getMonth() + 1)
        var year = currentDate.getFullYear();

        let userDob = new Date(dob)
        let userage = year - userDob.getFullYear 

        if(!(userage>18 && userage < 55 ))
        {
            return true
        } 
        
    }