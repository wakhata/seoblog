import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogCreate from "../../../components/crud/BlogCreate";
import Link from "next/link";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-2 pb-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">NEW PUBLICATION</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <BlogCreate />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
