teElement('script');
jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);


setTimeout(function(){

jQuery.noConflict();


var collection = jQuery(".tag-type-general");
var gen_ar = [];

collection.each(function() {
    var text = jQuery(this).html();
    text = text.replace(/.+\n.+\n.+>(\d+)<.+/, '$1');
    gen_ar.push(text);
});

console.log(gen_ar);
max_array = Math.max.apply(Math, gen_ar);
console.log(max_array);
var re = new RegExp("("+ max_array +")");

collection.each(function() {
    var text = jQuery(this).html();
    text = "<ul><li>" + text.replace(re, '$1<\/font>') + "<\/li>"; console.log(text); jQuery(this).replaceWith(text); }); var collection = jQuery(".tag-type-character"); var gen_ar = []; collection.each(function() { var text = jQuery(this).html(); text = text.replace(/.+\n.+\n.+>(\d+)<.+/, '$1'); gen_ar.push(text); }); console.log(gen_ar); max_array = Math.max.apply(Math, gen_ar); console.log(max_array); var re = new RegExp("("+ max_array +")"); collection.each(function() { var text = jQuery(this).html(); text = "</li>
<li>" + text.replace(re, '$1<\/font>') + "<\/li>"; console.log(text); jQuery(this).replaceWith(text); }); }, 5000);
