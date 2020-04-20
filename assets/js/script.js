const menus = document.querySelectorAll(".menu");
console.log(menus);
for (const menu of menus) {
    menu.addEventListener('click', function (event) {
        alert("Fitur sedang dalam Pengembangan");
    });
}
