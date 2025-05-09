const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  const answer = item.querySelector('.faq-answer');
  const icon = item.querySelector('img');

  question.addEventListener('click', () => {
    const isOpen = answer.style.display === 'block';

    // Close all
    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.faq-question img').forEach(img => {
      img.src = './assets/images/icon-plus.svg';
    });

    // Open selected if it wasn't already open
    if (!isOpen) {
      icon.src = './assets/images/icon-minus.svg';
      answer.style.display = 'block';
    }
  });
});
