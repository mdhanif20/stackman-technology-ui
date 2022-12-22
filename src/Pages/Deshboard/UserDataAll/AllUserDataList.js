import React from 'react';


const AllUserDataList = ({singleInfo,value,id}) => {
    
    return (
        <tr >
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}> <span>{value}</span> </td>

            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{singleInfo.Name}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{singleInfo.number}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{singleInfo.token}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{singleInfo.date}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{singleInfo.email}</td>
           
            
        </tr>
    );
};

export default AllUserDataList;