'use strict';

const table = document.querySelector('table');

if (table) {
  const headTable = table.querySelector('thead');

  headTable.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const correntIndex = th.cellIndex;

    const bodyTable = table.querySelector('tbody');
    const bodyItems = bodyTable.querySelectorAll('tr');

    const toNumber = (string) => {
      let result = '';

      result = string.replaceAll(',', '').replaceAll('$', '');

      return +result;
    };

    const arrayBodyItems = Array.from(bodyItems);

    arrayBodyItems.sort((itemFirst, itemSecond) => {
      const arrayChildrenFirst = Array.from(itemFirst.children);
      const arrayChildrenSecond = Array.from(itemSecond.children);

      const tdFirst = arrayChildrenFirst[correntIndex];
      const tdSecond = arrayChildrenSecond[correntIndex];

      const firstNumber = toNumber(tdFirst.textContent);
      const secondNumber = toNumber(tdSecond.textContent);

      if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
        return firstNumber - secondNumber;
      } else {
        return tdFirst.textContent.localeCompare(tdSecond.textContent);
      }
    });

    bodyTable.append(...arrayBodyItems);
  });
}
