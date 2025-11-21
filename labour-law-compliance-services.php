<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Facile Management Services (opc) Private Limited</title>
        <meta name="description" content="Labour Law Compliance Services - FACILE" />

        <?php include("header.php"); ?>

        <style>
            /*.service-card {
                background: #fff;
                padding: 25px;
                border-radius: 12px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.08);
                text-align: center;
                transition: all 0.3s ease-in-out;
                height: 100%;
            }
            .service-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 6px 18px rgba(0,0,0,0.15);
            }
            .service-card i {
                font-size: 40px;
                color: #f5821f;
                margin-bottom: 15px;
            }
            .service-card h5 {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 10px;
                color: #21336D;
            }
            .service-card p {
                font-size: 14px;
                color: #444;
                line-height: 1.6;
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
                    <h3>Labour Law Compliance</h3>
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
                            <h3 class="service-details__title-1">Labour Law Compliance Services</h3>

                            <p class="service-details__text-2">
                                Labour laws in India are extensive and ever-evolving, covering employee rights, workplace safety, wages, social security, and more. 
                                At FACILE, our Labour Law Compliance Services are designed to simplify these complex requirements and keep your organization fully compliant.
                            </p>
                            <p class="service-details__text-2">
                                We provide end-to-end compliance management across all major central and state legislations. From maintaining statutory records and registers 
                                to filing periodic returns and supporting during inspections, FACILE takes care of the entire compliance framework for your business.
                            </p>

                            <!-- Cards Start -->
                            <div class="row justify-content-center mt-4">
                                <div class="col-md-4 mb-4">
                                    <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                        <div class="icon mb-3"><i class="fas fa-clipboard-check"></i></div>
                                        <h5 class="card-title">End-to-End Labour Law Compliance</h5>
                                        <p class="card-text">Comprehensive management of compliance under all central and state labour legislations.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                        <div class="icon mb-3"><i class="fas fa-file-alt"></i></div>
                                        <h5 class="card-title">Statutory Registers & Returns</h5>
                                        <p class="card-text">Preparation and timely submission of statutory registers and periodic returns.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                        <div class="icon mb-3"><i class="fas fa-rupee-sign"></i></div>
                                        <h5 class="card-title">Wages & Social Security</h5>
                                        <p class="card-text">Ensuring proper implementation of wages, PF, ESIC, gratuity, bonus, and employee welfare provisions.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                        <div class="icon mb-3"><i class="fas fa-search"></i></div>
                                        <h5 class="card-title">Audit & Inspection Support</h5>
                                        <p class="card-text">Assistance during inspections, audits, and proceedings for smooth compliance.</p>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-4">
                                    <div class="card service-card shadow-sm p-3 text-center wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                                        <div class="icon mb-3"><i class="fas fa-user-tie"></i></div>
                                        <h5 class="card-title">Advisory & Updates</h5>
                                        <p class="card-text">Expert consultation and regular updates on amendments in labour laws.</p>
                                    </div>
                                </div>
                            </div>
                            <!-- Cards End -->

                            <p class="service-details__text-2">
                                With FACILE’s Labour Law Compliance Services, organizations can minimize legal risks, avoid penalties, and foster a compliant workplace culture. 
                                Our proactive approach ensures seamless compliance management, allowing you to focus on business growth while we handle the complexities of labour law.
                            </p>

                            <!-- FAQ Section Start -->
                            <div class="service-details__faq-box mt-5">
                                <h3 class="service-details__title-1">FAQ's</h3>
                                <div class="accrodion-grp" data-grp-name="faq-one-accrodion">

                                    <div class="accrodion active">
                                        <div class="accrodion-title"><h4>What is Labour Law Compliance?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>Labour Law Compliance means adhering to all statutory laws, rules, and regulations related to employment, wages, benefits, and employee welfare, as mandated by central and state governments.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Why is Labour Law Compliance important for businesses?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>It ensures businesses operate legally, avoid penalties, safeguard employee rights, and maintain a positive reputation with stakeholders and government authorities.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>What services does FACILE provide under Labour Law Compliance?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>We handle registrations, license renewals, maintenance of statutory registers, filing of monthly/quarterly/annual returns, inspections support, and advisory on labour law obligations.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Which key Acts are covered under Labour Law Compliance?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>We cover compliance under the Shops & Establishments Act, Factories Act, CLRA, ISMW, Minimum Wages Act, Payment of Wages Act, Bonus Act, Gratuity Act, and Labour Welfare Fund, among others.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Do you support multi-state labour law compliance?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>Yes. FACILE offers compliance management across all Indian states, handling region-specific requirements and local laws.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Can FACILE assist during labour inspections or audits?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>Yes. Our experts guide and support organizations during inspections, audits, or government inquiries to ensure smooth outcomes and prevent penalties.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>How does FACILE ensure timely compliance?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>We provide compliance calendars, automated reminders, and expert monitoring to ensure all filings and submissions are completed on time.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Do you maintain statutory registers and employee records?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>Yes. We maintain digital and physical statutory registers, employee records, and compliance reports to ensure audit readiness at all times.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>Is the service suitable for SMEs as well as large enterprises?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>Yes. FACILE’s labour law compliance services are scalable, designed to meet the needs of startups, SMEs, and large corporations.</p></div></div>
                                    </div>

                                    <div class="accrodion">
                                        <div class="accrodion-title"><h4>How does FACILE keep businesses updated on new labour laws?</h4></div>
                                        <div class="accrodion-content"><div class="inner"><p>We provide regular updates, newsletters, and expert advisory on changes to labour legislations and amendments so that businesses remain fully compliant.</p></div></div>
                                    </div>

                                </div>
                            </div>
                            <!-- FAQ Section End -->

                        </div>
                    </div>
                        
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
