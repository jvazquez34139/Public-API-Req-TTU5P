//employeesData{employees[12objects],filled:true}
//location,name,picture,email,phone,dob
//DOMS////////////////////////////////////
const $card = $('.card');
const $modalContainer = $('<div class="modal-container"></div>');
const $modal = $('<div class="modal">');
const $close = $('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
const $modalInfo = $('<div class="modal-info-container">');
const $modalbtns = $('<div class="modal-btn-container"></div>');
const $modalprev = $('<button type="button" id="modal-prev" class="modal-prev btn">Prev</button>');
const $modalNext = $('<button type="button" id="modal-next" class="modal-next btn">Next</button>');
const $search = $('.search-container');
const $searchForm = $('<form action="#" method="get"></form>');
const $searchInput = $('<input type="search" id="search-input" class="search-input" placeholder="Search...">');
const $submit = $('<input type="submit" value="&#x1F50D;" id="serach-submit" class="search-submit">');
//the info doms
const $img = $('<img class="modal-img" src="https://placehold.it/125x125" alt="profile picture">');
const $name = $('<h3 id="name" class="modal-name cap">name</h3>');
const $email = $('<p class="modal-text">email</p>');
const $city = $('<p class="modal-text cap">city</p>');
const $hr = $('<hr>');
const $phone = $('<p class="modal-text">(555) 555-5555</p>');
const $location = $('<p class="modal-text">123 Portland Ave., Portland, OR 97204</p>');
const $dob = $('<p class="modal-text">Birthday: 10/21/2015</p>');
//append to appreate dom
const infoDoms = [$img,$name,$email,$city,$hr,$phone,$location,$dob];
$modalContainer.insertAfter($('#gallery'));
$modalContainer.append($modal);
$modal.append($close);
$modal.append($modalInfo);
infoDoms.forEach(dom => $modalInfo.append(dom));
$modalContainer.append($modalbtns);
$modalbtns.append($modalprev);
$modalbtns.append($modalNext);
$search.append($searchForm);
$searchForm.append($searchInput);
$searchForm.append($submit);
//hide modal by default
$modalContainer.hide();

//GLOBAL VARIABLES////////////////////////
//holds which imployee info displayed
//when switching with prev and next
let empInView = {};
//searched list to flip through
let searchedEmps = employeesData.employees;

//EVENT LISTENERS/////////////////////////
$card.on('click',function(e){
  let employee =
  employeesData.employees.filter(employee => {
    if(employee.email == findEmail(this)){
      return employee;
    }
  })[0];
  empInView = employee;
  makeModal(employee);
});
$submit.on('click',function(e){
  e.preventDefault();
  
})
$modalprev.on('click',function(){

});
$modalNext.on('click',function(){

});
$close.on('click',function(){
  $modalContainer.hide();
});

//HELPER FUNCTIONS////////////////////////
const makeModal = employee => {
  $img.attr('src',employee.picture.medium);
  $name.text(employee.name.first + " " + employee.name.last);
  $email.text(employee.email);
  $city.text(employee.location.city);
  $phone.text(employee.phone);
  $location.text(employee.location.street + ', '
                + employee.location.postcode);
  $dob.text("Birthday: " + employee.dob.date.substring(0,10));
  $modalContainer.show();
}

const findEmail = element =>{
  return element.children[1].children[1].innerText;
}
