document.addEventListener("DOMContentLoaded", function () {
  const bookList = [
    {
      title: "Book 1 Title",
      author: "Author 1",
      description: "Short description of Book 1.",
      cover: "./images/atomic-habits.jpeg",
      link: "#",
    },
    {
      title: "Book 2 Title",
      author: "Author 2",
      description: "Short description of Book 2.",
      cover: "./images/deep-work.jpeg",
      link: "#",
    },
    {
      title: "Book 1 Title",
      author: "Author 1",
      description: "Short description of Book 1.",
      cover: "./images/atomic-habits.jpeg",
      link: "#",
    },
    {
      title: "Book 2 Title",
      author: "Author 2",
      description: "Short description of Book 2.",
      cover: "./images/deep-work.jpeg",
      link: "#",
    },
    {
      title: "Book 1 Title",
      author: "Author 1",
      description: "Short description of Book 1.",
      cover: "./images/atomic-habits.jpeg",
      link: "#",
    },
    {
      title: "Book 2 Title",
      author: "Author 2",
      description: "Short description of Book 2.",
      cover: "./images/deep-work.jpeg",
      link: "#",
    },
  ];

  function createBookElement(book) {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book");
    bookElement.innerHTML = `
      <img src="${book.cover}" alt="${book.title}">
      <div class="book-info">
        <h2 class="book-title">${book.title}</h2>
        <p class="book-author">Author: ${book.author}</p>
        <p class="book-description">${book.description}</p>
      </div>
    `;
    return bookElement;
  }

  const bookGrid = document.querySelector(".book-grid");
  bookList.forEach((book) => {
    const bookElement = createBookElement(book);
    bookGrid.appendChild(bookElement);
  });

  //   modal part
  const modal = document.querySelector(".modal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".close-btn");

  const bookItems = document.querySelectorAll(".book");
  console.log("bookItems", bookItems);
  //   show modal
  function showModal(imageSrc, title, description) {
    modalImage.src = imageSrc;
    modalDescription.textContent = description;
    modalTitle.textContent = title;
    modal.style.display = "flex"; // Show the modal when clicking the image
  }

  bookItems.forEach((item) => {
    const image = item.querySelector("img");
    const title = item.querySelector(".book-title").textContent; // Get the book title
    const description = item.querySelector(".book-description").textContent; // Get the book description

    image.addEventListener("click", () => {
      showModal(image.src, title, description);
    });
  });

  function hideModal() {
    modal.style.display = "none";
  }
  // Close modal when clicking on the close button
  closeBtn.addEventListener("click", hideModal);

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      hideModal();
    }
  });
});
