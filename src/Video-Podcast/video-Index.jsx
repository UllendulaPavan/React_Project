import { AddVideo } from "./add-video";
import { AdminDashboard } from "./admin-dashboard";
import { AdminLogin } from "./Admin-login";
import { DeleteVideo } from "./video-Delete";
import { EditVideo } from "./video-Edit";
import { VideoHome } from "./video-Home";
import "./video-image.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { UserLogin } from "./video.User";
import { UserRegister } from "./user-register";
import { UserDashboard } from "./user-doshboard";

export function VideoIndex() {
  return (
    <div className="bg-banner">
      <BrowserRouter>
        <header className="text-center p-2 text-white">
          <div className="fs-1 fw-bold">
            {" "}
            <Link to="/" className="btn btn-light">
              <span className="bi bi-house-door"></span>
            </Link>{" "}
            Video Podcast
          </div>
          <div>[Java, .NET, React]</div>
        </header>
        <section className="p-5">
          <Routes>
            <Route path="/" element={<VideoHome />} />
            <Route path="admin-login" element={<AdminLogin />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="add-video" element={<AddVideo />} />
            <Route path="delete-video/:id" element={<DeleteVideo />} />
            <Route path="edit-video/:id" element={<EditVideo />} />
            <Route path="user-login" element={<UserLogin />} />
            <Route path="user-register" element={<UserRegister />} />
            <Route path="user-dashboard" element={<UserDashboard />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  );
}
