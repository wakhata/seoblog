import Layout from "../components/Layout";
import Link from "next/link";

const Updates = () => {
  return (
    <Layout>
      <article classname="overflow-hidden">
        <div className="container-fluid pt-1">
          <div className="card card-hover card-task-one">
            <div className="card-body">
              <div className="row">
                <div className="col-sm-6 col-md-3">
                  <h6 className="card-title">Expected Payments</h6>
                  <div className="d-flex align-items-center justify-content-between mg-b-10">
                    <h1 className="card-value">
                      932{" "}
                      <span className="tx-success">
                        <i className="icon ion-android-arrow-up" />
                        2.3%
                      </span>
                    </h1>
                    <div className="chart-wrapper">
                      <div id="flotChart1" className="flot-chart" />
                    </div>
                  </div>
                  <p className="card-desc">
                    Expectations for the month according to MOPS.{" "}
                  </p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-sm-t-0">
                  <h6 className="card-title">Processed Payments</h6>
                  <div className="d-flex align-items-center justify-content-between mg-b-10">
                    <h1 className="card-value">
                      268{" "}
                      <span className="tx-success">
                        <i className="icon ion-android-arrow-up" />
                        2.4%
                      </span>
                    </h1>
                    <div className="chart-wrapper">
                      <div id="flotChart2" className="flot-chart" />
                    </div>
                  </div>
                  <p className="card-desc">Payments in the SCB Account. </p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
                  <h6 className="card-title">Reconciled Payments</h6>
                  <div className="d-flex align-items-center justify-content-between mg-b-10">
                    <h1 className="card-value">
                      746 <span className="tx-color-03">hours</span>
                    </h1>
                    <div className="chart-wrapper">
                      <div id="flotChart3" className="flot-chart" />
                    </div>
                  </div>
                  <p className="card-desc">
                    Payments made to the Financial Institutions
                  </p>
                </div>

                <div className="col-sm-6 col-md-3 mg-t-20 mg-md-t-0">
                  <h6 className="card-title">Unreconciled Payments</h6>
                  <div className="d-flex align-items-center justify-content-between mg-b-10">
                    <h1 className="card-value">
                      231 <span className="tx-color-03">hours</span>
                    </h1>
                    <div className="chart-wrapper">
                      <div id="flotChart4" className="flot-chart" />
                    </div>
                  </div>
                  <p className="card-desc">
                    Outstanding Payments in the SCB Account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-sm mg-t-15 mg-sm-t-20">
            <div className="col-sm-6 col-xl">
              <div className="card card-hover card-todo">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">To-Do Tasks</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="list-group-header">
                      <span className="bg-purple" />
                      <span className="bg-success" />
                      <a href className="link-03 mg-l-auto">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                    <h6 className="tx-13 mg-b-3">
                      <a href className="link-01">
                        Javascript countdown timer link
                      </a>
                    </h6>
                    <p className="todo-date">Today, July 29, 2019</p>
                    <div className="card-progress">
                      <label className="content-label mg-b-0">Progress</label>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="content-label mg-b-0">0%</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <a href className="avatar-add">
                          <i data-feather="plus" className="svg-12" />
                        </a>
                      </div>
                      <span className="badge badge-warning">Javascript</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-header">
                      <span className="bg-blue" />
                      <a href className="link-03 mg-l-auto">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                    <h6 className="tx-13 mg-b-3">
                      <a href className="link-01">
                        Track in HTML 5
                      </a>
                    </h6>
                    <p className="todo-date">Today, July 29, 2019</p>
                    <div className="card-progress">
                      <label className="content-label mg-b-0">Progress</label>
                      <div className="progress">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={0}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="content-label mg-b-0">0%</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <a href className="avatar-add">
                          <i data-feather="plus" className="svg-12" />
                        </a>
                      </div>
                      <span className="badge bg-orange tx-white">HTML</span>
                    </div>
                  </li>
                </ul>
                <div className="card-footer bg-transparent bd-t-0">
                  <a href className="btn btn-block">
                    <i className="icon ion-plus tx-12" /> Add Task
                  </a>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-xl mg-t-15 mg-sm-t-0">
              <div className="card card-hover card-todo">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">In Progress Tasks</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="list-group-header">
                      <span className="bg-pink" />
                      <span className="bg-blue" />
                      <a href className="link-03 mg-l-auto">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                    <h6 className="tx-13 mg-b-3">
                      <a href className="link-01">
                        Making a beautiful CSS3 button
                      </a>
                    </h6>
                    <p className="todo-date">Today, July 29, 2019</p>
                    <div className="card-progress">
                      <label className="content-label mg-b-0">Progress</label>
                      <div className="progress">
                        <div
                          className="progress-bar wd-50p"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="content-label mg-b-0">50%</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <a href className="avatar-add">
                          <i data-feather="plus" className="svg-12" />
                        </a>
                      </div>
                      <span className="badge badge-primary">CSS</span>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="list-group-header">
                      <span className="bg-green" />
                      <a href className="link-03 mg-l-auto">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                    <h6 className="tx-13 mg-b-3">
                      <a href className="link-01">
                        Create a graph of all classes
                      </a>
                    </h6>
                    <p className="todo-date">Today, July 29, 2019</p>
                    <div className="card-progress">
                      <label className="content-label mg-b-0">Progress</label>
                      <div className="progress">
                        <div
                          className="progress-bar wd-65p"
                          role="progressbar"
                          aria-valuenow={65}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                      <label className="content-label mg-b-0">65%</label>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="avatar-group">
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <div className="avatar avatar-xxs">
                          <img
                            src="https://via.placeholder.com/500/637382/fff"
                            className="rounded-circle"
                            alt
                          />
                        </div>
                        <a href className="avatar-add">
                          <i data-feather="plus" className="svg-12" />
                        </a>
                      </div>
                      <span className="badge bg-danger tx-white">Ruby</span>
                    </div>
                  </li>
                </ul>
                <div className="card-footer bg-transparent bd-t-0">
                  <a href className="btn btn-block">
                    <i className="icon ion-plus tx-12" /> Add Task
                  </a>
                </div>
              </div>
            </div>

            <div className="col-xl-5 mg-t-15 mg-sm-t-20 mg-xl-t-0">
              <div className="card card-hover card-projects">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">Recent Projects</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <nav className="nav nav-card-icon">
                      <a href>
                        <i data-feather="activity" className="svg-16" />
                      </a>
                      <a href>
                        <i data-feather="bar-chart-2" className="svg-16" />
                      </a>
                      <a href>
                        <i data-feather="chevron-down" className="svg-16" />
                      </a>
                    </nav>
                    <div className="media">
                      <div className="project-logo bg-primary tx-white">
                        <i data-feather="aperture" />
                      </div>
                      <div className="media-body mg-l-10 mg-sm-l-15">
                        <p className="tx-13 tx-color-04 mg-b-5">
                          Themepixels, Inc.
                        </p>
                        <h5 className="tx-color-01 mg-b-0">
                          Tiger Wave Premium
                        </h5>
                      </div>
                    </div>

                    <p className="project-desc">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis.
                    </p>
                    <small className="project-deadline">
                      End Date: July 29, 2019
                    </small>
                  </li>
                  <li className="list-group-item">
                    <nav className="nav nav-card-icon">
                      <a href>
                        <i data-feather="activity" className="svg-16" />
                      </a>
                      <a href>
                        <i data-feather="bar-chart-2" className="svg-16" />
                      </a>
                      <a href>
                        <i data-feather="chevron-down" className="svg-16" />
                      </a>
                    </nav>
                    <div className="media">
                      <div className="project-logo bg-green tx-white">
                        <i data-feather="music" />
                      </div>
                      <div className="media-body mg-l-10 mg-sm-l-15">
                        <p className="tx-13 tx-color-04 mg-b-5">
                          Spotify, Inc.
                        </p>
                        <h5 className="tx-color-01 mg-b-0">
                          K3A20 Music Player
                        </h5>
                      </div>
                    </div>

                    <p className="project-desc">
                      Et harum quidem rerum facilis est et expedita distinctio.
                      Nam libero tempore, cum soluta nobis.
                    </p>
                    <small className="project-deadline">
                      End Date: July 28, 2019
                    </small>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-xl-9 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-active-projects">
                <div className="card-header bg-transparent pd-15">
                  <h6 className="card-title mg-b-0">Active Projects</h6>
                  <nav className="nav align-items-center">
                    <span className="mg-r-5">Sort by:</span>
                    <a href>
                      <strong>Date Added</strong>{" "}
                      <i className="icon ion-ios-arrow-down" />
                    </a>
                  </nav>
                </div>

                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="media">
                      <div className="project-img">
                        <img src="../assets/img/img16.png" alt />
                      </div>
                      <div className="media-body mg-t-10 mg-md-t-0 mg-md-l-10">
                        <h6 className="project-title">
                          <a href>Bootstrap Boilerplate</a>
                        </h6>
                      </div>
                    </div>

                    <div className="progress-wrapper">
                      <div className="progress-label">
                        <span>Progress</span>
                        <span>45%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar wd-45p"
                          role="progressbar"
                          aria-valuenow={45}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>

                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <a href className="avatar-add">
                        <i data-feather="plus" className="svg-12" />
                      </a>
                    </div>
                    <div className="project-date-end bg-warning-light">
                      End Date: Aug 15, 2019
                    </div>
                    <div>
                      <a href className="link-04">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="project-img bg-warning">
                        <i data-feather="sidebar" className="svg-18" />
                      </div>
                      <div className="media-body mg-t-10 mg-md-t-0 mg-md-l-10">
                        <h6 className="project-title">
                          <a href>Flexbox Grid System</a>
                        </h6>
                      </div>
                    </div>

                    <div className="progress-wrapper">
                      <div className="progress-label">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-green wd-65p"
                          role="progressbar"
                          aria-valuenow={65}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <a href className="avatar-add">
                        <i data-feather="plus" className="svg-12" />
                      </a>
                    </div>
                    <div className="project-date-end bg-success-light">
                      End Date: Aug 20, 2019
                    </div>
                    <div>
                      <a href className="link-04">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="project-img bg-primary tx-white">
                        <i data-feather="mouse-pointer" className="svg-18" />
                      </div>
                      <div className="media-body mg-t-10 mg-md-t-0 mg-md-l-10">
                        <h6 className="project-title">
                          <a href>Navigation Starter</a>
                        </h6>
                      </div>
                    </div>
                    {/* media */}
                    <div className="progress-wrapper">
                      <div className="progress-label">
                        <span>Progress</span>
                        <span>65%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-green wd-65p"
                          role="progressbar"
                          aria-valuenow={65}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <a href className="avatar-add">
                        <i data-feather="plus" className="svg-12" />
                      </a>
                    </div>
                    <div className="project-date-end bg-primary-light">
                      End Date: Aug 20, 2019
                    </div>
                    <div>
                      <a href className="link-04">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="project-img bg-danger tx-white">
                        <i data-feather="code" className="svg-20" />
                      </div>
                      <div className="media-body mg-t-10 mg-md-t-0 mg-md-l-10">
                        <h6 className="project-title">
                          <a href>Angular Starter App</a>
                        </h6>
                      </div>
                    </div>
                    {/* media */}
                    <div className="progress-wrapper">
                      <div className="progress-label">
                        <span>Progress</span>
                        <span>20%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-warning wd-20p"
                          role="progressbar"
                          aria-valuenow={20}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <a href className="avatar-add">
                        <i data-feather="plus" className="svg-12" />
                      </a>
                    </div>
                    <div className="project-date-end bg-primary-light">
                      End Date: Aug 31, 2019
                    </div>
                    <div>
                      <a href className="link-04">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="project-img bg-blue tx-bran-04">
                        <i data-feather="coffee" className="svg-20" />
                      </div>
                      <div className="media-body mg-t-10 mg-md-t-0 mg-md-l-10">
                        <h6 className="project-title">
                          <a href>New Java Framework</a>
                        </h6>
                      </div>
                    </div>
                    {/* media */}
                    <div className="progress-wrapper">
                      <div className="progress-label">
                        <span>Progress</span>
                        <span>10%</span>
                      </div>
                      <div className="progress">
                        <div
                          className="progress-bar bg-danger wd-10p"
                          role="progressbar"
                          aria-valuenow={10}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <a href className="avatar-add">
                        <i data-feather="plus" className="svg-12" />
                      </a>
                    </div>
                    <div className="project-date-end bg-success-light">
                      End Date: Sep 10, 2019
                    </div>
                    <div>
                      <a href className="link-04">
                        <i data-feather="more-horizontal" className="svg-16" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              {/* card */}
            </div>

            <div className="col-sm-6 col-xl-3 mg-t-15 mg-sm-t-20 order-sm-1 order-xl-0">
              <div className="card card-hover card-project-pink">
                <div className="card-body">
                  <div className="project-logo bg-pink tx-white mg-b-15">
                    <i data-feather="package" />
                  </div>
                  <label className="content-label tx-9 mg-b-5">
                    Web Design
                  </label>
                  <h5 className="card-title">
                    <a href>Style Ranger Plus</a>
                  </h5>
                  <p className="tx-12 tx-color-03">
                    Nam libero tempore, cum soluta nobis quidem rerum facilis
                    est et expedita distincti.
                  </p>
                  <div className="card-progress">
                    <label className="content-label mg-b-0">Progress</label>
                    <div className="progress">
                      <div
                        className="progress-bar bg-pink wd-65p"
                        role="progressbar"
                        aria-valuenow={65}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <label className="content-label mg-b-0">65%</label>
                  </div>
                  <div className="avatar-group mg-b-25">
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/300/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/300/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <a href className="avatar-add">
                      <i data-feather="plus" className="svg-14" />
                    </a>
                  </div>
                  <a href className="btn btn-sm btn-block btn-pink">
                    Project Details{" "}
                    <i className="icon ion-android-arrow-forward mg-l-5" />
                  </a>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-project-two">
                <div className="card-header bg-transparent">
                  <div>
                    <h6 className="mg-b-5">Logo Design</h6>
                    <span>Last updated: Yesterday 10:15am</span>
                  </div>
                  <nav className="nav nav-card-icon">
                    <a href>
                      <i data-feather="check-square" className="svg-14" /> 21
                    </a>
                    <a href>
                      <i data-feather="message-square" className="svg-14" /> 85
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <p className="tx-13 tx-gray-700">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deser.
                  </p>
                  <div className="card-progress">
                    <label className="content-label mg-b-0">Progress</label>
                    <div className="progress">
                      <div
                        className="progress-bar bg-danger wd-25p"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <label className="content-label mg-b-0">25%</label>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="badge bg-blue tx-white">Ongoing</div>
                  <div className="project-date-end">End: Aug 15, 2019</div>
                  <div className="avatar-group">
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/300/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/300/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <span className="avatar-initial rounded-circle bg-dark">
                        a
                      </span>
                    </div>
                  </div>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-project-two">
                <div className="card-header bg-transparent">
                  <div>
                    <h6 className="mg-b-5">Angular Development</h6>
                    <span>Last updated: Jul 30, 2019 4:00pm</span>
                  </div>
                  <nav className="nav nav-card-icon">
                    <a href>
                      <i data-feather="check-square" className="svg-14" /> 15
                    </a>
                    <a href>
                      <i data-feather="message-square" className="svg-14" /> 0
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <p className="tx-13 tx-gray-700">
                    Sunt in culpa qui officia deserunt mol excepteur sint
                    occaecat.
                  </p>
                  <div className="card-progress">
                    <label className="content-label mg-b-0">Progress</label>
                    <div className="progress">
                      <div
                        className="progress-bar bg-green wd-70p"
                        role="progressbar"
                        aria-valuenow={70}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <label className="content-label mg-b-0">70%</label>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="badge badge-success">Completed</div>
                  <div className="project-date-end">Ended: Jul 15, 2019</div>
                  <div className="avatar-group">
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/500/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/500/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <span className="avatar-initial rounded-circle bg-dark">
                        a
                      </span>
                    </div>
                  </div>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-project-two">
                <div className="card-header bg-transparent">
                  <div>
                    <h6 className="mg-b-5">React Development</h6>
                    <span>Last updated: Jul 30, 2019 4:00pm</span>
                  </div>
                  <nav className="nav nav-card-icon">
                    <a href>
                      <i data-feather="check-square" className="svg-14" /> 40
                    </a>
                    <a href>
                      <i data-feather="message-square" className="svg-14" /> 6
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <p className="tx-13 tx-gray-700">
                    Sunt in culpa qui officia deserunt mol excep teur sint occa
                    ecat cupi datat non
                  </p>
                  <div className="card-progress">
                    <label className="content-label mg-b-0">Progress</label>
                    <div className="progress">
                      <div
                        className="progress-bar wd-90p"
                        role="progressbar"
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <label className="content-label mg-b-0">90%</label>
                  </div>
                </div>
                <div className="card-footer bg-transparent">
                  <div className="badge badge-danger">Overdue</div>
                  <div className="project-date-end">Ended: Jul 15, 2019</div>
                  <div className="avatar-group">
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/500/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <img
                        src="https://via.placeholder.com/500/637382/fff"
                        className="rounded-circle"
                        alt
                      />
                    </div>
                    <div className="avatar avatar-xxs">
                      <span className="avatar-initial rounded-circle bg-dark">
                        a
                      </span>
                    </div>
                  </div>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>

            <div className="col-xl-6 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-project-three">
                <div className="card-body">
                  <label className="content-label tx-600 tx-success mg-b-5">
                    Food &amp; Craft
                  </label>
                  <h5 className="project-title">
                    <a href>The Healthier Way to Cook</a>
                  </h5>
                  <p className="tx-13 tx-gray-600">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mol. Excepteur sint occaecat
                    cupidatat non proident.
                  </p>
                  <div className="project-data-group mg-b-25">
                    <div>
                      <h3>
                        <span>$</span>3,742
                      </h3>
                      <label>129.5% Funded</label>
                    </div>
                    <div>
                      <h3>
                        <span>$</span>2,430
                      </h3>
                      <label>Pledged Goal</label>
                    </div>
                    <div>
                      <h3>
                        68.4<span>%</span>
                      </h3>
                      <label>Working Progress</label>
                    </div>
                  </div>
                  {/* project-data group */}
                  <div className="d-flex align-items-center">
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <span className="avatar-initial rounded-circle bg-green">
                          m
                        </span>
                      </div>
                      <div className="avatar avatar-xxs">
                        <span className="avatar-initial rounded-circle bg-primary">
                          x
                        </span>
                      </div>
                      <div className="avatar avatar-xxs">
                        <span className="avatar-initial rounded-circle bg-purple">
                          b
                        </span>
                      </div>
                    </div>
                    <span className="tx-sans tx-12 tx-color-03 mg-l-5">
                      20 backers
                    </span>
                    <span className="tx-sans tx-12 tx-color-03 mg-l-auto">
                      End Date: 2 days to go
                    </span>
                  </div>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>

            <div className="col-xl-6 mg-t-15 mg-sm-t-20">
              <div className="card card-project-three card-project-green">
                <div className="card-body">
                  <div className="marker marker-ribbon marker-success marker-top-right pos-absolute t-10 r-0">
                    Editor's Choice
                  </div>
                  <label className="content-label tx-600 tx-success mg-b-5">
                    Comics &amp; Illustration
                  </label>
                  <h5 className="project-title">
                    <a href>Our Super Antarctic Adventure: The Comic</a>
                  </h5>
                  <p className="tx-13 tx-gray-600">
                    Sunt in culpa qui officia deserunt mol. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mol.
                  </p>
                  <div className="project-data-group mg-b-25">
                    <div>
                      <h3>
                        <span>$</span>280
                      </h3>
                      <label>15% Funded</label>
                    </div>
                    <div>
                      <h3>
                        <span>$</span>6,000
                      </h3>
                      <label>Pledged Goal</label>
                    </div>
                    <div>
                      <h3>
                        18<span>%</span>
                      </h3>
                      <label>Working Progress</label>
                    </div>
                  </div>
                  {/* project-data group */}
                  <div className="d-flex align-items-center">
                    <div className="avatar-group">
                      <div className="avatar avatar-xxs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xxs">
                        <span className="avatar-initial rounded-circle bg-primary">
                          f
                        </span>
                      </div>
                    </div>
                    <span className="tx-sans tx-12 tx-color-03 mg-l-5">
                      2 backers
                    </span>
                    <span className="tx-sans tx-12 tx-color-03 mg-l-auto">
                      End Date: Sep 30, 2019
                    </span>
                  </div>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>

            <div className="col-xl-8 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-calendar-one">
                <div className="row no-gutters">
                  <div className="col-sm order-1 order-sm-0">
                    <div className="card-header bg-transparent pd-y-15 pd-l-20 pd-r-15 bd-b-0">
                      <div>
                        <h6 className="card-title mg-b-0">Upcoming Events</h6>
                      </div>
                      <nav className="nav">
                        <a href className="link-gray-500">
                          <i data-feather="help-circle" className="svg-16" />
                        </a>
                        <a href className="link-gray-500">
                          <i data-feather="more-vertical" className="svg-16" />
                        </a>
                      </nav>
                    </div>
                    <div className="card-body pd-t-0">
                      <ul className="list-unstyled mg-b-0">
                        <li>
                          <h6 className="tx-13 mg-b-3">
                            <a href>Best Responsive Web Design Using CSS</a>{" "}
                            <span className="bg-blue" />
                          </h6>
                          <p className="tx-12 tx-color-04 mg-b-10">
                            Today, 8:00am - 11:00am
                          </p>
                          <div className="avatar-group">
                            <div className="avatar avatar-xxs">
                              <img
                                src="https://via.placeholder.com/500/637382/fff"
                                className="rounded-circle"
                                alt
                              />
                            </div>
                            <div className="avatar avatar-xxs">
                              <img
                                src="https://via.placeholder.com/500/637382/fff"
                                className="rounded-circle"
                                alt
                              />
                            </div>
                            <div className="avatar avatar-xxs">
                              <img
                                src="https://via.placeholder.com/500/637382/fff"
                                className="rounded-circle"
                                alt
                              />
                            </div>
                            <div className="avatar avatar-xxs">
                              <span className="avatar-initial rounded-circle bg-secondary">
                                3+
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <h6 className="tx-13 mg-b-3">
                            <a href>HTML Interview Questions and Answers</a>{" "}
                            <span className="bg-pink" />
                          </h6>
                          <p className="tx-12 tx-color-04 mg-b-10">
                            Today, 1:00pm - 5:00pm
                          </p>
                          <div className="avatar-group">
                            <div className="avatar avatar-xxs">
                              <img
                                src="https://via.placeholder.com/500/637382/fff"
                                className="rounded-circle"
                                alt
                              />
                            </div>
                            <div className="avatar avatar-xxs">
                              <span className="avatar-initial rounded-circle bg-dark">
                                a
                              </span>
                            </div>
                            <div className="avatar avatar-xxs">
                              <img
                                src="https://via.placeholder.com/500/637382/fff"
                                className="rounded-circle"
                                alt
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-sm">
                    <div className="ht-100p bd-sm-l pd-x-15 pd-sm-x-20 pd-t-15 pd-sm-t-20 pd-b-15">
                      <div id="datepicker1" />
                    </div>
                  </div>
                </div>
              </div>
              {/* card */}
            </div>

            <div className="col-sm-6 col-xl-4 mg-t-15 mg-sm-t-20 order-sm-2 order-xl-0">
              <div className="card card-hover card-event-one">
                <div className="card-body">
                  <div className="event-logo bg-teal tx-white mg-b-15">
                    <i data-feather="calendar" />
                  </div>
                  <h6 className="event-title">
                    <a href>10th Dance Competition 2019</a>
                  </h6>
                  <p className="event-desc">
                    Sunt in culpa qui officia deserunt mol excep teur sint occa
                    ecat cupi datat non
                  </p>
                  <div className="d-flex align-items-center mg-b-15">
                    <div className="avatar-group">
                      <div className="avatar avatar-xs">
                        <span className="avatar-initial rounded-circle bg-purple">
                          p
                        </span>
                      </div>
                      <div className="avatar avatar-xs">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="avatar avatar-xs">
                        <span className="avatar-initial rounded-circle bg-pink">
                          m
                        </span>
                      </div>
                    </div>
                    <span className="tx-11 tx-gray-500 mg-l-5">
                      10+ friends are coming
                    </span>
                  </div>
                  <a href className="btn btn-block btn-sm btn-primary">
                    Get Tickets Now
                  </a>
                </div>
                {/* card-body */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-contact-one">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">Recently Contacted</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="avatar avatar-online">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="list-body">
                        <h6>Katherine Lumaad</h6>
                        <p>katherine@themepixels.me</p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="message-square" />
                        </a>
                        <a href>
                          <i data-feather="mail" />
                        </a>
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar avatar-online">
                        <span className="avatar-initial rounded-circle bg-primary">
                          m
                        </span>
                      </div>
                      <div className="list-body">
                        <h6>Marie Recamadas</h6>
                        <p>(0929) 1234 567</p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="phone" />
                        </a>
                        <a href>
                          <i data-feather="video" />
                        </a>
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar avatar-offline">
                        <span className="avatar-initial rounded-circle bg-green">
                          r
                        </span>
                      </div>
                      <div className="list-body">
                        <h6>Rose Faye Orcullo</h6>
                        <p>(0929) 0098 765</p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="phone" />
                        </a>
                        <a href>
                          <i data-feather="video" />
                        </a>
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar avatar-offline">
                        <span className="avatar-initial rounded-circle bg-purple">
                          g
                        </span>
                      </div>
                      <div className="list-body">
                        <h6>George Patinos</h6>
                        <p>(0929) 0987 654</p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="phone" />
                        </a>
                        <a href>
                          <i data-feather="video" />
                        </a>
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar avatar-online">
                        <img
                          src="https://via.placeholder.com/500/637382/fff"
                          className="rounded-circle"
                          alt
                        />
                      </div>
                      <div className="list-body">
                        <h6>Daryl Anne Smith</h6>
                        <p>(0123) 4567 890</p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="phone" />
                        </a>
                        <a href>
                          <i data-feather="video" />
                        </a>
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                  </ul>
                </div>
                {/* card-body */}
                <div className="card-footer bg-transparent">
                  <a href className="link-03">
                    View All Contacts (525){" "}
                    <i className="icon ion-android-arrow-forward" />
                  </a>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-event-two">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">Events This Month</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <ul className="list-unstyled media-list mg-b-0">
                    <li className="media">
                      <div className="media-left">
                        <label>Sat</label>
                        <p>03</p>
                      </div>
                      <div className="media-body event-panel-green">
                        <span className="event-time">8:00am - 10:30am</span>
                        <h6 className="event-title">Web Design Workshop</h6>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <label>Wed</label>
                        <p>07</p>
                      </div>
                      <div className="media-body event-panel-pink">
                        <span className="event-time">10:00 - 11:00am</span>
                        <h6 className="event-title">Personal Religous Event</h6>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <label>Thu</label>
                        <p>08</p>
                      </div>
                      <div className="media-body event-panel-primary">
                        <span className="event-time">1:00pm - 2:00am</span>
                        <h6 className="event-title">
                          Batch 2012 Grand Reunion
                        </h6>
                        <p className="event-desc">
                          Duis aute irure dolor in repre hende rit i...
                        </p>
                      </div>
                    </li>
                    <li className="media">
                      <div className="media-left">
                        <label>Mon</label>
                        <p>23</p>
                      </div>
                      <div className="media-body event-panel-orange">
                        <span className="event-time">1:00pm - 2:00am</span>
                        <h6 className="event-title">Front-End Wizard Meetup</h6>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* card-body */}
                <div className="card-footer bg-transparent">
                  <a href className="link-03">
                    Explore More Events{" "}
                    <i className="icon ion-android-arrow-forward" />
                  </a>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>

            <div className="col-md-6 col-xl-4 mg-t-15 mg-sm-t-20">
              <div className="card card-hover card-notification-one">
                <div className="card-header bg-transparent pd-y-15 pd-l-15 pd-r-10">
                  <h6 className="card-title mg-b-0">Notifications</h6>
                  <nav className="nav">
                    <a href className="link-gray-500">
                      <i data-feather="help-circle" className="svg-16" />
                    </a>
                    <a href className="link-gray-500">
                      <i data-feather="more-vertical" className="svg-16" />
                    </a>
                  </nav>
                </div>
                {/* card-header */}
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-pink">
                          <i data-feather="clock" className="svg-14" />
                        </span>
                      </div>
                      <div className="list-body">
                        <p className="mg-b-0">
                          Add business hours to your{" "}
                          <strong>Business Page</strong> so it's easy for people
                          to plan a visit. <span>2 hours ago</span>
                        </p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-warning">
                          <i data-feather="calendar" className="svg-16" />
                        </span>
                      </div>
                      <div className="list-body">
                        <p className="mg-b-0">
                          <strong>Edsel Santillana</strong> invited you to join
                          the event{" "}
                          <strong>Annual Business Product Showcase</strong>.{" "}
                          <span>Yesterday</span>
                        </p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-primary">
                          <i data-feather="calendar" className="svg-16" />
                        </span>
                      </div>
                      <div className="list-body">
                        <p className="mg-b-0">
                          <strong>Dyanne Aceron</strong> added some feedback to
                          your event. <span>Yesterday</span>
                        </p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                    <li className="list-group-item">
                      <div className="avatar">
                        <span className="avatar-initial rounded-circle bg-blue">
                          <i data-feather="shopping-bag" className="svg-16" />
                        </span>
                      </div>
                      <div className="list-body">
                        <p className="mg-b-0">
                          <strong>Reynante Labares</strong> invited you to like
                          his <strong>Online Shop</strong>. <span>Jul 31</span>
                        </p>
                      </div>
                      <nav className="nav">
                        <a href>
                          <i data-feather="more-vertical" />
                        </a>
                      </nav>
                    </li>
                  </ul>
                </div>
                {/* card-body */}
                <div className="card-footer bg-transparent">
                  <a href className="link-03">
                    Show All Notifications{" "}
                    <i className="icon ion-android-arrow-forward" />
                  </a>
                </div>
                {/* card-footer */}
              </div>
              {/* card */}
            </div>
          </div>
          {/* row */}
        </div>
        {/* content-body */}
      </article>
    </Layout>
  );
};

export default Updates;
