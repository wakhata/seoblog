import Layout from "../components/Layout";
import SigninComponent from "../components/auth/SigninComponent";
import { withRouter } from "next/router";
const Signin = ({ router }) => {
  const showRedirectMessage = () => {
    if (router.query.message) {
      return <div className="alert alert-danger">{router.query.message}</div>;
    } else {
      return;
    }
  };
  return (
    <Layout>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">Signin</h1>
            </div>
          </div>
          <div className="card-body">
            <div className="media d-block d-sm-flex">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  {showRedirectMessage()}
                </div>
              </div>
              <div className="media-body">
                <div className="row">
                  <div className="col-md-4 offset-md-4 pt-3 pb-3">
                    <SigninComponent />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-text">Useful Contact Information</div>
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

export default withRouter(Signin);
