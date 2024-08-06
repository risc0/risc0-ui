import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";

describe("TabsList", () => {
  it("renders without crashing", () => {
    render(
      <Tabs>
        <TabsList />
      </Tabs>,
    );
    const tabsListElement = screen.getByTestId("tabs-list");
    expect(tabsListElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs>
        <TabsList ref={ref} />
      </Tabs>,
    );
    expect(ref.current).not.toBeNull();
  });
});

describe("TabsTrigger", () => {
  it("renders without crashing", () => {
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger value={""}>trigger</TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    const tabsTriggerElement = screen.getByRole("tab");
    expect(tabsTriggerElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLButtonElement>();
    render(
      <Tabs>
        <TabsList>
          <TabsTrigger ref={ref} value={""}>
            trigger
          </TabsTrigger>
        </TabsList>
      </Tabs>,
    );
    expect(ref.current).not.toBeNull();
  });
});

describe("TabsContent", () => {
  it("renders without crashing", () => {
    render(
      <Tabs>
        <TabsContent value={""} />
      </Tabs>,
    );
    const tabsContentElement = screen.getByRole("tabpanel", { hidden: true });
    expect(tabsContentElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Tabs>
        <TabsContent ref={ref} value={""} />
      </Tabs>,
    );
    expect(ref.current).not.toBeNull();
  });
});
