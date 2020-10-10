import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Search from "../components/blog/Search";
const Index = () => {
  const head = () => (
    <Head>
      <title>BENCH | {APP_NAME}</title>
      <meta name="description" content="Uganda Consumer Lenders' Association" />
      <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
      <meta
        property="og:title"
        content={`Latest web developoment tutorials | ${APP_NAME}`}
      />
      <meta
        property="og:description"
        content="Uganda Consumer Lenders' Association"
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
  return (
    <Layout>
      <article className="overflow-hidden">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 font-weight-bold">
                UGANDA CONSUMER LENDERS' ASSOCIATION
              </h1>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="lead">Welcome to Single Code Operations</p>
            </div>
          </div>
        </div> */}
        <Search />

        <div className="container-fluid">
          <div className="divider-text">Publications</div>
          <div className="row">
            <div className="col-md-3">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1513596846216-48ae70153834?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Market</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/market">
                    <a>
                      <h3 className="h1">Market Developments</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    Communication about changes in the market.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1462826303086-329426d1aef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Committee</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/committees">
                    <a>
                      <h3 className="h1">Committee</h3>
                    </a>
                  </Link>
                  <p className="lead">The committees of the Association.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1602&q=80" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Membership</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/membership">
                    <a>
                      <h3 className="h1">Membership </h3>
                    </a>
                  </Link>
                  <p className="lead">Communication concerning membership.</p>
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div className="flip flip-horizontal">
                <div
                  className="front"
                  style={{
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" +
                      ")",
                  }}
                >
                  <h2 className="text-shadow text-center h1">Operations</h2>
                </div>
                <div className="back text-center">
                  <Link href="/categories/operations">
                    <a>
                      <h3 className="h1">Operations of SCOC</h3>
                    </a>
                  </Link>
                  <p className="lead">
                    All developments about the Single code operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Single Code Operations</h6>
                  <p className="card-desc">
                    Plot 33 Interservice Tower, Lumumba Avenue
                  </p>
                  <p className="card-desc">P.O Box 9994</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 393 217 590</p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">
                    Uganda Consumer Lenders' Association
                  </h6>
                  <p className="card-desc">
                    Plot 33 Interservice Tower, Lumumba Avenue
                  </p>
                  <p className="card-desc">P.O Box 9994</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 393-216 505</p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Uganda Bankers' Association</h6>
                  <p className="card-desc">
                    Plot 2702 Block 244, Nyangweso Road
                  </p>
                  <p className="card-desc">P.O Box 8002</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 312-343 400</p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Payroll Consults Africa Ltd</h6>
                  <p className="card-desc">UAP Nakawa Business Park</p>
                  <p className="card-desc">Plot 3-5 New Port Bell Road</p>
                  <p className="card-desc">Kampala - Uganda.</p>
                  <p className="card-desc">+256 (0) 414-532 287</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default Index;
