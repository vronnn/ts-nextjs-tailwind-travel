import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages/index";

describe("Home", () => {
  it("should render the correct title", () => {
    const { getByRole } = render(<Home />);
    const title = getByRole("heading", { level: 1 });
    expect(title).toHaveTextContent(
      "Get started on planning the best trip ever"
    );
  });
  it("should render the homepage section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("homepage");
    expect(heroSection).toBeInTheDocument();
  });
  it("should render the about section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("about");
    expect(heroSection).toBeInTheDocument();
  });
  it("should render the destinations section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("destinations");
    expect(heroSection).toBeInTheDocument();
  });
  it("should render the review section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("review");
    expect(heroSection).toBeInTheDocument();
  });
});
