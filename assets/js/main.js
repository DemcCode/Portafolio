/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)
        console.log(target);
        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })

        target.classList.add('filters__active')

        tabs.forEach(t=>{
            t.classList.remove('filter-tab-activate')
        })
        tab.classList.add('filter-tab-activate')
    })
})

// =============== DARK LIGHT THEME ===============
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Function to check if localStorage is available
const isLocalStorageAvailable = () => {
    try {
        const test = '__storage_test__';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
};

// Functions to get and set theme and icon
const getSelectedTheme = () => isLocalStorageAvailable() ? localStorage.getItem('selected-theme') : null;
const getSelectedIcon = () => isLocalStorageAvailable() ? localStorage.getItem('selected-icon') : null;
const setSelectedTheme = (theme) => isLocalStorageAvailable() && localStorage.setItem('selected-theme', theme);
const setSelectedIcon = (icon) => isLocalStorageAvailable() && localStorage.setItem('selected-icon', icon);

// Current theme and icon
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ?  'ri-sun-line' : 'ri-contrast-2-line';

// Apply previously selected theme and icon
const selectedTheme = getSelectedTheme();
const selectedIcon = getSelectedIcon();
if (selectedTheme) {
    document.body.classList.toggle(darkTheme, selectedTheme === 'light');
    themeButton.classList.toggle(iconTheme, selectedIcon === 'ri-sun-line');
}

// Toggle theme manually
themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    setSelectedTheme(getCurrentTheme());
    setSelectedIcon(getCurrentIcon());
});

function forceDownload() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/Desarrollador%20Frontend%20-%20DiegoMora.pdf';
    link.download = 'Desarrollador_Frontend_DiegoMora.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }



/*=============== SCROLL REVEAL ANIMATION ===============*/
function forceDownload() {
    const link = document.createElement('a');
    link.href = '/assets/pdf/Desarrollador%20Frontend%20-%20DiegoMora.pdf';
    link.download = 'Desarrollador_Frontend_DiegoMora.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.filters__button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});