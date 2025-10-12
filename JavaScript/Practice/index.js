const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    const icon = accordion.querySelector('.icon');
    const answer = accordion.querySelector('.answer');

    accordion.addEventListener('click', () => {
        // Toggle the 'active' class on the icon for rotation
        icon.classList.toggle('active');

        // Toggle the 'active' class on the answer
        // When active, set max-height to scrollHeight for smooth animation
        // When not active, set max-height to 0
        if (icon.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
            answer.style.maxHeight = 0;
        }
    });
});