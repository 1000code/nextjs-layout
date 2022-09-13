import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();
  setTimeout(() => {
    return router.back();
  }, 1);
};

export default Error;
