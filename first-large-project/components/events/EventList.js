import EventItem from "./EventItem";
import classes from "./EventList.module.css";

function EventList(props) {
  const { items } = props;
  return (
    <ul className={classes.list}>
      {items.map((it) => (
        <EventItem {...it} key={it.id} />
      ))}
    </ul>
  );
}

export default EventList;
