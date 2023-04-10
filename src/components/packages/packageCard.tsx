import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import { Category, Package, PackagingMaterial } from "@prisma/client";

interface Props {
  pckg: {
    name: string;
    description: string;
    price: number;
    size: string;
    capacity: string;
    category: Category[];
    materials: PackagingMaterial[];
  };
}

export const PackageCard = ({ pckg }: Props) => (
  <Card css={{ w: "280px", h: "400px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h1 color="black" size={18}>
          {pckg.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="https://nextui.org/images/card-example-6.jpeg"
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="#000" size={12}>
            {pckg.description}
          </Text>
          <Col>
            <Row>
              <Col style={{ width: 700, marginTop: 10 }}>
                <Text color="#000" size={15}>
                  {`${pckg.category} | ${pckg.size}`}
                </Text>
              </Col>
              <Row justify="flex-end">
                <Text color="#000" size={24}>
                  {pckg.price}
                </Text>
              </Row>
            </Row>
          </Col>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
