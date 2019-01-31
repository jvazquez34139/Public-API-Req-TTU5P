//employeesData{employees[12objects],filled:true}
//location,name,picture,email,phone,dob
//doms
const $card = $('.card');
const $modalContainer = $('<div class="modal-container"></div>');
const $modal = $('<div class="modal">');
const $close = $('<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>');
const $modalInfo = $('<div class="modal-info-container">');
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
$modalContainer.insertAfter($('#gallery'));
$modalContainer.append($modal);
$modal.append($close);
$modal.append($modalInfo);
$modalInfo.append($img);
$modalInfo.append($name);
$modalInfo.append($email);
$modalInfo.append($city);
$modalInfo.append($hr);
$modalInfo.append($phone);
$modalInfo.append($location);
$modalInfo.append($dob);
//hide modal by default
$modalContainer.hide();

// event listeners
$card.on('click',function(e){
  let employee =
  employeesData.employees.filter(employee => {
    if(employee.email == findEmail(this)){
      return employee;
    }
  })[0];
  makeModal(employee);
});
$close.on('click',function(){
  $modalContainer.hide();
});
//displays modal with udpdated info
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
