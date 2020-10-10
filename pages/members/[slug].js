import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { singleMember } from "../../actions/member";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";

const SingleMember = ({ member, query }) => {
  const head = () => (
    <Head>
      <title>
        {member.cname} | {APP_NAME}
      </title>
      <meta name="description" content={member.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/members/${query.slug}`} />
      <meta property="og:title" content={`${member.title}| ${APP_NAME}`} />
      <meta property="og:description" content={member.mdesc} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/members/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta
        property="og:image"
        content={`${API}/member/photo/${member.slug}`}
      />
      <meta
        property="og:image:secure_url"
        ccontent={`${API}/member/photo/${member.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
    </Head>
  );

  const showMemberCategories = (member) =>
    member.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showMemberTags = (member) =>
    member.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="content-body content-body-profile">
          <div className="profile-sidebar">
            <div className="profile-sidebar-header">
              <div className="avatar">
                <img
                  src={`${API}/member/photo/${member.slug}`}
                  className="rounded-circle"
                  alt="user profile"
                />
              </div>
              <h5>{member.cname}</h5>
              <p>UI Developer (Savior of Mankind)</p>
              <span>Joined {moment(member.createdAt).fromNow()}</span>
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
                  <i data-feather="globe" /> <a href>{member.email}</a>
                </li>
                <li>
                  <i data-feather="github" /> <a href>{member.mobile}</a>
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
                  </div>
                </div>
                <hr className="mg-y-15 op-0" />
                <label className="content-label content-label-lg mg-b-15 tx-color-01">
                  Biography
                </label>
                <p className="tx-color-03">{renderHTML(member.body)}</p>
                <hr className="mg-y-15 op-0" />
                <label className="content-label content-label-lg mg-b-15 tx-color-01">
                  Recent Blog Posts
                </label>
                <ul className="list-unstyled media-list-profile">Trials</ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

SingleMember.getInitialProps = ({ query }) => {
  return singleMember(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return { member: data, query };
    }
  });
};

export default SingleMember;
