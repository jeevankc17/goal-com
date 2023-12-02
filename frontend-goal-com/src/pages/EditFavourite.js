import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from '../http'


export default function EditFavourite(props) {
    const navigate = useNavigate();
    const [inputs,setInputs] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        fetchUser()
    },[]);

    const fetchUser= () =>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                description:res.data.description,
            });
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values,[name]:value}))
    }

    const submitForm = () =>{
        http.put('/users/'+id,inputs).then((res)=>{
            navigate('/listfavourite');
        })
    }
    return (
        <div className="mx-auto" style={{ maxWidth: "1400px" }}>
            <h2 className="text-center">Create Favourite Team</h2>
            <div className="row">
              <div className="col-sm-6 mx-auto">
                <div className="card p-4">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-2"
                    value={inputs.name || ''}
                    onChange={handleChange}
                  />
    
                  <label>Description</label>
                  <textarea
                    name="description"
                    className="form-control mb-2"
                    value={inputs.description || ''}
                    onChange={handleChange}
                    rows={3} // Initial number of rows
                  />
    
                  <button
                    type="button"
                    onClick={submitForm}
                    className="btn btn-info mt-2 mx-auto d-block"
                  >
                    Make Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
      );
}