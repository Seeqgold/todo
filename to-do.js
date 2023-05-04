const to=["Solat", "Exercise", "House chores", "Assignment", "Cook", "..."];
let tlen= to.length;
text="<ol>";
function myFunction(){
for(let i=0; i<tlen; i++){
    text +="<li>" + to[i] + "</li>";
}
text +="</ol>";
document.getElementById("demo").innerHTML= text;
}
