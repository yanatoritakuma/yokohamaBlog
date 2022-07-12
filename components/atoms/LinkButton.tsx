import React, { memo } from "react";
import { css } from "@emotion/react";

type Props = {
  children: any;
  onClick?: () => void;
  hoverLabel: string;
};

export const LinkButton = memo((props: Props) => {
  const { children, onClick, hoverLabel } = props;

  return (
    <div css={buttonClass}>
      <button data-hover={hoverLabel} onClick={onClick}>
        <span>{children}</span>
      </button>
    </div>
  );
});

const buttonClass = css`
  span {
    display: block;
  }

  button {
    width: 50%;
    max-width: 600px;
    min-width: 200px;
    border-radius: 20px;
  }

  /* アニメーション */
  button:hover {
    cursor: pointer;
  }
  button {
    outline: none;
    position: relative;
    border: 2px solid #111;
    padding: 15px 50px;
    overflow: hidden;
  }

  /*button:before (attr data-hover)*/
  button:hover:before {
    opacity: 1;
    transform: translate(0, 0);
  }
  button:before {
    content: attr(data-hover);
    position: absolute;
    top: 1.3em;
    left: 0;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    font-size: 0.8em;
    opacity: 0;
    transform: translate(-100%, 0);
    transition: all 0.3s ease-in-out;
  }
  /*button div (button text before hover)*/
  button:hover span {
    opacity: 0;
    transform: translate(100%, 0);
  }
  button span {
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 800;
    font-size: 0.8em;
    transition: all 0.3s ease-in-out;
  }
`;
