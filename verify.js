
window.setInterval('refresh()',5000);
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      let set1=''+user.emailVerified;
      let set2='true';
      let result=set1.localeCompare(set2);
   if(result == 0){
       location.replace('index.html');
   }
  }
});
function verifymail() {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            alert('Verification link sent successfully')
        });
}
function refresh(){
    window.location.reload();
}



