import React from 'react';



function ContactForm() {
    return (
        <div className="ContactForm">
            <h4 class="font-weight-bold contactme text-center">CONTACT ME</h4>
            <div className="row">
                <div className="mb-4 col-sm-6">
                    <form>
                        <div className="form-group">
                            <input
                                type="text"
                                className="inputArea"
                                placeholder="Name" />
                        </div>

                        <div className="form-row">

                            <div class="col form-group">
                                <input
                                    type="text"
                                    className="inputArea"
                                    placeholder="Name"
                                />
                            </div>
                            <div class="col form-group">
                                <input
                                    type="text"
                                    className="inputArea"
                                    placeholder="Name"
                                />
                            </div>

                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                className="inputArea"
                                placeholder="Name"
                            />
                        </div>

                        <buttom
                            type="submit"
                            className="inputArea"
                        >Submit</buttom>

                </form>
                </div>

                <div class="midLine"></div>
                <div className="col-sm-5">

                    <h5> Hanshi Chen</h5>
                    <br/>

                    <p class="lineheight">
                        <span class="font-weight-bold">Phone:</span>
                        123-456-7890
                    </p>


                    <br/>
                    <p class="lineheight">
                        <span class="font-weight-bold">Phone:</span>
                        sam.hs.chen@gmail.com
                    </p>

                </div>


            </div>
        </div>
    );
}

export default ContactForm;
