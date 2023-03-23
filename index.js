// const element = document.querySelector(".list");
let element2 = document.querySelector("#btn");
console.log(element2)



function myFunction(element){
        // document.getElementsByClassName("list").style.msTransform = "rotate(20deg)";
        // document.getElementsByClassName("list").style.transform = "rotate(20deg)";
        document.querySelector(".list").innerHTML = `<a src="#">Home</a><br>
        <a src="#">World</a><br>
        <a src="#">Your fav</a><br>
        <a src="#">Exploring</a><br>
        <a src="#">Top Search</a><br>
        <a src="#">Log-In</a>`
        console.log("kunal");
}

element2.addEventListener("click", myFunction);
