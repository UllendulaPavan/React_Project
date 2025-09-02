import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { AdminDashboard } from "./admin-dashboard";

export function AdminLogin() {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      admin_id: "",
      password: "",
    },
    onSubmit: (admin) => {
      axios.get("http://localhost:3000/admin").then((response) => {
        var result = response.data.find(
          (user) => user.admin_id === admin.admin_id
        );
        if (result) {
          if (admin.password === result.password) {
            window.sessionStorage.setItem("uname", result.admin_id);
            navigate("/admin-dashboard");
          } else {
            alert("Invalid Password");
          }
        } else {
          alert("invalid id");
          console.log(result);
        }
      });
    },
  });

  return (
    <div className="bg-light p-4 w-25">
      <h3>Admin Login</h3>
      <form onSubmit={formik.handleSubmit}>
        <dl>
          <dd>
            <TextField
              className="w-100"
              onChange={formik.handleChange}
              name="admin_id"
              label="Admin Id"
              variant="standard"
            />
          </dd>
          <dt>Password</dt>
          <dd>
            <input
              type="password"
              onChange={formik.handleChange}
              name="password"
              className="form-control"
            />
          </dd>
        </dl>
        <button type="submit" className="btn btn-warning">
          Login
        </button>

        <Link to="/" className="btn btn-danger mx-2">
          Cancel
        </Link>
      </form>
    </div>
  );
}
