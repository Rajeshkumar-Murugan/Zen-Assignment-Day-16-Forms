const Alignment = document.createElement("div");
Alignment.setAttribute("class", "Alignment");
document.body.append(Alignment);

const table = document.createElement("table");
table.setAttribute("class", "table");
Alignment.append(table)

table.innerHTML = `
<table class="table">
<thead>
 <tr>
   <th>First name</th>
   <th>Last name</th>
   <th>Pin Code</th>
   <th>Address</th>              
   <th>Gender</th>
   <th>Choice of food</th>
   <th>State</th>
   <th>Country</th>
 </tr>
</thead>
<tbody id="table-data">
</tbody>
</table>
`
const tbody = document.getElementById("table-data")


//fetch checkboxes values
function display() {
  let food = [];
  let checkboxes = document.getElementsByName('food')
  
  for(let i=0; i<checkboxes.length; i++)
  {
  if(checkboxes[i].checked){
     food.push(checkboxes[i].value) 
  }
  }
  console.log(food)

  //pusing forms value to table
tbody.innerHTML += `
 <tr>
   <td>${document.form1.fname.value}</td>
   <td>${document.form1.lname.value}</td>
   <td>${document.form1.pin.value}</td>
   <td>${document.form1.address.value}</td>
   <td>${document.form1.gender.value}</td>
   <td>${food}</td>
   <td>${document.form1.state.value}</td>
   <td>${document.form1.country.value}</td>
 </tr>`

 document.getElementById("form").reset();
}


