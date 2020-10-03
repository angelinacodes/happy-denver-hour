import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import css from "./filters.module.css";

const dayOptions = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday"
];

export default function Filters(props) {
  const [filters, setFilters] = React.useState({
    dayOfTheWeek: "monday",
    neighborhood: "lodo"
  });
  console.log(css);
  return (
    <div className={css.container}>
      <FormControl className={css.formControl}>
        <InputLabel id="demo-simple-select-label">Day of the week</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filters.dayOfTheWeek}
          onChange={e =>
            setFilters({ ...filters, dayOfTheWeek: e.target.value })
          }
        >
          {dayOptions.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={css.formControl}>
        <InputLabel id="demo-simple-select-label">Neighborhood</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filters.dayOfTheWeek}
          onChange={e =>
            setFilters({ ...filters, dayOfTheWeek: e.target.value })
          }
        >
          {dayOptions.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl className={css.formControl}>
        <InputLabel id="demo-simple-select-label">Day of the week</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filters.dayOfTheWeek}
          onChange={e =>
            setFilters({ ...filters, dayOfTheWeek: e.target.value })
          }
        >
          {dayOptions.map(option => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
