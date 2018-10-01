function urlGen() {
	var urlTxt = document.getElementById("urlText").value.toLowerCase();
	var urlString = urlTxt.split(" ");
	var searchPhrase = urlString.join("-");
	var domainName = document.getElementById("dropDown").value;
	if (document.getElementById("urlText").value == ""){
		document.getElementById("errorText").innerHTML=" Search text is needed to generate the URL";
	}else if(document.getElementById("rad1").checked) {
		document.getElementById("result").innerHTML = "https://www."+domainName+"/search?q="+searchPhrase;
		document.getElementById("errorText").innerHTML="";
		document.getElementById("infoText").style.visibility = "visible";
		document.getElementById("myLink").setAttribute('href', 'https://www.'+domainName+'/search?q='+searchPhrase);
	}else{
		document.getElementById("result").innerHTML = "http://www."+domainName+"/search?q="+searchPhrase;
		document.getElementById("errorText").innerHTML="";
		document.getElementById("infoText").style.visibility = "visible";
		document.getElementById("myLink").setAttribute('href', 'http://www.'+domainName+'/search?q='+searchPhrase);
	}
}