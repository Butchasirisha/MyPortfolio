function verifyCaptcha() {
    var captchaInput = document.getElementById('captcha').value;
    var message = document.getElementById('message');
    
    if (captchaInput === '5') { // Assuming the correct answer is '5'
        message.textContent = 'Verification successful!';
        message.style.color = 'green';

        // Redirect to the portfolio page
        setTimeout(function() {
            window.location.href = 'index.html'; // Ensure this path is correct
            // Change 'portfolio.html' to the actual path of your portfolio page
        }, 1000); // Wait 1 second before redirecting (optional)
    } else {
        message.textContent = 'Incorrect answer. Please try again.';
        message.style.color = 'red';
    }
}

