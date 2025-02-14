const bookBtn = document.getElementById("btn");
const bookDialog = document.getElementById("book-dialog");



bookBtn.addEventListener("click", () =>{
    bookDialog.showModal();
} );

bookDialog.addEventListener("click", (event) => {
    if (event.target === bookDialog) {
        bookDialog.close();
    }
});