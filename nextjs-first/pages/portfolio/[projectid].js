import { useRouter } from "next/router";

function ProjectDetailsPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Details for {router.query.projectid}</h1>
    </div>
  );
}

export default ProjectDetailsPage;
