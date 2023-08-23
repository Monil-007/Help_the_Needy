// import React, {useState, useEffect} from "react";
// import { useLocation, Link } from "react-router-dom";
// import firebase from "../firebase";
// import "./Search.css"

// const Search = () => {
//     const [data,setData] = useState({});
//     const stateList = ["ap", "tn", "kl", "ka"]

//     const useQuery = () => {
//         return new URLSearchParams(useLocation().search);
//     }

//     let query = useQuery();
//     let search = query.get("name");
//     console.log("search",search);

//     useEffect(() => {
//         searchData();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [search]);

//     const searchData = () => {
//         stateList.map(state => {
//             //return {
//                 firebase
//                     .child(`schemes/ap`)
//                     .orderByChild("seligible")
//                     .equalTo(search)
//                     .on("value", (snapshot) => {
//                         if (snapshot.val()){
//                             const data = snapshot.val();
//                             setData(data);
//                         }
//                     });
//         //    }
//         })
//     };
    

//     return(
//         <>
//             <div style={{ marginTop: "100px" }}>
            
//                 {Object.keys(data).length === 0 ? (
//                     <h2>No search Found : {query.get("name")}</h2>
//                 ): (
//                 <table className="styled-table">
//                     <thead>
//                         <tr>
//                             <th style={{ textAlign: "center" }}>No.</th>
//                             <th style={{ textAlign: "center" }}>Scheme Name</th>
//                             <th style={{ textAlign: "center" }}>Scheme Eligible</th>
//                             <th style={{ textAlign: "center" }}>Scheme Benefit</th>
//                             <th style={{ textAlign: "center" }}>Scheme Details</th>
//                             <th style={{ textAlign: "center" }}>Scheme Documents</th>
//                             <th style={{ textAlign: "center" }}>State</th>
//                             <th style={{ textAlign: "center" }}>Status</th>
//                             {/* <th style={{ textAlign: "center" }}>Action</th> */}
            
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.keys(data).map((id, index) => {
//                             return (
//                              <tr key={id}>
//                                 <th scope="row">{index + 1}</th>
                               
//                                 <td>{data[id].sname}</td>
//                                 <td>{data[id].seligible}</td>
//                                 <td>{data[id].sbenefit}</td>
//                                 <td>{data[id].sdetail}</td>
//                                 <td>{data[id].sdocs}</td>  
//                                 <td>{data[id].city}</td>                              
//                                 <td>{data[id].status}</td>
                
//                              </tr>
//                             );
//                         })}
//                     </tbody>
//                 </table>

//             )}
//             <Link to="/">
//             <button className="bttn btn-edit">Go Back</button>
//             </Link>
                
//             </div>
//         </>
//     );
// };

// export default Search;