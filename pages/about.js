import Layout from "../components/Layout";
import Link from "next/link";

const About = () => {
  return (
    <Layout>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">About Us</h1>
            </div>
          </div>
          <div className="card-body">
            <h5 className="tx-18 mg-b-15">Our History</h5>
            <p>
              Association fully registered that brings together Financial
              Institution that lend to Public Officials under a Single Code
              (482). UCLA ensures that all the players operate as a bloc. UCLA
              has over 120 members that offer a service to the Government of
              Uganda staff complement.
            </p>
            <div className="media d-block d-sm-flex">
              <img
                src={`./static/images/ucla3.jpeg`}
                className="wd-100p wd-sm-200 rounded mg-sm-r-20 mg-b-20 mg-sm-b-0"
                alt
              />
              <div className="media-body">
                Association fully registered that brings together Financial
                Institution that lend to Public Officials under a Single Code
                (482). UCLA ensures that all the players operate as a bloc. UCLA
                has over 120 members that offer a service to the Government of
                Uganda staff complement.Association fully registered that brings
                together Financial Institution that lend to Public Officials
                under a Single Code (482). UCLA ensures that all the players
                operate as a bloc. UCLA has over 120 members that offer a
                service to the Government of Uganda staff complement.Association
                fully registered that brings together Financial Institution that
                lend to Public Officials under a Single Code (482). UCLA ensures
                that all the players operate as a bloc. UCLA has over 120
                members that offer a service to the Government of Uganda staff
                complement.Association fully registered that brings together
                Financial Institution that lend to Public Officials under a
                Single Code (482). UCLA ensures that all the players operate as
                a bloc.
              </div>
            </div>
          </div>
        </div>
        <div className="divider-text">Our History</div>
      </div>
    </Layout>
  );
};

export default About;
