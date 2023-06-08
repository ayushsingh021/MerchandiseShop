// procontainer();
// function procontainer() {
//     var img=["f1.jpg","f4.jpg","f2.jpg"];
//   var container = document.getElementsByClassName("pro-container")[0];
//   for (let i = 0; i < 3; i++) {
//     container.innerHTML += `
//     <div class="pro">
//     <img src="images/products/`+img[i]+`" alt="">
//         <div class="des">
//             <span>Aero merchandise</span>
//             <h5>Techspardha Theme Hoodie</h5>
//                 <div class="stars">
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                     <i class="fas fa-star"></i>
//                 </div>
//                 <h4>Rs.700/-</h4>
//         </div>
//          <a href="#"><i class="fa-sharp fa-solid fa-basket-shopping"></i></a>
//     </div>`;
//   }
// }

const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}
