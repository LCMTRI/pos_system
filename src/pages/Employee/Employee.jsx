import React from 'react';
import './Employee.css';

const Employee = () => {
    var employeelist = [
        {
            name: "Trần Quốc Dũng",
            revenue_today: "200.000",
            work_today: "Chiều",
            present: "Có"
        },
        {
            name: "Nguyễn Anh Khoa",
            revenue_today: "10.000",
            work_today: "Chiều",
            present: "Có"
        },
        {
            name: "Đinh Gia Bảo",
            revenue_today: "0",
            work_today: "Không",
            present: "Không"
        },
        {
            name: "Nguyễn Trung Kiên",
            revenue_today: "100.000",
            work_today: "Sáng",
            present: "Không"
        },
        {
            name: "Nguyễn Công Thành",
            revenue_today: "0",
            work_today: "Tối",
            present: "Không"
        }
    ]
    return (
        <div>
            <br />
            <h1>Quản lí nhân viên</h1>

            <table id="employee">
                <tr>
                    <th></th>
                    <th>Doanh thu hôm nay</th>
                    <th>Buổi làm hôm nay</th>
                    <th>Có mặt hiện tại</th>
                </tr>
                {employeelist.map((e) => (
                    <tr>
                        <td>{e.name}</td>
                        <td>{e.revenue_today}</td>
                        <td>{e.work_today}</td>
                        <td>{e.present}</td>
                    </tr>
                ))}
                
            </table>
            

        </div>

    );


}

export default Employee;
