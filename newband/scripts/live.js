function stripeTable(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementsByTagName("tr")) return false;
	if(!document.getElementsByTagName("table")) return false;
    
	//有很多个table
	var  tables = document.getElementsByTagName("table");
	var odd = false;
	for(var j=0; j<tables.length; j++){
		var  rows = document.getElementsByTagName("tr");	
		for(var i=0;i<rows.length;i++){
			if(odd == true){
				//设置的css样式只是针对td
				addClass(rows[i] , "oddd");
				odd = false;
			}
			else{
				odd = true;
			}
		}
 }

}

//可运行,碰到哪一行就直接变色，highlight强调
function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var  rows = document.getElementsByTagName("tr");
	
	for(var i=0;i<rows.length;i++){
		rows[i].oldClassName = rows[i].className;
		rows[i].onmouseover = function(){
			addClass(this,"highlight");
		}
		rows[i].onmouseout = function(){
			this.className = this.oldClassName;
		}
	}
	
}

function addClass(element,value) {
  if (!element.className) {
    element.className = value;
  } else {
    newClassName = element.className;
    newClassName+= " ";
    newClassName+= value;
	//所以元素节点都自带的属性
    element.className = newClassName;
  }
}


//获取<abbr>中的title属性，然后就作为html的成分插入
function displayAbbreviations() {
  if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
  var abbreviations = document.getElementsByTagName("abbr");
  if (abbreviations.length < 1) return false;
  var defs = new Array();
  for (var i=0; i<abbreviations.length; i++) {
    var current_abbr = abbreviations[i];
    if (current_abbr.childNodes.length < 1) continue;
    var definition = current_abbr.getAttribute("title");
    var key = current_abbr.lastChild.nodeValue;
    defs[key] = definition;
  }
  var dlist = document.createElement("dl");
  for (key in defs) {
    var definition = defs[key];
    var dtitle = document.createElement("dt");
    var dtitle_text = document.createTextNode(key);
    dtitle.appendChild(dtitle_text);
    var ddesc = document.createElement("dd");
    var ddesc_text = document.createTextNode(definition);
    ddesc.appendChild(ddesc_text);

    dlist.appendChild(dtitle);
    dlist.appendChild(ddesc);
  }
  if (dlist.childNodes.length < 1) return false;
  //解释文本
  var header = document.createElement("h3");
  var header_text = document.createTextNode("Abbreviations");
  header.appendChild(header_text);
  var container = document.getElementById("content");
  container.appendChild(header);
  container.appendChild(dlist);
}

addLoadEvent(stripeTable);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);