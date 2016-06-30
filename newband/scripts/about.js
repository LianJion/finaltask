function showExpress(id){
	var sectionshow = document.getElementsByTagName("section");
	for(var i=0;i<sectionshow.length;i++){
		if(sectionshow[i].getAttribute("id")!=id){
			sectionshow[i].style.display = "none" ;
		}else{
			sectionshow[i].style.display = "block";
		}
	}

}

function prepareInternalnav(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById("internalnav")) return false;

	var internalnav = document.getElementById("internalnav");
	var link = internalnav.getElementsByTagName("a");
	for(var i=0; i<link.length;i++){
		var linkId = link[i].getAttribute("href").split("#")[1];
		var test = document.getElementById(linkId);
		if(!test) continue;

		//默认不显示
		test.style.display = "none";
		//添加定制属性
		link[i].destination = linkId;
		link[i].onclick = function(){
			showExpress(this.destination);
			return false;//不要返回点击的链接了
		}
	}
}


addLoadEvent(prepareInternalnav);