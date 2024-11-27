import { createContext } from "react";
import { studentData } from "../../../data/dataset";
import StudentDetail from "../withContext/studentDetail";

export const StudentContext = createContext();

export default function Student() {
  return (
    <StudentContext.Provider value={studentData}>
      <div>
        <h2>Displaying Student Details Using Context Hooks</h2>
        <div className="d-flex">
          <div className="">
            <div className="">
              <h3>Name</h3>
              <p>{studentData.name}</p>
            </div>
            <div className="">
              <h3>Age</h3>
              <p>{studentData.age}</p>
            </div>
            <div className="">
              <h3>Department</h3>
              <p>{studentData.department}</p>
            </div>
          </div>
          <StudentDetail/>
          {/* <StudentDetail
            subjects={studentData.subjects}
            contactInformation={studentData.contactInformation}
          /> */}
        </div>
      </div>
    </StudentContext.Provider>
  );
}
