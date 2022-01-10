import React, {useState} from "react";
import axios from "axios";

export default () => {
    
    const [idAccount, setAcc] = useState('');
    const [totalMoney, setTotal] = useState('');
    const [date, setDate] = useState('');
    const [idStaff, setStaff] = useState('');
    const [idService, setService] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.post('http://localhost:4007/orders', {
            idAccount,
            totalMoney,
            date,
            idStaff,
            idService
        });

        setAcc('');
        setTotal('');
        setDate('');
        setStaff('');
        setService('');
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className="form-group" style={{marginBottom: '5px'}}>
                    <label style={{marginBottom: '5px'}}>Title</label>
                    <input value={idAccount} onChange={e => setAcc(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={totalMoney} onChange={e => setTotal(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={date} onChange={e => setDate(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={idStaff} onChange={e => setStaff(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                    <input value={idService} onChange={e => setService(e.target.value)} className="form-control" style={{marginBottom: '5px'}}/>
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}