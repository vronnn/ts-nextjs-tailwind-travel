import React from "react";
import { render, screen } from "@testing-library/react";
import Details from "@/components/shared/Details";
import "@testing-library/jest-dom/extend-expect";

const sampleProps = {
  src: "/test.jpg",
  photographer: "vron",
  alt: "img",
  photographer_url: "https://www.example.com",
};

describe("Details component", () => {
  it("renders photo details correctly", () => {
    const { getByText, getByRole } = render(<Details {...sampleProps} />);
    const DetailAlt = getByText(sampleProps.alt);
    const DetailImg = getByRole("img");
    const DetailPhotographer = getByText(sampleProps.photographer);

    expect(DetailAlt).toBeInTheDocument();
    expect(DetailImg).toBeInTheDocument();
    expect(DetailPhotographer).toBeInTheDocument();
    expect(DetailImg).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest.jpg&w=1920&q=75"
    );
    expect(DetailAlt.textContent).toBe(sampleProps.alt);
    expect(DetailPhotographer.textContent).toBe(sampleProps.photographer);
  });
});
