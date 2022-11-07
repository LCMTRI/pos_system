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
                        <th onClick={sort}>Doanh thu hôm nay</th>
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
const sort = e => {
        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("myTable");
        switching = true;
        /*Make a loop that will continue until
        no switching has been done:*/
        while (switching) {
          //start by saying: no switching is done:
          switching = false;
          rows = table.rows;
          /*Loop through all table rows (except the
          first, which contains table headers):*/
          for (i = 1; i < (rows.length - 1); i++) {
            //start by saying there should be no switching:
            shouldSwitch = false;
            /*Get the two elements you want to compare,
            one from current row and one from the next:*/
            x = rows[i].getElementsByTagName("TD")[0];
            y = rows[i + 1].getElementsByTagName("TD")[0];
            //check if the two rows should switch place:
            if (x > y) {
              //if so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
          if (shouldSwitch) {
            /*If a switch has been marked, make the switch
            and mark that a switch has been done:*/
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
          }
        }
      
}

export default Employee;
