import { Typography } from "@mui/material";
import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  ErrorBoundaryState
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    console.error("Error capturado:", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <Typography variant="h5" sx={{ fontSize: "4rem", color: "red" }}>
            OOOPs!! No members found
          </Typography>
        </>
      );
    }

    return this.props.children;
  }
}
