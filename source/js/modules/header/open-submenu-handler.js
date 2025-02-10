function openSubmenuHandler() {
  const dropdownItems = document.querySelectorAll(
    ".main-nav__item.main-nav__item--accent"
  );

  dropdownItems.forEach((dropdownItem) => {
    const categoryButton = dropdownItem; 
    const categoryMenu = dropdownItem.querySelector(".main-nav__sub-list"); 

    if (!categoryButton || !categoryMenu) {
      return;
    }

    const handleClick = (event) => {
      
      if (window.innerWidth <= 1199) {
        
        if (event.target.closest('.main-nav__sub-list a')) {
          return; 
        }
        
        
        event.preventDefault();

       
        categoryMenu.classList.toggle("is-active");
        dropdownItem.classList.toggle("is-active"); 
      }
    };

    const handleMouseOver = () => {
      if (window.innerWidth <= 1199) {
        return; 
      }
      categoryMenu.classList.add("is-active");
      dropdownItem.classList.add("is-active"); 
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 1199) {
        return; 
      }
      categoryMenu.classList.remove("is-active");
      dropdownItem.classList.remove("is-active"); 
    };

    
    categoryButton.addEventListener("click", handleClick);

    
    categoryButton.addEventListener("mouseover", handleMouseOver);
    categoryButton.addEventListener("mouseleave", handleMouseLeave);
  });
}

export { openSubmenuHandler };