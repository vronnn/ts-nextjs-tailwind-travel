import React from "react";
import Picard from "@/components/Picard";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

const sampleProps = {
  src: "/23.jpg",
  title: "titleExample",
  desc: "A photo example",
};

describe("picture card component", () => {
  it("renders correct picture source with proper title and desc", () => {
    const { getByAltText, getByText } = render(<Picard {...sampleProps} />);
    const PicImg = getByAltText(`${sampleProps.title} picture`);
    const PicTitle = getByText(sampleProps.title);
    const PicDesc = getByText(sampleProps.desc);

    expect(PicImg).toHaveAttribute(
      "src",
      "/_next/image?url=%2F23.jpg&w=1920&q=75"
    );
    expect(PicTitle.textContent).toBe(sampleProps.title);
    expect(PicDesc.textContent).toBe(sampleProps.desc);
  });
});
