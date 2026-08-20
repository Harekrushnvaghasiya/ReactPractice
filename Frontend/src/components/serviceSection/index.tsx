import React, { useEffect, useRef, useState } from "react";
import SVGIcon from "../../assets/Icons/SVGIcon";
import { ServiceProps } from "../../utils/appType";
import {
  ServiceWrapper,
  ServiceTopWrapper,
  ServiceTitleWrapper,
  ServiceTag,
  ServiceTitle,
  ServiceButtonWrapper,
  ServiceArrowButton,
  ServiceBottomWrapper,
  ServiceCards,
  ServiceCard,
  ServiceTitleBlock,
  ServiceNumber,
  ServiceCardTitle,
  ServiceImageWrapper,
  ServiceImage,
  ServiceCardBlock,
  ServiceDescription,
  ServiceCardArrow,
} from "./style";
import { Container } from "../styles/commonStyle";

const Service: React.FC<ServiceProps> = ({
  tag,
  title,
  services,
  onPrevious,
  onNext,
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    const atStart = slider.scrollLeft <= 1;
    const atEnd = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 1;
    setIsAtStart(atStart);
    setIsAtEnd(atEnd);
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    // Check initial position
    checkScrollPosition();
    slider.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);
    return () => {
      slider.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [services]);

  const getScrollAmount = () => {
    const slider = sliderRef.current;
    if (!slider) return 0;
    const firstCard = slider.querySelector<HTMLElement>(".service-card");
    const cards = slider.querySelector<HTMLElement>(".service-cards");
    if (!firstCard || !cards) return 0;
    const styles = window.getComputedStyle(cards);
    const gap = parseFloat(styles.columnGap) || parseFloat(styles.gap) || 0;
    return firstCard.offsetWidth + gap;
  };

  const handlePrevious = () => {
    const slider = sliderRef.current;
    if (!slider || isAtStart) return;
    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth",
    });
    onPrevious?.();
  };

  const handleNext = () => {
    const slider = sliderRef.current;
    if (!slider || isAtEnd) return;
    const scrollAmount = getScrollAmount();
    if (!scrollAmount) return;
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
    onNext?.();
  };
  
  return (
    <ServiceWrapper>
      <Container>
        <ServiceTopWrapper>
          <ServiceTitleWrapper>
            {tag && <ServiceTag>{tag}</ServiceTag>}

            <ServiceTitle>{title}</ServiceTitle>
          </ServiceTitleWrapper>

          <ServiceButtonWrapper>
            <ServiceArrowButton
              type="button"
              aria-label="Previous services"
              onClick={handlePrevious}
              disabled={isAtStart}
            >
              <SVGIcon name="backward-icon" width="24" height="24" />
            </ServiceArrowButton>

            <ServiceArrowButton
              type="button"
              aria-label="Next services"
              onClick={handleNext}
              disabled={isAtEnd}
            >
              <SVGIcon name="forward-icon" width="24" height="24" />
            </ServiceArrowButton>
          </ServiceButtonWrapper>
        </ServiceTopWrapper>
      </Container>

      <ServiceBottomWrapper ref={sliderRef}>
        <ServiceCards className="service-cards">
          {services.map((service, index) => (
            <ServiceCard
              className="service-card"
              key={service.id ?? `${service.title}-${index}`}
              $featured={service.featured}
            >
              <ServiceTitleBlock className="service-title-block">
                <ServiceNumber>
                  {service.number ?? String(index + 1).padStart(2, "0")}
                </ServiceNumber>

                <ServiceCardTitle>{service.title}</ServiceCardTitle>
              </ServiceTitleBlock>

              <ServiceImageWrapper
                className="service-image-wrapper"
                $featured={service.featured}
              >
                <ServiceImage src={service.cardImage} alt={service.title} />

                <ServiceCardArrow
                  className="service-card-arrow"
                  aria-hidden="true"
                >
                  <SVGIcon
                    name="cross-arrow-icon"
                    width="20"
                    height="20"
                    fill="var(--text-secondary)"
                  />
                </ServiceCardArrow>

                {service.description && (
                  <ServiceCardBlock className="service-card-block">
                    <ServiceDescription>
                      {service.description}
                    </ServiceDescription>
                  </ServiceCardBlock>
                )}
              </ServiceImageWrapper>
            </ServiceCard>
          ))}
        </ServiceCards>
      </ServiceBottomWrapper>

      <ServiceButtonWrapper className="mobile-visible">
        <ServiceArrowButton
          type="button"
          aria-label="Previous services"
          onClick={handlePrevious}
          disabled={isAtStart}
        >
          <SVGIcon name="backward-icon" width="24" height="24" />
        </ServiceArrowButton>

        <ServiceArrowButton
          type="button"
          aria-label="Next services"
          onClick={handleNext}
          disabled={isAtEnd}
        >
          <SVGIcon name="forward-icon" width="24" height="24" />
        </ServiceArrowButton>
      </ServiceButtonWrapper>
    </ServiceWrapper>
  );
};

export default Service;