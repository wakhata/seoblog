import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { singleTag } from "../../actions/tag";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import { singleBlog } from "../../actions/blog";
import blog from "../../../backend/models/blog";
import Card from "../../components/blog/Card";
import Search from "../../components/blog/Search";

const Tag = ({ tag, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {tag.name} | {APP_NAME}
      </title>
      <meta name="description" content={`Project on ${tag}`} />
      <link rel="canonical" href={`${DOMAIN}/categories/${query.slug}`} />
      <meta property="og:title" content={`${tag.name}| ${APP_NAME}`} />
      <meta property="og:description" content={`Project on ${tag}`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta
        property="og:image:secure_url"
        content={`${DOMAIN}/static/images/seoblog.jpg`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const tagBlogs = () => {
    return blogs.map((b, i) => {
      // ()
      return (
        <div className="col-md-3" key={i}>
          <Card blog={b} />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <div className="container-fluid pt-2">
            <div className="card card-hover card-task-one">
              <div className="card-header">
                <div className="col-md-12 text-center">
                  <h1 className="display-5 font-weight-bold">{tag.name}</h1>
                </div>
              </div>
            </div>
          </div>

          <Search />
          <div className="container-fluid pt-2">
            <div className="card card-hover card-task-one">
              <div className="card-body">
                <div className="row">{tagBlogs()}</div>
              </div>
            </div>
          </div>
        </main>
      </Layout>
    </React.Fragment>
  );
};

Tag.getInitialProps = ({ query }) => {
  return singleTag(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { tag: data.tag, blogs: data.blogs, query };
    }
  });
};

export default Tag;
