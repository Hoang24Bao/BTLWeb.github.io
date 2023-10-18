let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


var swiper = new Swiper(".product-slider", {
    // Tùy chọn này cho phép vòng lặp vô hạn trong trình chiếu, tức là sau khi bạn đạt tới sản phẩm cuối cùng, trình chiếu sẽ quay lại sản phẩm đầu tiên.
    loop:true,
    // Tùy chọn này xác định khoảng cách giữa các sản phẩm trong trình chiếu. Ở đây, khoảng cách giữa các sản phẩm là 20px.
    spaceBetween: 20,
    // Tùy chọn autoplay cho phép trình chiếu tự động trượt qua các sản phẩm. delay xác định thời gian chờ giữa các trượt tự động (đơn vị là mili giây),
    // ở đây là 7500ms (7.5 giây). 
    // disableOnInteraction xác định liệu việc tương tác của người dùng (ví dụ: kéo trượt) có dừng trình chiếu tự động hay không.
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    // Tùy chọn này giúp đảm bảo rằng trang hiển thị luôn căn giữa sản phẩm hiện tại trong trình chiếu.
    centeredSlides: true,
    // Đây là tùy chọn cho phép bạn xác định cách hiển thị trình chiếu ứng với kích thước màn hình khác nhau. 
    // Đối với màn hình có độ rộng dưới 768px, sẽ hiển thị 1 sản phẩm (slidesPerView: 1). 
    // Đối với màn hình có độ rộng từ 768px đến 1020px, sẽ hiển thị 2 sản phẩm (slidesPerView: 2). 
    // Đối với màn hình có độ rộng trên 1020px, sẽ hiển thị 3 sản phẩm (slidesPerView: 3). 
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop: true, 
    spaceBetween: 20,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

/* */
// document.getElementById("submit").addEventListener("click", function() {
//     // Chuyển đến trang khác khi nút được nhấn
//     window.location.href = "one.html";
// });


// document.getElementById("submit").addEventListener("click", function() {
            
//   window.location.href = "trangdau1.html";
// });


function decrease() {
  var numberInput = document.getElementById("numberInput");
  var currentValue = parseInt(numberInput.value);
  if (currentValue > 0) {
    numberInput.value = currentValue - 1;
  }
}

function increase() {
  var numberInput = document.getElementById("numberInput");
  var currentValue = parseInt(numberInput.value);
  numberInput.value = currentValue + 1;
}
