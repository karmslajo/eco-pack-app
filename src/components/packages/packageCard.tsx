import { Card, Col, Row, Text } from "@nextui-org/react";
import { Category, PackagingMaterial, Image } from "@prisma/client";
import { useState, useEffect } from "react";

interface PackageProps {
  pckg: {
    id: number;
    name: string;
    description: string;
    price: number;
    size: string;
    capacity: string;
    category: Category[];
    materials: PackagingMaterial[];
  };
}

export const PackageCard = ({ pckg }: PackageProps) => {
  const [image, setImage] = useState<Image>();

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(`/api/images/${pckg.id}`);
      if (res.ok) {
        const data = await res.json();
        setImage(data);
      }
    };
    fetchImage();
  }, [pckg.id]);

  return (
    <Card css={{ w: "280px", h: "350px" }}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={`${image?.url}`}
          width="100%"
          height="100%"
          objectFit="cover"
          alt={`${image?.name}`}
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
            <Text color="#000" size={15}>
              {pckg.name}
            </Text>
            <Col>
              <Row>
                <Col style={{ width: 700, marginTop: 10 }}>
                  <Text color="#000" size={12}>
                    {pckg.category.map((cat) => `${cat} | `)}
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
};
