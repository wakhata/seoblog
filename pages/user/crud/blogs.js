import Layout from "../../../components/Layout";
import Private from "../../../components/auth/Private";
import BlogRead from "../../../components/crud/BlogRead";
import Link from "next/link";
import { isAuth } from "../../../actions/auth";

const Blog = () => {
  const username = isAuth() && isAuth().username;
  return (
    <Layout>
      <Private>
        <div className="container-fluid pt-2 pb-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">
                  MANAGE PUBLICATIONS
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <BlogRead username={username} />
            </div>
          </div>
        </div>
      </Private>
    </Layout>
  );
};

export default Blog;
