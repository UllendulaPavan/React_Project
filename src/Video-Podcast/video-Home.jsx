import { Link } from "react-router-dom";

export function VideoHome() {
  return (
    <div className="text-center">
      <h3 className="text-center text-white">Video Home</h3>
      <div className="mt-4">
        <Link to="/admin-login" className="btn btn-light">
          {" "}
          Admin{" "}
        </Link>
        <Link to="/user-login" className="btn btn-warning mx-2">
          {" "}
          User{" "}
        </Link>
      </div>
    </div>
  );
}
