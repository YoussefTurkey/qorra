import $ from 'jquery';

$(document).ready(function () {
    // when window reload the screen go to top
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }

    // when click on nav-link gets active class
    $('.nav-link').click(function(){
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
    })

    // when click on mouse to get active class to right nav-link
    $('.scroll_down').on('click', function(){
        $('#about_us').addClass('active');
        $('#top_screen').removeClass('active');
    })
    $('.navbar-brand').on('click', function(){
        $('#top_screen').addClass('active');
        $('#about_us').removeClass('active');
    })

    // when click on main nav-lick to go to up
    $('#top_screen').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});
});
