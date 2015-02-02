/*window.onload = function()
{
	displayFavorites(document.getElementById('display-fav'));
}*/
function requestGists() {
var httpRequest = new XMLHttpRequest;
httpRequest.onreadystatechange = function() {
if (this.readyState === 4) {
if (this.status === 200) {
//console.log(this.responseText);
var gistsArr = JSON.parse(httpRequest.responseText);
console.log(gistsArr[0].url);
createList(gistsArr);
}
else {
alert('There was a problem with the request.');
}
}
};
httpRequest.open('GET', '//api.github.com/gists/public');
httpRequest.send();
}
function createList(gistsArr) {
var ul = document.getElementById('results');
_resetTable(ul);
for (var i = 0; i < gistsArr.length; i++) {
var li = document.createElement('li');
li.id = 'x' + i;
if (gistsArr[i].hasOwnProperty.call(gistsArr[i], 'description') === false)
{
li.innerHTML = '<a href=' + gistsArr[i].url + '>' + 'No Description' + '</a>';
}
else if (gistsArr[i].description === '')
{
li.innerHTML = '<a href= ' + gistsArr[i].url + '>' + 'No Description'+ '</a>';
}
else
{
li.innerHTML = '<a href= ' + gistsArr[i].url + '>' + gistsArr[i].description + '</a>';
}
favButton = document.createElement('button');
favButton.innerHTML = 'Save to Favorites';
favButton.onclick = function(gistsArr, i) {
//par = favButton.parentNode;
localStorage.setItem(this.parentNode.id, this.parentNode.innerHTML);
remove(this.parentNode);
gistsArr.splice(i, 1);
createList(gistsArr);
//displayFavorites();
};
li.appendChild(this.favButton);
ul.appendChild(li);
}
}
function _resetTable(ul)
{
	for (var i = ul.childNodes.length - 1; i >= 0; i--)
	{
		ul.removeChild(ul.childNodes[i]);
	}
}

function remove(ele) {

	ele.parentNode.removeChild(ele);
}

/*function displayFavorites()
{
	var ul = document.getElementById( "favorites")
	_resetTable(ul);

	var stor_Str;
	var stor_Obj;
	var li;
	var remove_Button
	var obj_id;

	//iterates over local storage and parses the strings back into gist objects
	//creates table list item elements with links
	//appends list items to list
	//appends remove button to list items
	for(var i = 0; i < localStorage.length;i++)
	{
		li = document.createElement('li');

		stor_Str = localStorage.getItem(localStorage.key(i));
		stor_Obj = JSON.parse(stor_Str);

		if(stor_Obj.hasOwnProperty.call(stor_Obj,'description') ===  false)
		{
			li.innerHTML = '<a href='+stor_Obj.url + '>' + "Description empty" + '</a>';
		}
		else if(stor_Obj.description === "" )
		{
			li.innerHTML = '<a href='+stor_Obj.url + '>'+"Description empty"+'</a>' + '</a>';
		}
		else
		{
			li.innerHTML = '<a href='+stor_Obj.url+'>'+stor_Obj.description+'</a>';
		}

		ul.appendChild(li);

		obj_id = stor_Obj.id;

		//remove_Button = removeButton('Remove',obj_id);

		//li.appendChild(remove_Button);
	}
}*/

