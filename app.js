scarfs = document.querySelectorAll(".scarfs .scarf .seemore")
scarfs.forEach(element => {
    element.addEventListener('click',()=>{
        window.location.pathname = "aboutProduct.html";
    });
});
