// ==UserScript==
// @name       r/minimalism
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  Minimizing Minimalism
// @match      http://www.reddit.com/r/minimalism/
// @copyright  2012+, You
// ==/UserScript==
var $ = unsafeWindow.jQuery;
$('.domain').each(function (){
if (/self\.minimalism/.test($(this).html())){
  $(this).html('(self)');
} 
}
                 );
$('.tagline').each(function (){
if (/(hour|minute)/.test($(this).html())){
  $(this).html('submitted recently');
}
}
                  );
$('#siteTable').attr("align","center");
