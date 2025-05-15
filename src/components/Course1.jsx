const Course = ({ course }) => {
    console.log("Course component is rendering with course:", course.name)
  
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
  
    return (
      <div>
        <Header name={course.name} />
        <Content parts={course.parts} />
        <p><strong>total of {totalExercises} exercises</strong></p>
      </div>
    )
  }
  
  const Header = ({ name }) => {
    console.log("Header component in Course is rendering with name:", name)
    return <h2>{name}</h2>
  }
  
  const Content = ({ parts }) => {
    console.log("Content component is rendering with parts:", parts)
    return (
      <div>
        {parts.map(part => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </div>
    )
  }
  
  const Part = ({ name, exercises }) => {
    console.log("Part component is rendering with:", name, "Exercises:", exercises)
    return <p>{name} {exercises}</p>
  }
  
  export default Course
  