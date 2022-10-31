import { Outlet, Link } from "react-router-dom";
import { GrHome } from "react-icons/gr";

const Layout = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container-fluid">
					<a
						href="/"
						class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
					>
						<GrHome />
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<button
									className="btn btn-sm btn-outline-success  me-2"
									type="button"
								>
									<Link to="/" className="nav-link">
										Home
									</Link>
								</button>
							</li>

							<li className="nav-item">
								<Link to="/blogs" className="nav-link">
									Blogs
								</Link>
							</li>
							<li className="nav-item">
								<Link to="/contact" className="nav-link">
									Contact
								</Link>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Categories
								</a>
								<ul className="dropdown-menu">
									<li>
										<a className="dropdown-item" href="#">
											Action
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Another action
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a className="dropdown-item" href="#">
											Something else here
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a className="nav-link ">Disabled</a>
							</li>
						</ul>
						<button type="button" className="btn btn-warning me-2">
							Dashboard
						</button>
						<form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
							<input
								type="search"
								class="form-control form-control-dark text-bg-dark"
								placeholder="Search..."
								aria-label="Search"
							/>
						</form>
						<div className="">
							<button type="button" className="btn btn-outline-light me-2">
								Login
							</button>
							<button type="button" className="btn btn-primary">
								Sign-up
							</button>
						</div>
					</div>
				</div>
			</nav>

			<Outlet />
		</div>
	);
};

export default Layout;
