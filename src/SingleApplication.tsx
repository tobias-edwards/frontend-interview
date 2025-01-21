import React from "react";
import styles from "./SingleApplication.module.css";
import cx from "classnames";
import { formatAmount, formatDate } from "./utils";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.container}>
      <dl className={styles.cell}>
        <dt>Company</dt>
        <dd>{application.company}</dd>
      </dl>
      <dl className={styles.cell}>
        <dt>Name</dt>
        <dd>
          {application.first_name} {application.last_name}
        </dd>
      </dl>
      <dl className={styles.cell}>
        <dt>Email</dt>
        <dd>
          <a className={styles.link} href={`mailto:${application.email}`}>
            {application.email}
          </a>
        </dd>
      </dl>
      <dl className={cx(styles.cell, styles.textRight)}>
        <dt>Loan amount</dt>
        <dd>{formatAmount(application.loan_amount)}</dd>
      </dl>
      <dl className={cx(styles.cell, styles.textRight)}>
        <dt>Application date</dt>
        <dd>{formatDate(application.date_created)}</dd>
      </dl>
      <dl className={cx(styles.cell, styles.textRight)}>
        <dt>Expiry date</dt>
        <dd>{formatDate(application.expiry_date)}</dd>
      </dl>
    </div>
  );
};

export default SingleApplication;
