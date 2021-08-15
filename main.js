var names_of_people = [];
var GuestName = null;
var lenght_of_name = null;
    
function add(){
    GuestName = document.getElementById("name1").value;
	names_of_people.push(GuestName);
    lenght_of_name = names_of_people.length;
	document.getElementById("display_name").innerHTML=names_of_people;
}

var final = null;
function show(){
	for (i = 1; i <= lenght_of_name; i++){
		final = final + i + ". " + names_of_people[i-1] + "<br>";
	}
	document.getElementById("p1").innerHTML=final;
	document.getElementById("sort_button").style.display="block";
}


function sorting(){
		names_of_people.sort();
		var sorted = null;
		for (i = 1; i <= lenght_of_name; i++){
			sorted = sorted + i + ". " + names_of_people[i-1] + "<br>";
		}		
		document.getElementById("sorted").innerHTML = sorted;
}


function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_people.length; j++)
		{
			if(s==names_of_people[j]){
				found=found+1;
			}	
		}
	document.getElementById("p2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
