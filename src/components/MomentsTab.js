import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { GET_MOMENTS_USER } from '../api/endpoints';
import MomentList from '../components/MomentList';
import {USER_ID} from "./constants";

function MomentsTab() {
  const [moments, setMoments] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMoments = () => {
      return new Promise((resolve, reject) => {
        const userId = USER_ID
        axios
          .get(`${GET_MOMENTS_USER}?userId=${userId}`)
          .then((response) => resolve(response.data))
          .catch((error) => {
            reject(error);
          });
      });
    };

    fetchMoments()
      .then((data) => {
        setMoments(data);
        setError('');
      })
      .catch((r) => {
        setError('Nothing to show here');
        setMoments([]);
      });
  }, []);

  return (
    <>
      {error === '' ? (
        <MomentList moments={moments} />
      ) : (
        <p>{error}</p>
      )}
    </>
  );
}

export default MomentsTab;
