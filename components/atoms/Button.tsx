import React, { memo } from "react";
import { css } from "@emotion/react";

type Props = {
  children: string | number;
};

// eslint-disable-next-line react/display-name
export const Button = memo((props: Props) => {
  const { children } = props;

  return <button css={buttonClass}>{children}</button>;
});

const buttonClass = css`
  margin: 0 auto;
  padding: 10px;
  display: block;
  background-color: skyblue;
  border-radius: 14px;
  border: none;
  width: 30%;
  min-width: 200px;
  color: #fff;
  cursor: pointer;
`;
