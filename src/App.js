import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import image from "./images/image-header-desktop.jpg";
function App() {

  const content = `Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.`;
  const [blogs, setBlogs] = useState([
    { number: "10k+", value: "companies", id: 1 },
    { number: 314, value: " templates", id: 2 },
    { number: " 12m+", value: " queries", id: 3 },
  ]);
  return (
    <div className="App">
      <div
        className="container mt-5"
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <div className="row">
          <div className="col-md-6 p-5 left">
            <h1 style={{ backgroundColor: "hsl(244,38%,16%)" }}>
              Get <span>insights</span> that help your business grow.
            </h1>
            <p className="mt-4" style={{ backgroundColor: "hsl(244,38%,16%)" }}>
              {content}
            </p>
            <ul
              className="row mt-5 p-0"
              style={{
                backgroundColor: "hsl(244,38%,16%)",
                listStyleType: "none",
              }}
            >
              {blogs.map((blog) => (
                <li
                  className="col-4 mt-md-4"
                  key={blog.id}
                  style={{
                    backgroundColor: "hsl(244,38%,16%)",
                  }}
                >
                  <h3 style={{ backgroundColor: "hsl(244,38%,16%)" }}>
                    {blog.number}
                  </h3>
                  <p style={{ backgroundColor: "hsl(244,38%,16%)" }}>
                    {blog.value}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="col-md-6"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundColor: "#f5f5f5",
            }}
          >
            <img
              src={image}
              alt=""
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        {/* <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div> */}
      </div>
    </div>
  );
}

export default App;
