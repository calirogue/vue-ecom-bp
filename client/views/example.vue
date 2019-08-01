<template>
  <div class="home">
    <div class="top-banner">
      <div class="row align-items-center justify-content-end">
        <div class="col-md-6">
          <h1 class="text-white">
            Do well.
            <br>Be easy.
          </h1>
        </div>
      </div>
      <div class="social-links">
        <a href="https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/11xifarm/?hl=en">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.facebook.com/11xibrand/">
          <i class="fab fa-facebook-f"></i>
        </a>
      </div>
    </div>

    <div class="section callout">
      <div class="container">
        <h3>
          Oregon Grown
          <br>Hand Crafted
          <br>No Pesticides
        </h3>
      </div>
    </div>

    <div class="section about-us">
      <div class="row">
        <div class="col-md-4 d-md-flex">
          <div>
            <img src="/images/tst2.jpg">
          </div>
        </div>
        <div class="col-md-8">
          <div class="box text-md-left">
            <h2>What We Do</h2>
            <div class="box-description">
              <p>
                Located in Southern Oregon, 11:XI cultivates high quality cannabis by using organic soil, pesticide free,
                handpicked and crafted for different elevated effects. Each strain is cultivated by our expert team of
                growers who have the expertise to develop a variety of unique and classic strains for your individual
                needs.
              </p>
              <h3 class="nav-link-about">
                <router-link to="/about-us" class="nav-link">Expert Team</router-link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container align-center">
        <h2>Popular Cannabis Strains</h2>
        <div class="row justify-content-center">
          <div class="col-md-4">
            <div class="product-box">
              <div class="product-name">Blue Dream</div>
              <div class="product-image">
                <a
                  href="https://weedmaps.com/brands/eleven-eleven-brand/products/eleven-eleven-brand-ii-xi-farm-blue-dream"
                >
                  <span>More Info</span>
                  <img src="/images/bluedream.jpg" class="img-fluid">
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-box">
              <div class="product-name">Purple Cookies</div>
              <div class="product-image">
                <a
                  href="https://weedmaps.com/brands/eleven-eleven-brand/products/eleven-eleven-brand-ii-xi-farm-purple-cookies"
                >
                  <span>More Info</span>
                  <img src="/images/purplecookies.jpg" class="img-fluid">
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="product-box">
              <div class="product-name">Mickey Kush</div>
              <div class="product-image">
                <a
                  href="https://weedmaps.com/brands/eleven-eleven-brand/products/eleven-eleven-brand-ii-xi-farm-mickey-kush"
                >
                  <span>More Info</span>
                  <img src="/images/mickeykush.jpg" class="img-fluid">
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <router-link to="/marijuana-sort" class="nav-link">View All</router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script type="text/javascript">
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>






    <div class="section our-lifestyle">
      <div class="container">
        <h2>Our lifestyle</h2>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="banner-small" style="background-image: url(/images/barn.jpg)">
            <div class="banner-text-container">
              <div class="banner-text large">
                <div>You don't</div>
                <div>have to be</div>
                <div>perfect</div>
                <div>to be</div>
                <div>amazing</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6">
              <div class="banner-small" style="background-image: url(/images/oregonred.jpg)">
                <div class="banner-text-container">
                  <div class="banner-text">
                    <div>Just be</div>
                    <div>free</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="banner-small" style="background-image: url(/images/oregonhiking.jpg)">
                <div class="banner-text-container">
                  <div class="banner-text">
                    <div>Do what makes</div>
                    <div>your soul happy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br class="d-none d-md-block">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-small" style="background-image: url(/images/about-lifestyle4.jpg)">
                <div class="banner-text-container">
                  <div class="banner-text">
                    <div>Time you enjoy wasting is not</div>
                    <div>wasted time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>