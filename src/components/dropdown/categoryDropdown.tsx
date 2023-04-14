import { Dropdown } from "@nextui-org/react";
import { categories } from "../../types/enums";

export default function CategoryDropdown() {
  return (
    <Dropdown>
      <Dropdown.Button flat>Select Category</Dropdown.Button>
      <Dropdown.Menu aria-label="category-selection">
        {categories.map((category) => (
          <Dropdown.Item key={category}>{category}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}
