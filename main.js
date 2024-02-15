// Our menu 

var list = document.querySelectorAll(".list");
var item = document.querySelectorAll(".item_card");

for(let i = 0; i < list.length; i++){
    list[i].addEventListener("click", function(){
        for (let j = 0; j < list.length; j++) {
            list[j].classList.remove("active");
        }
        this.classList.add("active");


        let dataFilter = this.getAttribute("data-filter");
        for (let k = 0; k < item.length; k++) {
            item[k].classList.remove("active");
            item[k].classList.add("hide");
            if(item[k].getAttribute("data-item") == dataFilter || dataFilter == "All"){
                item[k].classList.remove("hide");
                item[k].classList.add("active");
            }
        }
    })
}


// Booking Form 

function submit_func(e){
    event.preventDefault();
    alert("Order Submitted Successfully");
}

// Testimonials Section

var slider = document.querySelector(".testi_wrapper");
var indicator = document.querySelectorAll(".indicator");

indicator[0].onclick = function(){
    slider.style.left = "0px";
    for(let i = 0; i < indicator.length; i++){
        indicator[i].classList.remove("active");
    }this.classList.add("active");
}
indicator[1].onclick = function(){
    slider.style.left = "-360px";     //   310px Box width + 50px margin = 360px per box
    for(let i = 0; i < indicator.length; i++){
        indicator[i].classList.remove("active");
    }this.classList.add("active");
}
indicator[2].onclick = function(){
    slider.style.left = "-720px";
    for(let i = 0; i < indicator.length; i++){
        indicator[i].classList.remove("active");
    }this.classList.add("active");
}
indicator[3].onclick = function(){
    slider.style.left = "-1080px";
    for(let i = 0; i < indicator.length; i++){
        indicator[i].classList.remove("active");
    }this.classList.add("active");
}


// Scroll To Top Button

var scrollBtn = document.querySelector(".scroll_toTop");
var HomeSection = document.querySelector(".home_section");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 400){
        scrollBtn.classList.add("active");
    }
    else{
        scrollBtn.classList.remove("active");
    }
})
const scrollTop = () =>{
    HomeSection.scrollIntoView({behavior: "smooth"})
}
scrollBtn.addEventListener("click", scrollTop)