async function fetchTranslateData() {
    const url = '../data/translate.json';
    const fetching = await fetch(url)
    return await fetching.json()
}