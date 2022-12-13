import {
  useIsAuthenticated,
  AdminPortal,
  useAuthUserOrNull,
} from "@frontegg/nextjs";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MyPage() {
  const router = useRouter();
  const isAuthenticated = useIsAuthenticated();
  const user = useAuthUserOrNull();

  const handleClick = () => {
    AdminPortal.show();
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/healthcheck");
      const data = await res.json();
      console.log("data", data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isAuthenticated && (
        <>
          <button onClick={() => router.push("/account/logout")}>Logout</button>
          <br />
          <br />
          <button onClick={handleClick}>Account Settings</button>
        </>
      )}
      {!isAuthenticated && (
        <button onClick={() => router.push("/account/login")}>Login</button>
      )}
      {isAuthenticated && user && (
        <>
          <p>User information:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  );
}
