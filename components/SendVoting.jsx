'use client';

import { db } from "../app/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";

async function addDataToFireStore(name, email, message, number) {

    try {
        const docRef = await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message,
            number: number,
        });
        console.log("Document written with ID: ", docRef.id);
        return true;
    } catch (error) {
            console.log("Error adding document ", error);
            return false;
    };

};


export const SendVoting = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const added = await addDataToFireStore(name, email, message, number);
        if (added) {
            setName("");
            setEmail("");
            setMessage("");
            setNumber("");
    
            alert("Data added to Firestore DB");
        }
    };

    return (
        <div>
            <h1>add data to firebase</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea rows={5} id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="number">
                        Number
                    </label>
                    <input type="text" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>

                <div>
                    <button type="submit">
                    Submit
                    </button>
                </div>
            </form>
        </div>
    );

};
