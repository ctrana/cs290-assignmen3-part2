var gists_array =[];

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
     var li = document.createElement( "li");
    
	if(gistsArr[i].hasOwnProperty.call(gistsArr[i],'description') ===  false)
		{
			li.innerHTML = '<a href='+gistsArr[i].url + '>' + "No Description" + '</a>' 
			'<input type='button' name="save" onclick='saveToFav()' value="Save to Favorites">';

		}
		else if(gistsArr[i].description === "" )
		{
			li.innerHTML = '<a href= ' +gistsArr[i].url + '>'+"No Description"+'</a>';
		}
		else
		{
			li.innerHTML = '<a href= ' + gistsArr[i].url+'>' + gistsArr[i].description+'</a>';
		}
     ul.appendChild(li);
     }
 
}

function saveToFav (){
}