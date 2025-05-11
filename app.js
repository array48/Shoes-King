const wrapper = document.querySelector(".sliderwrapper");
const menuitems = document.querySelectorAll(".menuitem");
const products = [
    {
        id:1,
        title: "Air Force",
        Price: 119,
        colors:[
            {
                code: "white",
                img:"air_force.png"
            },
            {
                code: "black",
                img:"airforce copy.png"
            },
        ],
    },
    {
        id:2,
        title: "JORDAN",
        Price: 119,
        colors:[
            {
                code: "black",
                img:"jordan.png"
            },
            {
                code: "darkblue",
                img:"jordan.png"
            },
        ],
    },
    {
        id:3,
        title: "BLAZAR",
        Price: 129,
        colors:[
            {
                code: "black",
                img:"blazar.png"
            },
            {
                code: "darkblue",
                img:"blazar.png"
            },
        ],
    },
    {
        id:4,
        title: "CLATAR",
        Price: 199,
        colors:[
            {
                code: "black",
                img:"clater.png"
            },
            {
                code: "darkblue",
                img:"clater.png"
            },
        ],
    },
    {
        id:5,
        title: "HIPPIE",
        Price: 149,
        colors:[
            {
                code: "black",
                img:"hippie_.png"
            },
            {
                code: "gray",
                img:"hippie_.png"
            },
        ],
    },
]

let choosenproduct = products[0]

const currentproductimage =document.querySelector(".productimage");
const currentproducttitle =document.querySelector(".producttitle");
const currentproductprice =document.querySelector(".productprice");
const currentproductcolors= document.querySelectorAll(".color");
const currentproductsizes =document.querySelectorAll(".size");


menuitems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{

        //change the slide
        wrapper.style.transform = `translateX(${-100 *index}vw)`

        //change the choosen product
        choosenproduct =products[index];

        //change text of current
        currentproducttitle.textContent = choosenproduct.title;
        currentproductprice.textContent = "$" + choosenproduct.Price;
        currentproductimage.src = choosenproduct.colors[0].img;

        // assing new colors
        currentproductcolors.forEach((color,index)=>{
            color.style.backgroundColor = choosenproduct.colors[index].code;
        });
    });
});

currentproductcolors.forEach((color,index)=>{
    color.addEventListener("click", ()=>{
        currentproductimage.src = choosenproduct.colors[index].img;
    })
})

currentproductsizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentproductsizes.forEach(size=>{
            size.style.backgroundColor="white";
        size.style.color="black";
        })
        size.style.backgroundColor="black";
        size.style.color="white";
    })
})

const productbtn = document.querySelector(".productbtn");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbtn.addEventListener("click", ()=>{
    payment.style.display="flex";
})

close.addEventListener("click", ()=>{
    payment.style.display="none";
})