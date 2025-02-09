// Initialize table with dummy data and select all checkbox functionality
document.addEventListener('DOMContentLoaded', function() {
    populateTable();
    const selectAll = document.querySelector('.select-all');
    const userChecks = document.querySelectorAll('.user-check');

    // Select All checkbox click handler
    selectAll.addEventListener('click', function() {
        if (selectAll.checked) {
            userChecks.forEach(checkbox => checkbox.checked = true);
        } else {
            userChecks.forEach(checkbox => checkbox.checked = false);
        }
    });

    // Optional: Show selected count
    userChecks.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const selectedCount = document.querySelectorAll('.user-check:checked').length;
            document.getElementById('selectedCount').textContent = `${selectedCount} selected`;
        });
    });
});

// Populate table with dummy data
function populateTable() {
    const tbody = document.getElementById('userTableBody');
    const numberOfUsers = 100; // Adjust as needed

    let rows = [];
    for (let i = 0; i < numberOfUsers; i++) {
        const username = `User${i + 1}`;
        const date = new Date(2025, 8, 15 + i); // Ensure correct date handling
        const status = 'Banned';
        const action = '<button>Unban</button>';
        
        rows.push(`
            <tr>
                <td><input type="checkbox" class="user-check" aria-label="${username}"></td>
                <td>${username}</td>
                <td>${date.toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}, ${date.getFullYear()}</td>
                <td class="status-banned">${status}</td>
                <td>${action}</td>
            </tr>
        `);
    }
    tbody.innerHTML = rows.join('');
}