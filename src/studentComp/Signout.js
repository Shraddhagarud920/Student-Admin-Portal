import { useState } from "react"; 
import axios from 'axios';
import { Link } from 'react-router-dom';
export default function Signout()
{
        const [id,setId]=useState();
    const updateId=(e)=>{setId(e.target.value);
    }
    const removeStud=(e)=>{
        e.preventDefault();
        axios.delete("http://localhost:8000/student/delete/"+id)
        .then((res)=>{
            console.log("deleted");
        })
        .catch(err=>console.log(err))
    }
  

    return (
    <div className="container-fluid bg-light min-vh-100">
        <div className="container pt-3 text-start">
            <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">← Back to Dashboard</Link>
        </div>

        <div className="container d-flex flex-column align-items-center justify-content-center mt-5">
            <div className="card shadow-lg border-0 border-top border-danger border-4" style={{ maxWidth: "450px", width: "100%" }}>
                <div className="card-body p-5 text-center">
                    <div className="display-1 text-danger mb-3">⚠️</div>
                    <h2 className="fw-bold text-dark">Remove Student</h2>
                    <p className="text-muted mb-4">Enter the Student ID to permanently remove the record from the database.</p>
                    
                    <form onSubmit={removeStud}>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-danger text-white border-danger">ID</span>
                            <input type="text" onChange={updateId} className="form-control border-danger shadow-none" placeholder="Ex: 101" required />
                        </div>
                        <button type="submit" className="btn btn-danger w-100 py-2 shadow-sm fw-bold">Delete Record</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}