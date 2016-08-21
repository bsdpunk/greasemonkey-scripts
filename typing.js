// ==UserScript==
// @name      Hack any site
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Hack any website, no not really
// @match      http://*/*
// @copyright  2012+, You
// ==/UserScript==

var jq = document.createElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
var cssAnimation = document.createElement('style');
cssAnimation.type = 'text/css';
var rules = document.createTextNode('@-webkit-keyframes blink{'+
'to{opacity: .0;}'+
'}'+
'@-webkit-keyframes type2{'+
'0%{width: 0;}'+
'50%{width: 0;}'+
'100%{width: 100;}'+
'}'+
'@-webkit-keyframes type{'+
'from { width: 0; }'+
'}'+
'p#console{' +
'background-color:black;' +
'color:lime;' +
  'font-size: 20px;'+
  'margin: 10px 0 0 10px;'+
  'white-space: nowrap;'+
  'overflow: hidden;'+
  'width: 30em;'+
'}' +
'p#one{' +
'background-color:black;' +
'color:lime;' +
  'font-size: 20px;'+
  'margin: 10px 0 0 10px;'+
  'white-space: nowrap;'+
  'overflow: hidden;'+
  'width: 30em;'+
'}' +
'p#two{' +
'background-color:black;' +
'color:lime;' +
  'font-size: 20px;'+
  'margin: 10px 0 0 10px;'+
  'white-space: nowrap;'+
  'overflow: hidden;'+
  'width: 30em;'+
'}' +
'p#three{' +
'background-color:black;' +
'color:lime;' +
  'font-size: 20px;'+
  'margin: 10px 0 0 10px;'+
  'white-space: nowrap;'+
  'overflow: hidden;'+
  'width: 30em;'+
'}' +
'p#four{' +
'background-color:black;' +
'color:lime;' +
  'font-size: 20px;'+
  'margin: 10px 0 0 10px;'+
  'white-space: nowrap;'+
  'overflow: hidden;'+
  'width: 30em;'+
'}'
);

cssAnimation.appendChild(rules);
document.getElementsByTagName("head")[0].appendChild(cssAnimation);

setTimeout(function(){
    jQuery.noConflict();

    document.onkeypress = function (e) {
      e = e || window.event;
      console.log(e.keyCode);
      // use e.keyCode
      if(e.keyCode == 96) {
      jQuery('body').append('<p id="\'console\'">Hacking Terminal......</p>');
      setUpConsole('#console', 20, 10);
      jQuery('body').append('<p id="\'one\'">Bruteforcing SSH password.....Success</p>');
      setUpConsole('#one', 30, 20);
      jQuery('body').append('<p id="\'two\'">Transferring Perl Bot.....Success</p>');
      setUpConsole('#two', 40, 30);
      jQuery('body').append('<p id="\'three\'">Disguising Bot as httpd.....Success');
      setUpConsole('#three', 50 , 40);
      jQuery('body').append('<p id=\'four\'>Installing additional backdoors in case of comprimise.....Success</p>');
      setUpConsole('#four', 60, 50);
      }
  //    if(e.keyCode == 13) {
  //      executeJS();
  //  }

}

function setUpConsole(element, top, anim) {
    //pass element name to be centered on screen
    //var pWidth = jQuery(window).width();
    //var pTop = jQuery(window).scrollTop();
    //var eWidth = jQuery(element).width();
    //jQuery(element).css('top', pTop + 100 + 'px');
    //jQuery(element).css('left', parseInt((pWidth / 2) - (eWidth / 2)) + 'px');
    var nully = '';
    if(element == "#console"){
    }else{
      nully = 2;
    }
    jQuery(element).css('position','fixed');
    jQuery(element).css('left','50\%');
    jQuery(element).css('top',top + '\%');
    jQuery(element).css('background-color', 'black');
    jQuery(element).css('color', 'lime');
    var animate = 'type' + nully +' '+ anim +'s steps(60,end)';
    console.log(animate);
    console.log(anim);
    jQuery(element).css('-webkit-animation', animate);
    console.log(jQuery(element).css('-webkit-animation'));

}

function executeJS() {
    var result = eval(jQuery('#console').val());
}

}, 5000); 
