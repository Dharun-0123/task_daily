// Sidebar Toggle
document.getElementById('toggleSidebar').addEventListener('click', function() {
    document.getElementById('sidebar').classList.toggle('active');
});

// Navigation
document.querySelectorAll('.nav-links li').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all items
        document.querySelectorAll('.nav-links li').forEach(i => i.classList.remove('active'));
        // Add active class to clicked item
        this.classList.add('active');
        
        // Handle page content change
        const page = this.getAttribute('data-page');
        loadPage(page);
    });
});

// Page Loading Function
function loadPage(page) {
    // Here you would typically load content for different pages
    console.log(`Loading ${page} page`);
}

// Charts
document.addEventListener('DOMContentLoaded', function() {
    // Patient Statistics Chart
    const patientCtx = document.getElementById('patientChart').getContext('2d');
    new Chart(patientCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Patient Admissions',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: '#3498db',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Patient Admissions'
                }
            }
        }
    });

    // Revenue Chart
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    new Chart(revenueCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 19000, 15000, 17000, 22000, 25000],
                backgroundColor: '#2ecc71'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Monthly Revenue'
                }
            }
        }
    });
});

// Search Functionality
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    // Implement search functionality here
    console.log(`Searching for: ${searchTerm}`);
});

// Notification System
document.querySelector('.notifications').addEventListener('click', function() {
    // Implement notification system here
    alert('Notifications clicked');
}); 