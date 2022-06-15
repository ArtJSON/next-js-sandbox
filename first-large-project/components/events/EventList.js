import EventItem from "../EventItem";

function EventList(props) {
  const { items } = props;
  return (
    <ul>
      {items.map((it) => (
        <EventItem {...it} key={it.id} />
      ))}
    </ul>
  );
}

export default EventList;
