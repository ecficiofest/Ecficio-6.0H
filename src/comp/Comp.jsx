import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './Comp.css';
import Navbar from '../Navbar';
import Footer1 from '../Footer1/Footer1';
import Ad_Jam from '../Events_logo/Ad-JAM.png'
import Brand_blend from '../Events_logo/Brand_Blend.png'
import EntreQuest from '../Events_logo/EntreQuest.png'
import Reverse from '../Events_logo/Reverse Shark Tank.png'
import shadow from '../Events_logo/shadow&secrets ffposter.png'



function Comp() {
    return (
        <div className='main'>
            <Navbar/>
            <div>
                {/* <h3 className='ecficio'>ECFICIO 6.0H</h3> */}
                <div>
                    {/* <img src={Ellipse} className='col-8 col-sm-8 col-md-8  col-lg-8 float-start' /> */}
                </div>
                {/* <div>
                    <img src={Line1} className='col-6 col-sm-6 col-md-6  col-lg-6 line1' />
                    <img src={Line1} className='col-5 col-sm-5 col-md-5  col-lg-5   line2' />
                    <img src={Line1} className='col-4 col-sm-4 col-md-4  col-lg-4   line3' />

                </div> */}
                 <form action="/register">
        <div style={{display:"flex",
      justifyContent:"center",
      alignContent:"center",
      marginTop:"8em"}}>
        
        <button className='button_1 ' >REGISTER NOW</button>
        </div>
        </form>

            </div>

            <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#fffbf5"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center" , fontSize:"3.5vw"}} >REVERSE SHARK TANK</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>
                <img src={Reverse} alt="" />

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#fffbf5"}}>
                   Bringing you a portrayal of Shark Tank, where you swim through indulgent
                    startup ideas as pitchers play with your business acumen. While you’re
                     handed an impressive budget, the stakes run high and your money can run really
                      low if you don’t know whose idea can soar and whose will flunk. Join us for this exciting 
                      role-reversal and be the shark that decides the life of someone’s startup dreams


                </div>
            </div>

            <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#ffc5c5"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center",fontSize:"3.5vw" }} >Shadows and Secrets</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>
                <img src={shadow} alt="" />

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#ffc5c5"}}>
                  Lock and load, detective. This crime scene is ruddy RED and BLOODY. Gather around your trusted few, put on the best impression of your favourite spy and huddle around to search for truth. Collect evidence, interrogate both suspects and victims, dig through the lies and emerge with the answer that hides in plain sight.


                </div>
            </div>
            <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#f1eaff"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center",fontSize:"3.5vw"}} >OPERATION REDO</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#f1eaff"}}>
                   Have you always thought about doing things differently? Well then, here’s your chance! Re-design how an existing product can be. Break through the roof for your pitch: slide us through your presentations, conduct research and analyse every aspect in detail - the competition, the valuation, the strategy and everything in-between. Enter the world of what-ifs and make your mark

                </div>
            </div>
           <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#ffd9c0"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center",fontSize:"3.5vw"}} >BRAND BLEND</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>
                <img src={Brand_blend} alt="" />

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#ffd9c0"}}>
                 Churn out the best marketable logo you can for a rendition of brands! Blend two widely different domains to rebrand a company’s niche of consumers. Bring forth your finest skills in designing to create a logo that promotes the shift in target audience


                </div>
            </div>
            <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#ddffbb"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center",fontSize:"3.5vw"}} >ENTREQUEST</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>
                <img src={EntreQuest} alt="" />

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#ddffbb"}}>
                Join us for an interesting take on quizzes, where it is less about what you know and more about what you think others know! Battle against opponents and prove your quizzing skills. 



                </div>
            </div>
            <div className='box' >
                <div className='row headings' style={{
                display:"flex",
                justifyContent:"center",
                
                alignItems:"center",
                flexDirection:"column",color:"#f7c8e0"
            }}>
                    <h6 className='col float-start' style={{alignItems:"center",textAlign:"center",fontSize:"3.5vw"}} >ADJAM</h6>
                <div style={{display:"flex",justifyContent:"space-between",alignContent:"center"}}>
                    <div>Date : DD/MM/YYY</div>
                    <div>Time : 00:00:00</div>
                </div>
                <img src={Ad_Jam} alt="" />

                </div>
                <div>

                </div>
                    <br></br>
                <div className='contents' style={{color:"#f7c8e0"}}>
                 ATTENTION! This may not have been eye-catchy, but yours can be! Help a startup company reach new heights by creating unforgettable advertisements. Unleash your creative genius and let your marketing skills shine through.


                </div>
            </div>
            
            <Footer1/>
        </div>
    )
}

export default Comp