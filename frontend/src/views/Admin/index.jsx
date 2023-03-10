import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useFilter from "./../../hook/useFilter";
import Video from "../../components/AdminVideo";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Icon from "./../../favicon.ico";
import "./index.scss";

function index() {
	const MySwal = withReactContent(Swal);

	const [videos, setVideos] = useState([]);
	const [videosFilted, setVideosFilted] = useState([]);

	const handleDelete = e => {
    
    MySwal.fire({
      title: 'Seguro que quieres eliminar el trailer?',
      text: "No podras recuperarlo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!'
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire(
          'Deleted!',
          'El trailer fue eliminado',
          'success'
        )
        const id = e.target.id;
        axios.delete(`http://localhost:4000/trailer/delete/${id}`).then(() => {
          setVideosFilted(videos.filter(video => video._id !== id));
        });
      }
    })
	};
	useEffect(() => {
		axios("http://localhost:4000/trailer").then(res => {
			setVideos(res.data.body);
			setVideosFilted(res.data.body);
		});
	}, []);
	
	return (
		<div className='admin'>
			<div className='admin__header'>
				<img src={Icon} alt=""  className="icon"/>
				
			</div>
			<div className='admin__actions'>
				<Link to='/admin/create'>
					<button>Agregar Trailer</button>
				</Link>
					<input
						type='text'
						id='search'
						placeholder='Buscar trailer'
						onChange={e => setVideosFilted(useFilter(videos, e.target.value))}
					/>
			</div>
			<div className='admin__videos'>
				<table>
					<thead>
						<tr>
							<th>Portada</th>
							<th>Titulo</th>
							<th>Actores</th>
							<th>Reseña</th>
							<th>Año</th>
							<th>Acciones</th>
						</tr>
					</thead>
					<tbody>
						{videosFilted.length > 0 ? (
							videosFilted.map((video, i) => (
								<Video
									titulo={video.titulo}
									actores={video.actores}
									año={video.año}
									reseña={video.reseña}
									portada={video.portada}
									id={video._id}
									key={video._id ? video._id : i}
									handleDelete={handleDelete}
									{...video}
								/>
							))
						) : (
							<span></span>
						)}
					</tbody>
				</table>
				{videosFilted.length === 0 && (
					<h2>No hay trailers que coincidan con su busqueda</h2>
				)}
			</div>
		</div>
	);
}

export default index;
