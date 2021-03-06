import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/form/ContactForm";
const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">CONTACT UCLA</h1>
            </div>
          </div>
          <div className="card-body">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Single Code Operations</h6>
                <p className="card-desc">
                  Plot 33 Interservice Tower, Lumumba Avenue
                </p>
                <p className="card-desc">P.O Box 9994</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 393 217 590</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">
                  Uganda Consumer Lenders' Association
                </h6>
                <p className="card-desc">
                  Plot 33 Interservice Tower, Lumumba Avenue
                </p>
                <p className="card-desc">P.O Box 9994</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 393-216 505</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Uganda Bankers' Association</h6>
                <p className="card-desc">Plot 2702 Block 244, Nyangweso Road</p>
                <p className="card-desc">P.O Box 8002</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 312-343 400</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Payroll Consults Africa Ltd</h6>
                <p className="card-desc">UAP Nakawa Business Park</p>
                <p className="card-desc">Plot 3-5 New Port Bell Road</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 414-532 287</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
