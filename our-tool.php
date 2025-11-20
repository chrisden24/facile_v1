  <section class="our-tool py-5 bg-teal banner-one">
      <div class="testimonial-two-bg-shape" style="background-image: url(assets/images/shapes/testimonial-two-bg-shape.png);"></div>
      <div class="team-one__shape-1 rotate-me">
          <img src="assets/images/shapes/team-one-shape-1.png" alt="">
      </div>
      <div class="banner-one__shape-4 float-bob-y">
          <img src="assets/images/shapes/banner-one-shape-4.png" alt="" />
      </div>
      <div class="container">

          <div class="section-title text-center mb-5">
              <div class="section-title text-left sec-title-animation animation-style2">
                  <div class="section-title__tagline-box">
                      <span class="section-title__tagline" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
                          <h2 class="section-title__title banner-one__tagline">Our <span>Tool</span></h2>
                      </span>
                  </div>
              </div>
              <p class="lead">At the core of our services is <b>Fast Automated Compliance & Intelligent Legal Engine</b><br>our proprietary platform that redefines compliance management.</p>
          </div>
          <div class="row justify-content-center text-center">
              <div class="col-md-4">
                  <div class="service-card hover-card">
                      <div class="service-icon cus-ic-color-1">
                          <!-- <i class="fas fa-file-alt"></i> -->
                          <img src="assets/images/tool/automateregister.png" alt="" height="60px" width="60px">
                      </div>
                      <h5>Automated Registers</h5>
                      <p>Prepare applicable registers & returns in a single click.</p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="service-card hover-card">
                      <div class="service-icon cus-ic-color-2">
                          <img src="assets/images/tool/alert.png" alt="" height="60px" width="60px">
                          <!-- <i class="fas fa-bell"></i> -->
                      </div>
                      <h5>Smart Alerts</h5>
                      <p>Get timely notifications for all compliance due dates.</p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="service-card hover-card">
                      <div class="service-icon cus-ic-color-1">
                          <!-- <i class="fas fa-database"></i> -->
                          <img src="assets/images/tool/database.png" alt="" height="60px" width="60px">

                      </div>
                      <h5>Historical Records</h5>
                      <p>Maintain inspection-ready compliance records for audits.</p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="service-card hover-card">
                      <div class="service-icon cus-ic-color-2">
                          <!-- <i class="fas fa-chart-line"></i> -->
                          <img src="assets/images/tool/compliance.png" alt="" height="60px" width="60px">
                      </div>
                      <h5>Compliance Scores</h5>
                      <p>Get instant compliance scores to assess compliance health.</p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="service-card hover-card">
                      <div class="service-icon cus-ic-color-1">
                          <!-- <i class="fas fa-handshake"></i> -->
                          <img src="assets/images/tool/contractor.png" alt="" height="60px" width="60px">
                      </div>
                      <h5>Vendor Integration</h5>
                      <p>Enable vendors & subcontractors to upload compliance documents directly.</p>
                  </div>
              </div>
          </div>
      </div>
  </section>

  <style>
      .hover-card {
          position: relative;
          border-radius: 12px;
          background: #fff;
          padding: 20px;
          transition: 0.3s ease;
      }

      /* default border invisible */
      .hover-card::before {
          content: "";
          position: absolute;
          inset: 0;
          padding: 0;
          /* no border initially */
          border-radius: 12px;
          background: transparent;
          transition: 0.3s ease;
          -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
          mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
      }

      /* On hover → gradient border appears */
      .hover-card:hover::before {
          padding: 2px;
          /* border thickness */
          background: linear-gradient(90deg, #21336D, #f5821f, #21336D);
      }
  </style>