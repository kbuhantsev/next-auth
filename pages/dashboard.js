import { getSession, signIn } from "next-auth/react";
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn();
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
