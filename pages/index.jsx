import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dummyData";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  );
};

export default HomePage;
