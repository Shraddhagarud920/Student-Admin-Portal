import {useState,useEffect} from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';
export default function Display()
{
    const[allStudents,setAllStudents]=useState([]);

    const getAllStudents=()=>{
        console.log("hello");
        axios.get("http://localhost:8000/student/getAll")
        .then(
            (res)=>{
                console.log(res.data);
                setAllStudents(res.data);
            })
        .catch((error)=>{console.log(error)});
        
    }

    useEffect(()=>{
        getAllStudents();
    },[]);

return (
    <div className="container-fluid bg-light min-vh-100 pb-5">
        <div className="container pt-3 text-start">
            <Link to="/" className="btn btn-outline-secondary btn-sm shadow-sm">← Back to Dashboard</Link>
        </div>

        <div className="container mt-4">
            <div className="card shadow-sm border-0">
                <div className="card-header bg-primary text-white py-3">
                    <h3 className="mb-0 text-center">Student Records List</h3>
                </div>
                <div className="card-body p-0">
                    <div className="table-responsive">
                        <table className="table table-hover table-striped mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th className="ps-4">ID</th>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Math</th>
                                    <th>Science</th>
                                    <th>English</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allStudents.map((st) => (
                                    <tr key={st.id}>
                                        <td className="ps-4 fw-bold">{st.id}</td>
                                        <td>{st.name}</td>
                                        <td><span className="badge bg-info text-dark">{st.address}</span></td>
                                        <td>{st.marks.maths}</td>
                                        <td>{st.marks.science}</td>
                                        <td>{st.marks.english}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
    
}
