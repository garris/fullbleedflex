/* 
jquery.fullBleedFlex.js version 1.0.x

This is a jQuery plug-in for use with the fullBleedFlex responsive CSS framework.  

The primary purpose of this file is to adjust for a CSS sub-pixel rounding bug in Safari. More info here... http://ejohn.org/blog/sub-pixel-problems-in-css/ 

Use of this utility is not necessary -- *some* layouts will look neater with the plug-in activated. 

Feel free to use or modify this file as you see fit.

by: Garris Shipon garris.shipon@gmail.com

*/

(function($) { 

	
	var methods = {
		
		myFixed 		: [],
		
		roundingFix : function(){
			return this.each(function() {
				methods.myFixed = [];
				$('div[class^="fb-row-"]').each(function(){
					var wrapperWidth = $(this).width();
					var sumOfFbWidths = 0;
					var myRowElements = $('div[class^="fb-"]',this);					
					myRowElements.each(function(){ 
						sumOfFbWidths += $(this).width();
					})
					var widthDiff = wrapperWidth-sumOfFbWidths;
					if(widthDiff!=0 && myRowElements.last().css('float')!='none'){
						myRowElements.last().width( myRowElements.last().width()+widthDiff );
						methods.myFixed.push(myRowElements.last());
					}else{
						myRowElements.last().css('width','');
					}
				}) //for each fb-row-*
			}) //return (for chainability)
		}, //fixMe
		
		release 		: function() { 
			return this.each(function() {
				$.each(methods.myFixed,function(i,val) { this.css('width','') })
				//$('div[class^="fb-"]').css('width','');
			})
		} //release
		
	} //methods

	$.fn.fbRoundingFixer = function(options){
			console.log('run: '+new Date())
		if (options){
			return methods.release.apply( this, arguments );
		}else{
			return methods.roundingFix.apply( this, arguments );
		}
	} //fbRoundingFixer

})(jQuery)



if(
	/(OS 6_.*Version\/5.*Safari)/i.exec(navigator.userAgent)||//Safari on IOS 5
	/(OS 5_.*Version\/5.*Safari)/i.exec(navigator.userAgent)||//Safari on IOS 5
	/(OS X 10.*Version\/5.*Safari)/i.exec(navigator.userAgent)//Safari on OSX or Windows 
){
	var fbf_debounce = false;
	$(window).resize(function(){
		$('.fullBleedFlexGrid').fbRoundingFixer('release')
		if(fbf_debounce !== false){clearTimeout(fbf_debounce);}
		fbf_debounce = setTimeout(function() { $('.fullBleedFlexGrid').fbRoundingFixer() }, 500); 
	});
	
	$(document).ready(function() { $('.fullBleedFlexGrid').fbRoundingFixer() })
}



