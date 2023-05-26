"use client";
import { Category, Package, PackagingMaterial } from "@prisma/client";
import React, { useEffect, useMemo, useState } from "react";
import { PackageCard } from "../../components/card/packageCard";
import {
  Dropdown,
  Grid,
  Input,
  Loading,
  Modal,
  Text,
  Radio,
  Image,
  Button,
  Row,
} from "@nextui-org/react";
import { categories } from "../../types/enums";
import { Selection } from "@react-types/shared";

async function getData() {
  const res = await fetch("/api/packages");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Package[] = await res.json();
  return data;
}

interface PackageProps {
  name: string;
  id: number;
}

function Shop() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Selection>(
    new Set(["All"])
  );

  const [pckge, setPackage] = useState<PackageProps>({
    name: "",
    id: 0,
  });

  const [visible, setVisible] = React.useState(false);
  const handler = (pckg: Package) => {
    setPackage(pckg);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  const selectedCategoryValue = useMemo(
    () => Array.from(selectedCategory),
    [selectedCategory]
  );

  const filteredPackages = useMemo(() => {
    if (
      selectedCategoryValue.length === 1 &&
      selectedCategoryValue[0] === "All"
    ) {
      return packages;
    }
    return packages.filter((pckg) =>
      pckg.category.some((cat) => cat == selectedCategoryValue[0])
    );
  }, [packages, selectedCategoryValue]);

  useEffect(() => {
    async function fetchData() {
      const packages = await getData();
      setPackages(packages);
    }
    fetchData();
  }, []);

  if (!packages) {
    return <Loading />;
  }

  return (
    <>
      <div className="-mt-16">
        <Grid.Container gap={4} justify="space-between">
          <Grid xs={12} lg={6}>
            <Text color="gray">Search</Text>
          </Grid>
          <Grid xs={12} lg={3}>
            <Text color="gray" style={{ marginLeft: 15 }}>
              Category
            </Text>
          </Grid>
        </Grid.Container>
      </div>
      <div className="-mt-16">
        <Grid.Container gap={4} justify="space-between">
          <Grid xs={12} lg={6}>
            <Input clearable type="search" width="100%" />
          </Grid>
          <Grid xs={12} lg={3}>
            <Dropdown>
              <Dropdown.Button flat css={{ tt: "capitalize" }}>
                {selectedCategoryValue ?? "Select Category"}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="category-selection"
                selectionMode="single"
                selectedKeys={selectedCategory}
                onSelectionChange={setSelectedCategory}
              >
                {categories.map((category) => (
                  <Dropdown.Item key={category}>{category}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </div>
      <div className="mt-3">
        <Grid.Container gap={2} justify="center">
          {packages.length == 0 && filteredPackages.length == 0 ? (
            <Loading />
          ) : filteredPackages.length != 0 ? (
            filteredPackages.map((pckg) => (
              <Grid
                key={pckg.id}
                xs={12}
                sm={4}
                lg={3}
                onClick={() => handler(pckg)}
              >
                <PackageCard
                  key={pckg.id}
                  pckg={{
                    id: pckg.id,
                    name: pckg.name,
                    description: pckg.description,
                    price: pckg.price,
                    size: pckg.size,
                    capacity: pckg.capacity,
                    category: pckg.category,
                    materials: pckg.materials,
                  }}
                />
                <Modal
                  closeButton
                  aria-labelledby="modal-title"
                  open={visible}
                  onClose={closeHandler}
                >
                  <Modal.Header>
                    <Text id="package-title" size={24}>
                      {pckge!.name}
                    </Text>
                  </Modal.Header>
                  <Modal.Body>
                    <Text id="package-size" size={15}>
                      Select Color
                    </Text>
                    <Radio.Group
                      orientation="horizontal"
                      defaultValue="primary"
                    >
                      <Radio value="primary" color="primary">
                        Black
                      </Radio>
                      <Radio value="secondary" color="secondary">
                        White
                      </Radio>
                      <Radio value="success" color="success">
                        Brown
                      </Radio>
                    </Radio.Group>
                    <Text id="package-color" size={15}>
                      Select Size
                    </Text>
                    <Radio.Group
                      orientation="horizontal"
                      defaultValue="primary"
                    >
                      <Radio value="primary" color="primary">
                        Small
                      </Radio>
                      <Radio value="secondary" color="secondary">
                        Medium
                      </Radio>
                      <Radio value="success" color="success">
                        Large
                      </Radio>
                    </Radio.Group>
                    <Row>
                    <Text id="package-color" size={15}>
                      Quantity
                    </Text>
                    <Input></Input>
                    </Row>
                    <Button>Place Order</Button>
                  </Modal.Body>
                </Modal>
              </Grid>
            ))
          ) : (
            "No match found."
          )}
        </Grid.Container>
      </div>
    </>
  );
}

export default Shop;
