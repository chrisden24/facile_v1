<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Facile Management Services (OPC) Private Limited</title>
    <meta name="description" content="Factory Compliance Services by Facile Management Services" />

    <!-- Font Awesome for Icons -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

    <?php include("header.php"); ?>

    <style>
        /*.service-card {
            border-radius: 12px;
            transition: all 0.3s ease-in-out;
            background: #fff;
            cursor: pointer;
        }
        .service-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .service-card .icon {
            font-size: 36px;
            color: #f5821f; 
        }*/
        .service-card {
        /*border-radius: 12px;*/
        transition: all 0.4s ease-in-out;
        background: #fff;
        cursor: pointer;
        min-height: 250px;
    }
    .service-card:hover {
        transform: translateY(-10px) scale(1.03);
        box-shadow: 0 10px 25px rgba(0,0,0,0.12);
    }
    .service-card .icon {
        font-size: 40px;
        color: #f5821f;
        transition: color 0.3s, transform 0.3s;
    }
    .service-card:hover .icon {
        color: #21336D;
        transform: scale(1.2);
    }
    .tool-support-box {
        margin-top: 40px;
        padding: 25px;
        border-radius: 12px;
        background: #f9fafc;
        box-shadow: 0 5px 15px rgba(0,0,0,0.05);
    }
    .tool-support-box h3 {
        color: #21336D;
        margin-bottom: 15px;
    }
    .tool-support-box ul {
        list-style: none;
        padding: 0;
    }
    .tool-support-box ul li {
        margin-bottom: 12px;
        padding-left: 28px;
        position: relative;
    }
    .tool-support-box ul li::before {
        content: "✔";
        color: #f5821f;
        font-weight: bold;
        position: absolute;
        left: 0;
    }
    </style>
</head>
<body>

    <!--Page Header Start-->
    <section class="page-header">
        <div class="page-header__bg" style="background-image: url(assets/images/backgrounds/page-header-bg.jpg);"></div>
        <div class="container">
            <div class="page-header__inner">
                <h3>Factory Compliance Services</h3>
            </div>
        </div>
    </section>
    <!--Page Header End-->

    <!--Service Details Start-->
    <section class="service-details" id="sticky-section">
        <div class="container">
            <div class="row">
                <div class="col-xl-8 col-lg-7" id="left-col">
                    <div class="service-details__left">
                        <div class="service-details__img">
                           
                        
                        </div>
                        <h3 class="service-details__title-1">Factory Compliance Services</h3>

                        <p class="service-details__text-2">
                            Factories in India are governed by strict regulatory requirements under the <strong>Factories Act, 1948</strong> and other applicable state laws. Non-compliance can result in heavy penalties, legal consequences, and reputational risks for businesses. At <strong>FACILE</strong>, our Factory Compliance Services ensure that your manufacturing units remain fully compliant, safe, and audit-ready at all times.
                        </p>
                        <p class="service-details__text-2">
                            We manage end-to-end compliance for factories by handling registrations, licenses, returns, inspections, and employee welfare requirements. Our services simplify the complex processes involved in compliance, enabling your business to operate legally, transparently, and efficiently.
                        </p>

                        <h4 class="mt-4">Our Key Offerings</h4>
                        <div class="row justify-content-center mt-3">
                            <!-- Card 1 -->
                            <div class="col-md-4 mb-4">
                                <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                    <div class="icon mb-3"><i class="fas fa-id-card"></i></div>
                                    <h5 class="card-title">Factory Registration & Licensing</h5>
                                    <p class="card-text">Assistance with new factory registration, license approvals, renewals, and amendments.</p>
                                </div>
                            </div>
                            <!-- Card 2 -->
                            <div class="col-md-4 mb-4">
                                <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                    <div class="icon mb-3"><i class="fas fa-file-contract"></i></div>
                                    <h5 class="card-title">Statutory Compliance Management</h5>
                                    <p class="card-text">Maintenance of statutory registers, records, and returns under the Factories Act and labor laws.</p>
                                </div>
                            </div>
                            <!-- Card 3 -->
                            <div class="col-md-4 mb-4">
                                <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                    <div class="icon mb-3"><i class="fas fa-helmet-safety"></i></div>
                                    <h5 class="card-title">Health, Safety & Welfare Compliance</h5>
                                    <p class="card-text">Ensuring compliance with safety, working hours, conditions of employment, and welfare provisions.</p>
                                </div>
                            </div>
                            <!-- Card 4 -->
                            <div class="col-md-4 mb-4">
                                <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                    <div class="icon mb-3"><i class="fas fa-user-shield"></i></div>
                                    <h5 class="card-title">Support During Inspections & Audits</h5>
                                    <p class="card-text">End-to-end assistance during government inspections and audits for smooth outcomes.</p>
                                </div>
                            </div>
                            <!-- Card 5 -->
                            <div class="col-md-4 mb-4">
                                <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                    <div class="icon mb-3"><i class="fas fa-briefcase"></i></div>
                                    <h5 class="card-title">Consultation & Advisory</h5>
                                    <p class="card-text">Expert guidance on factory-related obligations, compliance updates, and risk management.</p>
                                </div>
                            </div>
                        </div>

                        <p class="service-details__text-2 mt-4">
                            <h5>Why FACILE?</h5>
                            With FACILE’s Factory Compliance Services, businesses gain peace of mind knowing that every compliance requirement is being met on time. Our proactive approach minimizes risks, ensures worker safety, and keeps your factory operations aligned with statutory norms, allowing you to focus on productivity and growth.
                        </p>

                        <div class="service-details__faq-box mt-4">
                            <h3 class="service-details__title-1">FAQ's</h3>
                            <div class="accrodion-grp" data-grp-name="faq-one-accrodion">

                                <div class="accrodion active">
                                    <div class="accrodion-title"><h4>What is Factory Compliance?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>Factory Compliance refers to adhering to statutory requirements under the Factories Act, 1948 and other applicable state labor laws, including safety, welfare, registrations, and record-keeping.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Why is Factory Compliance important?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>It helps businesses avoid penalties, ensures employee safety, builds legal credibility, and keeps the factory operations running smoothly without disruptions from authorities.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>What services does FACILE provide for Factory Compliance?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>We handle factory registrations, license renewals, maintenance of statutory registers, compliance audits, return filings, and offer expert advisory for all factory-related obligations.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Do you assist during government inspections?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>Yes. Our team provides end-to-end support during inspections, audits, and inquiries to ensure smooth handling and compliance representation before authorities.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Which Acts are covered under Factory Compliance?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>We cover the Factories Act, 1948, Shops & Establishments Act (if applicable), CLRA, ISMW, Labour Welfare Fund, Professional Tax, and state-specific factory rules.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Do you provide Health, Safety & Welfare Compliance?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>Yes. We ensure compliance with safety audits, working hours, employee welfare provisions, accident reporting, and medical facilities as per law.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Is this service suitable for SMEs and large factories?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>Yes. Our solutions are scalable — suitable for small manufacturing units, medium industries, and large factories across multiple locations.</p>
                                    </div></div>
                                </div>

                                <div class="accrodion">
                                    <div class="accrodion-title"><h4>Does FACILE provide continuous monitoring and updates?</h4></div>
                                    <div class="accrodion-content"><div class="inner">
                                        <p>Yes. We provide ongoing monitoring, compliance calendars, automated reminders, and regular updates on new amendments and laws to ensure you always stay compliant.</p>
                                    </div></div>
                                </div>

                            </div>
                        </div>

                      

                    </div>
                </div>

                <!-- Sidebar -->
                <div class="col-xl-4 col-lg-5">
                    <?php include("get-in-touch-service.php"); ?>
                </div>
            </div>
        </div>
    </section>
        <!--Service Details End-->
        <?php include("home-services.php"); ?>

        <!--Site Footer Start-->
        <?php include("footer.php"); ?>
    </body>
</html>
