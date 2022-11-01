var modal = document.getElementById("myModal");
var btn_name = document.getElementById("reserve_button");
var selection;
var span = document.getElementsByClassName("close")[0];
var alldivs = document.getElementsByClassName("button");
let form = document.getElementById("myform");




for (let i = 0; i < alldivs.length; i++) {
    alldivs[i].onclick = function(){
        modal.style.display = "block";
        selection = alldivs[i];
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.addEventListener("submit", function (e) {
    console.log(form.parentElement);
    e.preventDefault() // This prevents the window from reloading
    let formdata = new FormData(this);
    let input = formdata.get("my-input");
    let value = selection.getAttribute('value');
    console.log(value);
    closeSeat(value,'http://127.0.0.1:8000/closeSeat/', input );
    modal.style.display = "none";
    });




