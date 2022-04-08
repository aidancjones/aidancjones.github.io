// document.querySelector('button')
// document.querySelector('.new-quote button')
// document.querySelector('#js-new-quote')
// --> ID most specific

async function getQuote() {
  console.log("quote button was clicked");
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(resoonse.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json[0].quote);
    displayAuthor(json[0].author);
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

async function getAuthor() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(resoonse.statusText)
    }
    const json = await response.json();
  } catch(err) {
    console.log(err)
    alert('Failed');
  }
}


function displayAuthor(author) {
  const quoteText = document.querySelector('#js-author-text');
  quoteText.textContent = author;
}


const endpoint = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';

const quoteButton = document.querySelector('#js-new-quote');
quoteButton.addEventListener('click', getAuthor);
quoteButton.addEventListener('click', getQuote);
