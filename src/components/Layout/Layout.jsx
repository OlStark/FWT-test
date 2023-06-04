import React from "react";
import cn from "classnames";
import useTheme from "../../hooks/useTheme";

function Layout({ children }) {
  const { isLight } = useTheme();
  return <div className={cn("layout", { light: isLight })}>{children}</div>;
}

export default Layout;
