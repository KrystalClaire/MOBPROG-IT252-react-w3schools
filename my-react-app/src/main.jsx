import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}

let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);