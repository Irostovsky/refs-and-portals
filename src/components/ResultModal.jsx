import React from "react";
import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(
  ({ remainingTime, targetTime, onReset }, ref) => {
    const dialog = useRef();

    const userLost = remainingTime <= 0;
    const formattedRemainigTime = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    useImperativeHandle(ref, () => {
      return {
        open() {
          dialog.current.showModal();
        },
      };
    });

    return (
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You lost</h2>}
        {!userLost && <h2>Your Score: {score}</h2>}
        <p>
          The target time was <strong>{targetTime} seconds</strong>
        </p>
        <p>
          You stopped timer with
          <strong> {formattedRemainigTime} seconds left. </strong>
        </p>
        <form method="dialog">
          <button onClick={onReset}>Close</button>
        </form>
      </dialog>
    );
  }
);

export default ResultModal;
