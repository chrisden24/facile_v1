<section class="product-section">
    <div class="container">

        <div class="row align-items-center">

            <!-- LEFT SIDE IMAGE -->
            <div class="col-lg-6 text-center text-lg-left mb-4">
                <h2 class="product-title">The Future of<br> Compliance Starts Here </h2>
                <img src="assets/images/dashboard.png" alt="Dashboard" class="img-fluid product-img">
            </div>

            <!-- RIGHT SIDE PRODUCT CARDS -->
            <div class="col-lg-6">
                <div class="row g-3">

                    

                    <div class="col-md-6">
                        <div class="product-card card-purple">
                            <img src="assets/images/products/2.png" class="p-icon" alt="">
                            <h4>Monthly Compliance</h4>
                            <a href="facile-monthly-compliance.php" class="know-more">Know More →</a>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="product-card card-blue">
                            <img src="assets/images/products/3.png" class="p-icon" alt="">
                            <h4>Vendor Audit</h4>
                            <a href="facile-vendor-audit.php" class="know-more">Know More →</a>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="product-card card-red">
                            <img src="assets/images/products/4.png" class="p-icon" alt="">
                            <h4>License Management</h4>
                            <a href="facile-license-management.php" class="know-more">Know More →</a>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="product-card card-yellow">
                            <img src="assets/images/products/1.png" class="p-icon" alt="">
                            <h4>Statutory Tool</h4>
                            <a href="facile-statutory-tool.php" class="know-more">Know More →</a>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>
</section>



<style>
    .product-section {
        padding: 60px 0;
        background: linear-gradient(90deg, #ede9faff, #f1d4aeff, #ede9faff);
        /* light pink gradient */
    }

    /* Title */
    .product-title {
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 25px;
        color: #1b1b1b;
    }

    /* Dashboard image */
    .product-img {
        border-radius: 12px;
        max-width: 100%;
    }

    /* Product Cards */
    .product-card {
        padding: 22px;
        border-radius: 14px;
        color: #fff;
        text-align: left;
        height: 100%;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
        transition: 0.3s;
    }

    .product-card:hover {
        transform: translateY(-6px);
    }

    .product-card h4 {
        font-size: 20px;
        font-weight: 700;
    }

    .product-card p {
        margin: 8px 0 12px;
        font-size: 14px;
    }

    .product-card .know-more {
        color: #fff;
        font-weight: 600;
        text-decoration: none;
    }

    /* Card Colors */
    .card-yellow {
        background: #f5b721;
    }

    .card-purple {
        background: #b980f0;
    }

    .card-blue {
        background: #42a5f5;
    }

    .card-red {
        background: #ef6565;
    }

    /* Icons */
    .p-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 12px;
    }

    /* RESPONSIVE */
    @media(max-width: 768px) {
        .product-title {
            text-align: center;
            font-size: 26px;
        }

        .product-img {
            width: 100%;
        }
    }
</style>