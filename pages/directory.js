import Layout from "../components/Layout";
import Link from "next/link";

const Directory = () => {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-3 font-weight-bold">DIRECTORY</h1>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <h6 className="card-title">Giles Germany Aijukwe</h6>
                <p className="card-desc">Letshego Uganda Limited</p>
                <p className="card-desc">P.O Box 24527, Wampewo, Kololo</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 414 237 330</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Kennedy Odera</h6>
                <p className="card-desc">Fincredit (U) Limited</p>
                <p className="card-desc">P.O Box 6240 Pan Africa House</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 414 343 007</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Albert Abaasa</h6>
                <p className="card-desc">Platinum Credit Uganda Ltd</p>
                <p className="card-desc">P.O Box 27328, Prime Plaza</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 414 342 847</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Ronald Majugo</h6>
                <p className="card-desc">Duckhill Microfinance Limited</p>
                <p className="card-desc">
                  Plot 1 Post Office Close, Nkokonjeru
                </p>
                <p className="card-desc">Mbale - Uganda.</p>
                <p className="card-desc">+256 (0) 454 660 311</p>
              </div>
            </div>
            <div className="row pt-3">
              <div className="col-sm-6 col-md-3">
                <h6 className="card-title">Ben Apollo Tumusiime</h6>
                <p className="card-desc">
                  Sanlam Uganda Life Insurance Limited
                </p>
                <p className="card-desc">
                  Plot 15. Princess Anne Drive, Bugolobi
                </p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 417 726 526</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Josephine Mary Nabuyunga</h6>
                <p className="card-desc">Mukono Region Teachers'House, </p>
                <p className="card-desc">Kampala-Jinja Road</p>
                <p className="card-desc">Mukono - Uganda.</p>
                <p className="card-desc">+256 (0) 752 625 289</p>
              </div>

              <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                <h6 className="card-title">Joshua Wakhata</h6>
                <p className="card-desc">
                  Plot 33 Interservice Tower, Lumumba Avenue
                </p>
                <p className="card-desc">P.O Box 9994</p>
                <p className="card-desc">Kampala - Uganda.</p>
                <p className="card-desc">+256 (0) 393-216 505</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Directory;
