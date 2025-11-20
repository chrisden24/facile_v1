<form method="post" action="career-email.php" class=" wow bounceInUpp" enctype="multipart/form-data">
                            <div class="row">
                                <div class="form-group col-md-12">
                                	<label>Full Name</label>
                                    <input type="text" class="form-control" name="fname" placeholder="" value="" required="">
                                </div>
                                <div class="form-group col-md-12">
                                	<label>Email Address</label>
                                    <input type="email" class="form-control" name="email" placeholder="" value="" required="">
                                </div>
                                <div class="form-group col-md-12">
                                	<label>Phone</label>
                                    <input type="text" class="form-control" name="mobile" placeholder="" value="" required="" maxlength="10" pattern="[1-9]{1}[0-9]{9}" onkeypress="return (event.charCode !=8 && event.charCode ==0 || ( event.charCode == 46 || (event.charCode >= 48 && event.charCode <= 57)))">
                                </div>
                                <div class="form-group col-md-12">
                                    <label>Job Options</label>
                                    <select class="form-control" type="select" placeholder="Services" name="service" required="">
                                        <option value="">Job Options</option>
                                        <option value="">Job Options - 001</option>
                                        <option value="">Job Options - 002</option>
                                        <option value="">Job Options - 003</option>
                                    </select>
                                </div>
                                <div class="form-group col-md-12">
                                	<label>Message</label>
                                	<textarea class="form-control" name="Message"></textarea>
                                </div>
                                
                                <div class="form-group col-md-12 file-btn">
                                    	<label>Resume</label>
                                      <input type="file" name="file" class="form-control" id="customFile" accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required>
                                </div>
                                <div class="form-group contact-one__btn-box col-md-12 mt-3">
                                	<button class="thm-btn" value="Submit" type="submit" name="submit" id="submit">Submit Now<span class="fas fa-arrow-right"></span></button>
                            	</div>
                            </div>
                            
                        </form>



                        <style>
                            .nice-select {
    position: relative;
    display: block;
    -webkit-tap-highlight-color: transparent;
    background-color: #fff !important;
    height: 60px !important;
    width: 100% !important;
    /*border-radius: 0px;*/
    border-radius: var(--facile-bdr-radius);
    border: 1px solid #ced4da !important;
    background-color: rgba(var(--facile-white-rgb), 0.03);
    border: 1px solid rgba(var(--facile-white-rgb), .10);
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    float: none;
    font-family: inherit;
    color: #212529 !important;
    color: rgba(var(--facile-white-rgb), .70);
    font-size: 14px;
    font-weight: 300;
    height: 70px;
    line-height: 48px;
    outline: none;
    padding-left: 25px;
    padding-right: 25px;
    text-align: left !important;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
}
                        </style>