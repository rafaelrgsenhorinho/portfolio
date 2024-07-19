function updateContent(data, language) {
    const content = data[language];
    
    document.getElementById('navHome').textContent = content.navHome;
    document.getElementById('navAbout').textContent = content.navAbout;
    document.getElementById('navWorks').textContent = content.navWorks;
    document.getElementById('navContact').textContent = content.navContact;

    document.getElementById('titleName').textContent = content.titleName;
    document.getElementById('subtitleName').textContent = content.subtitleName;

    document.getElementById('sectionAbout').querySelector('h3').textContent = content.sectionAbout;
    document.getElementById('profileText').innerHTML = content.profileText;

    document.getElementById('sectionWorks').querySelector('h3').textContent = content.sectionWorks;
    document.getElementById('workName').textContent = content['work-element'].contentContainer.workName;
    document.getElementById('workGitHub').textContent = content['work-element'].contentContainer.workGitHub;
    document.getElementById('workLive').textContent = content['work-element'].contentContainer.workLive;
    document.getElementById('workTextProject').textContent = content['work-element'].contentContainer.workTextProject;

    document.getElementById('sectionContact').querySelector('h3').textContent = content.sectionContact;
    document.getElementById('contactName').placeholder = content.contactName;
    document.getElementById('contactEmail').placeholder = content.contactEmail;
    document.getElementById('contactMessage').placeholder = content.contactMessage;

    document.getElementById('footerText').textContent = content.footerText;
}

document.getElementById('translate-btn').addEventListener('click', async () => {
    try {
    const data = await loadTranslationData();
    const currentLanguage = document.getElementById('translate-btn').textContent === 'EN' ? 'pt' : 'en';
    updateContent(data, currentLanguage);
    document.getElementById('translate-btn').textContent = currentLanguage === 'en' ? 'EN' : 'PT';

} catch (error) {
    console.error('Erro ao buscar os dados de tradução:', error);
}    
});