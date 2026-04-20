$(document).ready(function() {
    // Memorable scroll effect for navigation [cite: 22]
    $('.nav-links a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Fade-in effect for cards as you scroll down 
    $(window).scroll(function() {
        $('.value-card').each(function() {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object - 200) {
                $(this).animate({'opacity':'1'}, 500);
            }
        });
    });
});

 <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
 <script src="js/script.js"></script>