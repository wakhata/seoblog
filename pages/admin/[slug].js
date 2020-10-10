import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import MemberUpdate from "../../components/crud/MemberUpdate";

const Member = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 pt-4 pb-2">
              <h5 className="pl-3">Update Member</h5>
            </div>
            <div className="col-md-12">
              <MemberUpdate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Member;
