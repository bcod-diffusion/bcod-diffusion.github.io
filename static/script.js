// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Intersection Observer for animations
const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => observer.observe(section));

// Video Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const videoContainers = document.querySelectorAll('.video-container');
    const popup = document.querySelector('.video-popup');
    const popupVideo = popup.querySelector('video');
    const closePopup = document.querySelector('.close-popup');

    videoContainers.forEach(container => {
        container.addEventListener('click', function() {
            const videoSrc = this.getAttribute('data-video');
            popupVideo.querySelector('source').src = videoSrc;
            popupVideo.load();
            popup.classList.add('active');
            popupVideo.play();
        });
    });

    closePopup.addEventListener('click', function() {
        popup.classList.remove('active');
        popupVideo.pause();
        popupVideo.currentTime = 0;
    });

    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            popup.classList.remove('active');
            popupVideo.pause();
            popupVideo.currentTime = 0;
        }
    });
});

// Finding Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const findingItems = document.querySelectorAll('.finding-item');
    const findingPopups = document.querySelectorAll('.finding-popup');
    const closeButtons = document.querySelectorAll('.close-finding');

    findingItems.forEach(item => {
        item.addEventListener('click', function() {
            const findingId = this.getAttribute('data-finding');
            const popup = document.getElementById(`finding-${findingId}`);
            popup.classList.add('active');
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.finding-popup');
            popup.classList.remove('active');
        });
    });

    findingPopups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    });
});

// Dataset Popup Functionality
document.addEventListener('DOMContentLoaded', function() {
    const datasetItems = document.querySelectorAll('.visualization-item');
    const datasetPopups = document.querySelectorAll('.dataset-popup');
    const closeDatasetButtons = document.querySelectorAll('.close-dataset');

    datasetItems.forEach(item => {
        item.addEventListener('click', function() {
            const datasetId = this.getAttribute('data-dataset');
            const popup = document.getElementById(`dataset-${datasetId}`);
            popup.classList.add('active');
        });
    });

    closeDatasetButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popup = this.closest('.dataset-popup');
            popup.classList.remove('active');
        });
    });

    datasetPopups.forEach(popup => {
        popup.addEventListener('click', function(e) {
            if (e.target === popup) {
                popup.classList.remove('active');
            }
        });
    });
});
