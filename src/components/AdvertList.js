import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import { Link, useParams } from 'react-router-dom';

export default function AdvertList() {
    const [adverts, setAdverts] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadAdverts();
    }, []);

    const loadAdverts = async () => {
        const result = await axios.get("http://localhost:8080/adverts");
        setAdverts(result.data);
    };

    const deleteAdvert = async (id) => {
        await axios.delete(`http://localhost:8080/advert/${id}`);
        loadAdverts();
    }
  return (
    <div className="container">
        <div className="py-4">
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Advert Title</th>
                <th scope="col">Advert Description</th>
                <th scope="col">Advertiser ID</th>
                <th scope="col">Action</th>                
                </tr>
            </thead>
            <tbody>
                {
                    adverts.map((advert, index) => (
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{advert.advert_title}</td>
                            <td>{advert.advert_desc}</td>
                            <td>{advert.advertiser_id}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>View</button>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/advert/${advert.advert_id}`}>Edit</Link>
                                
                                <button className='btn btn-danger mx-2' onClick={() => deleteAdvert(advert.advert_id)}>Delete</button>

                            </td>
                        </tr>
                    ))
                }
                                
            </tbody>
            </table>
            <Button variant="outlined" startIcon={<AddIcon />} href="/addadvert">Add Advert</Button>
        </div>
    </div>
    
  );
}