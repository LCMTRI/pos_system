import React, { useState, useEffect } from "react";
import { db } from './firebaseConfig'
import { collection, documentId, getDocs } from 'firebase/firestore'
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
    }

    return (

        <div>
            {users.map(({id, user, info }) => (
                <div id='emp' class= {id}>
                    <br />
                    <h1>Thông tin nhân viên</h1>

                    <p>
                        Họ và tên: {user.name}<br /><br />
                        Địa chỉ: {info.address}<br /><br />
                        Số điện thoại: {info.phone}<br /><br />
                        Ngày sinh: {info.birth}<br /><br />
                        Công việc: {info.work}<br /><br />
                        Số ngày nghỉ tháng trước: {info.day_off}<br /><br />
                        Lương: {info.salary}<br /><br />
                    </p>
                </div>
            ))}
        </div >
    );

};


export default Employeeside;