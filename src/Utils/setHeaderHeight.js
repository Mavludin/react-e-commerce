const setMainTagMarginTop = () => {
    const headerHeight = window.getComputedStyle(document.querySelector('header')).height;
    const mainTag = document.querySelector('main');
    mainTag.style.marginTop = headerHeight;
}

export default setMainTagMarginTop;
