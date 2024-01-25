import { useEffect } from "react";
import { useState } from "react";

const App = () => {
	const [data, setData] = useState([]);
	const [input, setInput] = useState("10");
 
	const getData = async () => {
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/character`);
			const responseData = await response.json();
			const filteresData = await responseData.results.filter(
				(item) => item.id <= input
			);
      // console.log(filteresData);
			// console.log(responseData.results);
			setData(filteresData);
		} catch (error) {
			console.error(error);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	return (
    
		<div>

			<input
				type="number"
				onChange={(e) => setInput(e.target.value)}
			/>
          <button onClick={() => {
            getData(data)
          }}>UpDate</button>
			{data.map((item) => (
				<div key={item.id} style={{borderRadius: 20, backgroundColor: 'red',}}>
					<h3>{item.name}</h3> 
					<p>{item.status}</p>
					<img src={item.image} alt="" style={{ width: 200 ,borderRadius: 20}} />
				</div>
			))}
		</div>
	);
};

export default App;
