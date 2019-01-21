let descriptionState = 0;
const form = document.querySelector("form");
const details = document.querySelector(".details");
const nextLink = document.querySelector(".next a");
const descriptionArray = [
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


nextLink.addEventListener("click", function() {
    descriptionState = descriptionState + 1;
    if (descriptionState > descriptionArray.length - 2) {
        descriptionState = 0;
    }
    details.innerHTML = descriptionArray[descriptionState].details;
    nextLink.innerHTML = descriptionArray[descriptionState].next;
    details.classList.remove("submitted");
});


form.addEventListener("submit", function(e) {
    descriptionState = - 1;
    details.innerHTML = descriptionArray[descriptionArray.length - 1].details;
    nextLink.innerHTML = descriptionArray[descriptionArray.length - 1].next;
    details.classList.add("submitted");
    form.reset();
    e.preventDefault();
});
