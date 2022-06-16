import Image from "next/image";
import Link from "next/link";
import classes from "./EventItem.module.css";
import Button from "../ui/button";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const displayDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const displayLocation = location.replace(",", "\n");
  const exploreLink = `events/${id}`;

  return (
    <li className={classes.item}>
      <Image width={600} height={400} src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{displayDate}</time>
          </div>
          <div className={classes.address}>
            <address>{displayLocation}</address>
          </div>
        </div>
        <div className={classes.action}>
          <Button link={exploreLink}>Explore event</Button>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
