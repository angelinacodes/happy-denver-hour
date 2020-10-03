import React from "react";

import Filters from "./filters.jsx";

import css from "./homepage.module.css";

export default function HomePage(props) {
  return (
    <div className={css.container}>
      Homepage
      <Filters />
    </div>
  );
}
