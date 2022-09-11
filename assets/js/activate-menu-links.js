function getAllIndexes(arr, val) {
    var indexes = [], i = -1;
    while ((i = arr.indexOf(val, i+1)) != -1){
        indexes.push(i);
    }
    return indexes;
}

const main_nav_links = [
	"/about.html",
	"/index.html",
	"/",
	"/dlatot.html",
	"/maakot.html",
	"/miklahonim.html"
]

let lis = [].concat.apply([], Array.from(document.querySelectorAll('.nav-menu'))
	.map((nav_menu) => {return Array.from(nav_menu.querySelectorAll('li'))}))
	.filter(li => !Array.from(li.classList).includes('more-options'));

const links = lis.map((li) => {return '/' + li.querySelector('a').href.split('/').slice(-1)[0]});
let occs = getAllIndexes(links, window.location.pathname);
if (window.location.pathname == '/index.html' || window.location.pathname == '/') {
	occs = getAllIndexes(links, '/');
	occs = occs.concat(getAllIndexes(links, '/index.html'));
}
occs.map((index) => {lis[index].setAttribute('class', 'active active-menu')});

let more_options_class = ''
if (!main_nav_links.includes(window.location.pathname)) {
	more_options_class = 'active';
}
Array.from(document.querySelectorAll('.more-options'))
	.map((li) => {li.querySelector('a').setAttribute('class', more_options_class)});