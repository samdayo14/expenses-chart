
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // Select all the day elements with class 'day'
        var days = document.querySelectorAll('.day');

        // Loop through each day element
        days.forEach(function (day, index) {
            // Create a unique identifier for the amount element
            var amountId = 'amount_' + index;

            // Add a hover event listener
            day.addEventListener('mouseenter', function () {
                // Get the amount associated with this day from the loaded JSON data
                var amount = data[index].amount;

                // Display the amount
                var amountElement = document.getElementById(amountId);
                amountElement.textContent = '$' + amount.toFixed(2);
                amountElement.style.display = 'block';
            });

            // Add a mouseleave event listener to hide the amount when not hovering
            day.addEventListener('mouseleave', function () {
                var amountElement = document.getElementById(amountId);
                amountElement.style.display = 'none';
            });
        });
    })
    .catch(function (error) {
        console.error('Error loading JSON data:', error);
    });
