import { useState, useEffect } from "react";
import { getEventById } from "../../dummyData";
import { useRouter } from "next/router";

function DetailsPage() {
  const router = useRouter();
  const event = getEventById(router.query.eventid);

  if (!event) {
    return <h1>Event not found</h1>;
  }

  return (
    <div>
      <h1>{event.title}</h1>
    </div>
  );
}

export default DetailsPage;
