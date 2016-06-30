

//onload对应一次性多加载函数数量
	function addLoadEvent(func){
		var oldload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
			//直接加载该函数
		}
		else{
			window.onload = function(){
				//将该函数放置加载队列的末尾
				oldload();
				func();
				}
			}
	
	}
	
	//如果目标对象是最后一个，那么就直接插入。不是的话，就在下一个兄弟节点之前插入。
	function insertAfter(newElement,targetElement){
		var parent = targetElement.parentNode;
		if(parent.lastChild == targetElement){
			parent.appendChild(newElement);
		}
		else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
		
	}


	function highLightPage(){
		if(!document.getElementById) return false;
		if(!document.getElementsByTagName) return false;
		if(!document.getElementById("navigation")) return false;
		var nav = document.getElementById("navigation");
		var link = nav.getElementsByTagName("a");
		for(var i=0;i<link.length;i++){
			var linkurl = link[i].getAttribute("href");
			//获得当前location
			var currenturl = window.location.href;
			//当前的页面的href值中有linkurl的字符串，那么说明就是当前页面嘛
			if(currenturl.indexOf(linkurl)!=-1){
				link[i].className = "here";
				//用来标志每页的id,主页是home表示body的id号。lastChild指的是那个文本孩子，假如页面是index，那么.value就是Home,转换成小写就是home
				var linktext = link[i].lastChild.nodeValue.toLowerCase();
				document.body.setAttribute("id" ,linktext);
				//alert(linktext); 找到对应的href，唯一确定的href才能对应上id号
			}
		}
	}

	addLoadEvent(highLightPage);