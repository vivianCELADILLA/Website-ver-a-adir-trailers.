import "./index.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function index() {
	const MySwal = withReactContent(Swal);
	const [search, setSearch] = useState("");
	let navigate = useNavigate();
	const handleChange = e => {
		setSearch(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		if (search.length <= 0) {
			MySwal.fire({
				icon: "error",
				title: "Oops...",
				text: " Busqueda vacia!",
			});
			return;
		}
		navigate(`/search/${search}`);
	};


	return (


        <div className='NavbarWrapper'>
			<div className='Navbar'>
				<Link to={`/`}>
					<div className="Navbar_dos">
						<strong>Vitrailers                </strong>
						<span>Movies, Series, & More</span>
					</div>
	<br />	
	
				<div className="button">
					<nav className='Navbar__search'>

					<Link to={`/`}>
						<button> HOME</button>

					<Link to={`/admin`}>
						<button>  Añadir trailer </button>
					</Link>

					<Link to={`/login`}>
						<button>Iniciar Sesion</button>
					</Link>

					<Link to={`/Register`}>
						<button>Registrarse </button>
					</Link>

					</Link>

					</nav>
				</div>
								
				</Link>
				<div className='Navbar__search'>
					<form onSubmit={handleSubmit}>
						<input
							type='search'
							placeholder='Search'
							value={search}
							onChange={handleChange}
						/>
            <button>Search</button>
					</form>


				</div>
			
			</div>

		</div>
		
		
	);
	
}

export default index;