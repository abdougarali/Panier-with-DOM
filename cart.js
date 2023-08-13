const product=[
{
id:1,
image:'aa-1.jpg',
title:'headphones',
price: 20,
},



{
    id:2,
    image:'aa-2.jpg',
    title:'rode NT1 micrphone',
    price: 45 ,
},
    

{
        id:3,
        image:'aa-3.jpg',
        title:'smart watch',
        price: 30,
},
        


{
            id:4,
            image:'aaa-4.webp',
            title:'HP  laptop next generation',
            price: 70,
},
            

{
                id:5,
                image:'aa-5.jpg',
                title:'250D DSLR camera',
                price: 35,
},
                




{
                    id:6,
                    image:'aaa-6.jpg',
                    title:'Metal desk lamp',
                    price: 35,
},
                    

 {
                        id:7,
                        image:'aa-7.jpg',
                        title:'flip foldable mobile',
                        price: 55,
},
                        



{
                            id:8,
                            image:'aa-8.jpg',
                            title:'air pods pro',
                            price:50,
}
                            

]


const catégorie=[...new Set(product.map((items)=>
    {return items}))]

    let i=0;
    
    document.getElementById('root').innerHTML=catégorie.map((items)=>
    {
    var {image, title , price}=items;
    return (
    '<div class="box">'+
          '<div class="img-box">'+
           '<img src = "'+ image + '"></img>'+
          '</div>'+
           '<div class="left">'+
            '<p>'+title+'</p>'+
            '<h2>'+ price +'</h2>'+
           "<button onclick='addtocart("+ (i++)+")'>add to cart</button>"+ 
        '</div>'+
  ' </div>'
   );
}).join('');


 

var cart = [];

 function addtocart(a){
 cart.push({...catégorie[a]});
 displaycart();
 }

 function delElement(a){
 cart.splice(a,1);
 displaycart();

 }
 

 function displaycart(a) {
    let j = 0, total=0;
    
    document.getElementById("count").innerHTML=cart.length; 
    if (cart.length==0) {
        document.getElementById("cartitem").innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML="$ "+0+".00";
    }
     else {
         document.getElementById("cartitem").innerHTML = cart.map((items) => {
            var { image, title, price } = items;
            total=total+price;
            document.getElementById("total").innerHTML="$ "+total+".00";
            return (
                '<div class="cartitem">' +
                '<div class="row-img">' +
                '<img class="rowing" src="' + image + '">' +
                '</div>' +
                '<p style="font-size:12px;">' + title + '</p>' +
                '<h2 style="font-size:15px;">' + price + '</h2>' +
                '<i class="fa-solid fa-trash" onclick="delElement(' + (j++) + ')"></i>' +
                '</div>'
            );
        }).join('');
    }
}
