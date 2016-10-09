window.onload=function(){
//topleft
	var head=$(".Head")[0];
	var hilis=$(".head_topleftBox",head);
	var hihovers=$(".headimglefthover");
	for(var i=1;i<hilis.length;i++){
		hilis[i].index=i;
		hilis[i].onmouseover=function(){
			hihovers[this.index-1].style.display="block";
		}
		hilis[i].onmouseout=function(){
			hihovers[this.index-1].style.display="none";
		}
	}
	//topright

	var headtopright=$(".head_topright",head)[0];
	var htrbox=$(".head_toprightBox",headtopright)[4];
	var htrul=$("ul",htrbox)[0];
	hover(htrbox,function(){
		htrbox.style.backgroundColor="#fff";
		htrul.style.display="block";
	},function(){
		htrbox.style.backgroundColor="";
		htrul.style.display="none";
	})
	// var htrboxhover=$(".head_toprightbtn",htrbox)[0];
	// var htrlis=$("li",htrboxhover);
	// htrbox.onmouseover=function(){
	// 	htrboxhover.style.display="block";		
	// }
	// htrbox.onmouseout=function(){
	// 	htrboxhover.style.display="none";		
	// }
	// for(var i=0;i<htrlis.length;i++){
	// 	htrlis[i].index=i;
	// 	htrlis[i].onmouseover=function(){
	// 		for(var j=0;j<htrlis.length;j++){
	// 			htrlis[j].style.color="#666";
	// 			htrlis[j].style.textDecoration="none";
	// 		}
	// 		htrlis[this.index].style.color="#e5004f";
	// 		htrlis[this.index].style.textDecoration="underline";
	// 	}
	// }
//search
	var search=$(".search")[0];
	var searchbox=$(".search_right",search)[0];
	var searchhover=$(".search_righthover",searchbox)[0];
	searchbox.onmouseover=function(){
		searchhover.style.display="block";
		searchhover.style.color="#666";
	}
	searchbox.onmouseout=function(){
		searchhover.style.display="none";
	}
	var searchinput=$("input",search)[0];
	searchinput.onclick=function(){
		searchinput.value="";
	}
	var searchtitles=$(".search_title",search);
	searchtitles[0].style.color="#E5004F";
	for(var i=0;i<searchtitles.length;i++){
		searchtitles[i].index=i;
		searchtitles[i].onmouseover=function(){
			for(var j=0;j<searchtitles.length;j++){
				searchtitles[j].style.color="#666";
			}
			searchtitles[this.index].style.color="#E5004F"
		}
	}
//产品分类
	var fenlei=getClass("fenlei_bottom",document)[0];
	var imgs=getClass("imgbox",fenlei);
	var flzhezhao=$(".fenlei_zhezhao",fenlei)[0];
	var button=getClass("button1",fenlei)[0];
	var lis=button.getElementsByTagName('li');
	var fenleilist=$(".fenlei_bottomleft",fenlei)[0];
	var fenleilis=$(".fenlei_bottomleftli",fenleilist);
	var fenleiliimgs=$(".fenlei_bottomleftimgbox",fenleilist);
	var fenleili=$(".fenlei_bottomleftli");
	var fenleizhezhao=$(".fenlei_bottomleftliboxzhezhao");
	var fenleihover=$(".fenlei_bottomleftliboxhover");
	fenleilis[0].onmouseover=function(){
		fenleiliimgs[0].style.backgroundPosition="27px -6px";
		fenleizhezhao[0].style.display="block";
		fenleihover[0].style.display="block";
	}
	fenleilis[0].onmouseout=function(){
		fenleiliimgs[0].style.backgroundPosition="61px -6px";
		fenleizhezhao[0].style.display="none";
		fenleihover[0].style.display="none";
	}
	fenleilis[1].onmouseover=function(){
		fenleiliimgs[1].style.backgroundPosition="27px -54px";
		fenleizhezhao[1].style.display="block";
		fenleihover[1].style.display="block";
	}
	fenleilis[1].onmouseout=function(){
		fenleiliimgs[1].style.backgroundPosition="61px -54px";
		fenleizhezhao[1].style.display="none";
		fenleihover[1].style.display="none";
	}
	fenleilis[2].onmouseover=function(){
		fenleiliimgs[2].style.backgroundPosition="27px -102px";
		fenleizhezhao[2].style.display="block";
		fenleihover[2].style.display="block";
	}
	fenleilis[2].onmouseout=function(){
		fenleiliimgs[2].style.backgroundPosition="61px -102px";
		fenleizhezhao[2].style.display="none";
		fenleihover[2].style.display="none";
	}
	fenleilis[3].onmouseover=function(){
		fenleiliimgs[3].style.backgroundPosition="28px -148px";
		fenleizhezhao[3].style.display="block";
		fenleihover[3].style.display="block";
	}
	fenleilis[3].onmouseout=function(){
		fenleiliimgs[3].style.backgroundPosition="61px -148px";
		fenleizhezhao[3].style.display="none";
		fenleihover[3].style.display="none";
	}
	fenleilis[4].onmouseover=function(){
		fenleiliimgs[4].style.backgroundPosition="27px -195px";
		fenleizhezhao[4].style.display="block";
		fenleihover[4].style.display="block";
	}
	fenleilis[4].onmouseout=function(){
		fenleiliimgs[4].style.backgroundPosition="61px -195px";
		fenleizhezhao[4].style.display="none";
		fenleihover[4].style.display="none";
	}
	fenleilis[5].onmouseover=function(){
		fenleiliimgs[5].style.backgroundPosition="27px -242px";
		fenleizhezhao[5].style.display="block";
		fenleihover[5].style.display="block";
	}
	fenleilis[5].onmouseout=function(){
		fenleiliimgs[5].style.backgroundPosition="61px -242px";
		fenleizhezhao[5].style.display="none";
		fenleihover[5].style.display="none";
	}
	fenleilis[6].onmouseover=function(){
		fenleiliimgs[6].style.backgroundPosition="27px -289px";
		fenleizhezhao[6].style.display="block";
		fenleihover[6].style.display="block";
	}
	fenleilis[6].onmouseout=function(){
		fenleiliimgs[6].style.backgroundPosition="61px -289px";
		fenleizhezhao[6].style.display="none";
		fenleihover[6].style.display="none";
	}
	fenleilis[7].onmouseover=function(){
		fenleiliimgs[7].style.backgroundPosition="28px -335px";
		fenleizhezhao[7].style.display="block";
		fenleihover[7].style.display="block";
	}
	fenleilis[7].onmouseout=function(){
		fenleiliimgs[7].style.backgroundPosition="61px -335px";
		fenleizhezhao[7].style.display="none";
		fenleihover[7].style.display="none";
	}
	fenleilis[8].onmouseover=function(){
		fenleiliimgs[8].style.backgroundPosition="27px 74px";
		fenleizhezhao[8].style.display="block";
		fenleihover[8].style.display="block";
	}
	fenleilis[8].onmouseout=function(){
		fenleiliimgs[8].style.backgroundPosition="61px 74px";
		fenleizhezhao[8].style.display="none";
		fenleihover[8].style.display="none";
	}
	fenleilis[9].onmouseover=function(){
		fenleiliimgs[9].style.backgroundPosition="27px 26px";
		fenleizhezhao[9].style.display="block";
		fenleihover[9].style.display="block";
	}
	fenleilis[9].onmouseout=function(){
		fenleiliimgs[9].style.backgroundPosition="60px 26px";
		fenleizhezhao[9].style.display="none";
		fenleihover[9].style.display="none";
	}
	var index=0;
	imgs[0].style.zIndex=1;
	lis[0].style.backgroundColor="#e5004f";
	function round(){
		index++;
		if(index==imgs.length){
			index=0;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].style.backgroundColor="#211616";
		}
		imgs[index].style.zIndex=1;
		lis[index].style.backgroundColor="#e5004f";
	}
	var t=setInterval(round,2000);
	for(var i=0;i<lis.length;i++){
		lis[i].index=i;
		lis[i].onclick=function(){
			for(var j=0;j<imgs.length;j++){
				imgs[j].style.zIndex=0;
				lis[j].style.backgroundColor="#211616";
			}
			imgs[this.index].style.zIndex=1;
			lis[this.index].style.backgroundColor="#e5004f";
			index=this.index;
		}
	}
	var btn=getClass("btn1",fenlei)[0];
	var btnleft=getClass("btnleft",btn)[0];
	var btnright=getClass("btnright",btn)[0];
	fenlei.onmouseover=function(){
		btn.style.opacity=1;
		clearInterval(t);
	}
	fenlei.onmouseout=function(){
		btn.style.opacity=0;
		t=setInterval(round,2000);
	}
	btnright.onclick=function(){
		round();
	}
	btnright.onmouseover=function(){
		btnright.style.backgroundColor="#e5004f";
	}
	btnright.onmouseout=function(){
		btnright.style.backgroundColor="#000";
	}
	btnright.onclick=function(){
		round();
	}
	btnleft.onclick=function(){
		index--;
		if(index==-1){
			index=imgs.length-1;
		}
		for(var i=0;i<imgs.length;i++){
			imgs[i].style.zIndex=0;
			lis[i].style.backgroundColor="#211616";
		}
			imgs[index].style.zIndex=1;
			lis[index].style.backgroundColor="#e5004f";
	}
	btnleft.onmouseover=function(){
		btnleft.style.backgroundColor="#e5004f";
	}
	btnleft.onmouseout=function(){
		btnleft.style.backgroundColor="#000";
	}
	var imgright=$(".imgbox_right",fenlei)[0];
	imgright.onmouseover=function(){
		animate(imgright,{right:10},100);
		btn.style.display="none";
	}
	imgright.onmouseout=function(){
		animate(imgright,{right:0},100);
		btn.style.display="block";
	}
	// banner 结束
// 特卖开始
	function getBorder(border,width,height){
		var shbt=$(".bt",border)[0];
		var shbr=$(".br",border)[0];
		var shbb=$(".bb",border)[0];
		var shbl=$(".bl",border)[0];
		border.onmouseover=function(){
			animate(shbt,{width:width},500);
			animate(shbr,{height:height},500);
			animate(shbb,{width:width},500);
			animate(shbl,{height:height},500);
		}
		border.onmouseout=function(){
			animate(shbt,{width:0},500);
			animate(shbr,{height:0},500);
			animate(shbb,{width:0},500);
			animate(shbl,{height:0},500);
		}
	}
	var temai=getClass("temai",document)[0];
	var temaitopboxs=getClass("temai_topbox",temai);
	var sanjiaos=getClass("sanjiao",temai);
	var temaileft=getClass("temai_leftBox",temai);
	temaileft[2].style.display="block";
	sanjiaos[2].style.opacity=1;
	temaitopboxs[2].style.cssText="font-weight:bold;color:#000;border-bottom:4px solid #E5004F;";
	for(var i=0;i<temaitopboxs.length;i++){
		temaitopboxs[i].index=i;
		temaitopboxs[i].onmouseover=function(){
			for(var j=0;j<temaitopboxs.length;j++){
				temaitopboxs[j].style.cssText="font-weight:400;color:#000;border-bottom:4px solid #000;";
	 			sanjiaos[j].style.opacity=0;
	 			temaileft[j].style.display="none";
			}
			temaitopboxs[this.index].style.cssText="font-weight:bold;color:#000;border-bottom:4px solid #E5004F;";
 			sanjiaos[this.index].style.opacity=1;
 			temaileft[this.index].style.display="block";
		}
	}
	var temaiimgboxs=[];   //存放着每个盒子里的temai_left有四个
	for(var i=0;i<temaileft.length;i++){     //这是3个大盒子
		temaiimgboxs.push($(".temai_left",temaileft[i]));
	}
	var temaiimgsnum=temaiimgboxs[0].length;
	var temaiborders=[];
	for(var i=0;i<2;i++){
		for(var j=0;j<temaiimgsnum;j++){
			temaiborders.push(temaiimgboxs[i][j]);
		}
	}
	for(var i=0;i<temaiborders.length;i++){
		getBorder(temaiborders[i],220,260);
	}
	var temaiopacity=$("img",temaileft[2]);
	for(var i=0;i<temaiopacity.length;i++){
		temaiopacity[i].index=i;
		temaiopacity[i].onmouseover=function(){
			for(var j=0;j<temaiopacity.length;j++){
				temaiopacity[j].style.opacity=1;
			}
			temaiopacity[this.index].style.opacity=0.8;
		}
		temaiopacity[i].onmouseout=function(){
			temaiopacity[this.index].style.opacity=1;
		}
	}
//专柜
	var zhuangui=getClass("Zhuangui",document)[0];
	var daohang=$(".Daohang",document)[0];
	var daohangs=$("a",daohang);
	var zhuanguiTop=zhuangui.offsetTop;
	var tops=[];
	var flags=[];
	var Imgmiddle=$(".Imgbox")[1];
	var Imgmiddletop=Imgmiddle.offsetTop;
	var shishangs=$(".Shishang");
	var end=$(".End")[0];
	var endtop=end.offsetTop;
	for(var i=0;i<shishangs.length;i++){
		tops.push(shishangs[i].offsetTop);
		flags.push(true);
	}
	//按需加载
	var Height=document.documentElement.clientHeight;
	window.onscroll=function(){
		var scroll=document.documentElement.scrollTop || document.body.scrollTop;
		if(scroll+Height>zhuanguiTop){
			var Imgsbox1=$("img",zhuangui);
			for(var j=0;j<Imgsbox1.length;j++){
				Imgsbox1[j].src=Imgsbox1[j].getAttribute("asrc");
			}
		}
		if(scroll+Height>Imgmiddletop){
			var Imgsbox3=$("img",Imgmiddle)[0];
			Imgsbox3.src=Imgsbox3.getAttribute("asrc");
		}
		if(scroll+Height>yintaitop){
			var Imgsbox5=$("img",yintai);
			for(var j=0;j<Imgsbox5.length;j++){
				Imgsbox5[j].src=Imgsbox5[j].getAttribute("asrc");
			}
		}
		if(scroll+Height>Imgmiddletop){
			var Imgsbox4=$("img",end);
			for(var j=0;j<Imgsbox4.length;j++){
				Imgsbox4[j].src=Imgsbox4[j].getAttribute("asrc");
			}
		}
		for(var i=0;i<tops.length;i++){
			if(scroll+Height>tops[i]){
				flags[i]=false;
				var Imgsbox2=$("img",shishangs[i]);
				for(var j=0;j<Imgsbox2.length;j++){
					Imgsbox2[j].src=Imgsbox2[j].getAttribute("asrc");
				}
			}
		}
		if(scroll>zhuanguiTop){
			daohang.style.display="block";
		}
		if(scroll<zhuanguiTop){
			daohang.style.display="none";
		}
		var topsnum=0;
		for(var i=0;i<tops.length;i++){
			if(scroll+300>tops[i]){
				var topsnums=0;
				for(var j=0;j<tops.length;j++){
					daohangs[j].style.backgroundPosition="0px "+topsnums+"px";
					topsnums+=(-48);
				}
				daohangs[i].style.backgroundPosition="48px "+topsnum+"px";
				topsnum+=(-48);
			}
		}

		for(var i=0;i<daohangs.length;i++){
			daohangs[i].index=i;
			var daohangnum=i*(-48);
			daohangs[i].onmouseover=function(){
				var daohangnum=this.index*(-48);
				daohangs[this.index].style.backgroundPosition="48px "+daohangnum+"px";
			}
			daohangs[i].onmouseout=function(){
				var daohangnum=this.index*(-48);
				daohangs[this.index].style.backgroundPosition="0px "+daohangnum+"px";
			}
			daohangs[i].onclick=function(){
				animate(document.body,{scrollTop:tops[this.index]},200);
				animate(document.documentElement,{scrollTop:tops[this.index]},200);
			}
		}
	} 
	var zhuanguitop=getClass("zhuangui_bottomrighttoptit",zhuangui);
	var sanjiao2=getClass("sanjiao2",document);
	var zhuanguibox=getClass("zhuanguiRight",zhuangui);
	var zhuanguiopacity=$("img",zhuanguibox[0]);
	for(var i=0;i<zhuanguiopacity.length;i++){
		zhuanguiopacity[i].index=i;
		zhuanguiopacity[i].onmouseover=function(){
			zhuanguiopacity[this.index].style.opacity=0.7;
		}
		zhuanguiopacity[i].onmouseout=function(){
			zhuanguiopacity[this.index].style.opacity=1;
		}
	}
	zhuanguitop[0].style.cssText="color:#000;border-bottom:3px solid #E5004F;color:#000;font-weight:bold";
	sanjiao2[0].style.opacity=1;
	zhuanguibox[0].style.display="block";	
	for(var i=0;i<zhuanguitop.length;i++){
		zhuanguitop[i].index=i;
		zhuanguitop[i].onmouseover=function(){
			for(var j=0;j<zhuanguitop.length;j++){
				zhuanguitop[j].style.cssText="color:#000;border-bottom:3px solid #000;color:#414141";
				sanjiao2[j].style.opacity=0;
				zhuanguibox[j].style.display="none";
			}
			zhuanguitop[this.index].style.cssText="color:#000;border-bottom:3px solid #E5004F;font-weight:bold";
			sanjiao2[this.index].style.opacity=1;
			zhuanguibox[this.index].style.display="block";
		}
	}
	var zhuanguiborders=$(".zhuanguirightbox",zhuanguibox[1]);
	for(var i=0;i<zhuanguiborders.length;i++){
		getBorder(zhuanguiborders[i],198,248);
	}
//时尚名品
	//图片上的效果及选项卡
	var sh=$(".Shishang",document);
	fun(sh[0]);
	for(var i=3;i<sh.length;i++){
		fun(sh[i]);
	}
	function fun(sh){
		var shbuttonleft=$(".buttonleft",sh)[0];
		var shbuttonright=$(".buttonright",sh)[0];
		var shbtn=$(".btn",sh)[0];
		var shbtns=shbtn.getElementsByTagName('li');
		var shrbox=$(".rightbox",sh)[0];
		var shbox=$(".shishang_rightbox1",shrbox);
		shbox[0].style.left=0;
		shbtns[0].style.backgroundColor="#E6175E";
		var shindex=0;
		var shnext=0;
		var shflag=true;
		function shRight(){
			if(shflag){
				shflag=false;
				shnext++;
				if(shnext==shbox.length){
					shnext=shbox.length-1;
				}
				for(var i=0;i<shbtns.length;i++){
					shbtns[i].style.backgroundColor="";
				}
				shbtns[shnext].style.backgroundColor="#E6175E";
				animate(shbox[shindex],{left:-390},500);
				shbox[shnext].style.left="390px";
				animate(shbox[shnext],{left:0},500);
				shindex=shnext;
			}
		}
		function shLeft(){
			if(!shflag){
				shflag=true;
				shnext--;
				if(shnext==-1){
					shnext=0;
				}
				for(var i=0;i<shbtns.length;i++){
					shbtns[i].style.backgroundColor="";
				}
				shbtns[shnext].style.backgroundColor="#E6175E";
				animate(shbox[shindex],{left:390},500);
				shbox[shnext].style.left="-390px";
				animate(shbox[shnext],{left:0},500);
				shindex=shnext;
			}
		}
		shbuttonright.onclick=shRight;
		shbuttonleft.onclick=shLeft;
		shbtns[0].onclick=shLeft;
		shbtns[1].onclick=shRight;
			shrbox.onmouseover=function(){
				animate(shbuttonleft,{left:0,opacity:0.7},200)
				shbuttonleft.style.zIndex=10;
				shbuttonleft.onmouseover=function(){
					shbuttonleft.style.backgroundColor="red"
				}
				shbuttonleft.onmouseout=function(){
					shbuttonleft.style.backgroundColor=""
				}
				animate(shbuttonright,{right:0,opacity:0.7},200)
				shbuttonright.style.display="block";
				shbuttonright.style.zIndex=10;
				shbuttonright.onmouseover=function(){
					shbuttonright.style.backgroundColor="red"
				}
				shbuttonright.onmouseout=function(){
					shbuttonright.style.backgroundColor=""
				}
			}
			shrbox.onmouseout=function(){
				animate(shbuttonleft,{left:-30},200)
				// shbuttonleft.style.display="block";
				shbuttonleft.style.zIndex=10;
				animate(shbuttonright,{right:-30},200)
				shbuttonright.style.display="block";
				shbuttonright.style.zIndex=10;
			}	
	}
	//时尚左侧无缝轮播
	var shleftBox=$(".shishang_leftbottom",document);
	for(var i=0;i<shleftBox.length;i++){
		getWheel(shleftBox[i]);
	}
	function getWheel(sh){
		var shimgboxs=$(".sh_leftbottomimg",sh);
		var shbtnleft=$(".sh_leftbtnleft",sh)[0];
		var shbtnright=$(".sh_leftbtnright",sh)[0];
		var iw=parseInt(getStyle(shimgboxs[0],"width"));
		shimgboxs[0].style.left="0";
		var index=0;
		var next=0;
		function wheel(){
			index=next;
			// alert(index)
			next++;
			if(next==shimgboxs.length){
				next=0;
			}
			shimgboxs[next].style.left=iw+"px";
			animate(shimgboxs[index],{left:-iw},400);
			animate(shimgboxs[next],{left:0},400);
			// index=next;
		}
		shbtnright.onclick=function(){
			wheel();
		}
		shbtnright.onmouseover=function(){
			shbtnright.style.borderLeftColor="#000";
		}
		shbtnright.onmouseout=function(){
			shbtnright.style.borderLeftColor="";
		}
		shbtnleft.onclick=function(){
			index=next;
			// alert(index)
			next--;
			if(next==-1){
				next=shimgboxs.length-1;
			}
			shimgboxs[next].style.left=-iw+"px";
			animate(shimgboxs[index],{left:iw},400);
			animate(shimgboxs[next],{left:0},400);
		}
		shbtnleft.onmouseover=function(){
			shbtnleft.style.borderRightColor="#000";
		}
		shbtnleft.onmouseout=function(){
			shbtnleft.style.borderRightColor="";
		}
	}

	//border 动画
	var shborder=$(".shishang_rightbox",document);
	var shwidth=270;
	var shheight=180;
	for(var i=0;i<shborder.length;i++){
		getBorder(shborder[i],shwidth,shheight);
	}
	var yintai=$(".Yintai",document)[0];
	var yintaiimgs=$("img",yintai);
	var yintaitop=yintai.offsetTop;
	for(var i=0;i<yintaiimgs.length;i++){
		yintaiimgs[i].index=i;
		yintaiimgs[i].onmouseover=function(){
			yintaiimgs[this.index].style.opacity=0.7;
		}
		yintaiimgs[i].onmouseout=function(){
			yintaiimgs[this.index].style.opacity=1;
		}
	}
	
}



	