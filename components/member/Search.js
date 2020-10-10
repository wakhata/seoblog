import Link from "next/link";
import renderHTML from "react-render-html";
import { useState, useEffect } from "react";
import { memberSearch } from "../../actions/member";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    memberSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} member(s) found`,
      });
    });
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedMembers = (results = []) => {
    return (
      <div className="jumbotron bg-white">
        {message && <p className="pt-2 text-muted font-italic">{message}</p>}
        <div className="table-responsive">
          <table className="table table-primary table-hover table-striped mg-b-0 ">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Contact</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Location</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {results.map((member, i) => {
                return (
                  <tr key={i}>
                    <td scope="row">{member.cname}</td>
                    <td>{member.contact}</td>
                    <td>{member.mobile}</td>
                    <td>{member.email}</td>
                    <td>{member.address}</td>
                    <td>{member.location}</td>
                    <td>
                      <Link href={`/members/${member.slug}`}>
                        <a>View</a>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const searchForm = () => (
    <form onSubmit={searchSubmit}>
      <div className="row">
        <div className="col-md-9 pt-2">
          <input
            type="search"
            className="form-control"
            placeholder="Membership Directory"
            onChange={handleChange}
          />
        </div>

        <div className="col-md-3 pt-2">
          <button className="btn btn-block btn-outline-info" type="submit">
            Search
          </button>
        </div>
      </div>
    </form>
  );

  return (
    <div className="container-fluid">
      <div className="pt-1 pb-1">{searchForm()}</div>
      {searched && (
        <div
          className="pt-5"
          style={{ marginTop: "-120px", marginBottom: "-80px" }}
        >
          {searchedMembers(results)}
        </div>
      )}
    </div>
  );
};

export default Search;
