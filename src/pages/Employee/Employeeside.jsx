import React from 'react';
import './Employeeside.css';


const Employeeside = () => {
    var employeelist = [
        {
            name: "Trần Quốc Dũng",
            adress: "KTX Khu A",
            phone: "0327585534",
            birth: "17/02/2002",
            work: "Phục vụ",
            revenue: "2.500.000",
            day_off: "5",
            working_day: "7 a.m - 11 a.m thứ 7",
            salary: "2.000.000"
        }
    ]
    return (

        <div>
            <br />
            <h1>Thông tin nhân viên</h1>
            <div id='employeeside'>
                {employeelist.map((e) => (
                    <p>
                        Họ và tên: {e.name}<br /><br />
                        Địa chỉ: {e.adress}<br /><br />
                        Số điện thoại: {e.phone}<br /><br />
                        Ngày sinh: {e.birth}<br /><br />
                        Chức vụ: {e.work}<br /><br />
                        Doanh số tháng trước: {e.revenue}<br /><br />
                        Số ngày nghỉ tháng trước: {e.day_off}<br /><br />
                        Ngày và giờ đi làm trong tuần: {e.working_day}<br /><br />
                        Lương cơ bản: {e.salary}
                    </p>
                ))}

            </div>
        </div >
    );

}

export default Employeeside;