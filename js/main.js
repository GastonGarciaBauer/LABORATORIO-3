document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');

    const iniciarCarousel = () => {
        M.Carousel.init(elementosCarousel, {
            duration: 450,
            indicators: window.matchMedia("(max-width: 480px)").matches ? true : false,
        });
    };

    iniciarCarousel();

    window.addEventListener('resize', () => {
        const instances = M.Carousel.getInstance(elementosCarousel);
        if (instances) {
            instances.destroy();
        }
        iniciarCarousel();
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery img');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const expandedImg = document.createElement('img');
            expandedImg.src = item.src;
            expandedImg.classList.add('expanded-img');

            const caption = document.createElement('div');
            caption.classList.add('caption');
            caption.textContent = item.alt;

            overlay.innerHTML = '';
            overlay.appendChild(expandedImg);
            overlay.appendChild(caption);
            body.appendChild(overlay);
            body.classList.add('blurred');
            overlay.style.display = 'flex';

            
            requestAnimationFrame(() => {
                expandedImg.classList.add('expanded');
                caption.classList.add('visible');
            });
        });
    });
    
    //GALERÍA
    overlay.addEventListener('click', function() {
        const expandedImg = overlay.querySelector('.expanded-img');
        const caption = overlay.querySelector('.caption');
        
        if (expandedImg) {
            expandedImg.classList.remove('expanded');
        }
        if (caption) {
            caption.classList.remove('visible');
        }

        setTimeout(() => {
            overlay.style.display = 'none';
            body.classList.remove('blurred');
        }, 500);
    });
});