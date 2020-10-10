import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { userPublicProfile } from "../../actions/user";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import moment from "moment";
import ContactForm from "../../components/form/ContactForm";

const UserProfile = ({ user, blogs, query }) => {
  const head = () => (
    <Head>
      <title>
        {user.username} | {APP_NAME}
      </title>
      <meta name="description" content={`Blogs by ${user.username}`} />
      <link rel="canonical" href={`${DOMAIN}/profile/${query.username}`} />
      <meta property="og:title" content={`${user.username}| ${APP_NAME}`} />
      <meta property="og:description" content={`Blogs by ${user.username}`} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/profile/${query.username}`} />
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
  const showUserBlogs = () => {
    return blogs.map((blog, i) => {
      return (
        <li className="media" key={i}>
          <div className="wd-40 ht-40 bg-gray-400" />
          <div className="media-body">
            <Link
              href={`/blogs/${blog.slug}`}
              prefetch={false}
              className="mg-b-5 tx-semibold"
            >
              {blog.title}
            </Link>
            <p>{moment(blog.updatedAt).fromNow()}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <React.Fragment>
      <Layout>
        <div className="content-body content-body-profile">
          <div className="profile-sidebar">
            <div className="profile-sidebar-header">
              <div className="avatar">
                <img
                  src={`${API}/user/photo/${user.username}`}
                  className="rounded-circle"
                  alt="user profile"
                />
              </div>
              <h5>{user.name}</h5>
              <p>UI Developer (Savior of Mankind)</p>
              <span>Joined {moment(user.createdAt).fromNow()}</span>
              <div className="d-flex align-self-stretch mg-t-30">
                <a
                  href
                  className="btn btn-brand-01 btn-sm btn-uppercase flex-fill"
                >
                  Follow
                </a>
                <a
                  href
                  className="btn btn-white btn-sm btn-uppercase flex-fill mg-l-5"
                >
                  Unfollow
                </a>
              </div>
            </div>

            <div className="profile-sidebar-body">
              <label className="content-label">Mobile &amp; Email</label>
              <ul className="list-unstyled profile-info-list">
                <li>
                  <i data-feather="globe" /> <a href>{user.email}</a>
                </li>
                <li>
                  <i data-feather="github" /> <a href>0780293012</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-body">
            <div className="tab-content pd-15 pd-sm-20">
              <div id="overview" className="tab-pane active show">
                <div className="stat-profile">
                  <div className="stat-profile-body">
                    <div className="row row-xs">
                      <div className="col">
                        <div className="card card-body pd-10 pd-md-15 bd-0 shadow-none bg-primary-light">
                          <h1 className="tx-light tx-sans tx-spacing--4 tx-primary mg-b-5">
                            102
                          </h1>
                          <p className="tx-13 tx-lg-14 tx-color-02 mg-b-0">
                            Your profile visitors
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-body pd-10 pd-md-15 bd-0 shadow-none bg-teal-light">
                          <h1 className="mg-b-5 tx-sans tx-spacing--2 tx-light tx-teal">
                            961
                          </h1>
                          <p className="tx-13 tx-lg-14 tx-color-03 mg-b-0">
                            Search appearances
                          </p>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card card-body pd-10 pd-md-15 bd-0 shadow-none bg-pink-light">
                          <h1 className="mg-b-5 tx-sans tx-spacing--2 tx-light tx-pink">
                            665
                          </h1>
                          <p className="tx-13 tx-lg-14 tx-color-03 mg-b-0">
                            Your activity views
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* row */}
                  </div>
                  {/* stat-profile-body */}
                </div>
                {/* stat-profile */}
                <hr className="mg-y-15 op-0" />
                <label className="content-label content-label-lg mg-b-15 tx-color-01">
                  Biography
                </label>
                <p className="tx-color-03">{user.about}</p>
                <hr className="mg-y-15 op-0" />
                <label className="content-label content-label-lg mg-b-15 tx-color-01">
                  Recent Blog Posts
                </label>
                <ul className="list-unstyled media-list-profile">
                  {showUserBlogs()}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pb-2">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <ContactForm authorEmail={user.email} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

UserProfile.getInitialProps = ({ query }) => {
  return userPublicProfile(query.username).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log(data);
      return { user: data.user, blogs: data.blogs, query };
    }
  });
};

export default UserProfile;
