function submit(){
 //document.getElementById("result").innerHTML = "hello" ; 
 var xhr = new XMLHttpRequest();
xhr.open("GET", encodeURI('https://decodeshorturl.herokuapp.com/https://t.co/xchSvJxTqW?amp=1'), true);

//Send the proper header information along with the request
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        document.getElementById("result").innerHTML = xhr.responseText ; 
    }
}
//var body={url: "https://t.co/xchSvJxTqW?amp=1"}; 
xhr.send();
    
}

document.getElementById("submit").onclick = submit; 