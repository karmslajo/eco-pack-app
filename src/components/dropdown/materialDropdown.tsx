import { Dropdown } from "@nextui-org/react";
import { materials } from "../../types/enums";

export default function MaterialDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat>Select Material</Dropdown.Button>
      <Dropdown.Menu aria-label="material-selection">
        {materials.map((material) => (
          <Dropdown.Item key={material}>{material}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
