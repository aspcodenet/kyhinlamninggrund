// 1. DOM - komma åt element ?
const sectionList = document.getElementById('sectionList')
const sectionNew = document.getElementById('sectionNew')
const sectionEdit = document.getElementById('sectionEdit')
const productTableBody = document.getElementById('productTableBody')
const submitNewButton = document.getElementById('submitNewButton')
const listLink = document.getElementById('listLink')
const newLink = document.getElementById('newLink')

const newName =  document.getElementById('newName')
const newColor = document.getElementById('newColor')
const newPrice = document.getElementById('newPrice')

const editName =  document.getElementById('editName')
const editColor = document.getElementById('editColor')
const editPrice = document.getElementById('editPrice')

const submitEditButton = document.getElementById('submitEditButton')

//Todo ändra stefan till er egen - dvs {useremail}
//const baseApi = 'https://hockeyplayers.systementor.se/stefan/player'
const baseApi = 'https://fakestoreapi.com/products' 
// HTTP GET  Lista alla https://fakestoreapi.com/products
// HTTP GET  Lista en https://fakestoreapi.com/products/4

// HTTP POST Skapa en ny https://fakestoreapi.com/products 
//                          - Skicka in ny product som JSON

// HTTP PUT Uppdatera en befintlig https://fakestoreapi.com/products/4 
//                          - Skicka in nya properties som JSON


//Vi fortsätter från 
// https://github.com/aspcodenet/kyhinlamninggrund

//1. OOP - class Product id, name, price, color
//2. in i items och rendera
//3. Vi fixar NEW
//4. Vi fixar edit

class Product{
    constructor(id,name,price,color){
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
   }
}


// const prod = new Product(1,"Banan",12,"Gul")
// console.log(prod)

// prod.Stad = "Colorado"
// console.log(prod)

// let namn = "Stefan"


// console.log({namn})
// let id = 129
// console.log({id})

// console.log("Klar")






function showSection(sectionsId){
    if(sectionsId == 'sectionList'){
        sectionList.style.display = "block";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionNew'){
        sectionList.style.display = "none";
        sectionNew.style.display = "block";
        sectionEdit.style.display = "none";
    }
    else if(sectionsId == 'sectionEdit'){
        sectionList.style.display = "none";
        sectionNew.style.display = "none";
        sectionEdit.style.display = "block";
    }
}

newLink.addEventListener("click",()=>{ 
        showSection('sectionNew');    
  });

listLink.addEventListener("click",()=>{ 
    showSection('sectionList');    
});

// 1. finns inte alls nån max. Finns dock en som heter Stefan som är förvirrad ;)
// 2. Edit 
//
submitNewButton.addEventListener("click",()=>{ 

    const newProcduct = {
        title: newName.value,
        price: newPrice.value,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: newColor.value
    };

    const reqParams = {
        method:"POST",
        body:JSON.stringify(newProcduct)
    };
    fetch(baseApi,reqParams)
        .then(res=>res.json())
        .then(json=>{
            const prod = new Product(
                json.id,
                newName.value,
                newPrice.value, 
                newColor.value)

            items.push(prod); 
            renderTr(prod);
            showSection('sectionList');    
        })
});

submitEditButton.addEventListener("click",()=>{

    const changedProductValues = {
        title: editName.value,
        price: editPrice.value,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: editColor.value
    };
    const reqParams = {
        method:"PUT",
        body:JSON.stringify(changedProductValues)
    };

    // 'https://fakestoreapi.com/products/7


    fetch(baseApi + '/' + editingProduct.id ,reqParams)
        .then(res=>res.json())
        .then(json=>{
            refreshItems();
            showSection('sectionList');    
        });
});

let editingProduct = null;

function editProduct(id){
    editingProduct = items.find((item)=>item.id == id)
    editName.value = editingProduct.name;
    editPrice.value = editingProduct.price;
    editColor.value = editingProduct.color;
    showSection('sectionEdit');    
}




function renderTr(product){
    let jsCall = `editProduct(${product.id})`;
    // jsCall = editProduct(18)
    // jsCall = editProduct(19)
    let template = `<tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.color}</td>
                        <td><a href="#" onclick="${jsCall}">EDIT</td>
                    </tr>`
    productTableBody.innerHTML = productTableBody.innerHTML + template;
} 
// 

function refreshItems(){

    // fetch('https://hockeyplayers.systementor.se/stefan/player')
    // .then(response=>response.json())
    // .then(array=>{
    //     //json -> items
    //     console.log(array)
    // });

    items = [];
    productTableBody.innerHTML = '';

    fetch(baseApi)
        .then(response=>response.json())
        .then(array=>{
            //json -> items
            console.log(array)
            array.forEach(prod=>{
                p = new Product(prod.id,
                    prod.title,
                    prod.price,
                    prod.category)                    
                items.push(p)
            });
            items.forEach( (item) => {
                renderTr(item);
            });
    })

}

items = [];
refreshItems();


//Loopa den
// för varje skapa tr, för varje skapa td:s 
//lägga in den nya tr:n som ett barn till  productTableBody

  

showSection('sectionList');

// 2. funktion showSection
// 3. events = händelsestyrd programmering
//      vid klick på länk -> showSection
// 4. arrayer med strängar
// 5. foreach!
// 6. classes - Product 
//      samt new:a in i array
// 7. 
