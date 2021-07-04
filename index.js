


document.addEventListener("DOMContentLoaded", function(){
    var menu = document.querySelector(".menu-mb");
    var menuleft = document.querySelector(".main-menu");
    // console.log(menuleft);
    menu.onclick = function(){
        menuleft.classList.toggle("show");
    }

},false)
//cart
document.addEventListener("DOMContentLoaded", function(){
    var showcart = document.querySelector(".click-cart");
    var cart = document.querySelector(".cart");
    // console.log(menuleft);
    showcart.onclick = function(){
        cart.classList.toggle("show-cart");
    }

},false)
//
document.addEventListener("DOMContentLoaded", function(){
    const cartbtn = document.querySelectorAll(".product-card");
    cartbtn.forEach(function(btn){
        btn.addEventListener("click",function(event){
            // console.log(event.target);
           if (event.target.parentElement.classList.contains("product-card"))
           {
                let fullpage = event.target.parentElement.previousElementSibling.src;
           }


        })
    })

},false)

  //   SLIDE 

    document.addEventListener("DOMContentLoaded", function(){
    // khai bao doi tuong can su dung
    var btn = document.querySelectorAll(".next-page ul li");
    var slides = document.querySelectorAll(".slide ul li");
    //bat su kien click cho tung nut
    for(var i=0 ; i<btn.length; i++)
    {
        btn[i].addEventListener("click",function(){
            //xoa bo active
            for(var i = 0 ; i <btn.length ; i++){
                btn[i].classList.remove("active");
            }
           this.classList.add("active");
           //het phan xu li chuyen mau cua btn (previousElementSibling )

           //xu li tinh vi tri cua slide
           var btnkh = this ;
           var btnvt = 0;
           for( btnvt = 0 ; btnkh = btnkh.previousElementSibling ; btnvt++)
           {

           }
           //het voong lap nay bien i = stt

           //cho slide an di = cach remove active
           for (var i = 0; i< slides.length; i++) {
              slides[i].classList.remove("active");
              slides[btnvt].classList.add("active");
           }
        })
    }

})