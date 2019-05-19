function filterSelection(technologyName) {
	let x = document.getElementsByClassName("skill-card");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }

  let tagName = "x" + technologyName;
  
  let y = document.getElementsByClassName(tagName);
  for (var j = 0; j < y.length; j++) {
    y[j].style.display = "flex";
  }
}