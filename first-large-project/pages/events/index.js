import { useState, useEffect } from "react";

import EventList from "../../components/events/eventList";
import { getAllEvents } from "../../dummyData";

function EventsIndexPage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getAllEvents());
  }, []);

  return (
    <div>
      <h1>List of all events</h1>
      <EventList items={items} />
    </div>
  );
}

export default EventsIndexPage;
