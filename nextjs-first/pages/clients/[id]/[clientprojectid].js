import { useRouter } from "next/router";
import Link from "next/link";

function ClientProjectIdPage() {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>Project {router.query.clientprojectid}</h1>
      <Link href="/">Main page</Link>
    </div>
  );
}

export default ClientProjectIdPage;
