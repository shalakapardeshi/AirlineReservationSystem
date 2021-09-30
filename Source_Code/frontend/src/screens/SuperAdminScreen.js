import Header from "../components/Header"
import React,{ useState,useEffect } from "react";
import { Bar,Line,Doughnut } from 'react-chartjs-2';
import SuperAdminAPIService from "../service/SuperAdminAPIService";

const SuperAdminScreen = (props) =>{
    const [TotalBookings,setTotalBookings]=useState(0);
    const [cancelledBookings,setCancelledBookings]=useState(0);
   

    useEffect(()=>{
        console.log('component mounted!')
        reloadTotalBookings();
        reloadCancelledBookings();
       
      },[])

    const reloadTotalBookings=()=>{
        SuperAdminAPIService.getTotalBookings()
        .then((res) => {
        console.log(res);
        if (res.data.status == "success")
          setTotalBookings(res.data.data);
    });
    }

    const reloadCancelledBookings=()=>{
        SuperAdminAPIService.getCancelledBookings()
        .then((res) => {
        console.log(res);
        if (res.data.status == "success")
          setCancelledBookings(res.data.data);
    });
    }

   
    const bookingData={
        labels:[
            'Successful Bookings %',
            'Cancelled Bookings %'
        ],
            datasets:[
                {
                      label:'# of Bookings',      
                      data:[Math.round(((TotalBookings-cancelledBookings)/TotalBookings)*100),Math.round((cancelledBookings/TotalBookings)*100)],
                    //   borderColor:['rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)','rgba(229,98,67,1)'],
                      backgroundColor:['rgba(255,99,132,1)','rgba(255,205,86,1)',],  
                }
                  
            ]
    }

    const bOptions={
        title:{
            display:true,
            text:'% Bookings'
        },
    }

    
    
   
   

    
    return (
        <div>
            <Header title="SuperAdmin"/>
            <div class="row" >
              <div class="col-6 ">
                <Doughnut  data={bookingData} options={bOptions}/></div>
                
            </div>
        </div>
    )
}

export default SuperAdminScreen