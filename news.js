allButton.addEventListener('click', () => {
    itemsToShow = 7;
    currentCategory = 'all';
    buttonArray.forEach(button => button.classList.remove('active-button'));
    allButton.classList.add('active-button');
    displayNews(sortedData, itemsToShow);
});

businessButton.addEventListener('click', () => {
    const filteredData = sortedData.filter(data => data.category === 'business');
    itemsToShow = 7;
    currentCategory = 'business';
    buttonArray.forEach(button => button.classList.remove('active-button'));
    businessButton.classList.add('active-button');
    displayNews(filteredData, itemsToShow);
});

politicsButton.addEventListener('click', () => {
    const filteredData = sortedData.filter(data => data.category === 'politics');
    itemsToShow = 7;
    currentCategory = 'politics';
    buttonArray.forEach(button => button.classList.remove('active-button'));
    politicsButton.classList.add('active-button');
    displayNews(filteredData, itemsToShow);
});

sportsButton.addEventListener('click', () => {
    const filteredData = sortedData.filter(data => data.category === 'sport');
    itemsToShow = 7;
    currentCategory = 'sport';
    buttonArray.forEach(button => button.classList.remove('active-button'));
    sportsButton.classList.add('active-button');
    displayNews(filteredData, itemsToShow);
});

entertainmentButton.addEventListener('click', () => {
    const filteredData = sortedData.filter(data => data.category === 'entertainment');
    itemsToShow = 7;
    currentCategory = 'entertainment';
    buttonArray.forEach(button => button.classList.remove('active-button'));
    entertainmentButton.classList.add('active-button');
    displayNews(filteredData, itemsToShow);
});
