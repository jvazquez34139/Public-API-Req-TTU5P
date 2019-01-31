//employeesData{employees[12objects],filled:true}
//doms
const $card = $('.card');
// event listeners
$card.on('click',function(e){
  console.log(findEmail(this));
});

//dom functions
// const makeCards = (employees,div) =>{
//   employees.forEach(employee => {
//     const name = employee.name.first + " " + employee.name.last;
//     const email = employee.email;
//     const location = employee.location.city + ", " + employee.location.state;
//     const img = employee.picture.medium;
//     div.append($(`<div class="card">
//         <div class="card-img-container">
//             <img class="card-img" src="${img}" alt="profile picture">
//         </div>
//         <div class="card-info-container">
//             <h3 id="name" class="card-name cap">${name}</h3>
//             <p class="card-text email">${email}</p>
//             <p class="card-text cap">${location}</p>
//         </div>
//     </div>`));
//   });
// }
const makeModal = employ => {

}

const findEmail = element =>{
  return element.children[1].children[1].innerText;
}
//Gallery
// data.results.forEach(result => console.log(result.name.first));

console.log($card);
