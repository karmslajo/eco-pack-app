import { Dropdown } from "@nextui-org/react";
import { materials } from "../../types/enums";
import { useState, useMemo } from "react";
import { Selection } from "@react-types/shared";

export default function MaterialDropdown() {
  const [selected, setSelected] = useState<Selection>(new Set(["All"]));

  const selectedValue = useMemo(() => Array.from(selected), [selected]);

  return (
    <Dropdown>
      <Dropdown.Button flat css={{ tt: "capitalize" }}>
        {selectedValue ?? "Select Material"}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="material-selection"
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        {materials.map((material) => (
          <Dropdown.Item key={material}>{material}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
