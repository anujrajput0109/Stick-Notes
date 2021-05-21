console.log("anuj");


// if user adds a note,  add it to local storage 
let addBtn=document.getElementById('addBtn');
addBtn.addEventListener("click",function(e){

    let addTxt=document.getElementById('addTxt');
    let notes=localStorage.getItem("notes");
    if(notesObj==null){
        notesObj= [];
    }
    else{
        notesObj =JSON.parse(notes); 
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notes));
    addTxt.value="";
    console.log(notesObj);
})