import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
import Layout from "../../components/Layout";
import { useState } from "react";
import { listMembersWithCategoriesAndTags } from "../../actions/member";
import Card from "../../components/blog/Card";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import Search from "../../components/blog/Search";
import moment from "moment";

const Members = ({
  members,
  categories,
  tags,
  totalMembers,
  membersLimit,
  memberSkip,
  router,
}) => {
  // Show all the members

  const showAllMembers = () => {
    return members.map((member, i) => {
      // ()
      return (
        <div className="col-md-3" key={i}>
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
              <h2 className="text-shadow text-center h1">{member.cname}</h2>
            </div>
            <div className="back text-center">
              <Link href={`/members/${member.cname}`}>
                <a>
                  <h3 className="h1">{member.cname}</h3>
                </a>
              </Link>
              <p className="lead">
                Registered: {moment(member.createdAt).fromNow()}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <Layout>
      <div className="container-fluid pt-2">
        <div className="card card-hover card-task-one">
          <div className="card-header">
            <div className="col-md-12 text-center">
              <h1 className="display-5 font-weight-bold">EXECUTIVE</h1>
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
        <div className="divider-text">All UCLA Members</div>

        <div className="card card-hover card-task-one">
          <Search />
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-primary table-hover table-striped mg-b-0 ">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Job Title</th>
                    <th scope="col">Degree</th>
                    <th scope="col">Salary</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Adrian Monino</td>
                    <td>Front-End Engineer</td>
                    <td>Computer Science</td>
                    <td>$120,000</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Socrates Itumay</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$150,000</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Reynante Labares</td>
                    <td>Product Manager</td>
                    <td>Business Management</td>
                    <td>$250,000</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Hamza Macasindil</td>
                    <td>Software Engineer</td>
                    <td>Computer Engineering</td>
                    <td>$140,000</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Roven Galeon</td>
                    <td>Project Manager</td>
                    <td>Accountancy</td>
                    <td>$160,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">{showAllMembers()}</div>
        </div>
      </div>
    </Layout>
  );
};

Members.getInitialProps = () => {
  let skip = 0;
  let limit = 5;
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
