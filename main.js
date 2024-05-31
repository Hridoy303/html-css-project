// fetch('https://fakestoreapi.com/products').then((data)=>{
//     return data.json()

// }).then((completedata)=>{
//     console.log(completedata[2].title);
//     document.getElementById('root').innerHTML=completedata[2].title
//     let data1=''
//     completedata.map((values)=>{
//         data1=`  <div class="men">
        
//         <h1 class="title">${values.title}</h1>
//             <img src=${values.image} class="w-100" alt="">
//             <p class="des">${values.description}</p>
//             <p class="category">category</p>
//             <p class="price">price</p>
        
//         </div>`
//     })
// }).catch((err)=>{
//     console.log(err);
// })


let renderData = document.querySelector('.renderData')
let renderCartData = document.querySelector('.renderCartData')

 async function getData(){
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  

  data.map((ele) => {
    let productMainDiv = document.createElement("div"); 
    let createImgEle = document.createElement("Img");
    let createTitle = document.createElement("p");
    let createPriceEle = document.createElement("p");
    let btnEle = document.createElement("button");
    let btnText = document.createTextNode("Add to Cart");
    let cretePriceText = document.createTextNode(`price $${ele.price}`)
    let createTextTitle = document.createTextNode(`${ele.title.slice(0,25)}....`); 
    createImgEle.setAttribute("src", ele.image)
    createImgEle.setAttribute("class", "myImages");
    productMainDiv.setAttribute("class", "box-main")
     createTitle.appendChild(createTextTitle);
     createPriceEle.setAttribute("class" , "price-element")
     btnEle.setAttribute("class" , "btn-element");
     createPriceEle.appendChild(cretePriceText); 
     createTitle.setAttribute("class" ,"productTitle")
 
     

     btnEle.appendChild(btnText); 
     productMainDiv.appendChild(createImgEle);
     productMainDiv.appendChild(createTitle);
   
     
     productMainDiv.appendChild(createPriceEle);
     productMainDiv.appendChild(btnEle);
     renderData.appendChild(productMainDiv);
    
    //   renderData.appendChild(createImgEle)
    //   renderData.appendChild(createTitle);
    //   renderData.appendChild(createPriceEle);
    //   renderData.appendChild(btnEle);

      function addToCart(img , price){
        let cartImgEle = document.createElement("img");
        let cartTrashBtn = document.createElement("i");
        cartTrashBtn.setAttribute("class","fa-solid fa-trash")
        cartImgEle.setAttribute("src" ,img);
        cartImgEle.setAttribute("class","cartImgElement");
        let cartpriceEle = document.createElement("p"); 
        let  cartPriceText = document.createTextNode(price);

        cartpriceEle.appendChild(cartPriceText);
        renderCartData.appendChild(cartImgEle);
        renderCartData.appendChild(cartpriceEle);
        renderCartData.appendChild(cartTrashBtn);
          
      }

      btnEle.addEventListener("click",() => addToCart(ele.image, ele.price))
     
      
  })
 
  
}

getData();

