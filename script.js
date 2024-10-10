// function check(){
//     alert("Button Clicked")
// }

var err1 = document.getElementById("err1")
function check(){
    try {
        alert("Button clicked")
    } catch (error) {
        console.log(error.message)
        err1.innerText=error.message
    }
}
function display(){
var inp = document.getElementById('val').value;
var err2 = document.getElementById('err2');
    console.log("Button Clicked",inp);
    try {
        if(inp == "")throw "Field Cannot be empty"
        if(inp>10 && inp<20) throw "Value entered correctly"
            if(isNaN(inp)) throw "value is not a number"
                if(inp<10) throw "Value cannot be less than 10"
                    if(inp>20) throw "Value cannot be greater than 20"
                }
            catch(error){
                console.log(error)
                err2.innerText=error
            }
            finally{
                inp.innerText=""
            }
}

