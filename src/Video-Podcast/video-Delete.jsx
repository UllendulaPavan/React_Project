import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export function DeleteVideo(){

    let params = useParams();
    let navigate = useNavigate();

    const [video, setVideo] = useState(
        {
        id: 0,
        video_id: 0,
        title: null,
        url: null,
        description: null,
        category_id: 0, 
        likes: 0,
        views:0,
        dislikes: 0,
        comments: null
     }
    )

    useEffect(()=>{
         axios.get(`http://localhost:3000/videos/${params.id}`)
         .then(response=>{
            setVideo(response.data);
         })
    },[])

    function handleYesClick(){
        axios.delete(`http://localhost:3000/videos/${params.id}`)
        .then(()=>{
            console.log('delete');
        })
        alert('Deleted Successfully..');
        navigate('/admin-dashboard');
    }

    return(
        <div className="bg-light p-2 w-25">
            <h3>Delete Video</h3>
            <p>Are you sure? Want to delete?</p>
            <dl>
                <dt>Title</dt>
                <dd>{video.title}</dd>
                <dt>Preview</dt>
                <dd>
                    <iframe width="200" height="100" src={video.url}></iframe>
                </dd>
            </dl>
            <button onClick={handleYesClick} className="btn btn-danger"> Yes </button>
            <Link to="/admin-dashboard" className="btn btn-warning mx-2"> No </Link>
        </div>
    )
}