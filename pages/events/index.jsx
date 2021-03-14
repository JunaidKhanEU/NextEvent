import {useRouter} from 'next/router'
import EventList from "../../components/events/EventList";
import EventSearch from "../../components/events/EventSearch";
import { getAllEvents } from "../../dummyData";

const EventsPage = () => {
  const allEvents = getAllEvents()
  const router = useRouter()
  const handleSearch= (year, month) => {
    const fullPath = `/events/${year}/${month}`

    router.push(fullPath)
  }
  return (
    <div>
      <EventSearch onSearch={handleSearch}/>
      <EventList events={allEvents} />
    </div>
  );
};

export default EventsPage;
