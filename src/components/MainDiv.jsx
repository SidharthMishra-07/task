import React, { useEffect, useState } from 'react';
import CardsDiv from './cardsDiv';
import "./main.css";
const MainDiv = () => {
	const [ data, setData ] = useState(null);
	const [ appliedData, setAppliedData ] = useState([]);
	const [ acceptedData, setAcceptedData ] = useState([]);
	const [ rejectedData, setRejectedData ] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					'https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d'
				);
				const jsonData = await response.json();
				setData(jsonData.data);
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};
		fetchData();
	}, []);

    useEffect(() => {
		// Filter and categorize the data into applied, accepted, and rejected
		if (data) {
			const applied = data.filter(item => item.status === 'Applied');
			const accepted = data.filter(item => item.status === 'Accepted');
			const rejected = data.filter(item => item.status === 'Rejected');

			setAppliedData(applied);
			setAcceptedData(accepted);
			setRejectedData(rejected);
		}
	}, [data]);

	return (
		<div className='hdiv'>
			<CardsDiv header="Applied" data={appliedData} />
            <CardsDiv header="Accepted" data={acceptedData} />
            <CardsDiv header="Rejected" data={rejectedData} />

		</div>
	);
};

export default MainDiv;