import Head from "next/head";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listMembersWithCategoriesAndTags } from "../../actions/member";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Search from "../../components/member/Search";
import CardM from "../../components/member/CardM";

const Members = ({
  members,
  categories,
  tags,
  totalMembers,
  membersLimit,
  memberSkip,
  router,
}) => {
  const head = () => (
    <Head>
      <title>Bench | {APP_NAME}</title>
      <meta
        name="description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Latest web developoment tutorials | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Programming blogs and tutorials on react node next vue php laravel and web developoment"
      />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
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

  const [limit, setLimit] = useState(membersLimit);
  const [skip, setSkip] = useState(0);
  const [size, setSize] = useState(totalMembers);
  const [loadedMembers, setLoadedMembers] = useState([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    listMembersWithCategoriesAndTags(toSkip, limit).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedMembers([...loadedMembers, ...data.members]);
        setSize(data.size);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return (
      size > 0 &&
      size >= limit && (
        <button onClick={loadMore} className="btn btn-outline-info btn-lg">
          Load more
        </button>
      )
    );
  };

  const showAllMembers = () => {
    return members.map((member, i) => {
      // ()
      return (
        <div className="col-md-3" key={i}>
          <CardM member={member} />
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      {head()}
      <Layout>
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-header">
              <div className="col-md-12 text-center">
                <h1 className="display-5 font-weight-bold">LEADERSHIP</h1>
              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 col-md-2">
                  <h6 className="card-title">Giles Germany Aijukwe</h6>
                  <p className="card-desc">Letshego Uganda Limited</p>
                  <p className="card-desc">P.O Box 24527, Wampewo, Kololo</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 414 237 330</p>
                </div>

                <div className="col-sm-6 col-md-2 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Kennedy Odera</h6>
                  <p className="card-desc">Fincredit (U) Limited</p>
                  <p className="card-desc">P.O Box 6240 Pan Africa House</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 414 343 007</p>
                </div>

                <div className="col-sm-6 col-md-2 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Albert Abaasa</h6>
                  <p className="card-desc">Platinum Credit Uganda Ltd</p>
                  <p className="card-desc">P.O Box 27328, Prime Plaza</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 414 342 847</p>
                </div>

                <div className="col-sm-6 col-md-2 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Ronald Majugo</h6>
                  <p className="card-desc">Duckhill Microfinance Limited</p>
                  <p className="card-desc">
                    Plot 1 Post Office Close, Nkokonjeru
                  </p>
                  <p className="card-desc">Mbale - Uganda.</p>
                  <p className="card-desc">+256 (0) 454 660 311</p>
                </div>
                <div className="col-sm-6 col-md-2 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Ben Apollo Tumusiime</h6>
                  <p className="card-desc">
                    Sanlam Uganda Life Insurance Limited
                  </p>
                  <p className="card-desc">
                    Plot 15. Princess Anne Drive, Bugolobi
                  </p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 417 726 526</p>
                </div>
                <div className="col-sm-6 col-md-2 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Josephine Mary Nabuyunga</h6>
                  <p className="card-desc">Mukono Region Teachers'House, </p>
                  <p className="card-desc">Kampala-Jinja Road</p>
                  <p className="card-desc">Mukono - Uganda.</p>
                  <p className="card-desc">+256 (0) 752 625 289</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid">
          <div className="divider-text">Search UCLA member's contact</div>
        </div> */}
        <Search />
        <div className="container-fluid pt-2">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <div className="row">{showAllMembers()}</div>
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  );
};

Members.getInitialProps = () => {
  let skip = 0;
  let limit = 4;
  return listMembersWithCategoriesAndTags(skip, limit).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        members: data.members,
        categories: data.categories,
        tags: data.tags,
        totalMembers: data.size,
        memberLimit: limit,
        memberSkip: skip,
      };
    }
  });
};

export default withRouter(Members);
