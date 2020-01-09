import React from 'react'
import './creditcard.css'



class CreditCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            ccname: '',
            ccnumber: '' ,
            ccvalidthru: ''
        };

    
        }
        

    updateCCname = (event) => {
        this.setState({
            ccname: (event.target.value).replace(/[^A-Za-z ]/igm, '').toUpperCase()
        });
      }

      updateCCnumber = (event) => {
        this.setState({
            ccnumber: (event.target.value).replace(/[^0-9]/igm, '').replace(/(.{4})/g, '$1 ').trim()
            
        });
      }



      updateCCvalidthru = (event) => {
          
        const newvt=  (event.target.value).replace(/[^0-9]/igm, '').toString()
        console.log(newvt)
        const ccmonth= newvt.slice(0,2)
        const ccyear= newvt.slice(2)
        console.log(ccmonth)
        console.log(ccyear)
        
        
        
        if(Number(ccmonth)>12){
            return(
                this.setState({
                    ccvalidthru:''
                })
            )
        } 

        else {
            return (
                this.setState({
                    ccvalidthru: ccmonth + `${ ccyear!== false && ccyear.length=== 2 ? '/' + ccyear : ccyear}`
                })
            )
            
        }
    }  




    // slicySpicy = (wafa) => {
    //     let a=String(wafa).split('')
    //     for(let i=4;i<a.length;i=i+5){
    //       a.splice(i,0," ")
    //     }
    //       return a.join('')
    // }

    render() {
        return (
            <div className="creditcard">

                <div className="physicalcard">
                    <p className="companyname">Company Name</p>
                    <img src="https://www.sherpaz.nl/plaatjes/spellen/maken/CHIPCARD.jpg" className="smartchip" width="80px" height="auto"></img>
                    <div className="datacontainer">
                        <div className="carddata">
                           <p className="cardnumber">{this.state.ccnumber}</p>
                           <p className="namevalidthru">Valid Thru</p>
                           <p className="validthru">{this.state.ccvalidthru}</p>
                           <p className="namename">Name</p>
                           <p className="name">{this.state.ccname}</p>
                        </div>
                        <div className="mastercarddiv">
                           <img src="https://ya-webdesign.com/images600_/master-card-png.png" width="170px" height="auto" className="mastercard"></img>
                        </div>
                        
                    </div>
                </div>
                <div className="inputdata">
                    <input className="inputname" maxLength={22} placeholder="Full Name"  value={this.state.ccname} onChange={this.updateCCname}></input>
                    <input className="inputnumber" maxLength={19} placeholder="Credit Card Number"   value={this.state.ccnumber} onChange={this.updateCCnumber}></input>
                    <input className="inputvalidthru" maxLength={5} placeholder="Valid Thru mm/yy"  value={this.state.ccvalidthru} onChange={this.updateCCvalidthru}></input>
                </div>
            </div>
        )
    }
}


export default CreditCard
