import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2'
import './Dashboard.css'

import { Chart, ArcElement } from 'chart.js'
import 'chart.js/auto';
Chart.register(ArcElement);

const Dashboard = () => {
    return (
        <div>
            <div className='card-number'>
                <div className='first-card'>
                    Tổng doanh thu: <br></br>
                    <span className='number'>335.24</span> <br></br> triệu đồng
                </div>
                <div className='second-card'>
                    Tổng lượt khách vào quán: <br></br>
                    <span className='number'>9,402</span> <br></br> lượt
                </div>
                <div className='third-card'>
                    Số nhân viên làm việc hôm nay: <br></br>
                    <span className='number'>13</span> <br></br> người
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
                        options={{
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Tỷ lệ doanh thu các loại đồ ăn 7 ngày gần nhất'
                                },
                                legend: {
                                    position: 'right'
                                }
                            }
                        }}
                    />
                </div>
                <div className='second-chart'>
                    <Bar
                        data={{
                            labels: ['Red', 'Orange', 'Yellow'],
                            datasets: [{
                                // label: 'Top 3 món bán chạy trong 30 ngày gần nhất',
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
                            indexAxis: 'y',
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Top 3 món bán chạy trong 30 ngày gần nhất'
                                },
                                legend: {
                                    display: false
                                }
                            }
                        }}

                    />
                </div>
                <div className='third-chart'>
                    <Line
                        data={{
                            labels: ['10/10', '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10'],
                            datasets: [{
                                label: 'Doanh thu ngày theo 7 ngày gần nhất',
                                data: [33000000, 22000000, 32000000, 13000000, 55000000, 21000000, 43000000, 45000000],
                                backgroundColor: [
                                    'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Black'
                                ],
                                hoverOffset: 3
                            }]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Doanh thu ngày theo 7 ngày gần nhất'
                                },
                                legend: {
                                    display: false
                                }
                            }
                        }}

                    />
                </div>
                <div className='fourth-chart'>
                    <Line
                        data={{
                            labels: ['10/10', '11/10', '12/10', '13/10', '14/10', '15/10', '16/10', '17/10'],
                            datasets: [{
                                label: 'Lượng khách đến quán theo 7 ngày gần nhất',
                                data: [33, 22, 32, 13, 55, 21, 43, 45],
                                backgroundColor: [
                                    'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Gray', 'Black'
                                ],
                                hoverOffset: 3
                            }]
                        }}
                        options={{
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Lượng khách đến quán theo 7 ngày gần nhất'
                                },
                                legend: {
                                    display: false
                                }
                            }
                        }}

                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;