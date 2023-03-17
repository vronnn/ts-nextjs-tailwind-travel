import React from "react";
import { render, screen } from "@testing-library/react";
import Navigation from "@/components/Navigation";
import "@testing-library/jest-dom";

describe("Navigation component", () => {
  it("renders nav-item with title and reference", () => {
    const title = "Nav-item Example";
    const reference = "example";
    render(<Navigation title={title} reference={reference} />);
    const navtext = screen.getByRole("link");
    expect(navtext).toBeInTheDocument();
    expect(navtext).toHaveTextContent(title);
    expect(navtext).toHaveAttribute("href", `#${reference}`);
  });
});
