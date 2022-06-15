import Image from "next/image";

function EventItem(props) {
  const { title, image, date, location, id } = props;

  const displayDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const displayLocation = location.replace(",", "\n");

  return (
    <li>
      <Image width={600} height={400} src={"/" + image} alt={title} />
      <div>
        <h2>{title}</h2>
        <div>
          <time>{displayDate}</time>
        </div>
        <div>
          <address>{displayLocation}</address>
        </div>
      </div>
    </li>
  );
}

export default EventItem;
