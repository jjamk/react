import React from "react";
import { action } from "@storybook/addon-actions";

import { CounterWithCountState } from "../05/withState";
import { withState } from "recompose";

export default {
  title: "WithState",
  component: withState,
};

export const counterWithCountState = () => <CounterWithCountState />;
