const Part = ({ name, exercises }) => {
  console.log("Part component is rendering with:", name, "Exercises:", exercises)

  return (
    <p>
      {name} {exercises}
    </p>
  )
}

export default Part
