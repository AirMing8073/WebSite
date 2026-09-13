var links = document.getElementsByTagName('a');
for (var i = 0; i < links.length; i++)
    if (links[i].parentElement.classList.contains('content') || links[i].parentElement.parentElement.classList.contains('content'))
        links[i].setAttribute('target', '_blank');
//
var menuList = document.querySelector('.menu ul');
var headings = document.querySelectorAll('.content h3');
for (var i = 0; i < headings.length; i++) {
    var a = document.createElement('a');
    a.setAttribute('href', '#' + headings[i].id);
    a.textContent = headings[i].textContent;
    var li = document.createElement('li');
    li.appendChild(a);
    menuList.appendChild(li);
}