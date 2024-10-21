function showSkills(listId) {
    const skillsDisplay = document.getElementById('skills-display');
    skillsDisplay.classList.add('visible'); // Exibe a seção de habilidades
    document.querySelectorAll('.skills-list').forEach(list => {
        list.style.display = 'none'; // Oculta todas as listas
    });
    document.getElementById(listId).style.display = 'block'; // Mostra a lista específica
}

document.getElementById('close-btn').onclick = function() {
    document.getElementById('skills-display').classList.remove('visible'); // Oculta a seção de habilidades
};
