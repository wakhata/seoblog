import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { list, removeMember } from "../../actions/member";
import moment from "moment";

const MemberRead = ({ cname }) => {
  const [members, setMembers] = useState([]);
  const [message, setMessage] = useState("");
  const token = getCookie("token");

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = () => {
    list(cname).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMembers(data);
      }
    });
  };

  const deleteMember = (slug) => {
    removeMember(slug, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
        loadMembers();
      }
    });
  };

  const deleteConfirm = (slug) => {
    let answer = window.confirm("Are you sure you want to delete your member?");
    if (answer) {
      deleteMember(slug);
    }
  };

  const showUpdateButton = (member) => {
    if (isAuth() && isAuth().role === 0) {
      return (
        <Link href={`/user/${member.slug}`}>
          <a className="ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    } else if (isAuth() && isAuth().role === 1) {
      return (
        <Link href={`/admin/${member.slug}`}>
          <a className="ml-2 btn btn-sm btn-warning">Update</a>
        </Link>
      );
    }
  };

  const showAllMembers = () => {
    return members.map((member, i) => {
      return (
        <div key={i} className="pb-3">
          <h3>{member.cname}</h3>
          <p className="mark">
            Registered by {member.postedBy.name} | Published on{" "}
            {moment(member.updatedAt).fromNow()}
          </p>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteConfirm(member.slug)}
          >
            Delete
          </button>
          {showUpdateButton(member)}
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          {message && <div className="alert alert-warning">{message}</div>}
          {showAllMembers()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default MemberRead;
