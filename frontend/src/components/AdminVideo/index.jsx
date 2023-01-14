import { Link } from "react-router-dom";
import placeholder from "../../assets/img/placeholder.jpg";

/* A function that is being exported. */
function index(props) {
	const { reseña, portada, titulo, actores, año, id } = props;

	return (
		<tr>
			<td>
				<img
					src={portada ? portada : placeholder}
				/>
			</td>
			<td>
				<p>{titulo}</p>
			</td>
			<td>
				<p>
					{actores.map((actor, i) => (
						<span key={i}>{`${actor}  `} </span>
					))}
				</p>
			</td>
			<td>
				<p>{reseña}</p>
			</td>
			<td>
				<p>{año}</p>
			</td>
			<td>
				<div>
					<button
						className='delete'
						id={id}
						onClick={props.handleDelete}>
						Eliminar
					</button>
					<Link
						to={`/admin/trailer/${id}`}
						className='videoWrapper__info__link'>
						<button className='edit'>Editar</button>
					</Link>
				</div>
			</td>
		</tr>
	);
}

export default index;
