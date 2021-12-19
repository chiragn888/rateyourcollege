document.getElementById("inputform").addEventListener("submit",(ev)=>{
    ev.preventDefault()
})
let hhui;
const a=11;
const b=12;
function detId(but){
    hhui=but.id;
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      location.replace("index.html")
  }

});
const loginemail=document.getElementById('lemail');
const loginpassword=document.getElementById('lpassword');
const loginbutton=document.getElementById('loginbutton');

function login() {
        const email = loginemail.value
        const password = loginpassword.value
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch((error)=>{
                document.getElementById("errormessage").innerHTML=error.message
            })
}


