	
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
		//���bandshow��a������
		var photoarray =photosite.getElementsByTagName("a");
		for(var i=0;i<photoarray.length;i++)
		{
			photoarray[i].onclick=function(){
				return showPhoto(this);
	
			}

			//��������¼�
			 photoarray[i].onkeypress = photoarray[i].onclick;

			
		}
	}
    


//����placeholder��descriptionԪ��
	function placeHolder(){
		//ȥ������
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
		
		//insertAfter()����
		var photoagain = document.getElementById("bandshow");
		insertAfter(description,photoagain);
		//���뵽bandshow���棬�ֲ������֣��ٲ���ͼƬ
		insertAfter(placeholder,description);
	}



	function showPhoto(WhichPhoto){
		var source=WhichPhoto.getAttribute("href");

		if(!document.getElementById("placeholder")) return true;
		//����Ҫȷ��id=placeholder��ֵ�ǲ��Ǵ��ڣ�����
		var placeholder= document.getElementById("placeholder");

		//���placeholder��Ӧ�����Ը�ʽ�ǲ���img��return true˵��ִ�в�˳�����Ͳ��ý�ֹhtml�������
		if(placeholder.nodeName !="IMG") return true;

		placeholder.setAttribute("src",source);

		var textsource = WhichPhoto.getAttribute("title") ?  WhichPhoto.getAttribute("title") : " " ;



		if(!document.getElementById("description")) return false;

		//����Ҫȷ��id=description��ֵ�ǲ��Ǵ��ڣ�����
		var description = document.getElementById("description");
		//�����޸��ı����ܵ�����
		if(description.firstChild.nodeType == 3){
			description.firstChild.nodeValue=textsource;
		}
		
		//�޸����������ͼƬ����ʾ����������
		placeholder.setAttribute("title",textsource);

		
		//ִ��˳���ͷ���false�����������ӡ�
		return false;

	}


	addLoadEvent(placeHolder);
	addLoadEvent(preopen);
