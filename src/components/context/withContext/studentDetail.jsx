import ContactInformation from './contactInformation';
import { StudentContext } from './student';
import { useContext } from 'react';
export default function StudentDetail() {
   const { subjects } = useContext(StudentContext)
    console.log("Subjects", subjects);

  return (
    <>
      <div className="">
        <div>studentDetail</div>
        <ul>
            {subjects.map((subject, index)=>{
                return <li key={index}>{subject}</li>;
            })}
        </ul>
        {/* <ContactInformation contactInformation={contactInformation} /> */}
        <ContactInformation/>
      </div>
    </>
  )
}
