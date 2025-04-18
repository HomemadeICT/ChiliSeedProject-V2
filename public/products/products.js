// Image Gallery
        function updateMainImage(src) {
            document.getElementById('mainImage').src = src;
        }

        // Tab Switching
        document.querySelectorAll('.tab-btn').forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and content
                document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Weight Selection
        document.querySelectorAll('.weight-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.weight-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
            });
        });
