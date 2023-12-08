window.addEventListener("load", () => {
  /* const hideAllExceptFirst = () => {
    const firstHref = document
      .getElementsByTagName("a")[0]
      .getAttribute("href")
      .replace("#", "");
    const allIds = document.querySelectorAll("[id]");
    allIds.forEach((idElement) => {
      const id = idElement.getAttribute("id");
      if (id !== firstHref) idElement.classList.add("hidden");
    });
  }; */

  const hideAllExceptFirst = () => {
    const firstHref = document
      .getElementsByTagName("a")[0]
      .getAttribute("href")
      .replace("#", "");
    const allSections = document.querySelectorAll("section");
    allSections.forEach((section) => {
      const sectionIdOfClickedElement = section.getAttribute("id");
      console.log("sectionIdOfClickedElement", sectionIdOfClickedElement);

      //si y'a un id alors je compare
      if (sectionIdOfClickedElement !== firstHref) {
        section.classList.add("hidden");
      } /*  else {
        //sinon je vais chercher plus profondément
        const allElementsWithIdsFounded = section.querySelectorAll("[id]");

        allElementsWithIdsFounded.forEach((elementWithIdFounded) => {
          const idOfElement = elementWithIdFounded.getAttribute("id");
          // si sectionIdOfClickedElement est différent de idFounded alors je mets la classe hidden
          if (sectionIdOfClickedElement !== idOfElement)
            elementWithIdFounded.classList.add("hidden");
        });
      } */
    });
  };

  const addListenersToTabs = () => {
    const tabs = document.querySelectorAll("ul a[href]");
    tabs.forEach((tab) => tab.addEventListener("click", tabClick));
  };

  const tabClick = (event) => {
    event.preventDefault();
    const allIds = document.querySelectorAll("[id]");
    allIds.forEach((id) => id.classList.add("hidden"));
    const href = findHref(event);
    const idToShow = href.replace("#", "");
    const elementToShow = document.getElementById(idToShow);
    elementToShow.classList.remove("hidden");
    //displaySectionIfElementToShowIsInside(elementToShow);
  };

  const findHref = (event) => {
    let target = event.target;
    let href = event.target.parentElement.getAttribute("href");
    while (!href) {
      target = target.parentElement;
      href = target.getAttribute("href");
    }
    return href;
  };

  const displaySectionIfElementToShowIsInside = (element) => {
    const parent = element.parentElement;
    const parentTagName = element.parentElement.localName;
    if (parentTagName !== "main" || parentTagName !== "body")
      parent.classList.remove("hidden");
  };

  hideAllExceptFirst();
  addListenersToTabs();
});
