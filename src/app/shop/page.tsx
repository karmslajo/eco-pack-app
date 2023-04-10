"use client";
import { Package } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { PackageCard } from "../../components/packages/packageCard";
import { Grid } from "@nextui-org/react";

async function getData() {
  const res = await fetch('/api/packages');
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
    <div>
      <Grid.Container gap={2} justify="center">
        {packages.map((pckg) => (
          <Grid key={pckg.id} xs={12} sm={4} lg={3}>
            <PackageCard
              key={pckg.name}
              pckg={{
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
  );
}

export default Shop;
