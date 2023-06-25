import { Checkbox } from "@mui/material";

import { useSearchParams } from "react-router-dom";
export default function SidebarLayout() {
  const [search, setSearch] = useSearchParams();

  const MAIN_FILTERS = ["hasType", "hasColor", "model", "name"];

  function handleOnChange(checked: boolean, title: string): void {
    checked ? search.set(title, "true") : search.delete(title);
    setSearch(search);
  }

  return (
    <div style={{ height: "100%", background: "#ede7e7" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {MAIN_FILTERS.map((item) => (
          <span key={item}>
            <Checkbox
              defaultChecked={search.get(item) == "true" ? true : false}
              checked={search.get(item) == "true" ? true : false}
              onChange={(_, checked) => handleOnChange(checked, item)}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
