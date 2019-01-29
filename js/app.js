
const inc = "location,name,picture,email,phone,dob"
//to make sure the ajax req loads first
$.ajax({
  url: 'https://randomuser.me/api/?results=12&nat=us&inc=' + inc,
  dataType: 'json',
  success: function(data) {
/////////////////////////////////////////
    let employees = data.results;


  }
});//$.ajax
