const books = [
    { title: "The Great Gatsby", category: "Fiction" },
    { title: "1984", category: "Dystopian" },
    { title: "To Kill a Mockingbird", category: "Classic" },
    { title: "The Catcher in the Rye", category: "Classic" },
    { title: "Brave New World", category: "Dystopian" }
];

const categories = ["All", "Fiction", "Dystopian", "Classic"];
let browsingHistory = [];

document.addEventListener("DOMContentLoaded", () => {
    displayBooks(books);
    displayCategories(categories);
    handleSearch();
});

function displayBooks(bookList) {
    const bookUl = document.getElementById("books");
    bookUl.innerHTML = "";
    bookList.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book.title;
        li.addEventListener("click", () => addToHistory(book.title));
        bookUl.appendChild(li);
    });
}

function displayCategories(categoryList) {
    const categoryUl = document.getElementById("category-list");
    categoryUl.innerHTML = "";
    categoryList.forEach(category => {
        const li = document.createElement("li");
        li.textContent = category;
        li.addEventListener("click", () => filterByCategory(category));
        categoryUl.appendChild(li);
    });
}

function filterByCategory(category) {
    const filteredBooks = category === "All" 
        ? books 
        : books.filter(book => book.category === category);
    displayBooks(filteredBooks);
}

function handleSearch() {
    const searchBar = document.getElementById("searchBar");
    searchBar.addEventListener("keyup", (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
        displayBooks(filteredBooks);
    });
}

function addToHistory(bookTitle) {
    browsingHistory.unshift(bookTitle);
    const historyUl = document.getElementById("history-list");
    historyUl.innerHTML = "";
    browsingHistory.forEach(title => {
        const li = document.createElement("li");
        li.textContent = title;
        historyUl.appendChild(li);
    });
}
