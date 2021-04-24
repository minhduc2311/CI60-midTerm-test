const $template = document.createElement('template');
$template.innerHTML = `
<div class="user-container">
    <div class="avatar"></div>
    <div class="name">John Doe</div>
    <div class="gender">male</div>
    <div class="contact-info">
        <span class="country">ABC</span>
        <span class="phone-number">0000000000000</span>
    </div>
    <div class="favorites">
        <span>abc </span>
        <span>bca</span>
    </div>
</div>
`;

export default class UserContainer extends HTMLElement {
    constructor() {
        super();
        this.appendChild($template.content.cloneNode(true));

        this.$avatar =  this.querySelector('.avatar')
        this.$name = this.querySelector('.name');
        this.$gender = this.querySelector('.gender')
        this.$country = this.querySelector('.country')
        this.$phoneNumber = this.querySelector('.phone-number')
        this.$favorites= this.querySelector('.favorites')
        
    }

    static get observedAttributes() {
        return ['name', 'gender', 'country', 'phoneNumber', 'favorites', 'avatar'];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName == "avatar") {
            this.$avatar.style.backgroundImage = `url(${newValue})`;
          } else if (attrName == "name") {
            this.$name.innerHTML = newValue;
          } else if (attrName == "gender") {
            this.$gender.innerHTML = newValue;
          } else if (attrName == "country") {
            this.$country.innerHTML = newValue;
          } else if (attrName == "phoneNumber") {
            this.$type.innerHTML = newValue;
          } else if (attrName == "favorites") {
              this.$favorites = newValue
          }
    }
}

window.customElements.define("user-container", UserContainer);