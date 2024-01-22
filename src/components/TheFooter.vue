<template>
  <div class="container">
    <div class="footerRow">
      <div class="col-25">
        <h4>Kontaktujte nás</h4>
        <ul>
          <li><i class="fa fa-envelope" aria-hidden="true"><a href="mailto:adrian.pazicky@student.ukf.sk">
            adrian.pazicky@student.ukf.sk</a></i></li>
          <li><i class="fa fa-phone" aria-hidden="true"><a href="tel:0915847127"> +421 915 781 14</a></i></li>
        </ul>
      </div>
      <div class="col-25">
        <h4>Rýchle odkazy</h4>
        <ul>
          <li>
            <router-link
                to="/">Domov
            </router-link>
          </li>

          <li>
            <router-link
                to="/contact"
                >Kontakt
            </router-link>
          </li>
          <li>
            <router-link
                    to="/aboutUs"
                >O nás
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-25">
        <h4>Nájdete nás</h4>
        <div style="width: 100%"><iframe width="100%" height="150" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=48%C2%B039'20.9%22N%2018%C2%B030'07.5%22E+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe></div>
      </div>
    </div>
    <div class="row">
      <p class="text-left text-light">Copyright &copy; 2021 Company Name | Designed by Adrián Pažický</p>
    </div>
  </div>
  </template>
  <script>
  export default {
    name: 'FooterComponent',
  };
  </script>