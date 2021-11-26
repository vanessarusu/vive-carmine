const customLightbox = (function() {

    function addEventListeners() {
        document.querySelectorAll('.register-link').forEach(function(el) {
            el.addEventListener('click', function(e) {
                
                e.preventDefault();
                launchLightbox();
            });
        });
    
        document.querySelectorAll('.lightbox-dismiss').forEach(function(el) {
            el.addEventListener('click', function(e) {
                e.preventDefault();
                dismissLightbox();
            });
        });
    }

    function launchLightbox() {
        var lightboxForm = document.querySelector('#lightboxForm');
        
        if(!lightboxForm) {
            return;
        }

        document.querySelector('body').classList.add('modal-open');
        lightboxForm.classList.add('lightbox-open');
        console.log('hiiii');
        
        document.addEventListener("keyup", function(e) {
            if(e.key == 'Escape') {
                dismissLightbox();
            }
        });

        gsap.fromTo(lightboxForm, {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 0.15
        });
    }

    function dismissLightbox() {
        document.querySelector('body').classList.remove('modal-open');
        document.querySelector('#lightboxForm').classList.remove('lightbox-open');
    }


    function init() {
        addEventListeners();
    }





    return {
        init: init
    }
});

export default customLightbox;