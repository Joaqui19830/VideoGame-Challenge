// import React from "react";
// import style from "../Pagination/Pagination.module.css";
// // import { setCurrentPage } from "../redux/actions"
// import { useDispatch, useSelector } from 'react-redux'
// import { setCurrentPage } from "../../Store/slices/country/countrySlice";

// export default function Pagination({videogamePerPage}){
    
//     const dispatch = useDispatch();
//     const { videoGames = [] } = useSelector(state => state.countryReducer);
    
//     const handleClick = (page) => {
//         dispatch(setCurrentPage(page))
//         console.log('click');
//       };

//     const pageNumbers = []

//     for( let i =0; i<Math.ceil(videoGames.length/videogamePerPage); i++){
//         pageNumbers.push(i+1)
//     }
    
//     return(
//         <nav className={style.nav}>
//             <ul >
               
//                  {pageNumbers && pageNumbers.map(number =>(
//                     <li onClick={() => handleClick(number)} >
//                         <div>{number}</div>
                    
//                     </li>
//                  ))}
                
                
//                 {/* {pageNumbers && pageNumbers.map(number =>(
//                     <li onClick={() => handleClick(number)} className={style.lineal} key={number}>
//                         <div>{number}</div>
//                     </li>
//                 ))} */}
//             </ul>
//         </nav>
//     )
// }