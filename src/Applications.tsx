import React, { useEffect, useState } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Button } from "./ui/Button/Button";

export const getApplications = async (pageNum: number) => {
  const data = await fetch(
    `http://localhost:3001/api/applications?_page=${pageNum}&_limit=5`,
  );
  return data.json();
};

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getApplications(page).then((newApplications) => {
      setApplications((currentApplications) => [
        ...currentApplications,
        ...newApplications,
      ]);
    });
  }, [page]);

  if (applications.length === 0) {
    return null;
  }

  return (
    <div className={styles.container} data-test-id="applications">
      <div className={styles.list}>
        {applications.map((application) => (
          <SingleApplication application={application} key={application.guid} />
        ))}
      </div>
      <Button className={styles.button} onClick={() => setPage(page + 1)}>
        Load more
      </Button>
    </div>
  );
};

export default Applications;
