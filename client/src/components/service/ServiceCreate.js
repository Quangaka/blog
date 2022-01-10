import React, { useState } from "react";
import axios from "axios";

export default () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [descripstion, setDes] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4009/service', {
            name, 
            price, 
            descripstion 
        });

        setName('');
        setPrice('');
        setDes('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group" style={{marginBottom: '5px'}}>
                    <label style={{marginBottom: '5px'}}>Title</label>
                    <input value={name} onChange={e => setName(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={price} onChange={e => setPrice(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={descripstion} onChange={e => setDes(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}