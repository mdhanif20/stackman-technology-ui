import React,{useState} from 'react';


const AppointmentList = ({appointment,value,id}) => {
    const [visited ,setVisited] = useState(false);
    // const patientId = {id:appointment._id, visit:`${visited}`}; 
    const handleVisited = (appointmentId) =>{
        if(id===appointmentId){
                setVisited(true) 
        }
        else{
            setVisited(false)
        }
    }


/*    useEffect(()=>{
           if(visited){
            fetch('https://apollo-hospital-server.onrender.com/deshboard/appointments',{
                method:"PUT",
                headers:{
                'content-type':'application/json'
                },
                body:JSON.stringify(patientId)
                })
                .then(res => res.json())
                .then(data =>console.log(data))
           }
   },[visited]) */
   

   
   
    return (
        <tr >
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}> <span>{value}</span> </td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.Name}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.date}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.email}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.phone}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.age}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.weight}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd"}}>{appointment.serviceName}</td>
            <td style={{textAlign:"left",padding:"8px",border:" 1px solid #ddd",color:"#0027ff",cursor:"pointer"}} onClick={()=>handleVisited(appointment._id)}>
            {
                visited ? <span style={{borderBottom:"1px solid #0027ff"}}>Visited</span> : <span style={{borderBottom:"1px solid #0027ff"}}>Not Visited</span>
            }
                
            </td>
            
        </tr>
    );
};

export default AppointmentList;