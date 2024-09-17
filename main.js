document.addEventListener('DOMContentLoaded', () => {
    function showSection(sectionId) {
        const sections = document.querySelectorAll('main > section');
        const navLinks = document.querySelectorAll('nav ul li a');
    
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.classList.remove('hidden');
                section.setAttribute('aria-hidden', 'false');
            } else {
                section.classList.add('hidden');
                section.setAttribute('aria-hidden', 'true');
            }
        });
    
        navLinks.forEach(link => {
            if (link.getAttribute('id') === `btn-${sectionId}`) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }    

    // Evento de clique nos botões de navegação
    document.getElementById('btn-dashboard').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('dashboard');
    });

    document.getElementById('btn-professor').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('professores');
    });

    document.getElementById('btn-aluno').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('alunos');
    });

    document.getElementById('btn-turma').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('turmas');
    });

    document.getElementById('btn-disciplina').addEventListener('click', (e) => {
        e.preventDefault();
        showSection('disciplinas');
    });

    // Mostrar o dashboard por padrão
    showSection('dashboard');
});
