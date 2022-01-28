function signut(){
                firebase.auth().signOut().then(() => {

                    alert('LogOut Successful!');
                      window.location.replace('index.html');


        }).catch(() => {
          window.alert("Logout unsuccessful try again")
        });

}
function foreasd(){
    firebase.auth().onAuthStateChanged((user) => {
        if(user!=null){
            window.location.replace('mik.html');
        }
        else{
            window.location.replace('login.html');
        }
    });

}
function myFunction() {

  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  
    for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent ;

    if (txtValue.toUpperCase().indexOf(filter)) {
      li[i].style.display = "none";
    } else {
      li[i].style.display = "";
    }
  }

}
function userfun(){
firebase.auth().onAuthStateChanged((user) => {
    const fish= document.getElementById('actionf');
    if(fish.style.display == 'block'){
        fish.style.display = 'none';
    }
    else {
        if (user) {
            fish.style.display = 'block';
            const names = user.email;
            document.getElementById('weaboo').innerHTML = 'Hi,<br> ' + names;

        }
    }

});
}
function contactus(){
     const email = "brightbit888@gmail.com";
    const subject = "User Support";
    const body_start = "You can Contact us through email.%0D%0A %0D%0A We will get back to you shortly! %0D%0A %0D%0A Mention Your Query :  ";
    const mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_start;
    window.open(mailto_link,'emailWin');
}
function setting(){

}



