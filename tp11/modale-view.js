class ModaleView extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: none;
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.5);
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modale {
                    background: white;
                    border-radius: 6px;
                    padding: 0;
                    overflow: hidden;
                    min-width: 300px;
                    width: var(--modale-width, 40%);
                    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
                    animation: fadeIn .15s ease;
                }
                @keyframes fadeIn {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .header {
                    padding: 12px;
                    font-size: 18px;
                    color: white;
                }
                .body {
                    padding: 20px;
                    max-height: 60vh;
                    overflow-y: auto;
                }
                .footer {
                    padding: 15px;
                    text-align: right;
                    background: #f5f5f5;
                }
            </style>
            <div class="modale">
                <div class="header">
                    <slot name="title"></slot>
                </div>
                <div class="body">
                    <slot name="body"></slot>
                </div>
                <div class="footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `;
        this.shadowRoot.addEventListener("click", e => {
            if (e.target === this.shadowRoot.host) this.close();
        });
    }

    connectedCallback() {
        const titleSlot = this.shadowRoot.querySelector(".header");
        if (this.querySelector('[slot="title"]')?.getAttribute("header-color")) {
            titleSlot.style.background =
                this.querySelector('[slot="title"]').getAttribute("header-color");
        }
        if (this.getAttribute("modale-width")) {
            this.style.setProperty("--modale-width", this.getAttribute("modale-width"));
        }
    }

    open() { this.style.display = "flex"; }
    close() { this.style.display = "none"; }
}

customElements.define("modale-view", ModaleView);

function openModale(id) { document.getElementById(id).open(); }
function closeModale(id) { document.getElementById(id).close(); }
window.openModale = openModale;
window.closeModale = closeModale;
