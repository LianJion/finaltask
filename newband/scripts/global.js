

//onload��Ӧһ���Զ���غ�������
	function addLoadEvent(func){
		var oldload = window.onload;
		if(typeof window.onload != 'function'){
			window.onload = func;
			//ֱ�Ӽ��ظú���
		}
		else{
			window.onload = function(){
				//���ú������ü��ض��е�ĩβ
				oldload();
				func();
				}
			}
	
	}
	
	//���Ŀ����������һ������ô��ֱ�Ӳ��롣���ǵĻ���������һ���ֵܽڵ�֮ǰ���롣
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
			//��õ�ǰlocation
			var currenturl = window.location.href;
			//��ǰ��ҳ���hrefֵ����linkurl���ַ�������ô˵�����ǵ�ǰҳ����
			if(currenturl.indexOf(linkurl)!=-1){
				link[i].className = "here";
				//������־ÿҳ��id,��ҳ��home��ʾbody��id�š�lastChildָ�����Ǹ��ı����ӣ�����ҳ����index����ô.value����Home,ת����Сд����home
				var linktext = link[i].lastChild.nodeValue.toLowerCase();
				document.body.setAttribute("id" ,linktext);
				//alert(linktext); �ҵ���Ӧ��href��Ψһȷ����href���ܶ�Ӧ��id��
			}
		}
	}

	addLoadEvent(highLightPage);