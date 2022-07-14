//console.log(document.body);
//console.log(document.head);
//console.log(document.documentElement);
//childNodes - получаем все дочерние узлы
//console.log(document.childNodes);
//console.log(document.firstChild);
//console.log(document.firstElementChild);
//console.log(document.lastElementChild);

//console.log(document.body.querySelector('#current').parentNode);
//console.log(document.body.querySelector('#current').parentElementNode);

//console.log(document.body.querySelector('#current').nextSibling);
//console.log(document.body.querySelector('#current').nextElementSibling);

for (let node of document.body.childNodes) {

    if(node.nodeName == "#text") {
        continue;
    }

    console.log(node);
}
