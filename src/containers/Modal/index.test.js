/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./index";

describe("When Modal data is created", () => {
  it("a modal content is display", () => {
    render(
      <Modal opened Content={<div>modal content</div>}>
        {() => null}
      </Modal>
    );
    expect(screen.getByText("modal content")).toBeInTheDocument();
  });
  describe("and a click is triggered to display the modal", () => {
    it("the content of modal is displayed", async () => {
      render(
        <Modal Content={<div>modal content</div>}>
          {() => <button data-testid="open-modal"></button>}
        </Modal>
      );
      expect(screen.queryByText("modal content")).not.toBeInTheDocument();
      fireEvent(
        screen.getByTestId("open-modal"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );

    });
  });

  describe("and a click is triggered to the close button modal", () => {
    it("the content of the modal is hide", async () => {
      render(
        <Modal opened Content={<div>modal content</div>}>
          {() => null}
        </Modal>
      );

      expect(screen.getByText("modal content")).toBeInTheDocument();
      fireEvent(
        screen.getByTestId("close-modal"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );

      expect(screen.queryByText("modal content")).not.toBeInTheDocument();
    });
  });
});
