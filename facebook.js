var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function boldHTML(modified) {
  var element = document.createElement("b");
  element.innerHTML = modified;
  return element;
}

function replaceText (node) {
  let value = node.nodeValue;
  let found = false;
  let modified = "";
  for (var i = 0; i < searchText.length; i++)
  {
      if (value.includes(searchText[i])) {
		  modified = value.replace(searchText[i], '<img src="https://i.imgur.com/xrxBvlT.png" width="20px">');
		  found = true;
	  }
  }
  if (node.parentNode.nodeType === 1 && found) {
		node.nodeValue = "";
	    node.parentNode.appendChild(boldHTML(modified));
  }
}

window.onload = findAndReplace();
