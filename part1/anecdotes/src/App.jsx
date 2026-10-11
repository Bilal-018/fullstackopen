import { useState } from 'react'

const Display = props => <div>{props.text}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Mostvoted = ({ popular, anecdotes, votes }) => {
  return (
    <>
      <h1>Anecdote with most votes</h1>
      <Display text={anecdotes[popular]} />
      <Display text={'has ' + votes[popular] + ' votes'} />
    </>
  )
}

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const selectRandom = (length) => setSelected(Math.floor(Math.random() * length))

  const length = anecdotes.length;

  const setTheValue = () => {
    const temp = [...votes]
    temp[selected] += 1
    setVotes(temp)

    if (temp[selected] > temp[popular]) {
      setPopular(selected);
    }
  }

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(length).fill(0))
  const [popular, setPopular] = useState(0)

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Display text={anecdotes[selected]} />
      <Display text={'has ' + votes[selected] + ' votes'} />
      <Button text='vote' onClick={setTheValue} />
      <Button text='next anecdote' onClick={() => selectRandom(length)} />

      <Mostvoted popular={popular} anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

export default App
