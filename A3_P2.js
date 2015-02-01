

function requestGists(){
  var httpRequest = new XMLHttpRequest;
  httpRequest.onreadystatechange = function () {
  if (this.readyState === 4) {
      if (this.status === 200) {
        //console.log(this.responseText);
		var gistsArr = JSON.parse(httpRequest.responseText);
        console.log(gistsArr[0].url);
        createList (gistsArr);
  }
       else {
        alert('There was a problem with the request.');
      }
    }
  }
  httpRequest.open('GET', '//api.github.com/gists/public');
  httpRequest.send();
 }
 
 function createList(gistsArr) {
   var ul = document.getElementById( "results");
     for (var i = 0; i <gistsArr.length; i++){
     var li = document.createElement("li");
     li.id = "x" + i;
	if(gistsArr[i].hasOwnProperty.call(gistsArr[i],'description') ===  false)
		{
			li.innerHTML = '<a href='+gistsArr[i].url + '>' + 'No Description' + '</a>';

		}
		else if(gistsArr[i].description === "" )
		{
			li.innerHTML = '<a href= ' +gistsArr[i].url + '>'+"No Description"+'</a>';
		}
		else
		{
			li.innerHTML = '<a href= ' + gistsArr[i].url+'>' + gistsArr[i].description+'</a>';
		}
	this.favButton = document.createElement('button'); 
    this.favButton.innerHTML = "Save to Favorites";
    this.favButton.onclick = function () {
	//par = favButton.parentNode;
      localStorage.setItem(favButton.parentNode.id, favButton.parentNode.innerHTML);
	}
	li.appendChild (this.favButton);
    ul.appendChild(li);
     }
 
}

