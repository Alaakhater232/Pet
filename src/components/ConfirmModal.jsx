import React, { Fragment } from 'react'

export default function ConfirmModal({onDelete,setShowConfirm,selectedId,whatDelete}) {
    return (
        <Fragment>
            <div className="modal d-block " tabIndex={-1} style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="modal-dialog " style={{ marginTop: "170px" }}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Deletion</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowConfirm(false)}
                            ></button>
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
