import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ApplicationRoutes } from "./routes/ApplicationRoutes";
import store from "./store";
import './reset.css'
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApplicationRoutes />
		</Provider>
	</React.StrictMode>
);
