function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = " ";
}
function newPic(){
     var img = document.getElementById('img'); 
            img.src = 'https://picsum.photos/300'; 
}

function getJoke(){
  clearBox('output');
      newPic();
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
        var response = xhttp.responseText;
        console.log("ok"+response);
        var data = JSON.parse(response);
    console.log(data.attachments[0].fallback);
     document.getElementById('output').innerHTML = "<br><p>"+data.attachments[0].fallback+"</p>";
 
        }
};
xhttp.open("GET", "https://icanhazdadjoke.com/slack", true);

xhttp.send();

}
