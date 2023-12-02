import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import http from '../http'

function YourComponent() {
  const [inputs, setInputs] = useState({ name: '', description: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));

    // Calculate the number of rows based on the content
    const textarea = e.target;
    textarea.rows = textarea.value.split('\n').length;
  };

  const submitForm = () =>{
    http.post('/users',inputs).then((res)=>{
        navigate('/listfavourite');
        //console.log('Form submitted:', inputs);
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

              <label>Send the secret message</label>
              <textarea
                name="password"
                className="form-control mb-2"
                value={inputs.password || ''}
                onChange={handleChange}
                rows={2} // Initial number of rows
              />

              <button
                type="button"
                onClick={submitForm}
                className="btn btn-info mt-2 mx-auto d-block"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
  );
}

export default YourComponent;
