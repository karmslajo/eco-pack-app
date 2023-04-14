"use client";
import { Package } from "@prisma/client";
import React, { useEffect, useMemo, useState } from "react";
import { PackageCard } from "../components/card/packageCard";
import { Dropdown, Grid, Input, Loading, Text } from "@nextui-org/react";
import CategoryDropdown from "../components/dropdown/categoryDropdown";
import { categories } from "../types/enums";
import { Selection } from "@react-types/shared";
import MaterialDropdown from "../components/dropdown/materialDropdown";
import { OurProductCard } from "../components/card/ourProductCard";

async function getData() {
  const res = await fetch("/api/packages");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data: Package[] = await res.json();
  return data;
}

function Home() {
  const imageURLS = [
    "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507085/eco-pack/product-3_km3eog.jpg",
    "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507084/eco-pack/product-1_cchtly.jpg",
    "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507085/eco-pack/product-2_spiruk.jpg",
  ];

  return (
    <>
      <div className="bg-neutral-50 h-96 mt-10">
        <Grid.Container justify="center">
          <Grid className="mt-22">
            <Text
              color="#2F5233"
              style={{
                fontSize: 60,
                marginTop: 20,
                marginRight: 20,
                fontFamily: "fantasy",
              }}
            >
              Pack it right,
            </Text>
          </Grid>
          <Grid className="mt-22">
            <Text
              color="#59981A"
              style={{ fontSize: 60, marginTop: 20, fontFamily: "fantasy" }}
            >
              Keep it tight
            </Text>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center">
          <Grid>
            <Text
              color="#31352E"
              style={{ fontSize: 50, marginTop: 20, fontFamily: "sans-serif" }}
            >
              with Eco-friendly packaging
            </Text>
          </Grid>
        </Grid.Container>
      </div>
      <div>
        <Grid.Container justify="center" className="mt-22">
          <Grid className="mt-2">
            <Text color="white" style={{ fontSize: 28, fontFamily: 'inherit' }}>Our Products</Text>
          </Grid>
        </Grid.Container>
      </div>
      <div className="bg-stone-500">
        <Grid.Container gap={10} justify="center">
          {imageURLS.map((url) => (
            <Grid key={url} xs={12} sm={4} lg={3}>
              <OurProductCard key={url} url={url} />
            </Grid>
          ))}
        </Grid.Container>
      </div>
    </>
  );
}

export default Home;
