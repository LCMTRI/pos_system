import React from 'react';
import './Employee.css';
import './Employeeside.css';
import './fonts/themify-icons/themify-icons.css';

const Employee = () => {



    return (
        <div>
            <div id="number-1">
                <br />
                <h1>Quản lí nhân viên</h1>

                <table id='myTable' class="employee">
                    <tr>
                        <th></th>
                        <th onClick={sortTable}>Doanh thu hôm nay <i className="ti-arrow-down"></i> <i className="ti-arrow-up"></i></th>
                        <th>Buổi làm hôm nay</th>
                        <th>Có mặt hiện tại</th>
                    </tr>
                    <tr>
                        <td onClick={showInfo1}>Trần Quốc Dũng</td>
                        <td >200.000</td>
                        <td>Chiều</td>
                        <td>Có</td>
                    </tr>
                    <tr>
                        <td onClick={showInfo2}>Nguyễn Anh Khoa</td>
                        <td>150.000</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td onClick={showInfo3}>Đinh Gia Bảo</td>
                        <td>600.000</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td onClick={showInfo4}>Nguyễn Công Thành</td>
                        <td>100.000</td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td onClick={showInfo5}>Nguyễn Trung Kiên</td>
                        <td>0</td>
                        <td></td>
                        <td></td>
                    </tr>

                </table>
            </div>
            <div id="number-2">
                <div>
                    <br />
                    <div id='back' onClick={hideInfo}><i class="ti-angle-left"></i></div>

                </div>
                <br />
                <h1 class="header-his">Lịch sử ca trực</h1>
                <div id="history1" class="history">
                    <table id='emp-his' class="employee">
                        <tr>
                            <th></th>
                            <th>Buổi sáng</th>
                            <th>Buổi chiều</th>
                            <th>Buổi tối</th>
                        </tr>
                        <tr>
                            <td>Thứ 2</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 7</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Chủ nhật</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>

                    </table>
                </div>
                <div id="history2" class="history">
                    <table id='emp-his' class="employee">
                        <tr>
                            <th></th>
                            <th>Buổi sáng</th>
                            <th>Buổi chiều</th>
                            <th>Buổi tối</th>
                        </tr>
                        <tr>
                            <td>Thứ 2</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 7</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Chủ nhật</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>

                    </table>
                </div>
                <div id="history3" class="history">
                    <table id='emp-his' class="employee">
                        <tr>
                            <th>Trần Quốc Dũng</th>
                            <th>Buổi sáng</th>
                            <th>Buổi chiều</th>
                            <th>Buổi tối</th>
                        </tr>
                        <tr>
                            <td>Thứ 2</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 7</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Chủ nhật</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>

                    </table>
                </div>
                <div id="history4" class="history">
                    <table id='emp-his' class="employee">
                        <tr>
                            <th></th>
                            <th>Buổi sáng</th>
                            <th>Buổi chiều</th>
                            <th>Buổi tối</th>
                        </tr>
                        <tr>
                            <td>Thứ 2</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 7</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Chủ nhật</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>

                    </table>
                </div>
                <div id="history5" class="history">
                    <table id='emp-his' class="employee">
                        <tr>
                            <th></th>
                            <th>Buổi sáng</th>
                            <th>Buổi chiều</th>
                            <th>Buổi tối</th>
                        </tr>
                        <tr>
                            <td>Thứ 2</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 3</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 4</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 5</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 6</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Thứ 7</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>
                        <tr>
                            <td>Chủ nhật</td>
                            <td>7.00 - 9.00</td>
                            <td>Không</td>
                            <td>9.00 - 11.00</td>
                        </tr>

                    </table>
                </div>


            </div>

        </div>

    );


};
// Script


const showInfo1 = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    document.getElementById('emp1').classList.add("show");
    document.getElementById('history1').classList.add("show");

}

const showInfo2 = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    document.getElementById('emp2').classList.add("show");
    document.getElementById('history2').classList.add("show");

}

const showInfo3 = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    document.getElementById('emp3').classList.add("show");
    document.getElementById('history3').classList.add("show");
}

const showInfo4 = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    document.getElementById('emp4').classList.add("show");
    document.getElementById('history4').classList.add("show");
}

const showInfo5 = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    document.getElementById('emp5').classList.add("show");
    document.getElementById('history5').classList.add("show");
}

const hideInfo = e => {
    document.getElementById('number-1').style.display = 'block';
    document.getElementById('number-2').style.display = 'none';
    const emps = document.querySelectorAll('.employeeside');
    for (const emp of emps) {
        emp.classList.remove("show");
    }
    const histories = document.querySelectorAll('.history');
    for (const history of histories) {
        history.classList.remove("show");
    }
}
const sortTable = e => {
    var table, rows, switching, i, x, y, dir, shouldSwitch, count = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "low";
    while (switching) {

        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {

            shouldSwitch = false;

            x = rows[i].getElementsByTagName("TD")[1];
            y = rows[i + 1].getElementsByTagName("TD")[1];
            if (dir == "low") {
                if (Number(x.innerHTML) > Number(y.innerHTML)) {
                    document.querySelector('.ti-arrow-up').style.display = 'block';
                    document.querySelector('.ti-arrow-down').style.display = 'none';
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "high"){
                if (Number(x.innerHTML) < Number(y.innerHTML)) {
                    document.querySelector('.ti-arrow-up').style.display = 'none';
                    document.querySelector('.ti-arrow-down').style.display = 'block';
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            count++;
        }
        else {
            if (count == 0 && dir == "low") {
                dir = "high";
                switching = true;
            }
        }
    }

}

export default Employee;
