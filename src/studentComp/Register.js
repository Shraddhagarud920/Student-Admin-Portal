import {useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Register()
{
    const[id,setId]=useState(0);
    const[name,setName]=useState("");
    const[address,setAddress]=useState("");

    const[maths,setMaths]=useState();
    const[science,setScience]=useState();
    const[english,setEnglish]=useState();

    const updateId=(e)=>{
        setId(e.target.value);
    }

    const updateName=(e)=>{
        setName(e.target.value);
    }

    const updateAddress=(e)=>{
        setAddress(e.target.value);
    }

    const updateMaths=(e)=>{
        setMaths(e.target.value);
    }

    const updateScience=(e)=>{
        setScience(e.target.value);
    }

    const updateEnglish=(e)=>{
        setEnglish(e.target.value);
    }
        
        const registerStud=(e)=>{
        e.preventDefault();
        
        let stud={"id":id,
            "name":name,
            "address":address,
            "marks":{
                "maths":maths,
                "science":science,
                "english":english
            }
        }
        console.log(stud);

         axios.post("http://localhost:8000/student/add",stud)
        .then((res)=>{
            console.log("saved object is");
            console.log(res.data);
        })
        .catch(err=>console.log(err))
    };

    


return (
    <div className="container-fluid bg-light min-vh-100 pb-5">
        <div className="container pt-3 text-start">
            <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">← Back to Dashboard</Link>
        </div>

        <div className="container mt-4">
            <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "600px" }}>
                <div className="card-header bg-success text-white text-center py-3">
                    <h3 className="mb-0">Register New Student</h3>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={registerStud}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Student ID</label>
                                <input type="text" className="form-control" placeholder="Ex: 101" onChange={updateId} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-bold">Full Name</label>
                                <input type="text" className="form-control" placeholder="Enter Name" onChange={updateName} required />
                            </div>
                            <div className="col-12">
                                <label className="form-label fw-bold">Address</label>
                                <input type="text" className="form-control" placeholder="City, State" onChange={updateAddress} required />
                            </div>
                            
                            <div className="col-12 mt-4">
                                <h5 className="border-bottom pb-2 text-secondary">Academic Marks</h5>
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Maths</label>
                                <input type="number" className="form-control" onChange={updateMaths} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Science</label>
                                <input type="number" className="form-control" onChange={updateScience} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">English</label>
                                <input type="number" className="form-control" onChange={updateEnglish} />
                            </div>

                            <div className="col-12 mt-4 d-flex gap-2">
                                <button type="submit" className="btn btn-success flex-grow-1 py-2 shadow-sm">Register Student</button>
                                <button type="reset" className="btn btn-outline-danger py-2">Reset</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}