import React, { Fragment } from 'react'

export default function AddClient() {
    return (
        <Fragment>
            <div className="modal fade" style={{ marginTop: '100px' }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Client Info</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form action="#">
                                <div className="clinic-name d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-name" className="form-label">Name</label>
                                    <input type="text" className="form-control w-75" id="clinic-name" />
                                </div>
                                {/* <hr width="70%" className="mx-auto"/> */}
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Email</label>
                                    <input type="email" className="form-control w-75" id="clinic-address" />
                                </div>
                                {/* <hr width="70%" className="mx-auto"/> */}
                                <div className="clinic-address d-flex align-items-center gap-3 mb-3">
                                    <label htmlFor="clinic-address" className="form-label">Phone</label>
                                    <input type="tel" className="form-control w-75" id="clinic-address" />
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
