"use client";
import { Package } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { PackageCard } from "../../components/card/packageCard";
import { Grid, Input } from "@nextui-org/react";
import CategoryDropdown from "../../components/dropdown/categoryDropdown";
import MaterialDropdown from "../../components/dropdown/materialDropdown";

async function getData() {
  const res = await fetch("/api/packages");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Package[] = await res.json();
  return data;
}

function Shop() {
  const [packages, setPackages] = useState<Package[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getData();
      setPackages(data);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="-mt-16">
        <Grid.Container gap={4} justify="space-between">
          <Grid xs={12} lg={6}>
            <Input clearable placeholder="Search" type="search" width="100%" />
          </Grid>
          <Grid xs={12} lg={3}>
            <CategoryDropdown />
          </Grid>
          <Grid xs={12} lg={3}>
            <MaterialDropdown />
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <Grid.Container gap={2} justify="center">
          {packages.map((pckg) => (
            <Grid key={pckg.id} xs={12} sm={4} lg={3}>
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
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </>
  );
}

export default Shop;
