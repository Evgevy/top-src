function openSubmenuHandler() {
  const dropdownItems = document.querySelectorAll(
    ".main-nav__item.main-nav__item--accent"
  );

  dropdownItems.forEach((dropdownItem) => {
    const categoryButton = dropdownItem; // Теперь dropdownItem и есть родительский li
    const categoryMenu = dropdownItem.querySelector(".main-nav__sub-list"); // Находим подменю внутри li

    if (!categoryButton || !categoryMenu) {
      return;
    }

    const handleClick = (event) => {
      // Проверяем, что ширина экрана МЕНЬШЕ или равна 1199px
      if (window.innerWidth <= 1199) {
        // Предотвращаем переход по ссылке
        event.preventDefault();

        // Добавляем/удаляем класс "is-active" для открытия/закрытия подменю
        categoryMenu.classList.toggle("is-active");
        dropdownItem.classList.toggle("is-active"); // Добавляем класс active на li
      }
    };

    const handleMouseOver = () => {
      if (window.innerWidth <= 1199) {
        return; // Ничего не делаем
      }
      categoryMenu.classList.add("is-active");
      dropdownItem.classList.add("is-active"); // Добавляем класс active на li
    };

    const handleMouseLeave = () => {
      if (window.innerWidth <= 1199) {
        return; // Ничего не делаем
      }
      categoryMenu.classList.remove("is-active");
      dropdownItem.classList.remove("is-active"); // Добавляем класс active на li
    };

    // Добавляем обработчик клика непосредственно на родителя li
    categoryButton.addEventListener("click", handleClick);

    // Добавляем обработчики mouseover/mouseleave для десктопа (на родителя li)
    categoryButton.addEventListener("mouseover", handleMouseOver);
    categoryButton.addEventListener("mouseleave", handleMouseLeave);
  });
}

export { openSubmenuHandler };