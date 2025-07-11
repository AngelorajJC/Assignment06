document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Prevent the event from bubbling up
        mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });

    // Prevent menu from closing when clicking inside it
    mobileMenu.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});
