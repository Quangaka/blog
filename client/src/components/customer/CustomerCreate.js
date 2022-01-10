import React, {useState} from "react";
import axios from "axios";

export default () => {
    
    const [nameCustomer, setName] = useState('');
    const [address, setAdd] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUser] = useState('');
    const [password, setPass] = useState('');
    const [idCard, setCard] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4006/customers', {
            nameCustomer,
            address,
            phone,
            username,
            password,
            idCard
        });

        setUser('');
        setPass('');
        setPhone('');
        setName('');
        setAdd('');
        setCard('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group" style={{marginBottom: '5px'}}>
                    <label style={{marginBottom: '5px'}}>Title</label>
                    <input value={nameCustomer} onChange={e => setName(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={address} onChange={e => setAdd(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={phone} onChange={e => setPhone(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={username} onChange={e => setUser(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={password} onChange={e => setPass(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={idCard} onChange={e => setCard(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}