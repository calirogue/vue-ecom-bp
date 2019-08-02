<template>
  <div class="modal fade" id="confirmation" data-backdrop="static" data-keyboard="false">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="top-banner">
          <div class="row align-items-center justify-content-end">
            <div class="col-md-6">
              <h1 class="text-white">
                Do well.<br>Be easy.
              </h1>
              <button class="btn btn-outline" @click="accept">I Verify I am 21 years or older</button>
            </div>
          </div>
          <div class="top-logo">
            <img src="/images/logo.png" class="img-fluid">
          </div>
          <div class="social-links">
            <a href="https://www.linkedin.com/company/eleven-eleven-brand/about/?viewAsMember=true">
                <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/11.xibrand/?hl=en">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/11xibrand/">
                <i class="fab fa-facebook-f"></i>
            </a>
          </div>
        </div> 
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'confirmation',
    data(){
      return {

      }
    },
    methods:{
      accept(){
        this.$ls.set('over21',true);
        $('#confirmation').modal('toggle');
      }
    },
    mounted(){
      if(!this.$ls.get('over21')) {
        $('#confirmation').modal();
      }
    }
  }
</script>