import React from 'react';
import './Employeeside.css';


const Employeeside = () => {
    var employee1 = [
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
    var employee2 = [
        {
            name: "Nguyễn Anh Khoa",
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
    var employee3 = [
        {
            name: "Đinh Gia Bảo",
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
    var employee4 = [
        {
            name: "Nguyễn Công Thành",
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
    var employee5 = [
        {
            name: "Nguyễn Trung Kiên",
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
            <div id='emp1' class='employeeside'>
                <br />
                <h1>Thông tin nhân viên</h1>
                {employee1.map((e) => (
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
            <div id='emp2' class='employeeside'>
                <br />
                <h1>Thông tin nhân viên</h1>
                {employee2.map((e) => (
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
            <div id='emp3' class='employeeside'>
                <br />
                <h1>Thông tin nhân viên</h1>
                {employee3.map((e) => (
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
            <div id='emp4' class='employeeside'>
                <br />
                <h1>Thông tin nhân viên</h1>
                {employee4.map((e) => (
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
            <div id='emp5' class='employeeside'>
                <br />
                <h1>Thông tin nhân viên</h1>
                {employee5.map((e) => (
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

};


export default Employeeside;