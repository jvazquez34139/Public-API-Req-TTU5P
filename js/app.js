
const inc = "location,name,picture,email,phone,dob"
//to make sure the ajax req loads first
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us&inc=' + inc,
  dataType: 'json',
  success: function(data) {
/////////////////////////////////////////
    let employees = data.results;

    //doms
    const $gallery = $('#gallery');

    //Gallery
    // data.results.forEach(result => console.log(result.name.first));
    makeCards(employees,$gallery);
  }
});//$.ajax

const makeCards = (employees,div) =>{
  employees.forEach(employee => {
    const name = employee.name.first + " " + employee.name.last;
    const email = employee.email;
    const location = employee.location.city + ", " + employee.location.state;
    const img = employee.picture.medium;
    div.append($(`<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${img}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${name}</h3>
            <p class="card-text">${email}</p>
            <p class="card-text cap">${location}</p>
        </div>
    </div>`));
  });
}
