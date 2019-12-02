import React, { useState, useEffect } from "react"
// import { Link, useLocation, useHistory } from "react-router-dom"

const courses = [
  { id: 1, name: "React-Basic" },
  { id: 2, name: "React-Intermediate" },
  { id: 3, name: "React-Advance" },
  { id: 4, name: "Vue-Basic" },
  { id: 5, name: "Vue-Intermediate" },
  { id: 6, name: "Vue-Advance" },
  { id: 7, name: "Angular-Basic" },
  { id: 8, name: "Angular-Intermediate" },
  { id: 9, name: "Angular-Advance" }
]

const Courses = () => {
  const [showCourses, setShowCourses] = useState([...courses])
  const [query, setQuery] = useState(null)

  const handleClick = e => setQuery(e.target.value)

  useEffect(() => {
    if (!query || query === "all") {
      setShowCourses([...courses])
    } else if (query === "react") {
      setShowCourses([
        ...courses.filter(course => course.name.includes("React"))
      ])
    } else if (query === "vue") {
      setShowCourses([...courses.filter(course => course.name.includes("Vue"))])
    } else if (query === "angular") {
      setShowCourses([
        ...courses.filter(course => course.name.includes("Angular"))
      ])
    }
  }, [query])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px"
        }}
      >
        <button onClick={handleClick} value="all">
          All
        </button>
        <button onClick={handleClick} value="react">
          React
        </button>
        <button onClick={handleClick} value="vue">
          Vue
        </button>
        <button onClick={handleClick} value="angular">
          Angular
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridGap: "20px 30px"
        }}
      >
        {showCourses.map(course => (
          <div
            key={course.id}
            style={{
              border: "1px solid grey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              height: "60px"
            }}
          >
            <div>{course.name}</div>
          </div>
        ))}
      </div>
    </>
  )
}

// const Courses = () => {
//   const [showCourses, setShowCourses] = useState([...courses])
//   const { pathname, search } = useLocation()
//   const history = useHistory()

//   useEffect(() => {
//     const string = new URLSearchParams(search)
//     const query = string.get("query")

//     if (!query || query === "all") {
//       setShowCourses([...courses])
//     } else if (query === "react") {
//       setShowCourses([
//         ...courses.filter(course => course.name.includes("React"))
//       ])
//     } else if (query === "vue") {
//       setShowCourses([...courses.filter(course => course.name.includes("Vue"))])
//     } else if (query === "angular") {
//       setShowCourses([
//         ...courses.filter(course => course.name.includes("Angular"))
//       ])
//     } else {
//       history.push("/not-found")
//     }
//   }, [search, history])

//   return (
//     <>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-around",
//           marginBottom: "20px"
//         }}
//       >
//         <Link to={`${pathname}?query=all`}>
//           <button>All</button>
//         </Link>
//         <Link to={`${pathname}?query=react`}>
//           <button>React</button>
//         </Link>
//         <Link to={`${pathname}?query=vue`}>
//           <button>Vue</button>
//         </Link>
//         <Link to={`${pathname}?query=angular`}>
//           <button>Angular</button>
//         </Link>
//       </div>

//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr 1fr",
//           gridGap: "20px 30px"
//         }}
//       >
//         {showCourses.map(course => (
//           <div
//             key={course.id}
//             style={{
//               border: "1px solid grey",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-around",
//               alignItems: "center",
//               height: "60px"
//             }}
//           >
//             <div>{course.name}</div>
//           </div>
//         ))}
//       </div>
//     </>
//   )
// }

export default Courses
