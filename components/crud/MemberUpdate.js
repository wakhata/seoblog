import { useState, useEffect } from "react";
import Router from "next/router";
import dynamic from "next/dynamic";
import { withRouter } from "next/router";
import { getCookie, isAuth } from "../../actions/auth";
import { getCategories } from "../../actions/category";
import { getTags } from "../../actions/tag";
import { singleMember, updateMember } from "../../actions/member";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
import { QuillModules, QuillFormats } from "../../helpers/quill";
import { API } from "../../config";

const MemberUpdate = ({ router }) => {
  const [body, setBody] = useState("");

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags

  const [values, setValues] = useState({
    error: "",
    success: "",
    formData: "",
    body: "",
  });

  const {
    error,
    success,
    formData,
    cname,
    contact,
    mobile,
    address,
    email,
    location,
  } = values;
  const token = getCookie("token");

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
    initMember();
    initCategories();
    initTags();
  }, [router]);

  const initMember = () => {
    if (router.query.slug) {
      singleMember(router.query.slug).then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          setValues({
            ...values,
            cname: data.cname,
            contact: data.contact,
            location: data.location,
            email: data.email,
            mobile: data.mobile,
            address: data.address,
          });
          setBody(data.body);
          setCategoriesArray(data.categories);
          setTagsArray(data.tags);
        }
      });
    }
  };

  const setCategoriesArray = (memberCategories) => {
    let ca = [];
    memberCategories.map((c, i) => {
      ca.push(c._id);
    });
    setChecked(ca);
  };

  const setTagsArray = (memberTags) => {
    let ta = [];
    memberTags.map((t, i) => {
      ta.push(t._id);
    });
    setCheckedTag(ta);
  };

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

  const handleToggle = (c) => () => {
    setValues({ ...values, error: "" });
    // return the first index or -1
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
    // return the first index or -1
    const clickedTag = checkedTag.indexOf(t);
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

  const findOutCategory = (c) => {
    const result = checked.indexOf(c);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const findOutTag = (t) => {
    const result = checkedTag.indexOf(t);
    if (result !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const showCategories = () => {
    return (
      categories &&
      categories.map((c, i) => (
        <li key={i} className="list-unstyled">
          <input
            onChange={handleToggle(c._id)}
            checked={findOutCategory(c._id)}
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
            checked={findOutTag(t._id)}
            type="checkbox"
            className="mr-2"
          />
          <label className="form-check-label">{t.name}</label>
        </li>
      ))
    );
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
    setBody(e);
    formData.set("body", e);
  };

  const editMember = (e) => {
    e.preventDefault();
    updateMember(formData, token, router.query.slug).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          cname: "",
          success: `Member titled "${data.cname}" is successfully updated`,
        });
        if (isAuth() && isAuth().role === 1) {
          // Router.replace(`/admin/crud/${router.query.slug}`);
          Router.replace(`/admin`);
        } else if (isAuth() && isAuth().role === 0) {
          // Router.replace(`/user/crud/${router.query.slug}`);
          Router.replace(`/user`);
        }
      }
    });
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

  const updateMemberForm = () => {
    return (
      <form onSubmit={editMember}>
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
    <div className="container-fluid pb-5">
      <div className="row">
        <div className="col-md-8">
          {updateMemberForm()}

          <div className="pt-3">
            {showSuccess()}
            {showError()}
          </div>

          {body && (
            <img
              src={`${API}/member/photo/${router.query.slug}`}
              alt={cname}
              style={{ width: "100%" }}
            />
          )}
        </div>

        <div className="col-md-4">
          <div>
            <div className="form-group pb-2">
              <h5>Featured image</h5>
              <hr />

              <small className="text-muted">Max size: 1mb</small>
              <br />
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
            <hr />

            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(MemberUpdate);
