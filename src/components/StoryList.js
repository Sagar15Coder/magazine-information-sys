import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; 
import { Link, useParams } from 'react-router-dom';

export default function StoryList() {
    const [stories, setStories] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        loadStories();
    }, []);

    const loadStories = async () => {
        const result = await axios.get("http://localhost:8080/stories");
        setStories(result.data);
    };

    const deleteStory = async (id) => {
        await axios.delete(`http://localhost:8080/story/${id}`);
        loadStories();
    }
  return (
    <div className="container">
        <div className="py-4">
            <table className="table border shadow">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Story Title</th>
                <th scope="col">Story Description</th>
                <th scope="col">Action</th>                
                </tr>
            </thead>
            <tbody>
                {
                    stories.map((story, index) => (
                        <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{story.story_title}</td>
                            <td>{story.story_desc}</td>
                            <td>
                                <button className='btn btn-primary mx-2'>Read</button>
                                <Link className='btn btn-outline-primary mx-2'
                                to={`/story/${story.story_id}`}>Edit</Link>
                                
                                <button className='btn btn-danger mx-2' onClick={() => deleteStory(story.story_id)}>Delete</button>

                            </td>
                        </tr>
                    ))
                }
                                
            </tbody>
            </table>
            <Button variant="outlined" startIcon={<AddIcon />} href="/addstory">Add Story</Button>
        </div>
    </div>
    
  );
}