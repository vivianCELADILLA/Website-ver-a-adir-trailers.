import axios from "axios";
import { useEffect, useState } from "react";
import ListOfVideos from '../../components/ListOfVideos';
import "./index.scss";
function index() {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		axios("http://localhost:4000/trailer").then(res => {
			setVideos(res.data.body);
		});
	}, []);

	return (
		<div className='Home'>
			<h1>Home

				
			</h1>
			<ListOfVideos videos={videos} />
		</div>
		
		
	);
}

export default index;
