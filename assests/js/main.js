const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
    //hàm hiển thị modal mua vé
function showbuyticket() {
    modal.classList.add('open')
}
//hàm ẩn modal mua vé
function hidebuyticket() {
    modal.classList.remove('open')
}

// hàm lặp chạy qua từng button
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showbuyticket)
}
//nghe hành vi click vào button close
modalClose.addEventListener('click', hidebuyticket)
modal.addEventListener('click', hidebuyticket)
modalContainer.addEventListener('click', function(event) {
    b
    event.stopPropagation()
})
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');

// tự động đóng mở mobie-menu
mobileMenu.onclick = function() {
        var isClose = header.clientHeight === 46;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = '46px';
        }
    }
    //tự động đóng khi chọn Menu
var menuItems = document.querySelectorAll('.navbar li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function() {
        var isParentmenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentmenu) {
            header.style.height = null;
        }
    }
}