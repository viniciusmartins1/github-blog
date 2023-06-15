import { Backdrop, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <>
      <Backdrop
        sx={{ color: "#f3e3e3", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}
