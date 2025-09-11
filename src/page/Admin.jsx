import { useEffect } from "react";

export default function Admin() {
  useEffect(() => {
    document.title = "Admin Panel";
  }, []);

  return <div>Admin</div>;
}
