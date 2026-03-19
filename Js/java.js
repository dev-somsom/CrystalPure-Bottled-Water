document.addEventListener("DOMContentLoaded", function () {
     document.body.style.overflowY = "auto";

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });
    }, {
        threshold: 0.2
    });

    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => observer.observe(el));

});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        const formData = new FormData(form);

        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                message.style.display="block";
                message.className="form-message-success";
                message.textContent="Thank you! Your message has been sent successfully!";

                form.reset();
            } else{
                message.style.display="block";
                message.className="form-message-error";
                message.textContent="Something went wrong. Please try again!";
            }
        } catch (error) {
            message.style.display="block";
            message.className="form-message-error";
            message.textContent="Network error. Please try again!";
        }

        const button = form.querySelector('input[type="submit"]');
        button.disabled = true;
        button.textContent="Sending...";
    })

});