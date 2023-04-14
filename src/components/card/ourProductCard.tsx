import { Card } from "@nextui-org/react";

export const OurProductCard = ({ url }: { url: string }) => {
  return (
    <Card css={{ w: "280px", h: "400px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image src={url} width="100%" height="100%" objectFit="cover" />
      </Card.Body>
    </Card>
  );
};
