// unfinished component

class Header extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    const scriptURL = new URL(document.currentScript.src);
    const escape = new URL('../', scriptURL);
    this.innerHTML = `
    <!-- bagian header (kontak) -->
    <header class="header_section">
      <div class="header_top">
        <div class="container">
          <div class="contact_nav">
            <a href="tel:+62361222487">
              <i class="fas fa-phone" aria-hidden="true"></i>
              <span>
                Call: +62 361 222487
              </span>
            </a>
            <a href="mailto:rsudwangaya.dpskota@gmail.com">
              <i class="fas fa-envelope" aria-hidden="true"></i>
              <span>
                Email: rsudwangaya.dpskota@gmail.com
              </span>
            </a>
            <a href="https://maps.app.goo.gl/JuufkLfBQfKNWGmi6" target="_blank">
              <i class="fas fa-location-dot" aria-hidden="true"></i>
              <span>
                Alamat: Jl. Kartini No. 133, Denpasar, Bali
              </span>
            </a>
          </div>
        </div>
      </div>

      <!-- bagian header (menu) -->
      <div class="header_bottom">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="${escape}index.html">
              <img src="${escape}images/logo.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex mr-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav  ">
                  <li class="nav-item active">
                    <a class="nav-link" href="${escape}index.html">Beranda <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="${escape}about.html">Tentang Kami</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="${escape}contact.html">Hubungi Kami</a>
                  </li>
                </ul>
              </div>
              <div class="quote_btn-container">
              <!--  <form class="form-inline">
                  <button class="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>-->
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
    <!-- akhir bagian header -->
`;
    }
}

customElements.define('header-component', Header);