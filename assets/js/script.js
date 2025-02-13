const bookBtn = document.getElementById("btn");
const bookDialog = document.getElementById("book-dialog");
const closeBtn = document.querySelector("dialog button");



bookBtn.addEventListener("click", () =>{
    bookDialog.showModal();
} );

closeBtn.addEventListener("click", () => {
    bookDialog.close();
  });