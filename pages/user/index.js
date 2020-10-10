import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import Link from "next/link";

const UserIndex = () => {
  return (
    <Layout>
      <Private>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">USER DASHBOARD</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-1 pb-4">
          <div className="row row-sm mg-t-15 mg-sm-t-20">
            <div className="col-md-4 col-sm-6 col-xl">
              <div className="card card-hover card-todo">
                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/user/update">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Update Profile
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xl mg-t-15 mg-sm-t-0">
              <div className="card card-hover card-todo">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">Publications (Blogs)</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>

                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/user/crud/blog">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> New Blog
                    </a>
                  </Link>
                  <Link href="/user/crud/blogs">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Blog Maintenance
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default UserIndex;
