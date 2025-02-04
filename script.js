const btnQuote = document.querySelector("#btn-get-quote");

btnQuote.addEventListener("click", renderQuote);

async function renderQuote(event) {
  const pQuote = document.querySelector("#quote");
  const pAuthor = document.querySelector("#author");

  pQuote.innerText = "";
  pAuthor.innerText = "";

  // Wait for fetch to complete -> usage of await requires renderQuote to be an async function
  let randomQuoteObj = await fetchRandomQuote();

  if (randomQuoteObj === null) {
    pQuote.append(document.createTextNode("Quote could not be loaded."));
    return;
  }

  pQuote.append(document.createTextNode(randomQuoteObj.quote));
  pAuthor.append(document.createTextNode("— " + randomQuoteObj.author));
}

async function fetchRandomQuote() {
  try {
    const response = await fetch("https://dummy-apis.netlify.app/api/quote/");
    return await response.json();
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
