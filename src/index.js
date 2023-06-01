// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  // Get a reference to the contact form
  var contactForm = document.getElementById('contactForm');

  // Add a submit event listener to the form
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var eventType = document.getElementById('eventType').value;
    var description = document.getElementById('description').value;

    // Create an object with the form data
    var formData = {
      name: name,
      email: email,
      date: date,
      eventType: eventType,
      description: description
    };

    // Save the form data to Firebase
    var database = firebase.database();
    var dataRef = database.ref('formSubmissions'); // Replace with your desired database path

    dataRef.push(formData)
      .then(function () {
        console.log('Form data stored in Firebase successfully!');
        // Optionally, you can reset the form after submitting
        contactForm.reset();
      })
      .catch(function (error) {
        console.error('Error storing form data in Firebase:', error);
      });
  });
});
