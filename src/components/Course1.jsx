const Cousre = ({ course}) => {
    const totalExercise = course.parts.reduce((sum, part) => sum + part.exercises, 0)
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
            <part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
    </div>
)

const part = ({ name, exercises}) => <p>{name} {exercise}</p>

export default Cousre
