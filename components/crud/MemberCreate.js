import Link from "next/link";
import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { createMember } from "../../actions/member";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";

const CreateMember = ({ router }) => {
  const memberFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }
    if (localStorage.getItem("member")) {
      return JSON.parse(localStorage.getItem("member"));
    } else {
      return false;
    }
  };
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags
  const [body, setBody] = useState(memberFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    hideSubmitButton: false,
  });
  const {
    error,
    sizeError,
    success,
    formData,
    cname,
    contact,
    mobile,
    address,
    location,
    email,
    hideSubmitButton,
  } = values;
  const token = getCookie("token");
  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initCategories();
    initTags();
  }, [router]);
  const initCategories = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setCategories(data);
      }
    });
  };
  const initTags = () => {
    getTags().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setTags(data);
      }
    });
  };
  const submitMember = (e) => {
    e.preventDefault();
    createMember(formData, token).then((data) => {
      console.log(data);
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          cname: "",
          contact: "",
          address: "",
          location: "",
          mobile: "",
          email: "",
          error: "",
          success: `A new member named "${data.cname}" has been registered in UCLA Directory`,
        });
        setBody("");
        setCategories([]);
        setTags([]);
      }
    });
  };
  const handleChange = (name) => (e) => {
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };
  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("member", JSON.stringify(e));
    }
  };
  const handleToggle = (c) => () => {
    setValues({ ...values, error: "" });
    const clickedCategory = checked.indexOf(c);
    const all = [...checked];
    if (clickedCategory === -1) {
      all.push(c);
    } else {
      all.splice(clickedCategory, 1);
    }
    console.log(all);
    setChecked(all);
    formData.set("categories", all);
  };
  const handleTagsToggle = (t) => () => {
    setValues({ ...values, error: "" });
    const clickedTag = checked.indexOf(t);
    const all = [...checkedTag];
    if (clickedTag === -1) {
      all.push(t);
    } else {
      all.splice(clickedTag, 1);
    }
    console.log(all);
    setCheckedTag(all);
    formData.set("tags", all);
  };
  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(c._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{c.name}</label>
        </li>
      ))
    );
  };
  const showTags = () => {
    return (
      tags &&
      tags.map((t, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleTagsToggle(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };
  const showError = () => (
    <div
      className="alert alert-danger pt-3"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );
  const showSuccess = () => (
    <div
      className="alert alert-success pt-3"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );
  const CreateMemberForm = () => {
    return (
      <form onSubmit={submitMember}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={cname}
            onChange={handleChange("cname")}
            placeholder="Company name"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("contact")}
            placeholder="Contact Person"
            value={contact}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("mobile")}
            placeholder="Mobile number"
            value={mobile}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("address")}
            placeholder="Address"
            value={address}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            onChange={handleChange("email")}
            placeholder="Email"
            value={email}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            onChange={handleChange("location")}
            placeholder="Company location"
            value={location}
          />
        </div>
        <div className="form-group">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Write something amazing..."
            onChange={handleBody}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-info">
            Register New Member
          </button>
        </div>
      </form>
    );
  };
  return (
    <div className="card-body">
      <div className="row">
        <div className="col-md-12">
          {showError()}
          {showSuccess()}
        </div>
        <div className="col-md-9">{CreateMemberForm()}</div>
        <div className="col-md-3">
          <div>
            <div className="form-group pb-2">
              <h5>Featured image</h5>
              <small className="text-muted">Max size: 1mb</small>
              <div className="divider-text">Upload Image</div>
              <label className="btn btn-outline-info">
                Upload featured image
                <input
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  hidden
                />
              </label>
            </div>
          </div>
          <div>
            <h5>Categories</h5>
            <div className="divider-text">Categories</div>
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5>Tags</h5>
            <div className="divider-text">Tags</div>
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CreateMember);
