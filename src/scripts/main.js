'use strict';

const table = document.querySelector('table');

if (table) {
  const headTable = table.querySelector('thead');

  headTable.addEventListener('click', (e) => {
    const headContainer = [...e.target.closest('tr').children];
    let headItems = [];

    headItems = headContainer.map((item, i) => {
      return (item[i] = item.textContent);
    });

    let correntIndex = false;

    if (e.target.textContent === 'Name') {
      correntIndex = headItems.indexOf(e.target.textContent);
    }

    if (e.target.textContent === 'Position') {
      correntIndex = headItems.indexOf(e.target.textContent);
    }

    if (e.target.textContent === 'Age') {
      correntIndex = headItems.indexOf(e.target.textContent);
    }

    if (e.target.textContent === 'Salary') {
      correntIndex = headItems.indexOf(e.target.textContent);
    }

    const bodyTable = table.querySelector('tbody');
    const bodyItems = bodyTable.querySelectorAll('tr');

    if (correntIndex !== false && bodyItems) {
      for (const section of bodyItems) {
        const itemsSection = [...section.children];
        let correntText = `${itemsSection[correntIndex].textContent.trim()}`;

        correntText = correntText.replaceAll(' ', '_');

        section.className = '';

        section.classList.add(correntText);
      }
    } else {
      return null;
    }

    const arrayItems = Array.from(bodyItems);

    arrayItems.sort((item1, item2) => {
      let namesClass = [item1.className, item2.className];

      namesClass = namesClass.map((item) => {
        let result = [];

        result = item.replaceAll(',', '').replaceAll('$', '');
        result = result.replaceAll('_', ' ');

        return result;
      });

      const [itemFirst, itemSecond] = namesClass;

      if (!isNaN(itemFirst) && !isNaN(itemSecond)) {
        return itemFirst - itemSecond;
      } else {
        return itemFirst.localeCompare(itemSecond);
      }
    });

    bodyTable.append(...arrayItems);
  });
}
