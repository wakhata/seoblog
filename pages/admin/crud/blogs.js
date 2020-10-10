import Layout from "../../../components/Layout";
import Admin from "../../../components/auth/Admin";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";
import Search from "../../../components/blog/Search";

const Blog = () => {
  return (
    <Layout>
      <Admin>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">MANAGE BLOGS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <BlogRead />
            </div>
          </div>
        </div>
      </Admin>
    </Layout>
  );
};

export default Blog;
