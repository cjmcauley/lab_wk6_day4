document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');



  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const bookTitle = event.target.title.value;
    const bookAuthor = event.target.author.value;
    const bookCategory = event.target.category.value;

    const bookDetails = document.createElement('div');

    const author = document.createElement('h2');
    author.textContent = bookAuthor;
    bookDetails.appendChild(author);

    const title = document.createElement('h2');
    title.textContent = bookTitle;
    bookDetails.appendChild(title);

    const category = document.createElement('h2');
    category.textContent = bookCategory;
    bookDetails.appendChild(category);



    readingList = document.querySelector('#reading-list');
    readingList.appendChild(bookDetails);

    form.reset();

  });


});
