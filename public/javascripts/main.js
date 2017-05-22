(function(){
  //Hamburger Menu Work

  var hamburger = document.getElementById("hamburger"),
      cover     = document.querySelector(".cover"),
      closebtn  = document.querySelector(".closebtn");

      hamburger.addEventListener("click", function(){
        cover.style.width = "100%";
      });

      closebtn.addEventListener("click", function(e){
        e.preventDefault();
        cover.style.width = "0%";
      });

  //Page click smooth indexing
})();
