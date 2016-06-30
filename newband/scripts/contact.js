
//点击label标签聚焦，根据for的值找到对应的id号，聚焦
function focusLabels() {
  if (!document.getElementsByTagName) return false;
  var labels = document.getElementsByTagName("label");
  for (var i=0; i<labels.length; i++) {
    if (!labels[i].getAttribute("for")) continue;

    labels[i].onclick = function() {
      var id = this.getAttribute("for");
      if (!document.getElementById(id)) return false;
      var element = document.getElementById(id);
      element.focus();
    }
  }
}


//触发事件，输入参数调用函数，遍历所有的form
function prepareForms() {
  for (var i=0; i<document.forms.length; i++) {
    var thisform = document.forms[i];
    resetFields(thisform);
    thisform.onsubmit = function() {
      return validateForm(this);
    }
  }
}



//点击后默认值自动消失，离开默认值又显示
function resetFields(whichform) {
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
	//排除submit按钮和没有默认值的选项
    if (element.type == "submit") continue;
    if (!element.defaultValue) continue;
    element.onfocus = function() {
    if (this.value == this.defaultValue) {
      this.value = "";
     }
    }
    element.onblur = function() {
      if (this.value == "") {
        this.value = this.defaultValue;
      }
    }
  }
}


//检测是否输入规范
function validateForm(whichform) {
  for (var i=0; i<whichform.elements.length; i++) {
    var element = whichform.elements[i];
	//例如这个<input class="email required" type="text" id="email" value="Your email address" /> class="email required"
    if (element.className.indexOf("required") != -1) {
		//！isFilled(element) 就是调用的isFilled(element)函数返回值是false
      if (!isFilled(element)) {
		  //没有输入或者仍然是默认值
        alert("Please fill in the "+element.name+" field.");
        return false;
      }
    }
    if (element.className.indexOf("email") != -1) {
      if (!isEmail(element)) {
        alert("The "+element.name+" field must be a valid email address.");
        return false;
      }
    }
  }
  return true;
}

function isFilled(field) {
  if (field.value.length < 1 || field.value == field.defaultValue) {
    return false;
  } else {
    return true;
  }
}

function isEmail(field) {
  if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
    return false;
  } else {
    return true;
  }
}


addLoadEvent(focusLabels);
addLoadEvent(prepareForms);