const Cousre = ({ course}) => {
    console.log("Course is working")
    const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <p><strong>total of {totalExercises} exercises</strong></p>
        </div>
    )
}

const Header = ({ name }) => <h2>{name}</h2>

const Content = ({ parts }) => (
    <div>
        {parts.map(part => (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </div>
)

const Part = ({ name, exercise}) => <p>{name} {exercise}</p>

export default Cousre
 