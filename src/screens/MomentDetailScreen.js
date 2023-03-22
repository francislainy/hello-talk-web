import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {GET_MOMENTS} from "../api/endpoints";
import {useParams} from "react-router-dom";
import MomentDetailItem from "../components/MomentDetailItem";

function MomentDetail() {

    const {id} = useParams()

    const [moment, setMoment] = useState(null);

    useEffect(() => {
        const fetchMoment = async () => {
            try {
                const response = await axios.get(`${GET_MOMENTS}${id}`);
                setMoment(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchMoment();
    }, [id]);

    if (!moment) {
        return <div>
            <p>{id}</p>
            <p>Loading moment...</p>
        </div>;
    }

    return (
       <MomentDetailItem moment = {moment}/>
    );
}

export default MomentDetail;
