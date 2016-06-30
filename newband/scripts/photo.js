	
	function preopen(){
	
		if(!document.getElementsByTagName){
			return false;
		}
		if(!document.getElementById){
			return false;
		}
		if(!document.getElementById("bandshow")){
			return false;
		}
		var photosite = document.getElementById("bandshow");
		//获得bandshow的a的数组
		var photoarray =photosite.getElementsByTagName("a");
		for(var i=0;i<photoarray.length;i++)
		{
			photoarray[i].onclick=function(){
				return showPhoto(this);
	
			}

			//键盘浏览事件
			 photoarray[i].onkeypress = photoarray[i].onclick;

			
		}
	}
    


//插入placeholder和description元素
	function placeHolder(){
		//去除条件
		if(!document.createElement) return false;
		if(!document.createTextNode) return false;
		if(!document.getElementById) return false;
		if(!document.getElementById("bandshow")) return false;

		var placeholder = document.createElement("img");
		placeholder.setAttribute("id" ,"placeholder");
		placeholder.setAttribute("src","images/placeholder.gif");
		placeholder.setAttribute("alt" ,"My favorite photo");
		placeholder.setAttribute("title" ,"placeholder");

		var description = document.createElement("p");
		description.setAttribute("id" ,"description");
		var ptext = document.createTextNode("Is it really cool?");
		description.appendChild(ptext);
		
		//insertAfter()函数
		var photoagain = document.getElementById("bandshow");
		insertAfter(description,photoagain);
		//插入到bandshow后面，现插入文字，再插入图片
		insertAfter(placeholder,description);
	}



	function showPhoto(WhichPhoto){
		var source=WhichPhoto.getAttribute("href");

		if(!document.getElementById("placeholder")) return true;
		//这里要确认id=placeholder的值是不是存在！！！
		var placeholder= document.getElementById("placeholder");

		//检测placeholder对应的属性格式是不是img，return true说明执行不顺利，就不用禁止html里的链接
		if(placeholder.nodeName !="IMG") return true;

		placeholder.setAttribute("src",source);

		var textsource = WhichPhoto.getAttribute("title") ?  WhichPhoto.getAttribute("title") : " " ;



		if(!document.getElementById("description")) return false;

		//这里要确认id=description的值是不是存在！！！
		var description = document.getElementById("description");
		//这是修改文本介绍的文字
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue=textsource;
		}
		
		//修改鼠标悬浮在图片上显示的文字内容
		placeholder.setAttribute("title",textsource);

		
		//执行顺利就返回false，来禁用链接。
		return false;

	}


	addLoadEvent(placeHolder);
	addLoadEvent(preopen);
