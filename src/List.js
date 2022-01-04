import { useState } from "react";
// import "./App.css";
const List = () => {
    const [blogs] = useState([
    { number: "10k+", value: "companies", id: 1 },
    { number: `314`, value: " templates", id: 2 },
    { number: " 12m+", value: " queries", id: 3 },
  ]);
   
    return (
      <ul
        className="row mt-5  "
        style={{
          backgroundColor: "hsl(244,38%,16%)",
          listStyleType: "none",
          width: `100%`,
        
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
            <h3
              style={{
                backgroundColor: "hsl(244,38%,16%)",
              }}
            >
              {blog.number}
            </h3>
            <p
              style={{
                backgroundColor: "hsl(244,38%,16%)",
                color: ` hsla(0, 0%, 100%, 0.6)`,
              }}
            >
              {blog.value}
            </p>
          </li>
        ))}
      </ul>
    );
}
 
export default List;