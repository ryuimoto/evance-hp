<!--

//角丸
$('.round').corner("7px");
$('.roundlink').corner("3px");
$('.submit').corner("3px");


//MEMU
$(document).ready(function () {

//高さ調節
wheight();




//ボーダON/OFF
//$("#main .category:last-child").css({background:"none"});
//$(".category .article:last-child").css({background:"none"});
//$("#main  .article:last-child").css({background:"none"});


//artist disc画像
$("#artist .disc:first .image img").css({width:"auto"});



/*popupさせる*/
$('a.pp').click(function() {
	$('div#popup').lightbox_me({
		centered: true,
		overlaySpeed: 100,
		lightboxSpeed: 100,
		overlayDisappearSpeed: 100,
		lightboxDisappearSpeed: 100,
		overlayCSS:{background: 'black',opacity: .3}
	});
	return false;
});


	
});

$(window).resize(function(){

//location.reload(false);
//高さ調節
wheight();
});

function wheight(){
//高さ調節
	var overheight = $("#footer").height()+12;
	var myheight = $(window).height() - overheight;
	if( $("#container").height() + overheight < $(window).height() ){
		$("#container").height(myheight);

	}
/*
	$("#wrapper").height($("#container").height()-$("#header").height());
*/
}



//ロールオーバー
function smartRollover() {
	if(document.getElementsByTagName) {

		var chacheImage = new Array();
		var ci = 0;

		function imageSet( img ){
			if(img.getAttribute("src").match("_off."))
			{
				img.onmouseover = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_off.", "_on."));
				}
				img.onmouseout = function() {
					this.setAttribute("src", this.getAttribute("src").replace("_on.", "_off."));
				}

				//キャッシュする
				chacheImage[ ci ] = new Image();
				chacheImage[ ci ].src = img.getAttribute("src").replace("_off.", "_on.");
				ci++;
			}
		}


		var images = document.getElementsByTagName("img");

		for(var i=0; i < images.length; i++) 
			imageSet( images[i] );


		var inputs = document.getElementsByTagName("input");

		for( var i=0; i<inputs.length; i++ ){
			if( inputs[i].type == "image" )
				imageSet( inputs[i] );
		}


	}
}

//if(window.addEventListener) {
//	window.addEventListener("load", smartRollover, false);
//}
//else if(window.attachEvent) {
//	window.attachEvent("onload", smartRollover);
//} else {
//	window.onload = smartRollover;
//}



function addLoadEvent(func)
{	
	var oldonload = window.onload;
	if (typeof window.onload != 'function'){
    	window.onload = func;
	} else {
		window.onload = function(){
		oldonload();
		func();
		}
	}

}

addLoadEvent(smartRollover);

function  footerPlugin(){
	$(document).ready(function(){
		$("#footer").footer();
	});

}


//addLoadEvent(footerPlugin);



//youtube
/*
$(function(){
	$("#youtube").tubeplayer({
		width:300, // プレーヤーの幅
		height:182, // プレーヤの高さ
		allowFullScreen:"true", // フルスクリーン再生を許可するか
		initialVideo:"FYtTeWGwgvU", // 動画ID
		playerID:"youtube-player", // 埋め込み先の要素ID
		preferredQuality:"default", // 画質（default, small, medium, large, hd720）
	});
});
*/
-->
