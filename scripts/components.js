// navBar({'Home': '1', 'Notes': '2', 'Game': '3'}, {'Login/Register': '4'})
class NavigationBar extends HTMLElement {
    constructor() {
        super();
        var nav = document.createElement('nav');
        nav.setAttribute('class', 'navBar');


        var left = document.createElement('ul');
        left.setAttribute('class', 'alignLeft');
        var alignLeft = JSON.parse(this.getAttribute('alignLeft'));
        for (const ele in alignLeft) {
            var li = document.createElement('li');
            li.innerHTML = `<a class="navbuttons" href="${alignLeft[ele]}">${ele}</a>`;
            left.appendChild(li);
        }

        var right = document.createElement('ul');
        right.setAttribute('class', 'alignRight');
        var alignRight = JSON.parse(this.getAttribute('alignRight'));
        for (const ele in alignRight) {
            var li = document.createElement('li');
            li.innerHTML = `<a class="navbuttons" href="${alignRight[ele]}">${ele}</a>`;
            right.appendChild(li);
        }
        
        nav.appendChild(left);
        nav.appendChild(right);
        this.appendChild(nav);
    }
}

window.customElements.define('nav-bar', NavigationBar);

class ProfilePageSmall extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = 
        `<div class="profilePageSmall">
            <h3>${this.getAttribute('left')}: ${this.getAttribute('right')}</h3>
        </div>`
    }
}

window.customElements.define('profilepage-small', ProfilePageSmall);

class ProfilePageLarge extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `<div class="profilePageLarge">Test</div>`
    }
}
window.customElements.define('profilepage-large', ProfilePageLarge);