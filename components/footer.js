class Footer extends HTMLElement {
    constructor() {
        super();
    }

connectedCallback() {
    const scriptURL = new URL(document.currentScript.src);
    const escape = new URL('../', scriptURL);
    this.innerHTML =  `<section class="info_section">
<div class="container">
  <div class="info_top">
    <div class="info_logo">
      <a href="">
        <img src="${escape}images/logo.png" alt="">
      </a>
    </div>
    <!-- <div class="info_form">
      <form action="">
        <input type="email" placeholder="Your email">
        <button>
          Subscribe
        </button>
      </form>
    </div> -->
  </div>
  <div class="info_bottom layout_padding2">
    <div class="row info_main_row">
      <div class="col-md-6 col-lg-4">
        <h5>
          Kontak
        </h5>
        <div class="info_contact">
          <a href="https://maps.app.goo.gl/JuufkLfBQfKNWGmi6" target="_blank">
            <i class="fas fa-location-dot" aria-hidden="true"></i>
            <span>
              Jl. Kartini No. 133, Denpasar
            </span>
          </a>
          <a href="tel:+62361222487">
            <i class="fa fa-phone" aria-hidden="true"></i>
            <span>
              +62 361 222487
            </span>
          </a>
          <a href="#">
            <i class="fas fa-comment-sms" aria-hidden="true"></i>
            <span>
              +62 81 236 748 009
            </span>
          </a>
          <a href="mailto:rsudwangaya.dpskota@gmail.com">
            <i class="fa fa-envelope"></i>
            <span>
              rsudwangaya.dpskota@gmail.com
            </span>
          </a>
        </div>
        <div class="social_box">
          <a href="https://www.facebook.com/rsudw/" target="_blank">
            <i class="fab fa-facebook" aria-hidden="true"></i>
          </a>
          <a href="https://www.youtube.com/@rsudwangayakotadenpasar8319/" target="_blank">
            <i class="fab fa-youtube" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/rsud.wangaya/" target="_blank">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6 col-lg-4">
        <div class="info_links">
          <h5>
            Tautan
          </h5>
          <div class="info_links_menu">
            <a href="${escape}index.html">
              Beranda WBS
            </a>
            <a href="https://wangayahospital.com/" target="_blank">
              RSUD Wangaya
            </a>
            <a href="https://rsudwangaya.denpasarkota.go.id/" target="_blank">
              RSUD Wangaya (Pemerintah Kota Denpasar)
            </a>
            <a href="https://wangayahospital.com/id/daftar-online" target="_blank">
              Daftar Online
            </a>
            <a href="https://wangayahospital.com/id/konsultasi-online" target="_blank">
              Konsultasi Online
            </a>
            <a href="https://wangayahospital.com/id/pengaduan-online" target="_blank">
              Pengaduan Online
            </a>
            <a href="contact.html">
              Hubungi Kami
            </a>
            <a href="http://okbos.wangayahospital.com/index.html" target="_blank">
              OK BOS
            </a>
          </div>
        </div>
      </div>

  </div>
</div>
</section>
<!-- Akhir bagian link footer -->


<!-- Footer -->
<footer class="footer_section">
<div class="container">
  <p>
    &copy; <span id="displayYear"></span> Wangaya Hospital.
    <a href="https://html.design/">All Rights Reserved.</a>
  </p>
</div>
</footer>
<!-- akhir footer -->`;
this.setYear();
}
setYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
}

customElements.define('footer-component', Footer);