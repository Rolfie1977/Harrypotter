const fetchBooks = async () => {
	const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
	const harrybooks = await res.json();
	return harrybooks;
};

const displayBooks = async () => {
	const books = await fetchBooks();

	// Find sektionen i stedet for at tilføje direkte til body
	const booksSection = document.getElementById("books-section");

	// Opret en container til bøgerne
	let booksContainer = document.createElement("div");
	booksContainer.classList.add("books-container");

	books.forEach((book) => {
		console.log(book);

		// Opret et container div for hver bog
		let bookDiv = document.createElement("div");
		bookDiv.classList.add("book-container");

		// Opret et billedelement for bogens cover
		let img = document.createElement("img");
		img.src = book.cover;
		img.alt = book.title; // Alt tekst for tilgængelighed

		// Opret en div for boginformationer
		let infoDiv = document.createElement("div");
		infoDiv.classList.add("book-info");

		// Opret en titel element for bogens titel
		let title = document.createElement("h2");
		title.textContent = book.title;

		// Opret en beskrivelsesparagraf for bogens beskrivelse
		let description = document.createElement("p");
		description.textContent = book.description;

		// Tilføj titlen og beskrivelsen til info containeren
		infoDiv.appendChild(title);
		infoDiv.appendChild(description);

		// Tilføj billedet og info containeren til bog container div'en
		bookDiv.appendChild(img);
		bookDiv.appendChild(infoDiv);

		// Tilføj bog container div'en til bøgernes container
		booksContainer.appendChild(bookDiv);
	});

	// Tilføj bøgernes container til books-sektionen
	booksSection.appendChild(booksContainer);
};

displayBooks();
