"use client";

import React, { FC } from "react";

interface Props {
  text?: string[];
  className?: string;
}

const CompanyDescription: FC<Props> = (props) => {
  const { text } = props;

  const content = text!.map((paragraph, index) => {
    if (index > 0)
      return (
        <p
          key=""
          className="text-muted-foreground max-w-2xl mx-auto text-left mt-8"
        >
          {paragraph}
        </p>
      );

    return (
      <p key="" className="text-muted-foreground max-w-2xl mx-auto text-left">
        {paragraph}
      </p>
    );
  });

  return content;
};

export default CompanyDescription;
