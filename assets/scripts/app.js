const fetchBooks = async () => {
    const res = await fetch('https://potterapi-fedeperin.vercel.app/en/books');
    const harrybooks = await res.json();
    return harrybooks;
  }
  
  const logBooks = async () => {
    let books = await fetchBooks();
  
    // Create a container for all books
    let booksContainer = document.createElement('div');
    booksContainer.classList.add('books-container');
  
    books.map(book => {
      console.log(book);
  
      // Create a container div for each book
      let bookDiv = document.createElement('div');
      bookDiv.classList.add('book-container');
  
      // Create an image element for the book cover
      let img = document.createElement('img');
      img.src = book.cover;
      img.alt = book.title; // Alt text for accessibility
      
      // Create a div for book information
      let infoDiv = document.createElement('div');
      infoDiv.classList.add('book-info');
  
      // Create a title element for the book title
      let title = document.createElement('h2');
      title.textContent = book.title;
  
      // Create a description paragraph for the book description
      let description = document.createElement('p');
      description.textContent = book.description;
  
      // Append the title and description to the info container
      infoDiv.appendChild(title);
      infoDiv.appendChild(description);
  
      // Append the image and info container to the book container div
      bookDiv.appendChild(img);
      bookDiv.appendChild(infoDiv);
  
      // Append the book container div to the books container
      booksContainer.appendChild(bookDiv);
    });
  
    // Append the books container to the body
    document.body.appendChild(booksContainer);
  }
  
  logBooks();
  