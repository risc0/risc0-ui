import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Avatar, AvatarFallback } from "./avatar";

describe("Avatar", () => {
  it("renders without crashing", () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId("avatar");
    expect(avatarElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLSpanElement>();
    render(<Avatar ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("AvatarFallback", () => {
  it("renders without crashing", () => {
    render(
      <Avatar>
        <AvatarFallback />
      </Avatar>,
    );
    const avatarFallbackElement = screen.getByTestId("avatar-fallback");
    expect(avatarFallbackElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLSpanElement>();
    render(
      <Avatar>
        <AvatarFallback ref={ref} />
      </Avatar>,
    );
    expect(ref.current).not.toBeNull();
  });

  it("displays the initials inside", () => {
    render(
      <Avatar>
        <AvatarFallback>CC</AvatarFallback>
      </Avatar>,
    );
    const avatarFallbackText = screen.getByText("CC");
    expect(avatarFallbackText).toBeInTheDocument();
  });
});
