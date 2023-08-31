"use client"
import dynamic from "next/dynamic";
import type { FC } from 'react';

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

export const Cursor: FC = () => {
  return <AnimatedCursor color="37, 37, 37" />;
};
