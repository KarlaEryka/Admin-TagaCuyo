// SIDEBAR DROPDOWN
const allDropdown = document.querySelectorAll('#sidebar .side-dropdown');
const sidebar = document.getElementById('sidebar');
const historyLink = document.querySelector('.history-link');

// Function to handle dropdown active state
function setActiveDropdown(link) {
    const dropdown = link.nextElementSibling;

    // Toggle active class for link
    if (!link.classList.contains('active')) {
        allDropdown.forEach(item => {
            const aLink = item.parentElement.querySelector('a:first-child');
            aLink.classList.remove('active');
            item.classList.remove('show');
        });
    }

    link.classList.toggle('active');
    dropdown.classList.toggle('show');
}

// Event listener for all sidebar dropdown links
allDropdown.forEach(item => {
    const a = item.parentElement.querySelector('a:first-child');
    a.addEventListener('click', function (e) {
        e.preventDefault();
        setActiveDropdown(this);
        // Save active state to localStorage
        localStorage.setItem('activeLink', this.href);
    });
});

// SIDEBAR COLLAPSE
const toggleSidebar = document.querySelector('nav .toggle-sidebar');
const allSideDivider = document.querySelectorAll('#sidebar .divider');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('hide');

    if (sidebar.classList.contains('hide')) {
        allSideDivider.forEach(item => {
            item.textContent = '-';
        });
        allDropdown.forEach(item => {
            const a = item.parentElement.querySelector('a:first-child');
            a.classList.remove('active');
            item.classList.remove('show');
        });
    } else {
        allSideDivider.forEach(item => {
            item.textContent = item.dataset.text;
        });
    }
});

// Restore the active link on page load
document.addEventListener('DOMContentLoaded', function () {
    const activeLink = localStorage.getItem('activeLink');
    if (activeLink) {
        const link = document.querySelector(`a[href="${activeLink}"]`);
        if (link) {
            setActiveDropdown(link);
        }
    }
});

// PROFILE DROPDOWN
const profile = document.querySelector('nav .profile');
const imgProfile = profile.querySelector('img');
const dropdownProfile = profile.querySelector('.profile-link');

imgProfile.addEventListener('click', function () {
    dropdownProfile.classList.toggle('show');
});
