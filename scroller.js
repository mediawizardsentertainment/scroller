$(document).ready(function(){var isScrolling=!1;var scrollSpeed=parseInt($("#scrollSpeed").val());var scrollAnimation;var isUserScrolling=!1;var lastScrollTop=0;var inactivityTimeout;var autoScrollTimeout;function startScrollingDown(){if(!isScrolling&&!isUserScrolling){isScrolling=!0;$("#scrollButton").text("Stop Scrolling").data("action","down");scrollAnimation=$("html, body").animate({scrollTop:$(document).height()},scrollSpeed,"linear",function(){isScrolling=!1;$("#scrollButton").text("Scroll Up").data("action","up")})}}
function startScrollingUp(){if(!isScrolling&&!isUserScrolling){isScrolling=!0;$("#scrollButton").text("Stop Scrolling").data("action","up");scrollAnimation=$("html, body").animate({scrollTop:0},scrollSpeed,"linear",function(){isScrolling=!1;$("#scrollButton").text("Scroll Down").data("action","down")})}}
function stopScrolling(){if(isScrolling){isScrolling=!1;$("#scrollButton").text($("#scrollButton").data("action")==="down"?"Scroll Down":"Scroll Up");$("html, body").stop()}}
$("#scrollButton").click(function(){var action=$(this).data("action");if(isScrolling){stopScrolling()}else if(action==="down"){isUserScrolling=!1;startScrollingDown()}else if(action==="up"){isUserScrolling=!1;startScrollingUp()}});$("#scrollSpeed").on("input",function(){scrollSpeed=parseInt($(this).val());$("#speedDisplay").text(scrollSpeed.toLocaleString()+" ms");if(isScrolling){stopScrolling();if($("#scrollButton").data("action")==="down"){startScrollingDown()}else{startScrollingUp()}}});$(window).on('scroll',function(){var currentScrollTop=$(this).scrollTop();if(Math.abs(currentScrollTop-lastScrollTop)>50){isUserScrolling=!0;stopScrolling()}
clearTimeout(inactivityTimeout);inactivityTimeout=setTimeout(function(){if(!isScrolling){startScrollingDown()}},2000);lastScrollTop=currentScrollTop});autoScrollTimeout=setTimeout(function(){if(!isUserScrolling&&!isScrolling){startScrollingDown()}},5000)});
