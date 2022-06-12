import { useRouter } from "next/router";

function ClientProjectIdPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Project {router.query.clientprojectid}</h1>
    </div>
  );
}

export default ClientProjectIdPage;
