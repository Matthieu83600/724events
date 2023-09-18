import { render, screen } from "@testing-library/react";
import ServiceCard from "./index";

describe("When a service card is created", () => {
  it("an image is display with alt value", () => {
    render(
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">{" "}</ServiceCard>
    );
    const imageElement = screen.getByTestId("card-image-testid");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement.alt).toEqual("image-alt-text");
  });
  it("a content is displayed", () => {
    render(
      <ServiceCard imageSrc="http://src-image" imageAlt="image-alt-text">
        This is the card content
      </ServiceCard>
    );
    const contentElement = screen.getByText(/This is the card content/);
    expect(contentElement).toBeInTheDocument();
  });
});
