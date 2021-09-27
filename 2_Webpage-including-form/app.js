let employees = [];

const createObj = (event) => {
  event.preventDefault();
  
  let user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
  };
  employees.push(user);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  console.log(employees);
};

document.getElementById("submit").addEventListener("click", createObj);


// for of loop
// obj.eid == document.getElementById("eid").value,
// {
    //console
// }

