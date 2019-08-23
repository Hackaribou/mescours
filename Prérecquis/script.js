class PeakyBlinder extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        console.log('on y est');
        let template = document.querySelector('#mytemplate');
        this.innerHTML = template.innerHTML;
        
    }

}

window.customElements.define('peaky-blinder', PeakyBlinder);