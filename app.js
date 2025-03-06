document.addEventListener('DOMContentLoaded', () => {
    // Project data
    const projects = [
        {
            id: 'minigame',
            title: 'This Minigame Idea Does Not Exist',
            url: 'https://websim.ai/@api/this-minigame-idea-does-not-exist',
            color: '#FF6B6B',
            iconPath: 'M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M15,21.5c-0.828,0-1.5-0.672-1.5-1.5s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S15.828,21.5,15,21.5z M16.5,16.5h-3v-9h3V16.5z'
        },
        {
            id: 'programming-language',
            title: 'This Programming Language Does Not Exist',
            url: 'https://websim.ai/@api/this-programming-language-does-not-exist',
            color: '#4ECDC4',
            iconPath: 'M25,5L5,15l20,10V5z M7,15l12-6v12L7,15z'
        },
        {
            id: 'date',
            title: 'This Date Does Not Exist',
            url: 'https://websim.ai/@api/this-date-does-not-exist',
            color: '#FF9F1C',
            iconPath: 'M24,4h-3V2h-2v2h-8V2h-2v2H6C4.9,4,4,4.9,4,6v18c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V6C26,4.9,25.1,4,24,4z M24,24H6V10h18V24z M24,8H6V6h3v2h2V6h8v2h2V6h3V8z M15,14h4v4h-4V14z'
        },
        {
            id: 'soda',
            title: 'This Soda Does Not Exist',
            url: 'https://websim.ai/@api/this-soda-does-not-exist',
            color: '#F25F5C',
            iconPath: 'M20,6h-4V4c0-1.1-0.9-2-2-2h-4C8.9,2,8,2.9,8,4v2H4C2.9,6,2,6.9,2,8v2c0,1.1,0.9,2,2,2h0.7l0.7,10.8c0.1,1.1,1,2,2.1,2h11c1.1,0,2-0.9,2.1-2L21.3,12H22c1.1,0,2-0.9,2-2V8C24,6.9,23.1,6,20,6z M10,4h4v2h-4V4z M18.6,22H7.4L6.7,12h12.6L18.6,22z M22,10H4V8h16V10z'
        },
        {
            id: 'cat',
            title: 'This Cat Does Not Exist',
            url: 'https://websim.ai/@api/this-cat-does-not-exist',
            color: '#247BA0',
            iconPath: 'M12,2c-5.33,7.33-8,9.33-8,14c0,4.42,3.58,8,8,8s8-3.58,8-8C20,11.33,17.33,9.33,12,2z M15,18c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1 s1,0.45,1,1C16,17.55,15.55,18,15,18z M12,18c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C13,17.55,12.55,18,12,18z M9,18 c-0.55,0-1-0.45-1-1c0-0.55,0.45-1,1-1s1,0.45,1,1C10,17.55,9.55,18,9,18z'
        },
        {
            id: 'wireframe',
            title: 'This Wireframe Does Not Exist',
            url: 'https://websim.ai/@api/this-wireframe-does-not-exist/1',
            color: '#70C1B3',
            iconPath: 'M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M20,18H4V6h16V18z M6,8h12v2H6V8z M6,12h8v2H6V12z M6,16h5v1H6V16z'
        },
        {
            id: 'arcade-game',
            title: 'This Classic Arcade Game Does Not Exist',
            url: 'https://websim.ai/@api/this-classic-arcade-game-does-not-exist/',
            color: '#5E2BFF',
            iconPath: 'M21,6H3C1.9,6,1,6.9,1,8v8c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2V8C23,6.9,22.1,6,21,6z M11,13H8v3H6v-3H3v-2h3V8h2v3h3V13z M15.5,15c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C17,14.33,16.33,15,15.5,15z M19.5,12c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5s1.5,0.67,1.5,1.5C21,11.33,20.33,12,19.5,12z'
        },
        {
            id: 'slideshow',
            title: 'This Slideshow Cartoon Does Not Exist',
            url: 'https://websim.ai/@api/this-slideshow-cartoon-does-not-exist',
            color: '#FFD166',
            iconPath: 'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M19,5v9.3L16.3,12L13,15.3V14l3-3l3,3V5H19z M5,19V5h8v14H5z M15,19v-2.7l2,2V19H15z'
        },
        {
            id: 'fridge',
            title: 'This Fridge Does Not Exist',
            url: 'https://websim.ai/@api/this-fridge-does-not-exist/',
            color: '#06D6A0',
            iconPath: 'M6,2h12c1.1,0,2,0.9,2,2v16c0,1.1-0.9,2-2,2H6c-1.1,0-2-0.9-2-2V4C4,2.9,4.9,2,6,2z M12,4v7h6V4H12z M6,4v7h4V4H6z M6,13v7h12v-7H6z M10,16h4v2h-4V16z'
        },
        {
            id: 'planet',
            title: 'This Planet Does Not Exist',
            url: 'https://websim.ai/@api/this-planet-does-not-exist',
            color: '#118AB2',
            iconPath: 'M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-1.12,0.23-2.18,0.65-3.15C4.74,8.93,4.83,9,5,9 c0.55,0,1-0.45,1-1c0-0.55-0.45-1-1-1C4.9,7,4.81,7.03,4.71,7.05c1.34-2.56,4.01-4.3,7.1-4.3c0.78,0,1.55,0.11,2.28,0.31 C13.72,3.15,13.35,3.5,13.35,4c0,0.55,0.45,1,1,1c0.44,0,0.8-0.29,0.94-0.68C17.94,5.82,20,8.65,20,12C20,16.41,16.41,20,12,20z'
        },
        {
            id: 'tetris',
            title: 'This Tetris Game Does Not Exist',
            url: 'https://websim.ai/@api/this-tetris-game-does-not-exist',
            color: '#EF476F',
            iconPath: 'M10,7v6h6V7H10z M12,11h-2V9h2V11z M16,11h-2V9h2V11z M10,15v2h2v-2H10z M14,15v2h2v-2H14z M4,5v14h16V5H4z M18,17H6V7h12V17z'
        },
        {
            id: 'snake',
            title: 'This Snake Game Does Not Exist',
            url: 'https://websim.ai/@api/this-snake-game-does-not-exist',
            color: '#073B4C',
            iconPath: 'M18.35,4.35L13,9.71V5c0-0.55-0.45-1-1-1H8C7.45,4,7,4.45,7,5v12c0,0.55,0.45,1,1,1h4c0.55,0,1-0.45,1-1v-4.71l5.35,5.35 c0.39,0.39,1.03,0.39,1.42,0l0,0c0.39-0.39,0.39-1.03,0-1.42L14.41,12l5.35-5.35c0.39-0.39,0.39-1.03,0-1.42l0,0 C19.38,4.84,18.74,4.84,18.35,4.35z'
        }
    ];

    // Create prompt badge SVG icon
    const createPromptBadge = () => {
        return `
            <div class="prompt-badge">
                <svg class="prompt-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" fill="#e74c3c"/>
                    <text x="12" y="16" font-size="12" font-weight="bold" text-anchor="middle" fill="white">1</text>
                </svg>
                <span class="prompt-text">prompt</span>
            </div>
        `;
    };

    // Create project SVG icon
    const createProjectIcon = (project) => {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60" height="60">
                <path d="${project.iconPath}" fill="white"/>
            </svg>
        `;
    };

    // Create gallery items
    const galleryContainer = document.querySelector('.gallery');
    projects.forEach(project => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.dataset.url = project.url;
        galleryItem.dataset.title = project.title;
        
        galleryItem.innerHTML = `
            <div class="thumbnail" style="background-color: ${project.color}">
                ${createProjectIcon(project)}
                <div class="thumbnail-overlay">
                    <h3 class="thumbnail-title">${project.title}</h3>
                    <button class="view-project">View Project</button>
                </div>
                ${createPromptBadge()}
            </div>
        `;
        
        galleryContainer.appendChild(galleryItem);
    });

    // Modal functionality
    const modalContainer = document.querySelector('.modal-container');
    const modalTitle = document.getElementById('modal-title');
    const projectIframe = document.getElementById('project-iframe');
    const closeModalBtn = document.getElementById('close-modal');
    const openNewTabBtn = document.getElementById('open-new-tab');
    let currentProjectUrl = '';

    function openModal(title, url) {
        modalTitle.textContent = title;
        projectIframe.src = url;
        currentProjectUrl = url;
        modalContainer.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }

    function closeModal() {
        modalContainer.classList.add('hidden');
        projectIframe.src = 'about:blank'; // Unload iframe content
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Event listeners for gallery items
    document.querySelectorAll('.gallery-item, .view-project').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.classList.contains('view-project')) {
                e.stopPropagation();
                const parent = e.target.closest('.gallery-item');
                openModal(parent.dataset.title, parent.dataset.url);
            } else {
                openModal(this.dataset.title, this.dataset.url);
            }
        });
    });

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    modalContainer.addEventListener('click', function(e) {
        if (e.target === modalContainer) {
            closeModal();
        }
    });

    // Open in new tab
    openNewTabBtn.addEventListener('click', function() {
        window.open(currentProjectUrl, '_blank');
    });

    // Handle keyboard events
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modalContainer.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Handle fullscreen for iframe
    const iframeContainer = document.querySelector('.iframe-container');
    iframeContainer.addEventListener('dblclick', function() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            projectIframe.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
    });
});

