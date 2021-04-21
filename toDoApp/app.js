function getAndUpdate()
{
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    des = document.getElementById('desc').value;
    console.log(tit,des);
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
       itemJsonArray.push([tit, des]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, des]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }

    update();

}
function update()
{
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        //itemJsonArray.push([tit, des]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray = JSON.parse(itemJsonArrayStr);
       // itemJsonArray.push([tit, des]);
       // localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    
    //populate table

    let tableBody = document.getElementById("tableBody");
                let str = "";
                itemJsonArray.forEach((element, index) => {
                    console.log(element)
                    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`; 
                });
                tableBody.innerHTML = str;
}
function deleted(index)
{
    console.log("Deleted",index);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    //Delete item at index
    itemJsonArray.splice(index,1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    update();
}
let add = document.getElementById("add");
add.addEventListener("click", ()=> getAndUpdate());
update();