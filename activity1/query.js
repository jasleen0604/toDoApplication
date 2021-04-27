let colorbtn = document.querySelectorAll(".filter");
let mainContainer = document.querySelector(".bottom-container");

for(let i=0; i<colorbtn.length; i++)
{
    colorbtn[i].addEventListener("click", function(e){
        let color=colorbtn[i].classList[0];

        mainContainer.style.backgroundColor=color;
    });
}
