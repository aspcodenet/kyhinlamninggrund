// 1. DOM - komma åt element ?
const sectionList = document.getElementById('sectionList')
const sectionNew = document.getElementById('sectionNew')
const sectionEdit = document.getElementById('sectionEdit')
const productTableBody = document.getElementById('productTableBody')
const submitNewButton = document.getElementById('submitNewButton')
const newName =  document.getElementById('newName')

const listLink = document.getElementById('listLink')
const newLink = document.getElementById('newLink')
const newColor = document.getElementById('newColor')
const newPrice = document.getElementById('newPrice')

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
}

newLink.addEventListener("click",()=>{ 
        showSection('sectionNew');    
  });

  listLink.addEventListener("click",()=>{ 
    showSection('sectionList');    
});


submitNewButton.addEventListener("click",()=>{ 
    let highestId = 0;
    items.forEach( (item) => {
        if(item.id >  highestId)
            highestId = item.id;
    }  );
    const prod = new Product(highestId+1, newName.value,newPrice.value, newColor.value)
    items.push(prod); 
    renderTr(prod);
    showSection('sectionList');    
    console.log(prod)
});


function renderTr(product){
    let template = `<tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>${product.color}</td>
                        <td>Här ska en editlänk finnas!!!</td>
                    </tr>`
    productTableBody.innerHTML = productTableBody.innerHTML + template;
} 
// 
items = [ new Product(1,"Mugg",12,"Vit"), new Product(2,"Glasögon",20,"Bruna"), new Product(3,"Pepsi Max",5,"Svart")   ] ;
items.forEach( (item) => {
    renderTr(item);
}  );


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
