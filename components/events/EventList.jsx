import Event from "./Event"

import styles from './eventList.module.css'
const EventList = ({events}) => {
  return (
    <ul className={styles.list}>
      {
        events && events.map((event)=>(
          <Event key={event.id} event={event} />
        ))
      }
    </ul>
  )
}

export default EventList
