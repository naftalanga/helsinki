const Header = (props) => {
  return(
    <div>
      <h1>
      {props.course}
      </h1>
    </div>
    )
}

const Part = (props) => {
  return(
  <div>
  <p>{props.part} {props.exercise}</p>
  </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.content[0].part} exercise={props.content[0].exercise} />
      <Part part={props.content[1].part} exercise={props.content[1].exercise} />
      <Part part={props.content[2].part} exercise={props.content[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  return(
  <div>
    <p>
      Number of exercises: {props.total} 
    </p>
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const content = [
    {exercise: 10, part: 'Fundamentals of React'},
    {exercise: 7, part: 'Using props to pass data'},
    {exercise: 14, part: 'State of a component'}
  ]


  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total total={content[0].exercise + content[1].exercise + content[2].exercise} />
    </div>
  )
}

export default App;
