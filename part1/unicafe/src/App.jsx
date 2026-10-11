import { useState } from 'react'

const StatisticLine = props => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const { good, neutral, bad, all, average, positive } = props;
  return (
    <>
      <h1>statistics</h1>
      {all !== 0 ?
        <>
          <StatisticLine value={good} text="good" />
          <StatisticLine value={neutral} text="neutral" />
          <StatisticLine value={bad} text="bad" />
          <StatisticLine value={all} text="all" />
          <StatisticLine value={average} text="average" />
          <StatisticLine value={positive} text="positive" />
        </> : <p>No feedback given</p>}
    </>
  )
}

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setToValue = (val, option) => {
    val += 1;
    let total = all + 1;
    let avg = 0;
    let pos = 0;

    if (option === 'good') {
      setGood(val)
      avg = (val - bad) / total;
      pos = (val / total) * 100;
    } else if (option === 'bad') {
      setBad(val);
      avg = (good - val) / total;
      pos = (good / total) * 100;
    } else {
      setNeutral(val)
      avg = (good - bad) / total;
      pos = (good / total) * 100;
    }

    setAverage(avg);
    setPositive(pos);
    setAll(total)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setToValue(good, 'good')} text="good" />
      <Button onClick={() => setToValue(neutral, 'neutral')} text="neutral" />
      <Button onClick={() => setToValue(bad, 'bad')} text="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive + ' %'} />
    </div>
  )
}

export default App
