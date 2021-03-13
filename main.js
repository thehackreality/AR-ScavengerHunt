
let current_cypher = ""; 
let current_id = ""; 


function update(cypher, id){
    current_cypher = cypher;
    current_id = id; 
    console.log(current_cypher);  
}


function ordA(a) {
    return a.charCodeAt(0) - 65;
}
   

function cypher(text, key, decode) {
    var i = 0, b;
    key = key.toUpperCase().replace(/[^A-Z]/g, '');
    return text.toUpperCase().replace(/[^A-Z]/g, '').replace(/[A-Z]/g, function(a) {
        b = key[i++ % key.length];
        return String.fromCharCode(((ordA(a) + (decode ? 26 - ordA(b) : ordA(b))) % 26 + 65));
    });
}
   

function decrypt() {

    console.log("I am here");
    let inputVar = document.getElementById("secret").value; 
    console.log(inputVar); 
    let cleanInput = inputVar.replace(/\s+/g, '');
    let decode = cypher(current_cypher, cleanInput, true); 
    console.log(decode);   
 
}