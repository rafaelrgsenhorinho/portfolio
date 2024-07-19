async function fetchTranslateData() {
    const url = 'https://raw.githubusercontent.com/rafaelrgsenhorinho/portfolio/main/data/translate.json';
    const fetching = await fetch(url)
    return await fetching.json()
}