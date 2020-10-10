import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
import Link from "next/link";

const UserProfileUpdate = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">UPDATE PROFILE</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <div className="row">
                <ProfileUpdate />
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserProfileUpdate;
