import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-vh-100 bg-light">
            {/* --- HERO SECTION (Made slightly smaller) --- */}
            <div className="py-4 text-white shadow-lg" 
                 style={{ background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)' }}>
                <div className="container text-center py-4">
                    <h1 className="display-4 fw-bold mb-2">Student Admin Portal</h1>
                    <p className="fs-6 opacity-75">Backend Active on Port 8000 | Database: student_management_db</p>
                </div>
            </div>

            {/* --- DASHBOARD CARDS (Added maxWidth to control size) --- */}
            <div className="container" style={{ marginTop: '-40px', maxWidth: '1000px' }}>
                <div className="row g-4 justify-content-center text-center">
                    
                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0 shadow dashboard-card">
                            <div className="card-body p-4">
                                <div className="display-6 mb-3">👥</div>
                                <h6 className="fw-bold">View Students</h6>
                                <p className="text-muted extra-small" style={{fontSize: '0.8rem'}}>Check all records.</p>
                                <Link to="/display" className="btn btn-primary btn-sm w-100 mt-2 shadow-sm">Open List</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0 shadow dashboard-card">
                            <div className="card-body p-4">
                                <div className="display-6 mb-3">📝</div>
                                <h6 className="fw-bold">Register New</h6>
                                <p className="text-muted extra-small" style={{fontSize: '0.8rem'}}>Enroll a student.</p>
                                <Link to="/register" className="btn btn-success btn-sm w-100 mt-2 shadow-sm">Add Student</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0 shadow dashboard-card">
                            <div className="card-body p-4">
                                <div className="display-6 mb-3">⚙️</div>
                                <h6 className="fw-bold">Update Records</h6>
                                <p className="text-muted extra-small" style={{fontSize: '0.8rem'}}>Edit marks/info.</p>
                                <Link to="/update" className="btn btn-warning text-white btn-sm w-100 mt-2 shadow-sm">Edit Info</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <div className="card h-100 border-0 shadow dashboard-card">
                            <div className="card-body p-4">
                                <div className="display-6 mb-3">🗑️</div>
                                <h6 className="fw-bold">Sign Out</h6>
                                <p className="text-muted extra-small" style={{fontSize: '0.8rem'}}>Delete a student.</p>
                                <Link to="/signout" className="btn btn-danger btn-sm w-100 mt-2 shadow-sm">Remove</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}