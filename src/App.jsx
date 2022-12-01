import React from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import Footer from "./components/footer/Footer";

const app = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<HomePage />
			<Footer />
		</BrowserRouter>
	);
};

export default app;
