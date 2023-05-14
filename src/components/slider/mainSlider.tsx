import * as React from "react";
import "./styles.css";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Card } from "@nextui-org/react";

export default function MainSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        {slideData.map((slide) => (
          <div key={slide.id} className={slide.className}>
            <Card.Image
              src={slide.imageUrl}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </>
  );
}

const slideData = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/dyqrfcloo/image/upload/v1684012193/eco-pack/IMG_5766_conv_qyykxg.jpg",
    className: "keen-slider__slide main-slide1",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/dyqrfcloo/image/upload/v1684015682/eco-pack/IMG_574189_conv_xvetwy.jpg",
    className: "keen-slider__slide main-slide2",
  },
];
