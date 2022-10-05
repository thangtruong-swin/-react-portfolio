import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./commponents/Layout";
import Home from "./commponents/Home";
import Blogs from "./commponents/Blogs";
import Contact from "./commponents/Contact";
import NoPage from "./commponents/NoPage";

import "./App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="blogs" element={<Blogs />} />
				<Route path="contact" element={<Contact />} />
				<Route path="*" element={<NoPage />} />
			</Route>
		</Routes>
	);
}

export default App;
