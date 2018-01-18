// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");
var modal_link = document.getElementById("bio_and_contact")

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }
modal_link.onclick = function() {
    modal.style.display = "block";
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



// // Get the modal
// var cv_modal = document.getElementById('my_cv_Modal');

// // Get the button that opens the modal
// // var btn = document.getElementById("myBtn");
// var cv_modal_link = document.getElementById("cv")

// // Get the <span> element that closes the modal
// var cv_span = document.getElementsByClassName("cv_close")[0];

// // When the user clicks on the button, open the modal 
// // btn.onclick = function() {
// //     modal.style.display = "block";
// // }
// cv_modal_link.onclick = function() {
//     cv_modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// cv_span.onclick = function() {
//     cv_modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         cv_modal.style.display = "none";
//     }
// }