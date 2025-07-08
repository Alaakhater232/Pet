import React, { Fragment, useState } from 'react'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
export default function Calendar() {

    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const data = {
        '2025-07-05': [
            { name: 'Ahmed Ali', time: '10:00 AM', clinic: 'Clinic 1' },
            { name: 'Sara Hassan', time: '12:00 PM', clinic: 'Clinic 2' }
        ],
        '2025-07-06': [{ name: 'Karem Samy', time: '10:00 AM', clinic: 'Clinic 2' }],
    };

    const handleDateClick = (arg) => {
        setSelectedDate(arg.dateStr);
        setShowModal(true);
    };
    return (
        <Fragment>
            <div className="container my-4">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    dateClick={handleDateClick}
                    events={[
                        { title: 'A', date: '2025-07-05' },
                        { title: 'Sara Hassan', date: '2025-07-05' },
                        { title: 'Karem Samy', date: '2025-07-06' },
                    ]}
                    height="auto"
                //   width="100%"
                />
            </div>

            {showModal && (
                <>
                    <div className="modal modal-lg large show fade d-block" tabIndex="-1" role="dialog" style={{ marginTop: '150px' }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Day data: {selectedDate}</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                                </div>

                                <div className="modal-body ">
                                    {data[selectedDate]?.length > 0 ? (
                                        <ul className="px-4" style={{}}>
                                            {data[selectedDate].map((item, index) => (
                                                <>
                                                    <li key={index}>Name: {item.name}</li>
                                                    <li key={index}>Appointment: {item.time}</li>
                                                    <li key={index}>Clinic: {item.clinic}</li>
                                                    <hr />
                                                </>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>No data available for the selected day.</p>
                                    )}
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-danger" onClick={() => setShowModal(false)}>Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-backdrop fade show"></div>
                </>
            )}
        </Fragment>
    )
}
