document.querySelectorAll(".container").forEach(child => {
    child.addEventListener('click', (event) => {

        // Prevent shrink and expand functionality when clicking on dropdown menu  
        if(event.target.tagName === "SELECT"){
            event.stopPropagation();
            return;
        }

        const radBtn = child.querySelector('input[type="radio"]');
        const isExpanded  = child.classList.toggle('expanded');

        radBtn.checked = true;

        document.querySelectorAll(".container").forEach(excludeChild => {
            if (excludeChild !== child) {
                excludeChild.classList.remove('expanded');
                excludeChild.querySelector('input[type="radio"]').checked = false;
            }
        })
    })
});

// Alert button functionality
document.getElementById('btn').addEventListener('click', () => {
    alert('Product added to cart 🎉');
});