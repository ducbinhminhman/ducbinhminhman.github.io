// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal interaction
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal');
    const modalOpenButtons = document.querySelectorAll('.modal-open');
    const modalCloseButton = document.querySelector('.modal-close');

    modalOpenButtons.forEach(button => {
        button.addEventListener('click', () =>
        modal.style.display = 'block';
    });
});

modalCloseButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Click outside to close the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
});

// Dynamic content loading for projects
// This is a placeholder for loading project details dynamically when clicking on a project
const loadProjectDetails = (projectId) => {
// Here you would typically make an AJAX request to your server or a static JSON file
// For now, we'll just log to the console
console.log(`Loading details for project ${projectId}`);
};

// Event listener for project clicks
document.querySelectorAll('.project').forEach(project => {
project.addEventListener('click', () => {
    const projectId = project.getAttribute('data-project-id');
    loadProjectDetails(projectId);
});
});

// Add more interactivity below as needed
