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


    const myLibrary = []; // Array to store book objects

    // Book constructor function
    function Book(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = readStatus;
    }

    // Function to add a new book to the library array
    function addBookToLibrary(title, author, pages, readStatus) {
        const newBook = new Book(title, author, pages, readStatus);
        myLibrary.push(newBook);
        displayBooks(); // Refresh display after adding new book
    }


