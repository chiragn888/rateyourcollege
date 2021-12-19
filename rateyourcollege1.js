var dom;
function getId(btn) {
    dom=btn.id;
    document.getElementById("collegename").innerHTML = "" + btn.id;
    const gog = document.getElementById("frog");
    gog.style.display = 'none';
    const lolgh= document.getElementById('ntavl');
    lolgh.style.display ='block';
}
function submite() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            const database = firebase.database();
            const comments = document.getElementById("comm");
            const fo = comments.value.toString();
            const nam = document.getElementById("mlo");
            const name = nam.value;
            const rat1 = document.querySelector('input[name="rating1"]:checked').value;
            const rat2 = document.querySelector('input[name="rating2"]:checked').value;
            const rat3 = document.querySelector('input[name="rating3"]:checked').value;
            const rat4 = document.querySelector('input[name="rating4"]:checked').value;
            const rat5 = document.querySelector('input[name="rating5"]:checked').value;
            const rat6 = document.querySelector('input[name="rating6"]:checked').value;
            firebase.database().ref('colleges/' + dom + '/' + user.uid).set({
                AName: name,
                User_Review: fo,
                Campus: rat1,
                Faculties: rat2,
                Teaching: rat3,
                Libraries: rat4,
                Labs: rat5,
                Sports: rat6

            }).then(() => {
                        alert('Your Review will be updated shortly');
                        location.replace("mik.html");
                    });



            }

});
}



