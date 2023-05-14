"use client";
import React from "react";
import { Button, Grid, Text } from "@nextui-org/react";
import { OurProductCard } from "../components/card/ourProductCard";
import MainSlider from "../components/slider/mainSlider";

function Home() {
  return (
    <>
      <div className="bg-neutral-50">
        <MainSlider />
      </div>
      <div className="bg-neutral-50 h-96 mt-10">
        <Grid.Container justify="center">
          <Grid className="mt-22">
            <Text
              color="#2F5233"
              style={{
                fontSize: 60,
                marginTop: 60,
                marginRight: 20,
                fontFamily: "fantasy",
              }}
            >
              Pack it right,
            </Text>
          </Grid>
          <Grid>
            <Text
              color="#59981A"
              style={{ fontSize: 60, marginTop: 60, fontFamily: "fantasy" }}
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
      <div className="h-80 justify-items-center">
        <Grid.Container justify="center">
        <Grid className="bg-stone-500" lg={6} xs={12} style={{ padding: 50 }}>
            <Grid>
              <Text color="white" size={"$5xl"}>
                Our Products
              </Text>
              <Text className="mt-10" color="white" size={"$lg"}>
                Our company specializes in creating sustainable packaging
                solutions that are both eco-friendly and visually appealing.
              </Text>
            </Grid>
          </Grid>
          <Grid className="bg-stone-200" lg={6} xs={12} style={{ padding: 50 }}>
            <Grid>
              <Text color="green" size={"$5xl"}>
                Our Services
              </Text>
              <Text className="mt-10" color="black" size={"$m"}>
                We provide customization options for businesses looking to add
                their own branding to our packaging products. With our
                commitment to quality and customer satisfaction, we strive to be
                the go-to source for all your packaging needs.
              </Text>
            </Grid>
          </Grid>
         
        </Grid.Container>
      </div>
      <div className="bg-stone-200">
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

const imageURLS = [
  "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507085/eco-pack/product-3_km3eog.jpg",
  "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507084/eco-pack/product-1_cchtly.jpg",
  "https://res.cloudinary.com/dyqrfcloo/image/upload/v1681507085/eco-pack/product-2_spiruk.jpg",
];
