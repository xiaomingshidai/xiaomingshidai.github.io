window.onload = function() {


	// -->main header
	// false <==> document
	var oUl = getTagName(false, 'ul');
	var list = getTagName(oUl[0], 'li');
	addCss(list, "actived");
	/*for(var i = 0; i < list.length; i++) {
      list[i].onclick = function() {
      	for(var i = 0; i < list.length; i++) {
      		list[i].classList.remove('actived');
      	}
        this.classList.add('actived');
      }
  }*/

  // -->sidebar
  var oUlset = getClassName('ulset');
  var oLi1 = getTagName(oUlset[0], 'li');
  var oLi2 = getTagName(oUlset[1], 'li');
  var oLi3 = getTagName(oUlset[2], 'li');

  var oMod = getClassName('modName')[0];
  addCss(oLi1, "fffli", oMod);
  addCss(oLi2, "fffli", oMod);
  addCss(oLi3, "fffli", oMod);





}
function addCss(obj, style, oM) {

	for(var i=0; i<obj.length; i++) {
		obj[i].onclick = function() {
			if(oM) {
				oM.innerHTML = this.innerHTML;
			}
			for(var i=0; i<obj.length; i++) {
				obj[i].classList.remove(style);
			}
			this.classList.add(style);
		}	
	}

}

function getClassName(className) {
	return document.getElementsByClassName(className);
}
function getTagName(obj, tagName) {
	if(obj) {
		return obj.getElementsByTagName(tagName);
	}
	else {
		return document.getElementsByTagName(tagName);
	}
}