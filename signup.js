function signup() {


        const loemail = document.getElementById('semail');
        const lopassword = document.getElementById('spassword');

        const email = loemail.value
        const password = lopassword.value
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              location.replace("verify.html");
            })
            .catch((error) => {
                document.getElementById("essage").innerHTML=error.message
            });

}
