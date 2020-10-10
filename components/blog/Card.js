import Link from "next/link";
import renderHTML from "react-render-html";
import moment from "moment";
import { API } from "../../config";

const Card = ({ blog }) => {
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-info mr-1 ml-1 mt-2">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-info mr-1 ml-1 mt-2">{t.name}</a>
      </Link>
    ));

  return (
    <div className="flip flip-horizontal">
      <div className="card">
        <img
          src={`${API}/blog/photo/${blog.slug}`}
          className="card-img-top"
          alt={blog.cname}
        />
        <div className="card-body">
          <Link href={`/blogs/${blog.slug}`}>
            <a>
              <h5 className="card-title text-center">{blog.title}</h5>
            </a>
          </Link>
          {/* <p className="card-text">
            <small className="text-muted">
              Registered: {moment(blog.createdAt).fromNow()}
            </small>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
