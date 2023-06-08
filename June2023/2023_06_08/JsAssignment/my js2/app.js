const handler = new Datahandler();
let category = handler.GetCategories();

addEventListener("load", function () {
    
    let record = handler.GetRecord()
    display(record);
})

document.getElementById("category-lnk").addEventListener("click",function(event){
    event.preventDefault();
    const cid = event.target.getAttribute("data-evs-cid");
    let data = handler.findbycategory(cid);
    display(data);
});

document.getElementById("btnadd").addEventListener("click", function () {
    debugger
    let addtitle = document.getElementById("addtxttitle").value;
    let adddetail = document.getElementById("addtxtDetail").value;
    let progressid = document.getElementById("ddlprogress").value;
    let progress = category.find(z => z.Id == progressid);
    let recrdid = record.length + 1;
    if (addtitle == "" || adddetail == "" || progress == undefined) {
        alert("Fill All Stages")
    }
    else {
        x = new Records(recrdid, addtitle, this.dataset, adddetail, progress)
        record.push(x);
    }
    display();
});



// Display Categories



function display(record) {
    document.getElementById("tblbody").innerHTML = "";
    for (let i = 0; i < record.length; i++) {
        let temp = `<div class="col-2 mt-3"id="row${record[i].Id}" style="width: 28rem;">
            <div class="card m-3" style=":hover{
                box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            }">
                    <div class="card-body"  style="border-radius: 20px;">
                        <h4 class="card-title"> ${record[i].Title}</h4>
                        <p class="card-text"> ${record[i].PostedOn} </p>
                        <p class="card-text mt-4"> <b> ${record[i].Detail} </b> </p>
                        <div class="d-flex mt-5">
                           <nav ><i class="fa-regular fa-star text-primary"></i></nav>
                           <nav id="${record[i].Id}" onClick="remove(this)"><i class="fa fa-trash ms-2 text-danger"></i></nav>
                           <nav class="cardedit-psum text-muted" dataedit-pid=${record[i].Id} id="myedit" data-bs-toggle="modal" data-bs-target="#exampleModal2" ><i class="fa fa-edit ms-2"></i></nav>
                        </div>
                    </div>
            </div>
            <div>`
        document.getElementById("tblbody").innerHTML += temp
    }

    document.querySelectorAll(".cardedit-psum").forEach((icon) => {
        icon.addEventListener("click", function () {
            const pid = this.getAttribute("dataedit-pid");
            let found = record.find(z => z.Id == pid)
            alert(found.Title)
            document.getElementById("editcard").value = found.Id;
            document.getElementById("edittxttitle").value = found.Title;
            document.getElementById("edittxtDetail").value = found.Detail;
            // document.getElementById("editprogress").value = found.Category.Name;
        })
    })
};

function EditProduts(id, newTasks) {
    let found = record.find(c => c.Id == id);
    found.Title = newTasks.edittitle;
    found.Detail = newTasks.editdetail;
    found.Category = newTasks.editprogress;
    // newTasks.title = found.Title;
    // newTasks.detail =  found.Detail;
    // found.Category = newTasks.category;

}

function remove(i) {
    let number = i.id;
    let row = document.getElementById("row" + number);
    if (confirm("Do you want to delete this record") == true) {
        row.remove()
    }
    else {
        alert("Chal Ja kam kar ")
    }

}

// Edit Categories


document.getElementById("btnedit").addEventListener("click", function () {
    debugger
    let cid = document.getElementById("editcard").value;
    let edittitle = document.getElementById("edittxttitle").value;
    let editdetail = document.getElementById("edittxtDetail").value;
    let editprogressid = document.getElementById("editprogress").value;
    let editprogress = category.find(z => z.Id == editprogressid);
    // let editrecrdid = record.length + 1;
    EditProduts(cid, { edittitle, editdetail, editprogress })
    display();
})



addEventListener("load", function () {
    document.getElementById("ddlprogress").innerHTML = `<option value="0">Category</option>`
    for (let i = 0; i < category.length; i++) {
        let temp = `<option value="${category[i].Id}">${category[i].Name}</option>`
        document.getElementById("ddlprogress").innerHTML += temp
    }
})

addEventListener("load", function () {
    document.getElementById("editprogress").innerHTML = `<option value="0">Category</option>`
    for (let i = 0; i < category.length; i++) {
        let temp = `<option value="${category[i].Id}">${category[i].Name}</option>`
        document.getElementById("editprogress").innerHTML += temp
    }
})


