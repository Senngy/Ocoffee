// EmailJS configuration
(function() {
            // https://dashboard.emailjs.com/admin/account
            emailjs.init({
              publicKey: "j_68EHyJwoNjc8VHm",
            });
        })();

window.onload = function() {
    const btn = document.getElementById('button');
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      btn.value = 'Sending...'; // Change button text to indicate sending

      const serviceID = 'service_97y4bwa';
      const templateID = 'template_e2lmm3t';

      emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    }); 
}

       