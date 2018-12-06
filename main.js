var descriptionArray = [
    { details: "Enter your email and website and we'll let you know if your site goes down",
      next: "The small print" },
    { details: "We'll check your site once an hour and send you an email if we can't connect",
      next: "What are the rules?" },
    { details: "One watched domain per email address (new ones will be overwritten)",
      next: "More..." },
    { details: "If your site is offline for longer than a week we'll stop watching it",
      next: "How?" },
    { details: "You can learn about how it works and see the code in our <a href='https://github.com/neefrehman/isyoursiteonline' target='_blank'>GitHub repo</a>",
      next: "Cool!" },
    { details: "Thanks! Please confirm your email address via the link we just sent you",
      next: "Got it!" }
];


var descriptionState = 0;
var next = document.querySelector(".next");
var form = document.querySelector("Form");
var details = document.querySelector(".details");
var nextLink = document.querySelector(".next a");


next.addEventListener("click", function() {
    descriptionState = descriptionState + 1;
    if (descriptionState > descriptionArray.length - 2) {
        descriptionState = 0;
    }
    details.innerHTML = descriptionArray[descriptionState].details;
    nextLink.innerHTML = descriptionArray[descriptionState].next;
});


form.addEventListener("submit", function(e) {
    details.innerHTML = descriptionArray[descriptionArray.length - 1].details;
    nextLink.innerHTML = descriptionArray[descriptionArray.length - 1].next;
    e.preventDefault();
});