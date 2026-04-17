import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
export default function Update()
{
    const[id,setId]=useState();
    const[name,setName]=useState();
    const[address,setAddress]=useState();

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

    const viewStud=(e)=>{
        console.log("get");
        e.preventDefault();
        axios.get("http://localhost:8000/student/get/"+ id)
        .then((res)=>{
            console.log(res.data);
            setId(res.data.id);
            setName(res.data.name);
            setAddress(res.data.address);
            setMaths(res.data.marks.maths);
            setScience(res.data.marks.science);
            setEnglish(res.data.marks.english);

        })
        .catch((err)=>{console.log(err)})
    }

    const updateStud=(e)=>{
        e.preventDefault();
        const studentData = {
        id: id,
        name: name,
        address: address,
        marks: {
            maths: maths,
            science: science,
            english: english
        }
    };

        console.log("Updating student:", id);

    axios.put("http://localhost:8000/student/update",studentData) 
        .then(() => {
            alert("Update Successful!");
            console.log("Full record updated in db.json");
        })
        .catch(err => console.log(err));
}

return (
    <div className="container-fluid bg-light min-vh-100 pb-5">
        <div className="container pt-3 text-start">
            <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">← Back to Dashboard</Link>
        </div>

        <div className="container mt-4" style={{ maxWidth: "700px" }}>
            <div className="card shadow-lg border-0 mb-4">
                <div className="card-body bg-dark text-white rounded">
                    <div className="d-flex gap-2 align-items-center">
                        <input type="text" className="form-control" placeholder="Enter Student ID to fetch..." onChange={updateId} />
                        <button className="btn btn-warning px-4 fw-bold" onClick={viewStud}>Search</button>
                    </div>
                </div>
            </div>

            <div className="card shadow-lg border-0">
                <div className="card-header bg-warning text-dark py-3">
                    <h3 className="mb-0 text-center text-uppercase fw-bold">Update Details</h3>
                </div>
                <div className="card-body p-4">
                    <form onSubmit={updateStud}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control border-warning" value={name} onChange={updateName} />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Address</label>
                                <input type="text" className="form-control border-warning" value={address} onChange={updateAddress} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Maths</label>
                                <input type="number" className="form-control" value={maths} onChange={updateMaths} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">Science</label>
                                <input type="number" className="form-control" value={science} onChange={updateScience} />
                            </div>
                            <div className="col-md-4">
                                <label className="form-label">English</label>
                                <input type="number" className="form-control" value={english} onChange={updateEnglish} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100 mt-4 py-2 fw-bold">Save Updated Information</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);
}