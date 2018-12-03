// ������ 1

/**
 * isParent - ��������� ������� ����� ���������
 * @param {*} parent - ������������ �������
 * @param {*} child - ������������� �������� �������
 */
let isParent = (parent, child) => {
    return parent.contains(child);
}

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));

// ������ 2

/**
 * findLink - ����� ������ ��� ��������� ��������
 * @param {text} exclusionParent - ����������� ������� HTML
 */

let findLink = (exclusionParent) => {
    let allLinks = document.links;
    let resList = [];
    // let allExeptionParents = document.getElementsByTagName(exclusionParent);
    for (let i = 0; i < allLinks.length; i++) {
        if (!allLinks[i].closest(exclusionParent)) {
            resList.push(allLinks[i]);
        }
    }
    return resList;
}


// ������ 3
/**
 * spesialPos - ���������� �������� ����� � ����� ���������� ��������
 * @param {*} mainTag  - ������������ �������
 */
let spesialPos = mainTag => {
    let resList = [];
    let base = document.getElementsByTagName(mainTag);
    for (let i = 0; i < base.length; i++) {
        resList.push(base[i].previousElementSibling, base[i].nextElementSibling);
    }
    return resList;
}

spesialPos("ul");

// ������ 4
/**
 * count - ������� li � ������
 */
let count = () => {
    let list = document.getElementsByTagName('ul');
    return list[0].getElementsByTagName('li').length;
}

// ����������� 23

// ������ 1
/**
 * addNewClass - ������ ���� �� �������������� ������ 
 * @param {*} newClass - ��� ����������� ������ 
 */
let addNewClass = (newClass) => {
    let list = document.querySelector('ul');
    list.classList.add(newClass);
    return list;
}
addNewClass("list");
// ������ 2
/**
 * setId - ������ ������ ����� ������ ��������� ID
 * @param {*} newId - �������������
 */
let setId = newId => {
    let links = document.body.querySelectorAll('a');
    let link = links[links.length - 1];
    link.setAttribute('id', newId);
    return link;
}
setId('link');

//������ 3

/**
 * etClassOnLi - ����� ������ ����� ul � ��������� �� �������� �����
 * @param {*} newLiClassClass - ����� ��� ������
 */
let setClassOnLi = newLiClassClass => {
    let listLi = document.querySelector('ul').getElementsByTagName('li');

    for (let i = 0; i < listLi.length; i += 2) {
        listLi[i].setAttribute('class', newLiClassClass);
    }

    return listLi;
}
setClassOnLi('item');


// ������ 4

/**
 * setOnA_tegClass - ��������� ���� ������ �����.
 * @param {*} a_Class - ����� ����� ��� ������
 */
let setOnA_tegClass = a_Class => {
    let aColection = document.getElementsByTagName('a');

    for (let i = 0; i < aColection.length; i++) {
        aColection[i].setAttribute("class", a_Class);
    }
    return aColection;
}
setOnA_tegClass('custom-link');

//����������� 24
// ������ 1
/**
 * addNewLiClass - ������� ����� �������� ��������������� ������
 */
let addNewLiClass = () => {
    let parentPosition = document.querySelector('ul');

    for (let i = parentPosition.getElementsByTagName('li').length; i < 9; i++) {
        parentPosition.insertAdjacentHTML('beforeend', `<li class ="new-item">Link ${i + 1}</li>`)
    }
}
// addNewLiClass();

//������ 2
/**
 * SpesialStrongTag - ������� ��� strong ��������� ������� � ������ ��� � ������ ��� ������� � ������������� ������
 */
let SpesialStrongTag = () => {
    let link = document.querySelector('ul').getElementsByTagName('a');
    for (let i = 0; i < 3; i++) {
        let strong = document.createElement('strong');
        strong.innerHTML = ` This is strong ${i + 1}`;
        link[i].insertAdjacentElement("beforeend", strong);
    }
}

// SpesialStrongTag();

//������ 3
/**
 * newImage - ������� �������� ����������� � ������ ���������
 * @param {url} way - ���� � ����� 
 */
let newImage = (way) => {
    let img = document.createElement('img');
    img.setAttribute("src", way);
    img.setAttribute("alt", "���� �������");
    document.body.insertAdjacentElement("afterbegin", img);
}

newImage('images/yurij_alekseevich_gagarin_pervyj_kosmonavt_sssr_80_let_93412_1920x1080.jpg');

//������ 4
/**
 * makeChangesInMark - ��������� � ��� mark ��������� ����� � ���������� ����� ��������
 * @param {text} colorType - ����������� ����� ��������� � ������������ ������
 */
let makeChangesInMark = (colorType) => {
    let mark = document.body.querySelector('mark');
    mark.insertAdjacentText("beforeend", colorType);
    mark.setAttribute('class', colorType);
}
makeChangesInMark('green');

//������ 5
//������� 1
let sortLi = () => {
    let list = document.querySelectorAll('li'); //�������� 'li'
    let arrContentLi = [] //�������� ������ ��� ���������� � ����������� ���������

    console.log(list);
    console.log(arrContentLi);
    console.log(list.length)
    // ������ ����� ��� ����������
    for (let i = 0; i < list.length; i++) {
        console.log(list[i].textContent);
        arrContentLi.push(list[i]);
    }

    console.log('����� ��� ����������: ', arrContentLi);
    // ������ ����� ��� ���������� ���������
    let arr = arrContentLi.slice()
    let arrSpecial = [];
    console.log('Copy non H:', arr);
    console.log('Main:', arrContentLi);

    arr.sort((prev, next) => {
        return next.textContent[4] - prev.textContent[4];
    });

    for (let i = 0; i < arr.length; i++) {
        arrSpecial.push(arr[i]);
    }

    for (let i = 0; i < list.length; i++) {
        console.log(arrSpecial[i].innerHTML)
        list[i].innerHTML = arrSpecial[i].innerHTML;
    }

    return list;
}
// ������� 2
/**
 * sortLi2 - ���������� ������
 */
let sortLi2 = () => {
    let elementUl = document.querySelector("ul");
    let liEllements = elementUl.children;
    let arrToSort = [];

    for (let i = 0; i < liEllements.length; i++) {
        arrToSort.push(liEllements[i]);
    }

    arrToSort.sort((prev, next) => {
        return next.textContent[4] - prev.textContent[4];
    });

    for (let i = 0; i < arrToSort.length; i++) {
    }

    let arrForInculcation = arrToSort.slice();

    while (elementUl.firstChild) {
        elementUl.removeChild(elementUl.firstChild);
    }

    for (let i = 0; i < arrForInculcation.length; i++) {
        elementUl.appendChild(arrForInculcation[i]);
    }
    return elementUl;
}

// sortLi2();

// ������� 3

const sortLi3 = () => {
    let elementUl = document.querySelector("ul");
    let arrForSorting = document.querySelectorAll("ul li");
    let arrSorting = [].slice.call(arrForSorting);
    arrSorting.sort((prev, next) => {
        return next.textContent[4] - prev.textContent[4];
    });
    elementUl.innerHTML = "";
    arrSorting.forEach(element => {
        elementUl.insertAdjacentElement('beforeend', element);
    });
}
// sortLi3();