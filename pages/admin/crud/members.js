import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import MemberRead from "../../../components/crud/MemberRead";
import Link from "next/link";
import Search from "../../../components/member/Search";

const Member = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">MANAGE MEMBERS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <MemberRead />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Member;
