import React, { Fragment } from 'react'
import logo from '../../assets/petut.png'
export default function ViewClinicModal({ clinic, modalId }) {
    if (!clinic) return null;
    return (
        <Fragment>
            <div className="modal fade" id={`viewclinic-${modalId}`} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header d-flex align-items-center justify-content-between">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Clinic Details</h1>
                            <img src={logo} width={'90px'} height={'90px'} alt="logo" />
                        </div>
                        <div className="modal-body d-flex align-items-center gap-5">
                            <div className="">
                                <p>Clinic Name :</p>
                                <p>Specialization :</p>
                                <p>Email :</p>
                                <p>Phone :</p>
                                <p>Address :</p>
                                <p>Status :</p>
                                <p>Working Hours :</p>
                            </div>
                            <div className="">

                                <p>{clinic.name || ''}</p>
                                <p>{clinic.specialization || ''}</p>
                                <p>{clinic.email || ''}</p>
                                <p >{clinic.phone || ''}</p>
                                <p>{clinic.address.governorate || ''} - {clinic.address.city || ''}</p>
                                <p style={{ color: 'white', backgroundColor: clinic.status === 'active' ? '#28a745  ' : '#6c757d   ', fontSize: '14px' }} className='px-3 py-1 rounded rounded-5 w-50 text-center '>{clinic.status || ''}</p>
                                <p>
                                    {clinic.workingHours && clinic.workingHours.length > 0
                                        ? clinic.workingHours.map((day, i) => (
                                            <span key={i} className='d-block'>
                                                {day.day}: {day.openTime} - {day.closeTime}
                                            </span>
                                        ))
                                        : 'No Working Hours'}
                                </p>
                            </div>

                        </div>

                        <div className="modal-footer d-flex justify-content-end gap-2">
                            <button type="button" className="btn btn-danger" id='close-btn-edit' data-bs-dismiss="modal" style={{ width: '100px' }}>Close</button>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
