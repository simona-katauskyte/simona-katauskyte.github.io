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

  // let technology = document.getElementById("technology");
  // technology.innerHTML = technologyName.toUpperCase();
}



// function openProject(projectName) {
//   var i;
//   var x = document.getElementsByClassName("projects");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   document.getElementById(projectName).style.display = "block";  
// }



// function sortSelection() {
// 	let rawArray = document.getElementsByClassName("date");

// 	let dateArray = [];

// 	for (var i = 0; i < rawArray.length; i++) {
// 		let date = rawArray[i].innerHTML;
// 		dateArray.push(date);
// 	}

// 	let dateArraySorted = dateArray.sort((a, b) => b - a);

// 	console.log(dateArraySorted);
// }