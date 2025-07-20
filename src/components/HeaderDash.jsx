import { Fragment } from 'react'
import { MdSpaceDashboard } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export default function HeaderDash({toggleSidebar}) {


    return (
        <Fragment>
            <header className="header-dash">
                <nav className="navbar container-fluid background py-3 px-4 align-items-center position-fixed top-0 start-0 end-0 z-1 " style={{ height: '100px', borderBottom: '1px solid #D9A741' }}>
                    {/* <div className="">
                        <img src={logo} alt="logo" style={{ width: '80px', height: '80px'}} />
                    </div> */}
                    <div className="container-fluid me-0 flex-1 " >
                        <span className="navbar-brand mb-0 h1 d-flex align-items-center gap-3 fs-3"><FaBars size={30} onClick={toggleSidebar} cursor={"pointer"}/>Dashboard</span>
                        <div className="d-flex align-items-center gap-2 text-white justify-content-between">
                            <span className="navbar-brand mb-0 fs-6 fw-bold">Welcome, Doctor</span>
                            <img src="https://bootdey.com/img/Content/user_1.jpg" alt="img-doctor" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                        </div>
                    </div>
                </nav>
            </header>

        </Fragment>
    )
}
