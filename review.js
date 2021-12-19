


function getIds(btn) {

    document.getElementById("erp").innerHTML = "" + btn.id;
    const gog = document.getElementById("frog");
    gog.style.display = 'none';
    var userDataRe = firebase.database().ref('weblinks/' + btn.id).orderByKey();
    userDataRe.once("value").then(function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var key = childSnapshot.key;
            var childData = childSnapshot.val();
            var namlink= childSnapshot.val();
            document.getElementById('kn').innerHTML='LEARN MORE ABOUT '+btn.id+' FROM THEIR WEBSITE';
            document.getElementById('lik').innerHTML = '>> '+namlink+' <<';
            document.getElementById('lik').addEventListener('click' , (ev)=>{
                 window.open(""+namlink);
            })

        });
    });



let _campusrat=0,_facrat=0,_labsrat=0,_librariesrat=0,_sportsrat=0,_teachingrat=0,count=0,ave=0,ave1=0,ave2=0,ave3=0,ave4=0,ave5=0;
    var userDataRef = firebase.database().ref('colleges/'+btn.id).orderByKey();
userDataRef.once("value").then(function(snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();

        var name_val = childSnapshot.val().AName.toUpperCase();
        var _campus = childSnapshot.val().Campus;
        _campusrat = parseInt(_campusrat) + parseInt(_campus);
        var _faculties = childSnapshot.val().Faculties;
        _facrat = parseInt(_facrat) + parseInt(_faculties);
        var _labs = childSnapshot.val().Labs;
        _labsrat = parseInt(_labsrat) + parseInt(_labs);
        var _libraries = childSnapshot.val().Libraries;
        _librariesrat = parseInt(_librariesrat) + parseInt(_libraries);
        var _sports = childSnapshot.val().Sports;
        _sportsrat = parseInt(_sportsrat) + parseInt(_sports);
        var _teaching = childSnapshot.val().Teaching;
        _teachingrat = parseInt(_teachingrat) + parseInt(_teaching);
        var id_val = childSnapshot.val().User_Review;
        count++;
        $("#pople").append("<div id='sosd' style='background: rgba(230,230,231,0.38);border-width: 1px;border-radius: 25px;padding-left: 2.5%;padding-top: 10px;padding-bottom: 5px;margin-right: 3%;border-style: solid;border-color: rgba(64,64,65,0.77)'><p id='melon' style='font-size:165%;color:#00267a'>" + name_val + "</p><p><h2> Campus : " + _campus + "/5 </h2></p><p><h2> Faculties :  " + _faculties + "/5</h2></p><p><h2> Labs :  " + _labs + "/5</h2></p><p><h2> Libraries :  " + _libraries + "/5</h2></p><p><h2>  Sports:  " + _sports + "/5</h2></p><p><h2> Quality Teaching :  " + _teaching + "/5</h2></p><p><br><h2> User Review :  " + id_val + "</h2></p></div> <br><br><br>");


    });

    ave = parseInt(_campusrat) / parseInt(count);
    ave1 = parseInt(_facrat) / parseInt(count);
    ave2 = parseInt(_labsrat) / parseInt(count);
    ave3 = parseInt(_librariesrat) / parseInt(count);
    ave4 = parseInt(_sportsrat) / parseInt(count);
    ave5 = parseInt(_teachingrat) / parseInt(count);
    let ave6 = (parseInt(ave) + parseInt(ave1) + parseInt(ave2) + parseInt(ave3) + parseInt(ave4) + parseInt(ave5)) / 6;
    var di=Math.round(ave6);
    if (di >= 1) {
        document.getElementById('d1').innerHTML = "<span class=\"fa fa-star  checked\"></span>"
    }
    else {document.getElementById('d1').innerHTML = "<span class=\"fa fa-star  no\"></span>"}
    if (di >= 2) {
        document.getElementById('d2').innerHTML = "<span class=\"fa fa-star  checked\"></span>"
    }else {document.getElementById('d2').innerHTML = "<span class=\"fa fa-star no \"></span>"}

    if (di >= 3) {
        document.getElementById('d3').innerHTML = "<span class=\"fa fa-star checked\"></span>"
    }else {document.getElementById('d3').innerHTML = "<span class=\"fa fa-star no \"></span>"}

    if (di >= 4) {
        document.getElementById('d4').innerHTML = "<span class=\"fa fa-star  checked\"></span>"
    }else {document.getElementById('d4').innerHTML = "<span class=\"fa fa-star no \"></span>"}

    if (di >= 5) {
        document.getElementById('d5').innerHTML = "<span class=\"fa fa-star  checked\"></span>"
    }else {document.getElementById('d5').innerHTML = "<span class=\"fa fa-star no \"></span>"}

    document.getElementById('one').innerHTML = "" + ave ;
    document.getElementById('two').innerHTML = "" + ave1 ;
    document.getElementById('three').innerHTML = "" + ave2 ;
    document.getElementById('four').innerHTML = "" + ave3 ;
    document.getElementById('five').innerHTML = "" + ave4 ;
    document.getElementById('six').innerHTML = "" + ave5 ;
    var a1,a2,a3,a4,a5,a6;
    a1 = ave*20;
    document.getElementById('b5').style.width=''+a1+'%';
    a2 = ave1*20;
    document.getElementById('b4').style.width=''+a2+'%';
    a3 = ave5*20;
    document.getElementById('b3').style.width=''+a3+'%';
    a4 = ave3*20;
    document.getElementById('b2').style.width=''+a4+'%';
    a6 = ave2*20;
    document.getElementById('b1').style.width=''+a6+'%';
    a5 = ave4*20;
    document.getElementById('b0').style.width=''+a5+'%';

   document.getElementById('golmal').innerHTML=" Average based on "+count+" reviews."
      document.getElementById('pople').style.display = 'none';
    document.getElementById('see').style.display = 'block';
    document.getElementById('avgrat').style.display = 'block';
});
}
function seep(){
    document.getElementById('pople').style.display='block';
}
 /*function gotData(data){
    //console.log(data.val());
    var scores = data.val();
    var keys= Object.keys(scores);
    console.log(keys);
    for( var i=0;i<='null'; i++){
        var k = keys[i];
        var initials = scores[k].AName;
        var score = scores[k].User_Review;
        //console.log(initials,' : ',score);
        var li = document.createElement('li');
      document.getElementById('pople').innerHTML='<h2>'+initials +'</h2><br><br>'+"Feedback: "+score;
    }
 }

 function errData(err){
    console.log('Error!');
    console.log(err);
 }*/
