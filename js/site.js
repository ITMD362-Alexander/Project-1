document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const checkboxInput = document.getElementById('inputcheckbox');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission
  
      // Validate email address
      const emailValue = emailInput.value.trim();
      if (!isValidEmail(emailValue)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // If checkbox is checked, display a message
      if (checkboxInput.checked) {
        alert('You are subscribed to receive daily sports news!');
      } else {
        alert('You are subscribed to receive sports news.');
      }
  
       form.submit();
    });
  
    // Function to validate email address
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  