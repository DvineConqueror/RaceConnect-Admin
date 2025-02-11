document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
    const selectAll = document.querySelector('.select-all');
    const searchInput = document.querySelector('.search-input');
    const filterDropdown = document.querySelector('.filter-dropdown');
    let usersData = [];

    // Select All checkbox click handler
    selectAll.addEventListener('click', function() {
        const userChecks = document.querySelectorAll('.user-check');
        if (selectAll.checked) {
            userChecks.forEach(checkbox => checkbox.checked = true);
        } else {
            userChecks.forEach(checkbox => checkbox.checked = false);
        }
    });

    // Search input event listener
    searchInput.addEventListener('input', function() {
        filterAndPopulateTable();
    });

    // Filter dropdown event listener
    filterDropdown.addEventListener('change', function() {
        filterAndPopulateTable();
    });

    function fetchUsers() {
        fetch('fetch_users.php')
            .then(response => response.json())
            .then(users => {
                usersData = users;
                populateTable(users);
            })
            .catch(error => console.error('Error fetching users:', error));
    }

    function filterAndPopulateTable() {
        const searchTerm = searchInput.value.toLowerCase();
        const filterValue = filterDropdown.value;
        const filteredUsers = usersData.filter(user => {
            const matchesSearch = user.username.toLowerCase().includes(searchTerm);
            const matchesFilter = filterValue === 'all' || user.status.toLowerCase() === filterValue;
            return matchesSearch && matchesFilter;
        });
        populateTable(filteredUsers);
    }

    function populateTable(users) {
        const tbody = document.getElementById('userTableBody');
        let rows = [];
        users.forEach(user => {
            const username = user.username;
            const date = new Date(user.created_at);
            const status = user.status;
            const action = `
                <div class="actions">
                    <div class="dropdown-content">
                        <a href="#" class="actions-item" onclick="unbanUser('${username}')">Unban</a>
                        <a href="#" class="actions-item" onclick="banUser('${username}')">Ban</a>
                        <a href="#" class="actions-item" onclick="suspendUser('${username}')">Suspend</a>
                    </div>
                </div>
            `;
            
            rows.push(`
                <tr>
                    <td><input type="checkbox" class="user-check" aria-label="${username}"></td>
                    <td>${username}</td>
                    <td>${date.toLocaleDateString('en-US', {month: 'long', day: 'numeric'})}, ${date.getFullYear()}</td>
                    <td class="status-${status.toLowerCase()}">${status}</td>
                    <td>${action}</td>
                </tr>
            `);
        });
        tbody.innerHTML = rows.join('');
    }

    window.unbanUser = function(username) {
        alert(`User ${username} unbanned`);
    }

    window.banUser = function(username) {
        alert(`User ${username} banned`);
    }

    window.suspendUser = function(username) {
        alert(`User ${username} suspended`);
    }
});