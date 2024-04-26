import { useMediaQuery } from "react-responsive";
import ReactRoundedImage from 'react-rounded-image';
function Home(){
    const isMobile=useMediaQuery({maxWidth:767});
    const isTablet=useMediaQuery({minWidth:768,maxWidth:1023});
    const isDesktop=useMediaQuery({minWidth:1024});

    function HomePageComponents({props}){
        switch(props.components){
            case 'one':
                return (
                    <>
                        <div className="row">
                
                            {/* nav bar */}
                            {
                                isMobile?
                                <>
                                    <div className="col-12 alert alert-danger">
                                        <div className="row">
                                            <div className="col-4">
                                                <img style={{height:'50%',width:'100%',marginTop:'50%'}} src="/images/logo.png" alt="" />
                                            </div>
                                            <div className="col-4 mt-4">
                                                <div className="" style={{marginLeft:"30%",justifyContent:'space-around'}}>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">Homepage</a>
                                                    <p>|</p>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">About Academy</a>
                                                    <p>|</p>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">Course</a>
                                                </div>
                                            </div>
                                            <div className="col-4 mt-4">
                                                <button style={{marginLeft:'10%'}} className="btn btn-danger" onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")}>REGISTER NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="col-12 alert alert-danger">
                                        <div className="row">
                                            <div className="col-4">
                                                <img style={{height:'100%',width:'100%'}} src="/images/logo.png" alt="" />
                                            </div>
                                            <div className="col-4 mt-4">
                                                <div className="d-flex" style={{marginLeft:"30%",justifyContent:'space-around'}}>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">Homepage</a>
                                                    <p>|</p>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">About Academy</a>
                                                    <p>|</p>
                                                    <a style={{textDecoration:'none',color:'red'}} href="">Course</a>
                                                </div>
                                            </div>
                                            <div className="col-4 mt-4">
                                                <button style={{marginLeft:'50%'}} className="btn btn-danger" onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")}>REGISTER NOW</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            }
                            {/* nav bar */}
                            {
                                isMobile
                                ?
                                <>
                                    <div className="col-12">
                                        <h2 style={{fontFamily:'Montserrat',color:'red'}}>Structure and Function Workshop In India</h2>
                                        <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                            Anatomy Trains in Structure and Function is a comprehensive course designed to explore the interconnectedness of the body through the lens of the Anatomy Trains myofascial meridians. Participants will delve into the intricate relationships between muscles, fascia, and movement patterns, gaining a deep understanding of how the body functions as a dynamic and integrated system.
                                        </p>
                                        <button onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} className="btn btn-danger" style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                    <div className="col-12 mt-5 mb-5 d-flex justify-content-center">
                                        <ReactRoundedImage
                                            image="/images/logo.png"
                                            roundedSize="8"
                                            imageHeight="250"
                                            imageWidth="250"
                                            
                                        />
                                    </div>
                                </>
                                :
                                <>
                                    <div className="col-6">
                                        <h2 style={{fontFamily:'Montserrat',color:'red'}}>Structure and Function Workshop In India</h2>
                                        <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                            Anatomy Trains in Structure and Function is a comprehensive course designed to explore the interconnectedness of the body through the lens of the Anatomy Trains myofascial meridians. Participants will delve into the intricate relationships between muscles, fascia, and movement patterns, gaining a deep understanding of how the body functions as a dynamic and integrated system.
                                        </p>
                                        <button onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} className="btn btn-danger" style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                    <div className="col-6  mb-5 d-flex justify-content-center">
                                        <ReactRoundedImage
                                            image="/images/logo.png"
                                            roundedSize="8"
                                            imageHeight="160"
                                            imageWidth="180"
                                        />
                                    </div>
                                </>
                            }
                            {/* thirdrow */}
                            {
                                isMobile ?
                                <>
                                        <div className="col-12 mt-5">
                                        <h2 style={{fontFamily:'Montserrat',color:'red',textAlign:'center'}}>Workshop In Mumbai</h2>
                                        <div style={{height:'50%'}}>
                                            <img src="/images/mumbai.jpg" alt="" style={{height:'100%',width:'100%'}}/>
                                        </div>
                                        <div className="alert alert-danger">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>DATE:</td>
                                                        <td>SEPTEMBER 6th - 8th, 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event timing:</td>
                                                        <td>9 AM - 5 PM IST</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Evengt Address:</td>
                                                        <td>Hotel Suba International, Mumbai</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} className="btn btn-danger" style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                    <div className="col-12">
                                        <h2 style={{fontFamily:'Montserrat',color:'red',textAlign:'center'}}>Workshop In Hyderabad</h2>
                                        <div style={{height:'50%'}}>
                                            <img src="/images/hyderabad.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <div className="alert alert-danger">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>DATE:</td>
                                                        <td>SEPTEMBER 10th - 12th, 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event Timing:</td>
                                                        <td>9 AM - 5 PM IST</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event Address:</td>
                                                        <td>Hotel Royalton, Abids, Hyderabad</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button className="btn btn-danger" onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="col-6 mt-5">
                                        <h2 style={{fontFamily:'Montserrat',color:'red',textAlign:'center'}}>Workshop In Mumbai</h2>
                                        <div style={{height:'40%'}}>
                                            <img src="/images/mumbai.jpg" alt="" style={{height:'100%',width:'100%'}}/>
                                        </div>
                                        <div className="alert alert-danger">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>DATE:</td>
                                                        <td>SEPTEMBER 6th - 8th, 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event timing:</td>
                                                        <td>9 AM - 5 PM IST</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Evengt Address:</td>
                                                        <td>Hotel Suba International, Mumbai</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} className="btn btn-danger" style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                    <div className="col-6 mt-5">
                                        <h2 style={{fontFamily:'Montserrat',color:'red',textAlign:'center'}}>Workshop In Hyderabad</h2>
                                        <div style={{height:'40%'}}>
                                            <img src="/images/hyderabad.jpg" alt="" style={{width:'100%',height:'100%'}}/>
                                        </div>
                                        <div className="alert alert-danger">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td>DATE:</td>
                                                        <td>SEPTEMBER 10th - 12th, 2024</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event Timing:</td>
                                                        <td>9 AM - 5 PM IST</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Event Address:</td>
                                                        <td>Hotel Royalton, Abids, Hyderabad</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <button className="btn btn-danger" onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} style={{width:'100%'}}>REGISTER NOW</button>
                                    </div>
                                </>
                            }
                            {/* thirdrow */}
                        </div>
                    </>
                );
            break;
            case 'two':
                return (
                    <>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h1 style={{fontFamily:'Montserrat',textAlign:'center',color:'red'}}>First Time in India-Thomas Myers and his Concept</h1>
                                <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    Anatomy Trains is a unique concept developed by <b>Thomas Myers</b>, a structural integration practitioner and author. It proposes a new way of understanding the human body by focusing on the fascial system, a web of connective tissue that surrounds and connects muscles, organs, and other structures. Myers proposes that fascia, rather than muscles acting independently, is the key to understanding how the body moves and how movement dysfunction and pain arise. Anatomy Trains maps the fascia in the body as a series of lines of fascial connection, which he calls <b>"trains."</b> These trains are thought to be responsible for transmitting forces throughout the body and for coordinating movement.
                                </p>
                                <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    The Anatomy Trains concept has been influential in the fields of physiotherapy, yoga, and other movement disciplines. It has helped practitioners to develop new approaches to assessment and treatment of movement dysfunction and pain.
                                </p>
                                <div className="d-flex justify-content-center">
                                    <img style={{height:'100%',width:'100%'}} src="/images/thomasmyers1.jpg" alt="" />
                                </div>
                                <p className="mt-4" style={{fontFamily:'Montserrat',textAlign:"justify"}}>
                                    Thomas Myers is a name synonymous with the emerging field of <b>fascial research</b>. An integrative manual therapist for over 40 years, Myers is most recognized for his groundbreaking work on Anatomy Trains, a <b>system that maps the interconnected web of fascia throughout the body</b>. Myers' journey began with a deep fascination with movement and structure. He studied with renowned figures like Ida Rolf (founder of Structural Integration), Moshe Feldenkrais (pioneer of movement awareness), and Buckminster Fuller (architect and visionary). This diverse exposure instilled in Myers a holistic view of the body, where movement, anatomy, and even design principles intersected.
                                </p>
                                <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    His core contribution lies in the concept of Anatomy Trains. Traditional anatomical models focused on isolated muscles and bones. Myers, however, proposed a <b>network of fascial lines that interconnected the entire body</b>. Fascia, a dense connective tissue, was no longer seen as mere scaffolding; it became a <b>dynamic structure influencing movement, posture, and even pain</b>. Anatomy Trains provided a framework for understanding how tightness in one area could manifest in seemingly unrelated parts of the body.
                                </p>
                                <div className="d-flex justify-content-center mt-4">
                                    <img style={{height:'100%',width:'100%'}} src="/images/thomasmyers2.jpg" alt="" />
                                </div>
                                <p className="mt-4" style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    Myers' impact extends far beyond his book. He has authored numerous publications, developed educational programs, and continued to inspire a generation of movement therapists. Through his work, Anatomy Trains has become a cornerstone in various fields like physical therapy, massage therapy, and athletic training.
                                </p>
                                <div>{/* images */}
                                    <div className="row">
                                        <div className="col-4 d-flex justify-content-center">
                                            <img style={{height:'100%',width:'100%'}} src="/images/humanbodymale.jpg" alt="" />
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <img style={{height:'100%',width:'100%'}} src="/images/humanbody.png" alt="" />
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <img style={{height:'100%',width:'100%'}} src="/images/humanbodyfemale.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>{/* images */}
                                <p className="mt-4" style={{fontFamily:'Montserrat',textAlign:"justify"}}>
                                    However, Myers' influence is not limited to the professional realm. His emphasis on movement and body awareness resonates with anyone interested in improving their posture, reducing pain, 6 and moving with greater ease. Anatomy Trains empowers individuals to take charge of their own well-being through self-care practices and movement exploration. In conclusion, Thomas Myers stands as a pivotal figure in the exploration of the human form. By illuminating the fascial network and its profound influence on movement, he has provided a revolutionary perspective on anatomy. His work continues to shape the way we understand and experience our bodies, inspiring a new era of movement exploration and holistic well-being.
                                </p>
                                <div>{/* images */}
                                    <div className="row">
                                        <div className="col-6 d-flex justify-content-center">
                                            <img style={{height:'100%',width:'100%'}} src="/images/book1.jpg" alt="" />
                                        </div>
                                        <div className="col-6 d-flex justify-content-center">
                                            <img style={{height:'100%',width:'100%'}} src="/images/book2.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>{/* images */}
                            </div>
                            <div className="col-12 mt-4">
                                <h1 style={{fontFamily:'MontSerrat', color:'red',textAlign:'center',fontWeight:"bold"}}>Course Description</h1>
                                <h3 style={{fontFamily:'Montserrat', color:'red'}}>ANATOMY TRAINS IN STRUCTURE AND FUNCTION WORKSHOP</h3>
                                <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    Anatomy Trains in Structure and Function is a comprehensive course designed to explore the interconnectedness of the body through the lens of the Anatomy Trains myofascial meridians. Participants will delve into the intricate relationships between muscles, fascia, and movement patterns, gaining a deep understanding of how the body functions as a dynamic and integrated system. In this course, you will embark on a journey to explore the fascial system and its profound influence on the structure, function, and mobility of the human body. Through a dynamic blend of theoretical knowledge and practical application, you will gain a deeper understanding of the interconnected fascial lines, also known as Anatomy Trains, that course throughout the body. This course equips you with the tools and knowledge to assess postural dysfunction, movement limitations, and pain patterns through the lens of the fascial system.
                                </p>
                                <h4 style={{fontFamily:'Montserrat',color:'red'}}>Course Highlights</h4>
                                <ol type="1">
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Myofascial Meridians:</b> Learn about the concept of Anatomy Trains and how they influence movement and posture.</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Functional Anatomy:</b> Study the anatomy of the human body from a functional perspective, focusing on the interconnectedness of different muscle and fascial lines.</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Movement Patterns:</b> Understand how movement patterns are influenced by the myofascial connections in the body and learn techniques to optimize performance and prevent injuries.</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Clinical Applications:</b> Explore the practical applications of Anatomy Trains in various clinical settings, such as rehabilitation, sports performance, and movement therapy.</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Hands-On Practice:</b> Engage in hands-on activities and experiential learning to deepen your understanding of the myofascial connections and how they impact functional movement.</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}><b>Integration of Theory and Practice:</b> Bridge the gap between theoretical knowledge and practical application through case studies, real-life examples, and interactive discussions.</p></li>
                                </ol>
                                <p style={{fontFamily:'Montserrat',textAlign:'justify'}}>
                                    By the end of this course, participants will have a solid foundation in Anatomy Trains theory and its practical implications for bodywork, movement therapy, and overall health and wellness. Gain valuable insights into the interconnectedness of the body and enhance your skills in promoting optimal structural and functional integrity.
                                </p>
                                <h4 style={{fontFamily:'Montserrat',color:'red'}}>Learning Objectives</h4>
                                <ul>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>The core principles of Anatomy Trains and the fascial system</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>How movement patterns are influenced by fascial lines</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Self-assessment techniques to identify fascial restrictions</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Body reading techniques, and myofascial release strategies</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Movement exercises to improve mobility and release tension in key lines</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Strategies to integrate Anatomy Trains into your daily routine</p></li>
                                </ul>
                                <h4 style={{fontFamily:'Montserrat',color:'red'}}>Benefits</h4>
                                <ul>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Gain a deeper understanding of your body's interconnectedness</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Improve your range of motion and flexibility</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Enhance your movement efficiency and coordination</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Reduce pain and discomfort associated with fascial restrictions</p></li>
                                    <li style={{fontFamily:'Montserrat',color:'red'}}><p style={{color:'black'}}>Learn movement strategies for optimal performance and injury prevention</p></li>
                                </ul>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-danger"><a style={{fontFamily:'Montserrat', textDecoration:'none',color:'inherit'}} href="/resources/ANATOMY%20TRAINS%20WORKSHOPS.pdf" download>Download the Course Booklet</a></button>
                            </div>
                        </div>
                    </>
                );
            break;
            case 'three':
                return (
                    <>
                        <div className="row mt-5">
                            {/* col-12 */}
                            {
                                isMobile
                                ?
                                <><div className="col-12 d-flex justify-content-center mt-4">
                                        <ReactRoundedImage
                                            image="/images/donthompson.jpeg"
                                            roundedSize="8"
                                            roundedColor="#000000"
                                            imageHeight="160"
                                            imageWidth="180"
                                            hoverColor="#FF0000" />
                                    </div><div className="col-12 mt-3">
                                            <h4 style={{ textAlign: 'center', fontFamily: 'Montserrat', color: 'red' }}>About the Instructor</h4>
                                            <p style={{ fontFamily: 'Montserrat', textAlign: 'justify' }}>Don Thompson is a Board-Certified Structural Integrator.Don’s personal journey of discovery has led him the world, teaching and sharing his passion for teaching touch and practitionership skills.For the best part of a decade, Don owned a small busy SI clinic in the Scottish Highland that was run on not-for-profit and community ideals.He moved his clinical practice to Norway in 2016 and is currently traveling the world as an itinerant, journeyman bodyworker looking for a new place to put down roots.</p>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-danger">Learn more about the Instructor</button>
                                            </div>
                                        </div></>
                                :
                                <><div className="col-4 d-flex justify-content-center mt-4">
                                        <ReactRoundedImage
                                            image="/images/donthompson.jpeg"
                                            roundedSize="8"
                                            roundedColor="#000000"
                                            imageHeight="160"
                                            imageWidth="180"
                                            hoverColor="#FF0000" />
                                    </div><div className="col-8">
                                            <h4 style={{ textAlign: 'center', fontFamily: 'Montserrat', color: 'red' }}>About the Instructor</h4>
                                            <p style={{ fontFamily: 'Montserrat', textAlign: 'justify' }}>Don Thompson is a Board-Certified Structural Integrator.Don’s personal journey of discovery has led him the world, teaching and sharing his passion for teaching touch and practitionership skills.For the best part of a decade, Don owned a small busy SI clinic in the Scottish Highland that was run on not-for-profit and community ideals.He moved his clinical practice to Norway in 2016 and is currently traveling the world as an itinerant, journeyman bodyworker looking for a new place to put down roots.</p>
                                            <div className="d-flex justify-content-center">
                                                <button className="btn btn-danger">Learn more about the Instructor</button>
                                            </div>
                                        </div></>
                            }
                            {/* col-12 */}
                            <div className="col-12 d-flex justify-content-center mt-4">
                            <iframe 
                                width="853" 
                                height="480" 
                                src="https://www.youtube.com/embed/oSa6KbosJS0" 
                                title="Introduction to Anatomy Trains" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            />
                            </div>
                        </div>
                    </>
                );
            break;
            case 'four':
                return (
                    <>
                        <div className="row mt-4">
                            <div className="col-12">
                                <h2 style={{fontFamily:'Montserrat',color:'red',textAlign:'center'}}>Registration NOW OPEN</h2>
                            </div>
                            <div className="col-12">
                                <p style={{fontFamily:'Montserrat',textAlign:'center'}}>Dont't miss this opportunity to deepen your understanding of fascial anatomy and revolutionize your approach to movement therapy!</p>
                            </div>
                            <div className="col-12">
                                <p style={{fontFamily:'Montserrat',textAlign:'center'}}>For Registration inquiries contact our Indian Sponsor:</p>
                                <p style={{fontWeight:'bold',fontFamily:'Montserrat',textAlign:'center'}}>Internation Academy of Physiotherapy Traning & Research</p>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Mob. Number:</td>
                                            <td>+91 9029009901</td>
                                        </tr>
                                        <tr>
                                            <td>Email ID:</td>
                                            <td>iaptrmumbai@gmail.com, sudeepkale@gmail.com</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-12 mt-4">
                                <h5 style={{textAlign:'center'}}>For Course Information</h5>
                                <p style={{fontFamily:'Montserrat',textAlign:'center'}}>Mumbai: <a href="https://www.anatomytrains.com/product/anatomy-trains-in-structure-and-functionindia-2024-09-06/">https://www.anatomytrains.com/product/anatomy-trains-in-structure-and-functionindia-2024-09-06/</a></p>
                                <p style={{fontFamily:'Montserrat',textAlign:'center'}}>Hyderabad: <a href="https://www.anatomytrains.com/product/anatomy-trains-in-structure-andfunction-india-2024-09-10/">https://www.anatomytrains.com/product/anatomy-trains-in-structure-andfunction-india-2024-09-10/</a></p>
                            </div>
                            <div className="col-12 d-flex justify-content-center">
                                <button onClick={()=>window.open("https://docs.google.com/forms/d/1knHCleUqWGrIMAl7W-Lcwyhu4Q1CtDYQPDNpX02Rlj4/edit?pli=1","_blank")} className="btn btn-danger">REGISTER NOW</button>
                            </div>
                        </div>
                    </>
                );
            break;
            default:
        }
    }

    function MobileView(){
        return (
            <>
                {/* <div className="container-fluid"> */}
                    {/* <div className="conatiner ml-2"> */}
                        <HomePageComponents props={{components:'one'}} />
                        <HomePageComponents props={{components:'two'}} />
                        <HomePageComponents props={{components:'three'}} />
                        <HomePageComponents props={{components:'four'}} />
                    {/* </div> */}
                {/* </div> */}
            </>
        );
    }
    
    function TabletView(){
        return (
            <> 
                <div className="container-fluid">
                    <div className="conatiner">
                        <HomePageComponents props={{components:'one'}} />
                        <HomePageComponents props={{components:'two'}} />
                        <HomePageComponents props={{components:'three'}} />
                        <HomePageComponents props={{components:'four'}} />
                    </div>
                </div>              
            </>
        );
    }
    
    function DesktopView(){
        return (
            <>
                <div className="container-fluid">
                    <div className="conatiner">
                        <HomePageComponents props={{components:'one'}} />
                        <HomePageComponents props={{components:'two'}} />
                        <HomePageComponents props={{components:'three'}} />
                        <HomePageComponents props={{components:'four'}} />
                    </div>
                </div>
            </>
        );
    }

    return (
        <>  
            {isMobile && <MobileView/>}
            {isTablet && <TabletView/>}
            {isDesktop && <DesktopView/>}
        </>
    );
}

export default Home;