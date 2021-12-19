
function fclick(){
    const fb=document.getElementById("fbutton");
    const ele=document.getElementById("femail");
      const email=ele.value
    firebase.auth().sendPasswordResetEmail(email)
  .then(() => {
   alert("verification link sent sucuesfully!");
   location.replace("login.html");
  })
  .catch((error) => {
   document.getElementById("fmessage").innerHTML=error.message
  });

}