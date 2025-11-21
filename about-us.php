<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Facile Management Services (OPC) Private Limited</title>
  <meta name="description" content="Facile Management Services provides HR, Payroll, Attendance, and Statutory Compliance solutions powered by F.A.C.I.L.E – Fast Automated Compliance & Intelligent Legal Engine" />
  <?php include("header.php"); ?>
</head>

<body>

  <!-- Page Header Start -->
  <section class="page-header">
    <div class="page-header__bg" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg);"></div>
    <div class="container">
      <div class="page-header__inner">
        <h3>About Us</h3>
      </div>
    </div>
  </section>
  <!-- Page Header End -->

  <!-- About One Start -->
  <section class="about-one p-b-70">
    <div class="container">
      <div class="row align-items-center">
        <!-- Left Content -->
        <div class="col-xl-7">
          <div class="about-one__left">
            <div class="section-title text-left">
              <div class="section-title__tagline-box">
                <span class="section-title__tagline">About Us</span>
              </div>
              <h2 class="section-title__title">Welcome to <span>Facile Management Services</span></h2>
            </div>

            <!-- Who We Are -->
            <h4>Who We Are</h4>
            <p class="about-one__text">
              Facile Management Services (OPC) Private Limited is committed to delivering seamlessly integrated HR and compliance solutions designed for the evolving needs of today’s enterprises.
              We combine deep industry knowledge, digital innovation, and a client-first approach to help organizations stay compliant, reduce risks, and achieve operational excellence.
              With agility, scalability, and accuracy at our core, we empower businesses of all sizes to manage their workforce and compliance obligations with confidence.
            </p><br>

            <!-- What We Do -->
            <h4>What We Do</h4>
            <p class="about-one__text">
              At Facile, we help organizations navigate the complex world of HR and statutory compliance with confidence. Our mission is to simplify compliance, reduce risks, and enhance workforce efficiency across industries. We focus on aligning compliance with business goals, enabling companies to grow without worrying about regulatory hurdles.
            </p>
          </div>
        </div>

        <!-- Right Image -->
        <div class="col-xl-5">
          <div class="about-one__right wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
            <div class="about-one__img-box">
              <div class="about-one__img">
                <img src="assets/images/about-us-img-001.jpg" class="w-100" alt="" />
              </div>
            </div>
          </div>
        </div>
      <div class="container my-5">
    <div class="row g-4 text-center">

        <div class="col-12 col-sm-6 col-lg-3">
            <div class="feature-box gradient-border gradient-border-odd">
                <div class="service-icon cus-ic-color-1">
                    <i class="fas fa-gavel"></i>
                </div>
                <h5>Regulatory Compliance</h5>
                <p>Ensuring 100% adherence to statutory laws and labor regulations.</p>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
            <div class="feature-box gradient-border gradient-border-even">
                <div class="service-icon cus-ic-color-2">
                    <i class="fas fa-digital-tachograph"></i>
                </div>
                <h5>Digital Transformation</h5>
                <p>Replacing manual processes with automated compliance solutions.</p>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
            <div class="feature-box gradient-border gradient-border-odd">
                <div class="service-icon cus-ic-color-1">
                    <i class="fas fa-users-cog"></i>
                </div>
                <h5>Vendor & Workforce</h5>
                <p>Transparent compliance for vendors, subcontractors, and employees.</p>
            </div>
        </div>

        <div class="col-12 col-sm-6 col-lg-3">
            <div class="feature-box gradient-border gradient-border-even">
                <div class="service-icon cus-ic-color-2">
                    <i class="fas fa-clipboard-check"></i>
                </div>
                <h5>Audit & Risk</h5>
                <p>Inspection-ready reports and alerts to minimize compliance risks.</p>
            </div>
        </div>

    </div>
</div>

      </div>
    </div>
  </section>
  <!-- About One End -->

  <!-- Our Tool Section -->
  <?php include("our-tool.php"); ?>
  <!-- Our Tool End -->


  <!-- Our product Section -->
  <?php include("our-product.php"); ?>
  <!-- Our product End -->

  <!-- Leadership Section -->
  <!-- <section class="leadership py-5">
    <div class="container">
      <div class="section-title text-center mb-5">
        <h2 class="section-title__title title-animation">Our <span>Leadership</span></h2>
      </div>
    
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="service-card">
            <div class="row align-items-center">
              <div class="col-lg-4">
                <img src="assets/images/leadership-img-001.jpg" alt="Leadership" class="" width="100%">
              </div>
              <div class="col-lg-7">
                <div class="">
                  <div class="cus-lead-title">
                    <h4>Mr. Ravi</h4>
                    <p class=""><b>Founder & Managing Director</b></p>
                  </div>
                  <div>
                    <p>A seasoned professional with more than 18 years of proven expertise in HR and statutory compliance.
                      His leadership blends strategic vision and hands-on experience, driving Facile’s mission to provide solutions
                      that are reliable, innovative, and client-focused. Under his direction, Facile is implementing ambitious business strategies and is well-positioned for sustained growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Leadership End -->



  <!-- our products start -->

  <!-- our products end -->

  <!-- Mission & Vision Start -->
  <!-- Our Evolution Start -->
  <?php include("our-evolution.php"); ?>
  <!-- Our Evolution End -->

  <style>
    /* Main updated class */
.feature-box {
    padding: 25px 20px;
    background: #ffffff;
    border-radius: 12px;
    height: 100%;
    transition: transform 0.3s ease;
    position: relative;
}

/* Hover effect */
.feature-box:hover {
    transform: translateY(-5px);
}

.service-icon {
    font-size: 45px;
    margin-bottom: 15px;
}

.cus-ic-color-1 { color: #21336D; }
.cus-ic-color-2 { color: #f5821f; }

/* Gradient Border */
.gradient-border {
    position: relative;
}

.gradient-border::before {
    content: "";
    position: absolute;
    inset: 0;
    padding: 2px;
    border-radius: 12px;
    -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
}

.gradient-border-odd::before {
    background: linear-gradient(90deg, #21336D, #f5821f, #21336D);
}

.gradient-border-even::before {
    background: linear-gradient(90deg, #f5821f, #21336D, #f5821f);
}

/* Responsive fixes */
@media (max-width: 767px) {
    .feature-box {
        padding: 20px;
    }
    .service-icon {
        font-size: 40px;
    }
}

@media (max-width: 575px) {
    .feature-box {
        margin-bottom: 15px;
    }
}

    .service-card {
      background: #fff;
      border-radius: 12px;
      padding: 25px;
      margin-bottom: 25px;
      box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      min-height: 225px;
    }

    .outline-bordered {
      border: 2px solid;
      border-image: linear-gradient(45deg, #21336D, #f5821f) 1;
    }

    .service-card:hover {
      transform: translateY(-8px);
      box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.15);
    }

    .service-icon {
      margin-bottom: 15px;
      font-size: 40px;
    }


    .bg-blue {
      background: #21336D;
    }

    .bg-orange {
      background: #f5821f;
    }

    .bg-green {
      background: #28a745;
    }

    .bg-purple {
      background: #6f42c1;
    }

    .bg-teal {
      background: linear-gradient(90deg,
          #f8f8f8ea 0%,
          #f3e8efce 50%,
          #f5faf8ea 100%) !important;
    }


    .section-title__title span {
      color: #f5821f;
    }
  </style>

  <?php include("footer.php"); ?>

</body>

</html>