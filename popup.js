function submit(){
 //document.getElementById("result").innerHTML = "hello" ; 
 document.getElementById("processing").style.display = "flex"; 
 var xhr = new XMLHttpRequest();
xhr.open("POST", encodeURI('https://urldecode.herokuapp.com/'), true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        document.getElementById("result").innerHTML = xhr.responseText ; 
        document.getElementById("result").setAttribute("href", xhr.responseText); 
        document.getElementById("processing").style.display = "none";
    }
}

var param = 'data={"url": "' + document.getElementById("urlToDecode").value + '"}'; 

xhr.send(encodeURI(param));
    
}

document.getElementById("submit").onclick = submit; 