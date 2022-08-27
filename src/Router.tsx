import React from "react";
import { BrowserRouter, RouteObject, useRoutes } from "react-router-dom";

const routes: RouteObject[] = [];

export default function Router() {
	return <BrowserRouter>{useRoutes(routes)}</BrowserRouter>;
}
