// Get the button and skills content elements
const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsContent = document.getElementById('skills') as HTMLDivElement;

// Check if the elements exist to avoid errors
if (toggleButton && skillsContent) {
    // Add event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the visibility of the skills content
        if (skillsContent.style.display === 'none') {
            skillsContent.style.display = 'block';
            toggleButton.textContent = 'Hide Skills'; // Update button text
        } else {
            skillsContent.style.display = 'none';
            toggleButton.textContent = 'Show Skills'; // Update button text
        }
    });
}
