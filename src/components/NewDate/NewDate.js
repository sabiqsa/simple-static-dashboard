import React from "react";
import { format } from "date-fns";

import "./NewDate.css";

const NewDate = () => {
  let today = new Date();
  return (
    <div className="nd__container">
      <div className="nd__content">{format(today, "d MMM yyyy")}</div>
    </div>
  );
};

export default NewDate;
