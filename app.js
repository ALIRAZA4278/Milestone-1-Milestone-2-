// Get the button and skills content elements
var toggleButton = document.getElementById('toggle-skills');
var skillsContent = document.getElementById('skills');
// Check if the elements exist to avoid errors
if (toggleButton && skillsContent) {
    // Add event listener to the button
    toggleButton.addEventListener('click', function () {
        // Toggle the visibility of the skills content
        if (skillsContent.style.display === 'none') {
            skillsContent.style.display = 'block';
            toggleButton.textContent = 'Hide Skills'; // Update button text
        }
        else {
            skillsContent.style.display = 'none';
            toggleButton.textContent = 'Show Skills'; // Update button text
        }
    });
}
