import { getFeaturedEvents } from "../dummyData";
import EventList from "../components/events/eventList";

function mainPage() {
  const fetaured = getFeaturedEvents();

  return (
    <div>
      <h1>Events main page, fetaured events:</h1>
      <EventList items={fetaured} />
    </div>
  );
}

export default mainPage;
