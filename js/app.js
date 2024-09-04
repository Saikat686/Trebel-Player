$(document).ready(function() {
    // Toggle sidebar
    $('#sidebar-toggle').click(function() {
        $('#sidebar').toggleClass('open');
    });

    $('#close-sidebar').click(function() {
        $('#sidebar').removeClass('open');
    });

    // Toggle dark/light mode
    $('#toggle-mode').click(function() {
        $('body').toggleClass('dark-mode');
        const icon = $('#toggle-mode i');
        if ($('body').hasClass('dark-mode')) {
            icon.removeClass('fa-moon').addClass('fa-sun');
        } else {
            icon.removeClass('fa-sun').addClass('fa-moon');
        }
    });
});


/////////////////////////////////////////////////////////////// SOIKAT DEV /////////////////////////////////////////////////////////////