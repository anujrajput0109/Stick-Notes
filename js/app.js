// console.log("anuj");
showNotes();


// if user adds a note,  add it to local storage 
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener("click", function (e) {      //e -> event object

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="card mx-auto my-2 noteCard px-0" style="width: 18rem;">
                <div class="card-header card-header-color">
                <h5 class="card-title">Note ${index + 1}</h5>
                </div>
                <div class="card-body bg-light">
                    <p class="card-text"> ${element}</p>
                    <hr>
                    <button id="${index}" onClick="deleteNode(this.id)" class="btn btn-outline-primary">Delete Note</button>
                </div>
            </div>
            `;


    });

    let notesElm = document.getElementById("notes");
    if (notesObj != 0) {
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML= `Nothing to show! use "Add a note" section to add notes`;
    }
}


//fuction to delete a node
function deleteNode(index){
    // console.log("Deleting node", index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

search= document.getElementById("searchTxt");
search.addEventListener("input",function(){

    let searchVal= search.value;

    let noteCards =document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt=element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(searchVal)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })

})




/*
further features to be added
1.  Add title
2. mark a note by user
3. separate notes by user
4. sync with server and host
*/