import Layout from "../../components/Layout";
import Admin from "../../components/auth/Admin";
import Link from "next/link";

const AdminIndex = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">DASHBOARD</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-1 pb-4">
          <div className="row row-sm mg-t-15 mg-sm-t-20">
            <div className="col-md-4 col-sm-6 col-xl">
              <div className="card card-hover card-todo">
                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/admin/crud/member">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Add Member
                    </a>
                  </Link>
                  <Link href="/admin/crud/members">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Member Maintenance
                    </a>
                  </Link>
                  <Link href="/user/update">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Update Profile
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-xl">
              <div className="card card-hover card-todo">
                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/admin/crud/category-tag">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Add Category
                    </a>
                  </Link>
                  <Link href="/admin/crud/category-tag">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Category Maintenance
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xl mg-t-15 mg-sm-t-0">
              <div className="card card-hover card-todo">
                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/admin/crud/category-tag">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Add Tag
                    </a>
                  </Link>

                  <Link href="/admin/crud/category-tag">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Tag Maintenance
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xl mg-t-15 mg-sm-t-0">
              <div className="card card-hover card-todo">
                <div className="card-footer bg-transparent bd-t-0">
                  <Link href="/admin/crud/blog">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> New Blog
                    </a>
                  </Link>
                  <Link href="/admin/crud/blogs">
                    <a href className="btn btn-block">
                      <i className="icon ion-plus tx-12" /> Blog Maintenance
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default AdminIndex;
