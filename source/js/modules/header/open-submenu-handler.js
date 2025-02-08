function openSubmenuHandler() {
  const dropdownLinks = document.querySelectorAll(
    ".main-nav__link.main-nav__link--accent"
  );

  dropdownLinks.forEach((dropdownLink) => {
    const categoryButton = dropdownLink.closest("li");
    const categoryMenu = dropdownLink.nextElementSibling;

    if (!categoryButton || !categoryMenu) {
      return;
    }

    const handleClick = (event) => {
      // Проверяем, что ширина экрана МЕНЬШЕ или равна 1199px
      if (window.innerWidth <= 1199) {
        // Предотвращаем переход по ссылке ТОЛЬКО для .main-nav__link.main-nav__link--accent
        event.preventDefault();

        // Добавляем/удаляем класс "is-active" для открытия/закрытия подменю
        categoryMenu.classList.toggle("is-active");
        dropdownLink.classList.toggle("is-active");
      }
    };

    const handleMouseOver = () => {
      if (window.innerWidth <= 1199) {
        return; // Ничего не делаем
      }
      categoryMenu.classList.add("is-active");
      dropdownLink.classList.add("is-active");
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 1199) {
        return; // Ничего не делаем
      }
      categoryMenu.classList.remove("is-active");
      dropdownLink.classList.remove("is-active");
    };

    // Добавляем обработчик клика непосредственно на ссылку
    dropdownLink.addEventListener("click", handleClick);

    // Добавляем обработчики mouseover/mouseleave для десктопа (на родителя)
    categoryButton.addEventListener("mouseover", handleMouseOver);
    categoryButton.addEventListener("mouseleave", handleMouseLeave);
  });
}

export { openSubmenuHandler };
