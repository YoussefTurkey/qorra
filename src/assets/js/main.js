import $ from 'jquery';

$(document).ready(function () {
    // preloading
    window.addEventListener('load', function(){
        $('#preload').hide();
    })
	// preloading with mobile size screen
	if ($(window).width() <= 768) { 
		$('#preload').hide();
	}

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
        $('#news').addClass('active');
        $('#top_screen').removeClass('active');
    })
    $('.navbar-brand').on('click', function(){
        $('#top_screen').addClass('active');
        $('#news').removeClass('active');
    })

    // when click on main nav-lick to go to up
    $('#top_screen').click(function(event) {
		event.preventDefault();
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});

    // dark-theme-v.1
    $('.dark_theme_icon').on('click', function(){
        $('body').toggleClass('dark_mode')
        $('.navbar').toggleClass('dark_nav')
        $('.nav-link').toggleClass('dark_items')
        $('.join').toggleClass('dark_join')
        $('p, h1, h2, h3, li, label').toggleClass('dark_txt');
        $('.card-text').toggleClass('dark_card_text');
    })
});


// Sign-Form-Code
$(document).ready(function() {
	// click on next button
	$('.form-wizard-next-btn').click(function() {
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		var next = $(this);
		var nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function(){
			var thisValue = $(this).val();

			if( thisValue == "") {
				$(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
		if( nextWizardStep) {
			next.parents('.wizard-fieldset').removeClass("show","400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active',"400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show","400");
			$(document).find('.wizard-fieldset').each(function(){
				if($(this).hasClass('show')){
					var formAtrr = $(this).attr('data-tab-content');
					$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
						if($(this).attr('data-attr') == formAtrr){
							$(this).addClass('active');
							var innerWidth = $(this).innerWidth();
							var position = $(this).position();
							$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
						}else{
							$(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	$('.form-wizard-previous-btn').click(function() {
		var counter = parseInt($(".wizard-counter").text());;
		var prev =$(this);
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show","400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show","400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active',"400");
		$(document).find('.wizard-fieldset').each(function(){
			if($(this).hasClass('show')){
				var formAtrr = $(this).attr('data-tab-content');
				$(document).find('.form-wizard-steps .form-wizard-step-item').each(function(){
					if($(this).attr('data-attr') == formAtrr){
						$(this).addClass('active');
						var innerWidth = $(this).innerWidth();
						var position = $(this).position();
						$(document).find('.form-wizard-step-move').css({"left": position.left, "width": innerWidth});
					}else{
						$(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	$(document).on("click",".form-wizard .form-wizard-submit" , function(){
		var parentFieldset = $(this).parents('.wizard-fieldset');
		var currentActiveStep = $(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function() {
			var thisValue = $(this).val();
			if( thisValue == "" ) {
				$(this).siblings(".wizard-form-error").slideDown();
			}
			else {
				$(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	$(".form-control").on('focus', function(){
		var tmpThis = $(this).val();
		if(tmpThis == '' ) {
			$(this).parent().addClass("focus-input");
		}
		else if(tmpThis !='' ){
			$(this).parent().addClass("focus-input");
		}
	}).on('blur', function(){
		var tmpThis = $(this).val();
		if(tmpThis == '' ) {
			$(this).parent().removeClass("focus-input");
			$(this).siblings('.wizard-form-error').slideDown("3000");
		}
		else if(tmpThis !='' ){
			$(this).parent().addClass("focus-input");
			$(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});
