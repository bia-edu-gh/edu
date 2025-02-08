const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('content');
        const overlay = document.getElementById('overlay');
        const toggleButton = document.getElementById('toggle-button');

        function toggleSidebar() {
            if (sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                content.classList.remove('shifted');
                toggleButton.textContent = '≡'; // Update button text
            } else {
                sidebar.classList.add('open');
                content.classList.add('shifted');
                toggleButton.textContent = '≡'; // Update button text
            }
        }

        window.onload = function() {
            // Open sidebar by default on larger screens
            if (window.innerWidth >= 768) {
                sidebar.classList.add('open');
                content.classList.add('shifted'); // Shift content when sidebar opens
            }
        };

        // Open popups
        function openEmailPopup() {
            overlay.style.display = 'block';
            document.getElementById('emailPopup').style.display = 'block'; // Show email popup
            document.body.classList.add('blur');
        }

        function openContactPopup() {
            overlay.style.display = 'block';
            document.getElementById('contactPopup').style.display = 'block'; // Show contact popup
            document.body.classList.add('blur');
        }

        // Close popups
        function closePopup() {
            document.getElementById('emailPopup').style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('blur');}

        function closeContactPopup() {
            document.getElementById('contactPopup').style.display = 'none';
            overlay.style.display = 'none';
            document.body.classList.remove('blur');}

// Handle form submission and display student report cards
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("studentName").value;
    const classValue = document.getElementById("classSelect").value; // Corrected ID to match your HTML
    const term = document.getElementById("termSelect").value; // Corrected ID to match your HTML
    const academicYear = document.getElementById("yearSelect").value; // Corrected ID to match your HTML

    // Assuming students is an array of student objects available in the scope
    const student = students.find(s => s.name === name && s.class === classValue);

    if (student) {
        let resultHTML = `<h2>${student.name}'s Report Card</h2>`;
        resultHTML += `<table><tr><th>Subject</th><th>Grade</th></tr>`;
        for (let subject in student.subjects) {
            resultHTML += `<tr><td>${subject}</td><td>${student.subjects[subject]}</td></tr>`;
        }
        resultHTML += `</table>`;
        
        document.getElementById("result").innerHTML = resultHTML;
        document.getElementById("result").style.display = "block";
    } else {
        alert("Student not found or invalid login details.");
    }
});
