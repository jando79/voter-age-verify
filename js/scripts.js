window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let vote = document.getElementById("voter");
    voter.setAttribute("class", "hidden");
    let under21Message = document.getElementById("under-21");
    under21Message.setAttribute("class", "hidden");

    const age = parseInt(document.querySelector("input#age").value);

    if (age >= 21) {
    vote.removeAttribute("class");
    } else {
    under21Message.removeAttribute("class");
    }
  };
};