function setLanguage(lang) {
    if (lang === 'en') {
        enLang.classList.add('active');
        huLang.classList.remove('active');
    } else {
        huLang.classList.add('active');
        enLang.classList.remove('active');
    }
    // Here you would typically update your app's language
    console.log(`Language changed to: ${lang}`);
    const elements = document.querySelectorAll('[data-' + lang + ']');
    elements.forEach(element => {
        element.textContent = element.getAttribute('data-' + lang);
    });
}
