 //scrollreveal
 ScrollReveal().reveal('.headline', {
     delay: 500,
     origin: "bottom",
     distance: "50px",
     interval: 300,
     scale: 0.85,
     reset: true,
 });


 //waypoint

 const navbar = document.querySelector('.navbar');
 var waypoint = new Waypoint({
     element: document.getElementById('chat'),
     handler: function(direction) {
         if (direction === "down") {
             navbar.classList.add("fixed", "w-full", "animate__fadeInDown", "shadow-lg")
         } else {
             navbar.classList.remove("fixed", "w-full", "animate__fadeInDown", "shadow-lg")
         }
     },
     offset: '70%'
 })

 //mobile menu

 const mobilemenu = document.querySelector('.mobile-menu');
 const mobile = document.querySelector('.mobile');
 const closemenu = document.querySelector('.closemenu');

 closemenu.addEventListener('click', () => {
     mobile.style.left = '-100%'
 })
 mobilemenu.addEventListener('click', () => {
     mobile.style.left = '0px'
 })


 //mobile close
 const closemenu2 = document.querySelectorAll('.mobile-close')

 for (let i = 0; i < closemenu2.length; i++) {
     mobilemenu[i].addEventListener('click', () => {
         mobile.style.left = '-100%'
     })
 }


 /*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
 // Document ထဲမှာရှိသမျှ section အားလုံးကို select လုပ်ထားပါတယ်။
 const sections = document.querySelectorAll("section[id]");

 function scrollActive() {
     // Browser ကို Scroll ဆွဲလိုက်တဲ့အခါ Scroll ရောက်နေတဲ့ Height ကိုရရှိနေမှာဖြစ်ပါတယ်။
     const scrollY = window.pageYOffset; // scroll height

     // forEach နဲ့ ရှိသမျှ section အကုန်လုံးကို loop လုပ်လိုက်တာဖြစ်ပါတယ်။
     // current.offsetHeight လက်ရှိရောက်နေတဲ့ section ရဲ့ Height ကို ရယူလိုက်တာပါ။
     // current.offsetTop - 58 လက်ရှိရောက်နေတဲ့ section ရဲ့ Top ကို ရယူလိုက်တာပါ။
     // current.getAttribute("id") လက်ရှိရောက်နေတဲ့ section ရဲ့ id ကို ရယူလိုက်တာပါ။
     sections.forEach((current) => {
         const sectionHeight = current.offsetHeight, // get current height
             sectionTop = current.offsetTop - 58, // get current section of height
             sectionId = current.getAttribute("id"); // get current section id

         // scrollyY သည် sectionTop ထက်ကြီးနေတယ်ဆိုရင် True အနေနဲ့ သတ်မှတ်မှာဖြစ်ပြီး
         // လက်ရှိရောက်နေတဲ့ section ရဲ့ Top နဲ့ လက်ရှိရောက်နေတဲ့ section ရဲ့ Height နှစ်ခုကိုပေါင်းပြီး
         // scrollyY သည် ငယ်နေတယ်(သို့) ညီနေတယ်ဆိုရင် True ကိုရရှိမှာပါ။
         // && သည် Comparsion Operator ဖြစ်ပြီး နှင်းယှဉ်ထားတဲ့ တန်ဖိုးနှစ်ခုလုံး True && True ဖြစ်မှသာ
         // if statement ကိုအလုပ်လုပ်မှာဖြစ်ပါတယ်။ နှိုင်းယှဉ်လိုက်တဲ့ တန်ဖိုးက false ဖြစ်နေလျှင် else ကို အလုပ်လုပ်သွားမှာဖြစ်ပါတယ်။
         if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
             document
                 .querySelector("a[href*=" + sectionId + "]").classList.add("active-link");
         } else {
             document
                 .querySelector("a[href*=" + sectionId + "]").classList.remove("active-link");
         }
     });
 }