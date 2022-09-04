scarfs = document.querySelectorAll(".scarfs .scarf .seemore")
// var n, madeby;
scarfs.forEach((element, i) => {
    // n = element.parentElement.children[1].children[0].innerHTML;
    // madeby = element.parentElement.children[1].children[1].innerHTML;
    element.addEventListener('click',()=>{
        // n = scarfs[i].parentElement.children[1].children[0];
        sessionStorage.setItem('n', element.parentElement.children[1].children[0].innerHTML);
        sessionStorage.setItem('madeby', element.parentElement.children[1].children[1].innerHTML);
        // console.log(n);
        window.location.pathname = "aboutProduct.html";
    });
});
window.addEventListener("load", function(){
    document.querySelector(".scarf_unique .scarfname_unique").innerHTML = this.sessionStorage.getItem('n'); 
    document.querySelector(".scarf_unique .scarfproductor_unique").innerHTML = this.sessionStorage.getItem('madeby'); 
});

// Get the root element
var r = document.querySelector(':root');
function moodSet(variable, value) {
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty(variable, value);
}
let sun = document.querySelector('.fa-sun');
let moon = document.querySelector('.fa-moon');
sun.addEventListener('click',()=>{
    moon.classList.add('active');
    sun.classList.remove('active');
    moodSet("--dark-light-color", "rgb(33, 31, 31)");
    moodSet("--dark-light-bg", "white");
    moodSet("--scarf-bg", "rgb(168, 164, 164)");
    moodSet("--nav-bg", "rgb(168, 164, 164)");
}); 
moon.addEventListener('click',()=>{
    sun.classList.add('active');
    moon.classList.remove('active');
    moodSet("--dark-light-bg", "rgb(33, 31, 31)");
    moodSet("--dark-light-color", "white");
    moodSet("--scarf-bg", "none");
    moodSet("--nav-bg", "none");
}); 



let control_div = Array.from(document.querySelectorAll('.scarf_unique .imgs .secondary img'));
let bg_section = document.querySelector('.scarf_unique .imgs .main img');
control_div[0].classList.add('active');
bg_section.src = control_div[0].src;
let j;

control_div.forEach((e, i)=>{
	e.addEventListener("click", ()=>{
		remove_active(control_div);
		e.classList.add('active');
		bg_section.src = control_div[i].src;
        j = i
	});
});
function remove_active(e){
	e.forEach((el)=>{
		el.classList.remove('active');
	});
}
j = 0;
setInterval(function(){
	if(j >= control_div.length){
		j = 0;
	}
	remove_active(control_div);
	control_div[j].classList.add('active');
	bg_section.src = control_div[j].src;
	j++;
}, 3000);

