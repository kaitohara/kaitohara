var space = $( ".slide-menu" ).height();
$("#home").click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 300);
});

$(".go2portfolio").click(function() {
	space = $(".slide-menu").is(":visible") === true ? $( ".slide-menu" ).height() : 0;
    $('html, body').animate({
        scrollTop: $(".portfolio").offset().top - 100 - space
    }, 300);
});

// - $( ".slide-menu" ).height()


$(".go2about").click(function() {
	space = $(".slide-menu").is(":visible") === true ? $( ".slide-menu" ).height() : 0;
    $('html, body').animate({
        scrollTop: $(".about").offset().top - 100 - space
    }, 300);
});

$(".go2blog").click(function() {
	space = $(".slide-menu").is(":visible") === true ? $( ".slide-menu" ).height() : 0;
    $('html, body').animate({
        scrollTop: $(".blog").offset().top - 100 - space
    }, 300);
});

$(".go2contact").click(function() {
	space = $(".slide-menu").is(":visible") === true ? $( ".slide-menu" ).height() : 0;
    $('html, body').animate({
        scrollTop: $(".contact").offset().top - 100 - space
    }, 300);
});


$(document).ready(function(){
	$('#menu-button').click(function(){
		$(".slide-menu:visible").slideUp();
		$(".slide-menu:hidden").slideDown();
	})
	$('.slide-item').click(function(){
		$(".slide-menu:visible").slideUp();
	})
	$('.show-code').click(function(){
		$(".code-items").show();
		$(".music-items").hide();
	})
	$('.show-music').click(function(){
		$(".music-items").show();
		$(".code-items").hide();
	})
	$(".show-code").click(function(){
		$(".show-code").addClass("active")
		$(".show-music").removeClass("active")
	})
	$(".show-music").click(function(){
		$(".show-music").addClass("active")
		$(".show-code").removeClass("active")
	})
})

$(document).ready(function(){
	$('#menu-button').click(function(){
		$(".slide-space:visible").slideUp();
		$(".slide-space:hidden").slideDown();
	})
	$('.slide-item').click(function(){
		$(".slide-space:visible").slideUp();
	})
})

function validateForm(){
	var form = document.forms["contactForm"]
	var fname = form["fname"].value;
	var lname = form["lname"].value;
	var email = form["email"].value;
	var message = form["message"].value;
	var formValid = true;
	if (fname == null || fname == ""){
		console.log('fname required')
		$(".fname-input").val("");
		$(".fname-input").attr("placeholder", "First Name is required");
		formValid = false;
	}
	if (lname == null || lname == ""){
		console.log('lname required')
		formValid = false;
	}
	if (email == null || email == ""){
		console.log('email required')
		formValid = false;
	}
	if (message == null || message == ""){
		console.log('message required')
		formValid = false;
	}
	return formValid;
	// if (lname == null || lname == ""){
	// 	console.log("Last Name is required");
	// 	return false;
	// }

}