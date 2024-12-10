// Select all the FAQ items
const faqItems = document.querySelectorAll('.faq-item');

// Loop through each FAQ item
faqItems.forEach((item) => {
  const questionButton = item.querySelector('.faq-question'); // Select the question button
  const answer = item.querySelector('.faq-answer'); // Select the answer container
  const plusIcon = item.querySelector('.plus-icon'); // Select the plus icon
  const minusIcon = item.querySelector('.minus-icon'); // Select the minus icon

  // Add a click event listener to the question button
  questionButton.addEventListener('click', () => {
    // Toggle the 'active' class on the answer
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Toggle icons: show the minus icon if answer is visible, otherwise show the plus icon
    plusIcon.style.display = plusIcon.style.display === 'none' ? 'inline' : 'none';
    minusIcon.style.display = minusIcon.style.display === 'inline' ? 'none' : 'inline';
  });
});

