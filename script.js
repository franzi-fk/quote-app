const btnQuote = document.querySelector("#btn-get-quote");

btnQuote.addEventListener("click", renderQuote);

function renderQuote(event) {
  const pQuote = document.querySelector("#quote");
  const pAuthor = document.querySelector("#author");

  pQuote.innerText = "";
  pAuthor.innerText = "";

  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((quote) => {
      pQuote.append(document.createTextNode(quote.quote));
      pAuthor.append(document.createTextNode(quote.author));
    });
}
