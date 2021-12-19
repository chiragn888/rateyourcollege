
function addcollg(){

     const collegename =document.getElementById('myInps').value.toUpperCase().toString();
     const catogries = document.getElementById('state').value.toString();
     const weblink = document.getElementById('upl').value.toString();

     window.alert('College will be Verified and Added Successfully within 24 hours');


     const email = "brightbit888@gmail.com";
     const subject = "Rate Your College";
     const body_start = "By sending this mail we will know more about your College.%0D%0A %0D%0A Your college will be verified and approved shortly! %0D%0A %0D%0A College name - " + collegename + "%0D%0A %0D%0A Website - " + weblink + "%0D%0A %0D%0A Graduation Degree - " + catogries;
     const mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_start;
     window.open(mailto_link, 'emailWin');
     location.replace('mik.html');


}