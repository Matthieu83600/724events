import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./index";

describe("When a select is created", () => {
  it("a list of choices is displayed", () => {
    render(<Select selection={["value1", "value2"]} />);
    const selectElement = screen.getByTestId("select-testid");
    const selectDefault = screen.getByText("Toutes");
    expect(selectElement).toBeInTheDocument();
    expect(selectDefault).toBeInTheDocument();
  });
  it("a collapse action button is displayed", () => {
    render(<Select selection={["value1", "value2"]} />);
    const collapseButtonElement = screen.getByTestId("collapse-button-testid");
    expect(collapseButtonElement).toBeInTheDocument();
  });

  describe("with a label", () => {
    it("a label is displayed", () => {
      render(<Select label="label" selection={["value1", "value2"]} />);
      const labelDefault = screen.getByText("label");
      expect(labelDefault).toBeInTheDocument();
    });
  });

  describe("and a click is trigger on collapse button", () => {
    it("a list of values is displayed", () => {
      render(<Select selection={["value1", "value2"]} />);
      const collapseButtonElement = screen.getByTestId(
        "collapse-button-testid"
      );
      fireEvent(
        collapseButtonElement,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
      const choice1 = screen.getByText("value1");
      const choice2 = screen.getByText("value2");
      expect(choice1).toBeInTheDocument();
      expect(choice2).toBeInTheDocument();
    });
    describe("and a click is triggered on a choice item", () => {
      it("a onChange callback is called", () => {
        const onChange = jest.fn();
        render(<Select selection={["value1", "value2"]} onChange={onChange} />);
        const collapseButtonElement = screen.getByTestId(
          "collapse-button-testid"
        );
        fireEvent(
          collapseButtonElement,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        const choice1 = screen.getByText("value1");
        fireEvent(
          choice1,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(onChange.mock.calls.length).toBeGreaterThan(0);

        fireEvent(
          collapseButtonElement,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );

        const choiceAll = screen.getByText("Toutes");
        fireEvent(
          choiceAll,
          new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
          })
        );
        expect(onChange.mock.calls.length).toBeGreaterThan(1);
      });
    });
  });
});
