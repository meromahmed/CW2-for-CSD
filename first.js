$(document).ready(function() {
    
    // 1. Live Clock with Day
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const dayString = now.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' });
        $('#live-clock').html(`${dayString} | <strong>${timeString}</strong>`);
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. BMI Calculation with UX Feedback
    $('#calculate-bmi').click(function() {
        const w = parseFloat($('#weight').val());
        const h = parseFloat($('#height').val()) / 100;

        if (w > 0 && h > 0) {
            const bmi = (w / (h * h)).toFixed(1);
            let category = "";
            let color = "#fff";

            if (bmi < 18.5) { category = "Underweight"; color = "#ffcc00"; }
            else if (bmi < 24.9) { category = "Healthy"; color = "#d4ff00"; }
            else { category = "Above Range"; color = "#ff4444"; }

            $('#bmi-result').fadeOut(200, function() {
                $(this).html(`Your BMI: <span style="color:${color}">${bmi}</span> (${category})`).fadeIn();
            });
        } else {
            alert("Please enter valid positive numbers for weight and height.");
        }
    });

    // 3. Smooth Scrolling for Navigation
    $('.nav-links a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.hash);
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top - 80
            }, 700);
        }
    });
    $(document).ready(function() {

    // Target both the 'Home' link and the 'Logo'
    $('#home-link, .logo').on('click', function(e) {
        e.preventDefault(); // This stops the "Cannot GET" error from happening
        
        // Smoothly scroll to the very top of the window
        $('html, body').animate({
            scrollTop: 0
        }, 800);

        // Optional: ensure the Home link looks active
        $('.nav-links a').removeClass('active');
        $('#home-link').addClass('active');
    });

});
});

$(window).on('scroll', function() {
    $('.facility-card').each(function() {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 3;
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > bottom_of_object) {
            $(this).addClass('show-card');
        }
    });
});