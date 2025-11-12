

        let burger = document.getElementById("burger");
        let menuList = document.getElementById("menuList")
        menuList.style.maxHeight = "0px";

       burger.addEventListener("click", function toggleMenu(){
         if(menuList.style.maxHeight == "0px")
            {
                menuList.style.maxHeight = "300px";
            }
            else{
                menuList.style.maxHeight = "0px";
            }
       })   
           
        
        
    