const readMoreButtons = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Prevent the button click from triggering the parent div's click event
    event.stopPropagation();

    // Blur all the other post cards
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach((card) => {
      if (card !== button.parentElement) {
        card.classList.add('blur');
      }
    });

    // Focus on the selected post card
    button.parentElement.classList.add('reading');

    // Add an event listener to remove the focus when clicking outside of the post card
    button.parentElement.addEventListener('click', (event) => {
      if (event.target === button.parentElement) {
        postCards.forEach((card) => {
          card.classList.remove('blur');
          card.classList.remove('reading');
        });
      }
    });
  });
});
