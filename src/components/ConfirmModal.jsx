import React, { Fragment } from 'react'
import logo from '../assets/petut.png';
export default function ConfirmModal({onDelete,setShowConfirm,selectedId,whatDelete}) {
    return (
        <Fragment>
            <div className="modal d-block " tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog " style={{ marginTop: "170px" }}>
                    <div className="modal-content">
                        <div className="modal-header py-0 d-flex align-items-center justify-content-between">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <img src={logo} width={'80px'} height={'80px'} alt="logo" />
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to delete this {whatDelete} ?</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setShowConfirm(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-danger"
                                onClick={() => {
                                    onDelete (selectedId);
                                    setShowConfirm(false);
                                }}
                            >
                                Yes, delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
