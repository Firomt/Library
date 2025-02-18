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

  

    //Function to display books
    function displayBooks() {
        const bookList = document.getElementById("book-list");

        myLibrary.forEach((book, index) => {
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");

            bookCard.innerHTML = `
                <h4>Title:${book.title}</h4>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Read:</strong> ${book.readStatus}</p>
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;

            bookList.appendChild(bookCard);
        });


    }
     // Event listener for form submission
    document.getElementById("book-form").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const pages = document.getElementById("pages").value;
        const checkbox = document.querySelector("input[name='read-status']");
        const readStatus = checkbox.checked; // true if checked, false otherwise

         // Add book to library
         addBookToLibrary(title, author, pages, readStatus);

        document.getElementById("book-dialog").close();

        // Reset form
        event.target.reset();

    
      });


