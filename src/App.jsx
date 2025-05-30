import Course from './Components/Course1'

const App = () => {
  console.log("App component is rendering")

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        { name: 'Fundamentals of React', exercises: 10, id: 1 },
        { name: 'Using props to pass data', exercises: 7, id: 2 },
        { name: 'State of a component', exercises: 14, id: 3 },
        { name: 'Redux', exercises: 11, id: 4 }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        { name: 'Routing', exercises: 3, id: 1 },
        { name: 'Middlewares', exercises: 7, id: 2 }
      ]
    },
    {
      name: 'Python Backend',
      id: 3,
      parts: [
        { name: 'Flask Basics', exercises: 5, id: 1 },
        { name: 'Database Integration', exercises: 8, id: 2 }
      ]
    }
  ]

  return (
    <div>
      <h1>Course List</h1>
      {courses.map(course => {
        console.log("Rendering Course component for:", course.name)
        return <Course key={course.id} course={course} />
      })}
    </div>
  )
}

export default App
