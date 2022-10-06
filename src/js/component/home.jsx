import React,{ useState} from "react";
import '../../styles/index.css';

//create your first component
const Home = () => {

	const [tarea, setTarea] = useState("");
	const [listaDeTareas, setListaDeTareas] = useState([]);

	function nuevaTarea(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			setListaDeTareas([...listaDeTareas, tarea]);
			setTarea("");
		}
	};

	function borrar(id){
		setListaDeTareas(listaDeTareas.filter((item, index) => {
			if (index !== id) {
				return item;
			};
		}))
	};
	return (
		<div className="container">
			<form>
				<div className="m-3">
					<h1>To do List</h1>
					<hr />
					<ul className="list-group">
						<input className="form-control form-control-lg shadow-none fs-2" type="text" placeholder="What needs to be done?" 
							aria-label=".form-control-lg example" onChange={(e) => setTarea(e.target.value)}
							value={tarea} onKeyDown={nuevaTarea} />

						{listaDeTareas.map((item, id)=><li className="list-group-item fs-4" key={id}>
							{item} 
							<button className="btn btn-outline-dark border border-0 float-end" onClick={()=>borrar(id)}>X</button>
						</li>)}
					</ul>
				</div>
			</form>
		</div>
	);
};

export default Home;
