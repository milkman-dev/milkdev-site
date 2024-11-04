function setBackgroundImage(theme, isResumePage) {
    const basePath = isResumePage ? '../' : './';
    const config = {
        dark: {
            image: `${basePath}res/img/cloud-dark.png`,
            backgroundColor: '#2D3748'
        },
        light: {
            image: `${basePath}res/img/cloud-light.png`,
            backgroundColor: 'var(--light-bg)'
        }
    };

    const { image, backgroundColor } = config[theme];
    document.body.style.backgroundImage = `url(${image})`;
    document.body.style.backgroundColor = backgroundColor;
}

function initTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    setBackgroundImage(currentTheme, window.location.pathname.includes('resume'));
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    localStorage.setItem('theme', newTheme);
    html.setAttribute('data-theme', newTheme);
    setBackgroundImage(newTheme, window.location.pathname.includes('resume'));
}

document.addEventListener('DOMContentLoaded', initTheme);