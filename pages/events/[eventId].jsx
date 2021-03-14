import {useRouter} from 'next/router'
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import ErrorAlert from '../../components/events/ErrorAlert';
import { getEventById } from '../../dummyData';
const EventDetailPage = () => {
  const router = useRouter()
  const {eventId} = router.query
  const event = getEventById(eventId)


  if(!event) {
    return <ErrorAlert><p>Event Not Found</p></ErrorAlert>
  }



  return (
    <>
      <EventSummary title={event.title}/>
      <EventLogistics date={EventContent.date} address={event.location} image={event.image} imageAlt={event.title}/>
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default EventDetailPage;
