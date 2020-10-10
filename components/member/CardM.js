import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const CardM = ({ member }) => {
  const showMemberCategories = (member) =>
    member.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-2">{c.name}</a>
      </Link>
    ));

  const showMemberTags = (member) =>
    member.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-2">{t.name}</a>
      </Link>
    ));

  return (
    <div className="flip flip-horizontal">
      <div className="card">
        <img
          src={`${API}/member/photo/${member.slug}`}
          className="card-img-top"
          alt={member.cname}
        />
        <div className="card-body">
          <Link href={`/members/${member.slug}`}>
            <a>
              <h5 className="card-title">{member.cname}</h5>
            </a>
          </Link>
          <p className="card-text">
            <small className="text-muted">
              Registered: {moment(member.createdAt).fromNow()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardM;
