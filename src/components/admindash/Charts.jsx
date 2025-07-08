import React, { Fragment } from 'react'
import {
    BarChart, Bar,
    PieChart, Pie, Cell,
    AreaChart, Area,
    LineChart, Line,
    XAxis, YAxis,
    Tooltip, CartesianGrid,
    ResponsiveContainer,
    Legend
} from 'recharts';
export default function Charts() {
    const clientsData = [
        { month: 'Jan', clients: 20 },
        { month: 'Feb', clients: 35 },
        { month: 'Mar', clients: 28 },
        { month: 'Apr', clients: 40 },
        { month: 'May', clients: 32 },
        { month: 'Jun', clients: 45 },
        { month: 'July', clients: 50 },
        { month: 'Aug', clients: 55 },
        { month: 'May', clients: 40 },
        { month: 'aug', clients: 32 },
        { month: 'aag', clients: 45 },
        { month: 'sept', clients: 50 },
    ];
    // عدد العيادات حسب التخصص
    const clinicsData = [
        { name: 'Dermatology', value: 5 },
        { name: 'Cardiology', value: 8 },
        { name: 'Dentistry', value: 6 },
        { name: 'Pediatrics', value: 4 },
    ];
    // الأرباح شهريًا
    const revenueData = [
        { month: 'Jan', revenue: 750 },
        { month: 'Feb', revenue: 1000 },
        { month: 'Mar', revenue: 1500 },
        { month: 'Apr', revenue: 1000 },
        { month: 'May', revenue: 900 },
        { month: 'Jun', revenue: 2000 },
        { month: 'Jun', revenue: 800 },
        { month: 'Jun', revenue: 1100 },
        { month: 'Jun', revenue: 1200 },
        { month: 'Jun', revenue: 2000 },
        { month: 'Jun', revenue: 2500 },
        { month: 'Jun', revenue: 1900 },
    ];
    const COLORS = ['#D9A741', '#8884d8', '#82ca9d', '#FF8042'];
    return (
        <Fragment>
            <div className="container mt-5">
                <h3 className="mb-4">Dashboard Charts</h3>
                <div className="row g-4">

                    {/* عدد المرضى شهريًا */}
                    <div className="col-md-12 mb-4">
                        <h6>Number of clients per month</h6>
                        <ResponsiveContainer width="100%" height={500}>
                            <BarChart data={clientsData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="clients" fill="#D9A741" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <hr />

                    {/* عدد العيادات حسب التخصص */}
                    <div className="col-md-12 mx-auto mb-4">
                        <h6>Number of clinics by specialty</h6>
                        <ResponsiveContainer width="100%" height={400} >
                            <PieChart className='border-0'>
                                <Pie
                                    
                                    data={clinicsData}
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={150}
                                    fill="#8884d8"
                                    dataKey="value"
                                    // label
                                >
                                    {clinicsData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <hr />

                    {/* الأرباح شهريًا */}
                    <div className="col-md-12 mb-4">
                        <h6>Revenues per month</h6>
                        <ResponsiveContainer width="100%" height={500}>
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="revenue" stroke="#D9A741" strokeWidth={3} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
