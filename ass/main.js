// animated line welcome

var lineDrawing = anime({
  targets: '#lineDrawing .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

var lineDrawing = anime({
  targets: '#lineDrawing1 .lines path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


var modal = document.getElementById('myModal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "none";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).ready(function() {
    $("#button").click(function() {
      $("#triangle-down, #triangle-up").addClass("usenand");
      $('content').addClass('krassInefade');
      $("#triangle-up, #triangle-down").delay(1500).fadeOut();
      $("#title").fadeOut(500);
      $("#button").addClass("toMenu");
      $("#button").text('+');
      setTimeout(function() {
        $("#button").attr("id", "menu");
      }, 1);
    });
  
    $("#menuClose, #menuContent a").click(function() {
      $("#menu").removeClass("menuTransition");
      $("#menuContent").fadeOut(300);
      $("#menu").text('+');
      $("#menu.toMenu").css('transition', '.5s ease-in-out');
    });
  
    $('a').click(function() {
      $('html, body').delay(500).animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 1000);
      return false;
    });
  
  });
  
  $(document).on("click", "#menu", function() {
    $("#menu").addClass("menuTransition");
    $("#menuContent").delay(500).fadeIn(1);
    $("#menu").text(' ');
  });  
  
  jQuery(document).ready(function(){
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},6000);
	});
});



// Modal Setting //

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* mail setting */


(function(){
  emailjs.init("user_WvWz80Gc0aWtdCtkp06w7");
})();

var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  var service_id = "izunilmi";
  var template_id = "template_Lnn3Ivn6";

  myform.find("button").text("Sending...");
  emailjs.sendForm(service_id,template_id,"myform")
  	.then(function(){ 
    	alert("Sent!");
       myform.find("button").text("Send");
    }, function(err) {
       alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("Send");
    });
  return false;
});


