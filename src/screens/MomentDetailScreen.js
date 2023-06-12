import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import MomentDetailItem from "../components/MomentDetailItem";
import {getMomentApi} from "../api/api";

function MomentDetail() {

    const {id} = useParams()

    const [moment, setMoment] = useState(null);

    useEffect(() => {
        const fetchMoment = async () => {
            try {
                const response = await getMomentApi(id);
                setMoment(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMoment().then(() => "Moment fetched successfully");
    }, [id]);

    if (!moment) {
        return <div>
            <p>{id}</p>
            <p>Loading moment...</p>
        </div>;
    }

    return (
        <MomentDetailItem moment={moment}/>
    );
}

export default MomentDetail;
