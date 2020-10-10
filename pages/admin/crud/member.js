import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import Link from "next/link";
import MemberCreate from "../../../components/crud/MemberCreate";

const Member = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">NEW MEMBER</h1>
              </div>
            </div>
            <MemberCreate />
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Member;
