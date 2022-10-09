import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'React is ... ?',
    variants: ['Library', 'Framework', 'Application'],
    correct: 0,
  },
  {
    title: 'Component is... ?',
    variants: ['Application', 'Part of an application or page', 'Style sheet'],
    correct: 1,
  },
  {
    title: 'JSX is ... ?',
    variants: [
      'This is plain HTML',
      'This is function',
      'This is the same HTML, but with the ability to execute JS code',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        You got {correct} out of {questions.length}
      </h2>
      <a href="/quiz/">
        <button>Try again</button>
      </a>
    </div>
  );
}

function Game({ question, onClickVariant, step }) {
  const progressLine = Math.round((step / questions.length) * 100);
  return (
    <>
      <div className="progress">
        <div style={{ width: `${progressLine}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}

function App() {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  const question = questions[step];
  const onClickVariant = (index) => {
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    }
  };
  return (
    <div className="App">
      {step !== questions.length ? (
        <Game question={question} onClickVariant={onClickVariant} step={step} />
      ) : (
        <Result correct={correct} />
      )}
    </div>
  );
}

export default App;
