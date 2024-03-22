import React, { FC } from "react";

interface Props {
  className?: string;
}

const Blob: FC<Props> = (props) => {
  return <img className={props.className} src="blob.gif"></img>;
};

export default Blob;
