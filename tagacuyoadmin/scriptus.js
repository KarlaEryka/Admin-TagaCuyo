// Function to reset password (placeholder)
function resetPassword() {
    alert("Password reset functionality is not yet implemented.");
}

// Function to delete a staff entry
function deleteStaff(element) {
    if (confirm("Are you sure you want to delete this staff?")) {
        const row = element.parentNode.parentNode;
        row.parentNode.removeChild(row);
    }
}

// Function to add new staff dynamically
function addNewStaff() {
    const table = document.getElementById("staffTable");
    const newRow = document.createElement("tr");

    // Prompt for staff details (basic version)
    const staffName = prompt("Enter the staff member's name:");
    const staffEmail = prompt("Enter the staff member's email:");
    const staffStatus = confirm("Is the staff member active?") ? "Active" : "Inactive";

    // If no name is entered, return without doing anything
    if (!staffName || !staffEmail) {
        alert("Staff name and email are required!");
        return;
    }

    newRow.innerHTML = `
        <td>${staffName}</td>
        <td>Staff</td>
        <td>${staffStatus}</td>
        <td>
            <button class="reset-btn" onclick="resetPassword()">Reset Password</button>
            <button class="delete-btn" onclick="deleteStaff(this)">Delete</button>
        </td>
    `;

    table.appendChild(newRow);
}
