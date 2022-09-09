function showOnScroll(elementToWatch, elementToShow, ...headerContainers) {
    let elementToWatchOffsetTop = element => element.getBoundingClientRect().top;
    let headerSummaryHeight = 0,
        indentToShow;

    for (let headerContainer of headerContainers) {
        headerSummaryHeight += document.querySelector(headerContainer).getBoundingClientRect().height;
    }

    indentToShow = headerSummaryHeight - document.querySelector(elementToWatch).getBoundingClientRect().height;

    elementToWatchOffsetTop(document.querySelector(elementToWatch)) < indentToShow ?
        document.querySelector(elementToShow).classList.add('show') :
        document.querySelector(elementToShow).classList.remove('show');
}

window.addEventListener('scroll',
    () => showOnScroll(
        '.welcome-top-button',
        '.welcome-floating-panel',
        '.mobile-navbar', '.trustpilot-header', '.main-navigation')
);