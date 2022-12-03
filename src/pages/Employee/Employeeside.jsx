import React, { useState, useEffect } from "react";
import { db } from '../../firebase';
import { collection, documentId, getDocs, doc, setDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import './Employeeside.css';


const Employeeside = () => {
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
                info: doc.data().info
            }))
        )
        console.log("users: ", users);
    }

    return (

        <div>
            {users.map(({ id, user, info }) => (
                <div id='emp' class={id}>
                    <br />
                    <h1>Thông tin nhân viên</h1>
                    
                    <p className="name"> Họ và tên: {user.name}</p><br />
                    <p className="address"> Địa chỉ: {info.address}</p><br />
                    <p className="phone"> Số điện thoại: {info.phone}</p><br />
                    <p className="email"> Email: {info.email}</p><br />
                    <p className="birth"> Ngày sinh: {info.birth}</p><br />
                    <p className="work"> Công việc: {info.work}</p><br />
                    <p className="day-off"> Số ngày nghỉ tháng trước: {info.day_off}</p><br />
                    <p className="salary"> Lương: {info.salary}</p><br />
                        <button onClick={showEdit} className="info-edit">Chỉnh sửa</button>
                        <div class="modal">
                            <div class="modal-container">
                                <div onClick={closeEdit} class="modal-close">
                                    <i class="ti-close"></i>
                                </div>

                                <header class="modal-header modal-header-info">
                                    Chỉnh sửa cho {user.name}
                                </header>

                                <div class="modal-body">

                                
                                    <label for="edit-address" class="modal-label modal-label-info">
                                    Địa chỉ: (<p className="edit-address">{info.address}</p>)
                                    </label>
                                    <input type="text" class="modal-input modal-input-info address-input" />

                                    <label for="edit-phone" class="modal-label modal-label-info">
                                    Số điện thoại: (<p className="edit-phone">{info.phone}</p>)
                                    </label>
                                    <input type="text" class="modal-input modal-input-info phone-input" />

                                    <label for="edit-email" class="modal-label modal-label-info">
                                    Email: (<p className="edit-email">{info.email}</p>)
                                    </label>
                                    <input type="text" class="modal-input modal-input-info email-input" />

                                    <label for="edit-birth" class="modal-label modal-label-info">
                                    Ngày sinh: (<p className="edit-birth">{info.birth}</p>)
                                    </label>
                                    <input type="text" class="modal-input modal-input-info birth-input" />

                                    <label for="edit-salary" class="modal-label modal-label-info">
                                    Lương: (<p className="edit-salary">{info.salary}</p>)
                                    </label>
                                    <input type="text" class="modal-input modal-input-info salary-input" />
                                    

                                    <button onClick={confirmEdit} id="buy-tickets">
                                        Xác nhận <i class="ti-check"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                </div>
            ))}
        </div >
    );

};
const showEdit = e => {
    var className = e.target.parentNode.className;
    document.querySelector('.' + className + ' .modal').classList.add('open');
}

const closeEdit = e => {
    var className = e.target.parentNode.parentNode.parentNode.parentNode.className;
    document.querySelector('.' + className + ' .modal').classList.remove('open');
}

const updateInfoUser = async (id, field, value) => {
    const userRef = doc(db, "users", id);
    var tagName = 'info.'+field;
    await updateDoc(userRef, {
        [tagName]: value
           
    });



}

const confirmEdit = e => {
    var className = e.target.parentNode.parentNode.parentNode.parentNode.className;

    var address = document.querySelector('.' + className + ' .edit-address').innerHTML;
    var addressInput = document.querySelector('.' + className + ' .address-input').value;
    var addressEdit = document.querySelector('.' + className + ' .address')

    var phone = document.querySelector('.' + className + ' .edit-phone').innerHTML;
    var phoneInput = document.querySelector('.' + className + ' .phone-input').value;
    var phoneEdit = document.querySelector('.' + className + ' .phone')

    var email = document.querySelector('.' + className + ' .edit-email').innerHTML;
    var emailInput = document.querySelector('.' + className + ' .email-input').value;
    var emailEdit = document.querySelector('.' + className + ' .email')

    var birth = document.querySelector('.' + className + ' .edit-birth').innerHTML;
    var birthInput = document.querySelector('.' + className + ' .birth-input').value;
    var birthEdit = document.querySelector('.' + className + ' .birth')

    var salary = document.querySelector('.' + className + ' .edit-salary').innerHTML;
    var salaryInput = document.querySelector('.' + className + ' .salary-input').value;
    var salaryEdit = document.querySelector('.' + className + ' .salary')

    

    if (address != addressInput && addressInput != '') {
        updateInfoUser(className, 'address', addressInput);
        addressEdit.innerHTML = 'Địa chỉ: ' + addressInput;
    }
    
    if (phone != phoneInput && phoneInput != '') {
        updateInfoUser(className, 'phone', phoneInput);
        phoneEdit.innerHTML = 'Số điện thoại: ' + phoneInput;
    }

    if (email != emailInput && emailInput != '') {
        updateInfoUser(className, 'email', emailInput);
        emailEdit.innerHTML = 'Email: ' + emailInput;
    }

    if (birth != birthInput && birthInput != '') {
        updateInfoUser(className, 'birth', birthInput);
        birthEdit.innerHTML = 'Ngày sinh: ' + birthInput;
    }

    if (salary != salaryInput && salaryInput != '') {
        updateInfoUser(className, 'salary', salaryInput);
        salaryEdit.innerHTML = 'Lương: ' + salaryInput;
    }


    // var active = document.querySelector('#' + id + ' .edit-active').innerHTML;
    // var work = document.querySelector('#' + id + ' .edit-work-today').innerHTML;
    // var activeInput = document.querySelector('#' + id + ' .active-input').value;
    // var workInput = document.querySelector('#' + id + ' .work-today-input').value;
    // var activeEdit = document.querySelector('#' + id + ' .active');
    // var workEdit = document.querySelector('#' + id + ' .work-today');
    // if (active != activeInput && activeInput != '') {
    //     updateUser(id, 'active', activeInput);
    //     activeEdit.innerHTML = activeInput;
    // }

    // if (work != workInput && workInput != '') {
    //     updateUser(id, 'work_today', workInput);
    //     workEdit.innerHTML = workInput;
    // }
    document.querySelector('.' + className + ' .modal').classList.remove('open');
}

export default Employeeside;