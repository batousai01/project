

// scroll effect


$(function() {
  var curBot = 0;
  var scrollable = true;

  function navDown() {
    curBot += 100;
    scrollable = false;
    $(".backgrounds").css("transform", "translateY(-" + curBot + "vh)");
    setTimeout(function() {
      scrollable = true
    }, 1000);
  }

  function navUp() {
    curBot -= 100;
    scrollable = false;
    $(".backgrounds").css("transform", "translateY(-" + curBot + "vh)");
    setTimeout(function() {
      scrollable = true
    }, 1000);
  }
  var stY;
  
  $(document).on("touchstart", function(event) {
    stY = event.originalEvent.touches[0].screenY;
  })
  
  $(document).on("touchmove", function(event) {
    event.preventDefault();
    var curY = event.originalEvent.touches[0].screenY;
    if (stY - curY > 50 && curBot <= 300 && scrollable)
      navDown();
    else if (curY - stY > 50 && curBot > 0 && scrollable) 
      navUp();
  })
  
  $(document).on("keydown", function(event) {
    if (event.keyCode == 40 && curBot <= 300 && scrollable) 
      navDown();
    else if (event.keyCode == 38 && curBot > 0 && scrollable)
      navUp();
  })

  $(document).on("mousewheel DOMMouseScroll", function(event) {
    event.preventDefault();
    if ((event.originalEvent.wheelDelta < 0 || event.originalEvent.detail > 0) && curBot <= 300 && scrollable)
      navDown();
    else if ((event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) && curBot > 0 && scrollable)
      navUp();    
  })

})



// FADE IN FADE OUT IMAGE

$(document).ready(
  function() {
    var i = 0, j = 0; 
    var imgs = $('#header ul').children();
    runIt(imgs);

    function runIt() {
      $(imgs).eq(i).fadeIn(1000, function() {
        setTimeout(runIt,'3500');
      });
      i = i + 1; 
      if (i == imgs.length) {
        i = 0; $('#images li').fadeOut(3000)
      } 
    }
});

// nav bar burger

(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

 // nav bar right reservation bar

// function clickOffOn() {
// 	var element = document.getElementById("right-bar");
//      element.classList.toggle("onoff");
// };

function toggle_show_hide(id){
	var e = document.getElementById(id);
	if ( e.style.transform == 'translateX(-450px)')
		{ 
			e.style.transform = 'translateX(450px)';
		}
		else
		{
			e.style.transform = 'translateX(-450px)';
		}

}








// form

// date auto slash 

var date = document.getElementById('date');

    function checkValue(str, max) {
      if (str.charAt(0) !== '0' || str == '00') {
        var num = parseInt(str);
        if (isNaN(num) || num <= 0 || num > max) num = 1;
        str = num > parseInt(max.toString().charAt(0)) 
               && num.toString().length == 1 ? '0' + num : num.toString();
      };
      return str;
    };

    date.addEventListener('input', function(e) {
      this.type = 'text';
      var input = this.value;
      if (/\D\/$/.test(input)) input = input.substr(0, input.length - 1);
      var values = input.split('/').map(function(v) {
        return v.replace(/\D/g, '')
      });
      if (values[0]) values[0] = checkValue(values[0], 12);
      if (values[1]) values[1] = checkValue(values[1], 31);
      var output = values.map(function(v, i) {
        return v.length == 2 && i < 2 ? v + '/' : v;
      });
      this.value = output.join('').substr(0, 10);
    });



// Loader  


$(window).on("load",function(){
     $(".loader-wrapper").fadeOut("slow");
});
