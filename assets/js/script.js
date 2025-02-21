const bookBtn = document.getElementById("btn");
const bookDialog = document.getElementById("book-dialog");

bookBtn.addEventListener("click", () => {
    bookDialog.showModal();
});

bookDialog.addEventListener("click", (event) => {
    if (event.target === bookDialog) {
        bookDialog.close();
    }
});

const myLibrary = []; // Array to store books

// Book Constructor Function
function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

// Function to Add a Book
function addBookToLibrary(title, author, pages, readStatus) {
    const newBook = new Book(title, author, pages, readStatus);
    myLibrary.push(newBook);
    displayBooks(); // Refresh display after adding a book
}

// Function to Display Books
function displayBooks() {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear the list before re-rendering

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
       
        const toggleButtonText = book.readStatus ? "Read" : "Not Read";
        const buttonClass = book.readStatus ? "btn-read" : "btn-not-read";
        bookCard.innerHTML = `
            <div>
                <h4>Title: ${book.title}</h4>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <button class="toggle-read-btn ${buttonClass}" data-index="${index}">${toggleButtonText}</button>
                <button class="delete-btn" data-index="${index}">Remove</button>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}

// Event Listener for Book Form Submission
document.getElementById("book-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const checkbox = document.querySelector("input[name='read-status']");
    const readStatus = checkbox.checked; // true if checked, false otherwise

    addBookToLibrary(title, author, pages, readStatus);

    document.getElementById("book-dialog").close();
    event.target.reset(); // Reset form after submission
});

// Event Listener for Removing a Book 
document.getElementById("book-list").addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
        const index = parseInt(event.target.getAttribute("data-index"), 10);

        // Remove book from array
        myLibrary.splice(index, 1);

        // Re-render book list
        displayBooks();
    }

    if (event.target.classList.contains("toggle-read-btn")) {
        const index = parseInt(event.target.getAttribute("data-index"), 10);

        // Toggle read status of the book
        if (myLibrary[index]) {
            myLibrary[index].toggleReadStatus();
            displayBooks(); // Refresh the display for the updated book
        }
    }
});

//method to toggle read status
Book.prototype.toggleReadStatus = function() {
    this.readStatus = !this.readStatus; // Toggle read status
};

