import { useEffect, useReducer } from "react"
import BookingForm from "./BookingForm"

export default function Booking() {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE':
        return state = fetchAPI(new Date(action.payload))
    }
  }

  const initialTimes = () => {
    return fetchAPI(new Date())
  }

  const [availableTimes, dispatch] = useReducer(reducer, initialTimes())


  return (
    <div className='bg-green py-10 px-3 md:px-0'>
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display text-white text-5xl mb-4">Find a table for any occasion</h1>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitAPI= {submitAPI}/>
      </div>
    </div>
  )
}

const seededRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
}

const fetchAPI = function (date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};
const submitAPI = function (formData) {
  return true;
};