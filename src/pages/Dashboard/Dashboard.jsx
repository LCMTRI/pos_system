import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2'
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard page</h1>
            <br></br>

            <div className='card-number'>
                <div className='first-card'>
                    Tổng doanh thu: <br></br>
                    <a className='number'>335.24</a> triệu đồng
                </div>
                <div className='second-card'>
                    Tổng lượt khách vào quán: <br></br>
                    <a className='number'>9,402</a> lượt
                </div>
                <div className='third-card'>
                    Số nhân viên làm việc hôm nay: <br></br>
                    <a className='number'>13</a>
                </div>
            </div>

            <div className='card-chart'>
                <div className='first-chart'>
                    <Pie
                        data={{
                            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Black'],
                            datasets: [{
                                label: 'Tỷ lệ doanh thu các loại đồ ăn 7 ngày gần nhất',
                                data: [33, 22, 32, 13, 55, 21, 43, 45],
                                backgroundColor: [
                                    'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Black'
                                ],
                                hoverOffset: 3
                            }]
                        }}
                    />
                </div>
                <div className='second-chart'>
                    <Bar
                        data={{
                            labels: ['Red', 'Orange', 'Yellow'],
                            datasets: [{
                                label: 'Top 3 món bán chạy trong 30 ngày gần nhất',
                                axis: 'y',
                                data: [90, 88, 84],
                                fill: false,
                                backgroundColor: [
                                    'rgb(109, 0, 0)',
                                    'rgb(62, 62, 0)',
                                    'rgb(0, 58, 0)'
                                ],
                            }],
                        }}
                        options={{
                            indexAxis: 'y'
                        }}
                        
                    />
                </div>
                {/* <div className='third-chart'>
                    <Line
                        data={{

                        }}
                    />
                </div>
                <div className='fourth-chart'>
                    <Line
                        data={{

                        }}
                    />
                </div> */}
            </div>
        </div>
    );
};

export default Dashboard;