//request for randomuser
const inc = 'location,name,picture,email,phone,dob';
const url = 'https://randomuser.me/api/?results=12&nat=us&inc=' + inc;

const employeesData = {filled: false};
const $gallery = $('#gallery');

$.ajax({
  url: url,
  dataType: 'json',
  success: function(data) {
    //update global variable employeesData
    employeesData.employees = data.results;
    employeesData.filled = true;
    console.log(employeesData.filled);//check2

    //load employees
    //the Gallery
    makeCards(data.results);

    //load app.js after the employees data is loaded
    //making the code synchronus but easier to read
    const scriptTag = document.createElement('script');
    document.querySelector('body').append(scriptTag);
    scriptTag.setAttribute('src','js/app.js');
    scriptTag.setAttribute('charset','utf-8');
  }
});//$.ajax

console.log(employeesData.filled);//check1

const makeCards = emps =>{
  $gallery.html("");
  emps.forEach(emp => {
    const name = emp.name.first + " " + emp.name.last;
    const email = emp.email;
    const location = emp.location.city + ", " + emp.location.state;
    const img = emp.picture.medium;
    $gallery.append($(`<div class="card">
        <div class="card-img-container">
            <img class="card-img" src="${img}" alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${name}</h3>
            <p class="card-text email">${email}</p>
            <p class="card-text cap">${location}</p>
        </div>
    </div>`));
  });

}
