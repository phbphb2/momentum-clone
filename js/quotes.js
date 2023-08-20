const quotes = [
  {
    quote: "There are better starters than me but I'm the best finisher. ",
    author: "-Usain Bolt-",
  },
  {
    quote:
      "I've failed over and over and over again in my life and that is why I succeed. ",
    author: "-Michael Jordan-",
  },
  { quote: "Grind Hard, Shine Hard. ", author: "-Dwayne Johnson-" },
  {
    quote:
      "When you go through hardships and decide not to surrender, that is strength. ",
    author: "-Arnold Schwarzenegger-",
  },
  {
    quote:
      "It's lack of faith that makes people afraid of meeting challenges, and I believe in myself. ",
    author: "-Muhammad Ali-",
  },
  {
    quote:
      "Everyone has a plan until they get hit. Then, like a rat, they stop in fear and freeze. ",
    author: "-Mike Tyson-",
  },
  { quote: "It's on me. ", author: "-Tracy McGrady-" },
  {
    quote: "Basketball is played not with your height, but with your heart. ",
    author: "-Allen Iverson-",
  },
  {
    quote: "You miss 100% of the shots you never take. ",
    author: "-Wayne Gretsky-",
  },
  { quote: "Losers complain, winners train. ", author: "-Jose Mourinho-" },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todatsQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todatsQuote.quote;
author.innerText = todatsQuote.author;
