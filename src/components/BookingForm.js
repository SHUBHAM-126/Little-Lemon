import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import moment from "moment/moment"

function BookingForm({availableTimes, dispatch, submitAPI}) {
    const today = moment(new Date() + 1).format('YYYY-MM-DD')
    const [date, setDate] = useState(today)
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState(0)
    const [occasion, setOccasion] = useState('Birthday')
    const navigate = useNavigate()

    useEffect(()=>{
        if (availableTimes.length > 0){
            setTime(availableTimes[0])
        }
        else{
            setTime('No slots available')
        }
    }, [availableTimes])

    const handleSubmit = ((e) => {
        e.preventDefault()
        const submit = submitAPI({date, time, guests, occasion})
        
        if (submit == true){
            navigate("/confirmation")
        }
    })

    const handleDateChange = (e) => {
        setDate(e.target.value)
        dispatch({type: 'UPDATE', payload: date})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-white flex flex-col gap-5">
                <div className="grid gap-4 md:grid-cols-2">

                    <label>
                        <span>Date</span>
                        <input type='date' data-testid='date' value={date} min={today} onChange={handleDateChange} required />
                    </label>

                    <label>
                        <span>Time</span>
                        <select value={time} onChange={(e) => setTime(e.target.value)}>
                            {availableTimes.length > 0 ? availableTimes.map(slot => (
                                <option key={slot}>{slot}</option>
                            )) : <option>No slots available</option>}
                        </select>
                    </label>

                </div>

                <label>
                    <span>Number of guests</span>
                    <input type='number' min='1' max='10' value={guests} onChange={(e) => setGuests(e.target.value)} required />
                </label>

                <label>
                    <span>Occasion</span>
                    <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                </label>

                <button className="bg-yellow rounded-lg font-body font-bold text-black px-1 py-2" aria-label="Let's go">Let's go</button>
            </div>
        </form>
    )
}
export default BookingForm