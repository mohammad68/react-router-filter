import { Chip } from "@mui/material";
import { ReactElement, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function MainLayout() {
  const [search, setSearch] = useSearchParams();

  function handleDelete(key: string): void {
    search.delete(key);
    setSearch(search);
  }

  const FilterItems: ReactElement[] = useMemo(() => {
    const temp: ReactElement[] = [];
    for (const [key, _] of search) {
      temp.push(
        <Chip
          key={key}
          label={key}
          variant="outlined"
          onDelete={() => handleDelete(key)}
        />
      );
    }
    return temp;
  }, [search]);

  return (
    <div style={{ height: "100vh" }}>
      <div>{FilterItems}</div>
    </div>
  );
}
