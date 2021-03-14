import { useRouter } from "next/router";
import ErrorAlert from "../../components/events/ErrorAlert";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/events/ResultTitle";
import Button from "../../components/ui/Button";
import { getFilteredEvents } from "../../dummyData";

const FilteredEventsPage = () => {
  const router = useRouter()



  const filteredData = router.query.slug

  if(!filteredData) {
    return <p className='center'>loading...</p>
  }

  const [year, month] = filteredData

  // chaning string to number
  const numYear = +year
  const numMonth = +month

  if(isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth > 12){
    return <>
    <ErrorAlert>
      <p>Invalid Filter</p>
    </ErrorAlert>

    <div className='center'>
    <Button link='/events'>Show All Events</Button>
    </div>

    </>
  }

  const filteredEvents = getFilteredEvents({year: numYear, month: numMonth})

  if(filteredEvents.length === 0 || !filteredEvents){
    return <>
    <ErrorAlert ><p>Event not found</p></ErrorAlert>

    <div className='center'>
    <Button link='/events'>Show All Events</Button>
    </div>

    </>
  }

  const date = new Date(numYear, numMonth - 1)
  return (
    <>
      <ResultsTitle date={date}/>
      <EventList events={filteredEvents}/>
    </>
  );
};

export default FilteredEventsPage;
