import React, { useState, useEffect } from "react";
import './Employee.css';
import { db } from './firebaseConfig'
import { collection, documentId, getDocs, doc, setDoc, deleteDoc, updateDoc  } from 'firebase/firestore'
import './fonts/themify-icons/themify-icons.css';

const Employee = () => {
    const [users, setUsers] = useState([]);
    //useEffect -> Runs a piece of code based on a specific condition.
    useEffect(() => {
        // this is where the code runs
        getUsersData();
    }, []);

    const getUsersData = async () => {
        const usersCol = collection(db, 'users');
        const snapshot = await getDocs(usersCol);
        setUsers(
            snapshot.docs.map(doc => ({
                id: doc.id,
                user: doc.data(),
                shift: doc.data().shift
            }))
        )
    }

    return (
        <div>
            <div id="number-1">
                <br />
                <h1>Quản lí nhân viên</h1>

                <table id='myTable' className="employee">
                    <tr>
                        <th></th>
                        <th onClick={sortTable}>Doanh thu hôm nay  <i className="ti-arrow-up"></i><i className="ti-arrow-down"></i></th>
                        <th>Buổi làm hôm nay</th>
                        <th>Có mặt hiện tại</th>
                        <th>Tác vụ</th>
                    </tr>
                    {
                        users.map(({ id, user }) => (
                            <tr id={id}>
                                <td className="name" onClick={showInfo}>{user.name}</td>
                                <td className="revenue-today">{user.revenue_today}</td>
                                <td className="work-today">{user.work_today}</td>
                                <td className="active">{user.active}</td>
                                <td><i onClick={showEdit} className="ti-pencil"></i><i onClick={deleteUser} className="ti-close"></i><div class="modal js-modal">
                    <div class="modal-container">
                        <div onClick={closeEdit} class="modal-close">
                            <i class="ti-close"></i>
                        </div>

                        <header class="modal-header">
                            Chỉnh sửa cho {user.name}
                        </header>

                        <div class="modal-body">
                            <label for="revenue-today" class="modal-label">
                                Doanh thu hôm nay: (<p className="edit-revenue-today">{user.revenue_today}</p>)
                            </label>
                            <input type="text" class="modal-input revenue-today-input"/>

                            <label for="work-today" class="modal-label">
                                Buổi làm hôm nay: (<p className="edit-work-today">{user.work_today}</p>)
                            </label>
                            <input type="text" class="modal-input work-today-input"/>

                            <label for="active" class="modal-label">
                                Có mặt hiện tại: (<p className="edit-active">{user.active}</p>)
                            </label>
                            <input type="text" class="modal-input active-input"/>

                            <button onClick={confirmEdit} id="buy-tickets">
                                Xác nhận <i class="ti-check"></i>
                            </button>
                        </div>
                    </div>
                </div></td>
                            </tr>
                        ))
                    }
                </table>
                
                {/* <div>
                    <button id="create" onClick={setUser}>Create</button>
                </div> */}
            </div>

            <div id="number-2">
                <div>
                    <br />
                    <div id='back' onClick={hideInfo}><i className="ti-angle-left"></i></div>

                </div>
                <br />
                <h1 className="header-his">Lịch sử ca trực</h1>
                <div>
                    <table id="shift" className="employee">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Buổi sáng</th>
                                <th>Buổi chiều</th>
                                <th>Buổi tối</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Hai</td>
                                        <td>{shift.mon[0]}</td>
                                        <td>{shift.mon[1]}</td>
                                        <td>{shift.mon[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Ba</td>
                                        <td>{shift.tue[0]}</td>
                                        <td>{shift.tue[1]}</td>
                                        <td>{shift.tue[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Tư</td>
                                        <td>{shift.wed[0]}</td>
                                        <td>{shift.wed[1]}</td>
                                        <td>{shift.wed[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Năm</td>
                                        <td>{shift.thu[0]}</td>
                                        <td>{shift.thu[1]}</td>
                                        <td>{shift.thu[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Sáu</td>
                                        <td>{shift.fri[0]}</td>
                                        <td>{shift.fri[1]}</td>
                                        <td>{shift.fri[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Thứ Bảy</td>
                                        <td>{shift.sat[0]}</td>
                                        <td>{shift.sat[1]}</td>
                                        <td>{shift.sat[2]}</td>
                                    </tr>
                                ))
                            }
                            {
                                users.map(({ id, shift }) => (
                                    <tr className={id}>
                                        <td>Chủ Nhật</td>
                                        <td>{shift.sun[0]}</td>
                                        <td>{shift.sun[1]}</td>
                                        <td>{shift.sun[2]}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    );


};
// Script


const showInfo = e => {
    document.getElementById('number-1').style.display = 'none';
    document.getElementById('number-2').style.display = 'block';
    var blocks = document.querySelectorAll('.' + e.target.parentNode.id);
    for (var block of blocks) {
        block.style.display = 'table-row';
    }
}

const hideInfo = e => {
    document.getElementById('number-1').style.display = 'block';
    document.getElementById('number-2').style.display = 'none';
    const emps = document.querySelectorAll('#emp');
    for (const emp of emps) {
        emp.style.display = 'none';
    }
    const trs = document.querySelectorAll('tr[class]');
    for (const tr of trs) {
        tr.style.display = 'none';
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
                if (Number(x.innerText) > Number(y.innerText)) {
                    document.querySelector('.ti-arrow-up').style.display = 'none';
                    document.querySelector('.ti-arrow-down').style.display = 'block';
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "high") {
                if (Number(x.innerText) < Number(y.innerText)) {
                    document.querySelector('.ti-arrow-up').style.display = 'block';
                    document.querySelector('.ti-arrow-down').style.display = 'none';
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

const deleteUser = e => {
    var id = e.target.parentNode.parentNode.id;
    console.log(id);
    const delete1 = async (id) => {
        await deleteDoc(doc(db, "users", id));
    }
    document.getElementById(id).remove();
    delete1(id);
}



const setUser = async () => {
    const users = collection(db, 'users');
    await setDoc(doc(users, "num5"), {
        active: "Không",
        name: "Hương Giang",
        revenue_today: 150000,
        work_today: "Sáng",
        info: {
            address: "Xuân Hưng",
            birth: "17/02/2002",
            day_off: 1,
            phone: "0327585534",
            salary: 1500000,
            work: "Nhân viên phục vụ"
        },
        shift: {
            mon: ["Không", "Không", "7h - 9h"],
            tue: ["Không", "Không", "7h - 9h"],
            wed: ["Không", "Không", "7h - 9h"],
            thu: ["Không", "Không", "7h - 9h"],
            fri: ["Không", "Không", "7h - 9h"],
            sat: ["Không", "Không", "7h - 9h"],
            sun: ["Không", "Không", "7h - 9h"]
        }
    })
}

const showEdit = e => {
    var id = e.target.parentNode.parentNode.id;
    document.querySelector('#' + id +' .modal').classList.add('open');
}

const closeEdit = e => {
    var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    document.querySelector('#' + id +' .modal').classList.remove('open');
}

const updateUser = async (id, field, value) => {
    const userRef = doc(db, "users", id);
    await updateDoc(userRef, {
        [field]: value
    });
}

const confirmEdit = e => {
    var id = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.id;
    var active = document.querySelector('#' + id + ' .edit-active').innerHTML;
    var revenue = document.querySelector('#' + id + ' .edit-revenue-today').innerHTML;
    var work = document.querySelector('#' + id + ' .edit-work-today').innerHTML;
    var activeInput = document.querySelector('#' + id + ' .active-input').value;
    var revenueInput = document.querySelector('#' + id + ' .revenue-today-input').value;
    var workInput = document.querySelector('#' + id + ' .work-today-input').value;
    var activeEdit = document.querySelector('#' + id + ' .active');
    var revenueEdit = document.querySelector('#' + id + ' .revenue-today');
    var workEdit = document.querySelector('#' + id + ' .work-today');
    if (active != activeInput && activeInput != '') {
        updateUser(id, 'active', activeInput);
        activeEdit.innerHTML = activeInput;
    }
    if (revenue != revenueInput && revenueInput != '') {
        updateUser(id, 'revenue_today', parseInt(revenueInput));
        revenueEdit.innerHTML = revenueInput;
    }
    if (work != workInput && workInput != '') {
        updateUser(id, 'work_today', workInput);
        workEdit.innerHTML = workInput;
    }
    document.querySelector('#' + id +' .modal').classList.remove('open');   
}
export default Employee;
