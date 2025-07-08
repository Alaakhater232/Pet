import React, { Fragment } from 'react'

export default function Addclinic() {
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id="addclinic" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Clinic Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Clinic Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" />
                                </div>
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Clinic Address</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" />
                                </div>
                                {/* <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" />
                                </div> */}
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Responsible Doctor</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" />
                                </div>
                                <div className="spcialization d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="specialization" className="form-label">Number of Patients</label>
                                    <input type="number" className="form-control w-75" id="specialization" />
                                </div>
                                <div className="status">
                                    <p className='fw-bold mb-2'>Choose Status</p>
                                    <div className="active-radio">
                                        <input type="radio" name="status" id="active" className="me-3" />
                                        <label htmlFor="active">Active</label><br />
                                    </div>
                                    <div className="inactive-radio">
                                        <input type="radio" name="status" id="inactive" className="me-3" />
                                        <label htmlFor="inactive">Inactive</label><br />
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="modal-footer d-flex gap-3">
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" style={{width:'100px'}}>Close</button>
                            <button type="button" className="custom-button" style={{width:'100px'}}>Add</button>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
