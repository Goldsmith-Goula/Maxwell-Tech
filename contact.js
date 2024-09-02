document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init('NtKmiQ4lemHrSbN_u'); // Replace with your actual EmailJS user ID

    // Get the form element
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Send the email using EmailJS
        emailjs.sendForm('service_5irv447', 'template_ewajsjn', form)
            .then(function(response) {
                console.log('SUCCESS!', response);
                form.reset();
                alert('Your message has been sent successfully.');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send message. Please try again later.');
            });
    });
});
