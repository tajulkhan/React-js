import { StudentContext } from "./student";
import {useContext} from 'react';
export default function ContactInformation(){
    const { contactInformation } = useContext(StudentContext);
    
    return(
        <>
            <div className="">
                <h3>Contact information</h3>
                <p>Phone No: {contactInformation.phoneNo}</p>
                <p>Address: {contactInformation.address}</p>
            </div>
        </>
    );
}