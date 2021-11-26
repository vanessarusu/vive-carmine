import registrationForm from "./components/registrationForm";
import customLightbox from "./components/customLightbox";


(function () {
  const rf = registrationForm();
  const cl = customLightbox();

  rf.init();
  cl.init();

var preventDefaultLinks = document.querySelectorAll('.prevent-default a');

if(preventDefaultLinks.length) {
    preventDefaultLinks.forEach(el => {
        el.addEventListener('click', function(e) {
            e.preventDefault();
        })
    });
}




  console.log('web design by lwdg.ca. development by vanessarusu.com');

})();