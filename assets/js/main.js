function updateTextContent(elementId, newText) {
    const element = document.getElementById(elementId);
    
    // Remove existing text nodes
    element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
            element.removeChild(node);
        }
    });

    // Append the new text node as the last child
    const textNode = document.createTextNode(newText);
    element.appendChild(textNode);
}

function updateContent(data, language) {
    const content = data[language];
    
    updateTextContent('navHome', content.navHome);
    updateTextContent('navAbout', content.navAbout);
    updateTextContent('navWorks', content.navWorks);
    updateTextContent('navContact', content.navContact);

    document.getElementById('titleName').textContent = content.titleName;
    document.getElementById('subtitleName').textContent = content.subtitleName;

    document.getElementById('sectionAbout').textContent = content.sectionAbout;
    document.getElementById('profileText').innerHTML = content.profileText;
    document.getElementById('skills').innerHTML = content.skills;


    document.getElementById('sectionWorks').textContent = content.sectionWorks;
    document.getElementById('subtitleWorks').textContent = content.subtitleWorks;
    document.getElementById('workName').textContent = content['work-element'].contentContainer.workName;
    document.getElementById('workGitHub').textContent = content['work-element'].contentContainer.workGitHub;
    document.getElementById('workLive').textContent = content['work-element'].contentContainer.workLive;
    document.getElementById('workTextProject').textContent = content['work-element'].contentContainer.workTextProject;

    document.getElementById('sectionContact').textContent = content.sectionContact;
    document.getElementById('contactName').innerText = content.contactName;
    document.getElementById('contactEmail').innerText = content.contactEmail;
    document.getElementById('contactMessage').innerText = content.contactMessage;

    document.getElementById('footerText').textContent = content.footerText;
}

// Initialize the page with the default language
async function initializePage() {
    const data = await fetchTranslateData();
    const defaultLanguage = 'en';
    updateContent(data, defaultLanguage);
    document.getElementById('translate-btn').textContent = defaultLanguage === 'en' ? 'EN' : 'PT';
}

document.getElementById('translate-btn').addEventListener('click', async () => {
    try {
    const data = await fetchTranslateData();
    const currentLanguage = document.getElementById('translate-btn').textContent === 'EN' ? 'pt' : 'en';
    updateContent(data, currentLanguage);
    document.getElementById('translate-btn').textContent = currentLanguage === 'en' ? 'EN' : 'PT';

} catch (error) {
    console.error('Erro ao buscar os dados', error);
}    
});

// Initialize the page content when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializePage);