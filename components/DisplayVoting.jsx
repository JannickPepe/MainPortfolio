"use client";

import { db } from "../app/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect ,useState } from "react";


async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "messages"));

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({id: doc.id, ...doc.data()});
    });

    return data;
}


export const DisplayVoting = () => {

    const [messagesData, setMessagesData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const data = await fetchDataFromFirestore();
            setMessagesData(data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <h3>DisplayVoting</h3>
            {messagesData.map((message) => (
                <div key={message.id}>
                    <p>{message.name}</p>
                    <p>{message.email}</p>
                    <p>{message.message}</p>
                    <p>{message.number}</p>
                </div>
            ))}
        </div>
    );

};
