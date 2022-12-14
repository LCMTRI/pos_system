import React from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2'
import './Dashboard.css'

import {SiCashapp} from 'react-icons/si'
import {SlPeople} from 'react-icons/sl'
import {SlBriefcase} from 'react-icons/sl'

import { Chart, ArcElement } from 'chart.js'
import 'chart.js/auto';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
Chart.register(ArcElement);

const Dashboard = () => {
    return (
        <div>
            <div className='card-number'>
                <div className='first-card'>
                    <SiCashapp className='react-icon' /> <br></br>
                    <span style={{lineHeight: "33px"}}>Tổng doanh thu:</span> <br></br>
                    <span className='number'>335.24</span> <br></br> triệu đồng
                </div>
                <div className='second-card'>
                    <SlPeople className='react-icon' /> <br></br>
                    Tổng lượt khách vào quán: <br></br>
                    <span className='number'>9,402</span> <br></br> lượt
                </div>
                <div className='third-card'>
                    <SlBriefcase className='react-icon' /> <br></br>
                    Số nhân viên làm việc hôm nay: <br></br>
                    <span className='number'>5</span> <br></br> người
                </div>
            </div>

            <div className='card-chart'>
                <div className='first-chart'>
                    <Pie
                        data={{
                            labels: ['Cà phê sữa', 'Espresso', 'Capuchino', 'Trà dâu', 'Tiramisu', 'Các món khác'],
                            datasets: [{
                                label: 'Tỷ lệ doanh thu các loại đồ ăn 7 ngày gần nhất',
                                data: [90,81,45,30,30,24],
                                backgroundColor: [
                                    '#cfdddb', '#e4cdee', '#c2dbe9', '#c9caee', '#fac2d9', '#e6dade'
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
                {/* <div className='second-chart'>
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
                </div> */}
                <div className='third-chart'>
                    <Bar
                        data={{
                            labels: ['26/11', '27/11', '28/11', '29/11', '30/11', '1/12', '2/12', '3/12'],
                            datasets: [{
                                label: 'Doanh thu ngày theo 7 ngày gần nhất',
                                data: [33000000, 22000000, 32000000, 13000000, 55000000, 21000000, 43000000, 45000000],
                                backgroundColor: [
                                    '#cfdddb', '#e4cdee', '#c2dbe9', '#c9caee', '#fac2d9', '#e6dade', '#f0c8cf'
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