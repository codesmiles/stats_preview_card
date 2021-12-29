import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import image from "./images/image-header-desktop.jpg";
function App() {
  const head = `Get insights that help your business grow.`;
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
          <div className="col-md-6">
            <h1>{head}</h1>
            <p>{content}</p>
            <ul>
              {blogs.map((blog) => (
                <li key={blog.id} style={{ listStyleType: "none" }}>
                  <h3>{blog.number}</h3>
                  <p>{blog.value}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <img src={image} alt="" />
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
