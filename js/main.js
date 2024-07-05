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
            expandedImg.classList.add('expanded-img'); // Clase para manejar la expansión

            const caption = document.createElement('div');
            caption.classList.add('caption');
            caption.textContent = item.alt; // Usamos el atributo alt como la leyenda

            overlay.innerHTML = ''; // Limpiar cualquier contenido previo
            overlay.appendChild(expandedImg);
            overlay.appendChild(caption);
            body.appendChild(overlay);
            body.classList.add('blurred');
            overlay.style.display = 'flex';

            // Forzar reflow para que la animación se aplique
            requestAnimationFrame(() => {
                expandedImg.classList.add('expanded');
                caption.classList.add('visible'); // Mostrar la leyenda
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
            caption.classList.remove('visible'); // Ocultar la leyenda
        }

        // Esperar a que la animación termine antes de ocultar el overlay
        setTimeout(() => {
            overlay.style.display = 'none';
            body.classList.remove('blurred');
        }, 500);
    });
});



/*document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery img');
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.id = 'overlay';

    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const expandedImg = document.createElement('img');
            expandedImg.src = item.src;
            expandedImg.classList.add('expanded-img'); // Clase para manejar la expansión
            overlay.innerHTML = ''; // Limpiar cualquier imagen previa
            overlay.appendChild(expandedImg);
            body.appendChild(overlay);
            body.classList.add('blurred');
            overlay.style.display = 'flex';

            // Forzar reflow para que la animación se aplique
            requestAnimationFrame(() => {
                console.log('Adding expanded class'); // Log para verificar
                expandedImg.classList.add('expanded');
            });
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
        body.classList.remove('blurred');
    });
});*/