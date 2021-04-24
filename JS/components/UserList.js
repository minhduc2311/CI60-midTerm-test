import UserContainer from './UserContainer.js';

const $template = document.createElement('template');
$template.innerHTML = `
<div class="user-list">
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
        <user-container></user-container>
    </div>

`;

export default class UserList extends HTMLElement {
    constructor() {
      super();
      this.appendChild($template.content.cloneNode(true));
      this.$list = this.querySelector(".user-list");
    }
  
    static get observedAttributes() {
      return ["list"];
    }
    
    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == 'list') {
            console.log(newValue);
            let data = JSON.parse(newValue);

        for (let userData of data) {
            let $userContainer = new UserContainer();
            $userContainer.setAttribute('id', userData.id);
            $userContainer.setAttribute('name', userData.name);
            $userContainer.setAttribute('gender', userData.gender);
            $userContainer.setAttribute('country', userData.country);
            $userContainer.setAttribute('phone-number', userData.phoneNumber);
            $userContainer.setAttribute('favorites', userData.favorites);
            $userContainer.setAttribute('avatar', userData.avatar);


            this.$list.appendChild($userContainer);
        }
    }

}
}

window.customElements.define("user-list", UserList);