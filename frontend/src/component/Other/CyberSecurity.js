import React, { Fragment, useEffect, useState, useRef } from "react";
import { CgMouse, DiCelluloid } from "react-icons/all";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import im1 from "../../images/1.png";
import line1 from "../../images/line1.png";
import line2 from "../../images/line2.png";
import { getAllText } from "../../actions/homeAction.js";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import temp from "../../images/Frame.svg";
import founder from "../../images/6.png"
import im20 from "../../images/20.png";
import ch1 from "../../images/et.png";
import temp1 from "../../images/playstore.png";
import tetmo from "../../images/tetmo.png";
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.compat.css"
import ReCAPTCHA from "react-google-recaptcha";
import mn2 from "../../images/mn2.png";
import ct from "../../images/ct.png";
import ct2 from "../../images/ct2.png";
import sot from "../../images/sot.png";
import sot2 from "../../images/sot2.png";
import { Alert } from "@mui/material";
import mt from "../../images/meet.png";
import cl1 from "../../images/cl1.jpg";
import cl2 from "../../images/cl2.jpg";
import cl3 from "../../images/cl3.jpg";
import cl4 from "../../images/cl4.jpg";
import cl5 from "../../images/cl5.png";
import bt1 from "../../images/bt1.png";
import bt2 from "../../images/bt2.jpg";
import bt3 from "../../images/bt3.png";
import bt6 from "../../images/bt6.png";
import oc from "../../images/os.png";
import course from "../../images/course.png";
import vapt from "../../images/vapt1.png";
import { TabView, TabPanel } from 'primereact/tabview';


const CyberSecurity = ({ history }) => {
    const alert = useAlert();
    const dispatch = useDispatch();
    //const { loading, error, products } = useSelector((state) => state.products);
    const { loading, error, texts } = useSelector((state) => state.texts);
    const [rec, setRec] = useState(false);
    const recaptchaRef = React.createRef();
    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );

    async function submitForm(event) {
        event.preventDefault()
        const captchaValue = recaptchaRef.current.getValue()
        if (!captchaValue) {
            alert.error('Please verify the reCAPTCHA!')
        } else {
            // make form submission
            alert.success('Form submission successful!')
        }
    }

    function bookMeeting() {
        history.push("/book");
    }

    function onChange(value) {
        setRec(value);
        console.log(recaptchaRef.current.getValue());

    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }
        dispatch(getAllText());
    }, [dispatch, error, alert]);

    console.log(texts);

    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <MetaData title="Home" />

                    <div className="main">

                        <ScrollAnimation animateIn="fadeIn">
                            <div className="box">
                                <div className="group" style={{ width: "20%" }}>
                                    <p className="providing-high">
                                        Ethical Hacking
                                    </p >

                                    <p className="white">
                                        Advance upskilling program to elevate your career and land your dream job.
                                    </p>


                                </div>
                                <div className="img1">
                                    <img src={ch1} className="eti" style={{ width: '80%', height: 'auto' }} />
                                </div>
                            </div>
                        </ScrollAnimation>


                        <ScrollAnimation animateIn="fadeIn">
                            <div className="eth">
                                <div className="zero">
                                    <TabView>
                                        <TabPanel className="tb" header="3 Months">
                                            <h3>UpSkilling Program</h3>

                                            <p>Certification</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Live sessions + Recorded Content Access</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Resume Building</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Dedicated Student Support</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Job-Ready Projects</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained">Enroll Now</Button>
                                        </TabPanel>
                                        <TabPanel className="tb" header="6 Months">
                                            <h3>Placement Training</h3>

                                            <p>Industry-Ready-Certification</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Students Community</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Resume building & Aptitude training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Top-notch Programs</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Placement Training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Doubt Solving sessions</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained">Enroll Now</Button>
                                        </TabPanel>
                                        <TabPanel className="tb" header="9 Months">
                                            <h3>Job Assistance</h3>

                                            <p>Mock Interviews</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Free Aptitude & Soft Skills Training</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Students Community</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Building Real World Projects</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Job Referrals</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />
                                            <p>Letter of Recommendation</p>
                                            <div className="divider" style={{ backgroundColor: 'white' }} />

                                            <Button variant="contained">Enroll Now</Button>
                                        </TabPanel>
                                    </TabView>
                                </div>
                                <div className="one">
                                    <div className="descri">
                                        <h3>
                                            Description
                                        </h3>
                                        <p>
                                            Step into the world of Certified Ethical Hacking, where you'll unlock the secrets of cybersecurity and ethical hacking techniques. Our program is your passport to gaining in-depth knowledge and practical skills required to protect systems, networks, and data against malicious threats.
                                            <br />
                                            <br />
                                            Our expert instructors will lead you through hands-on labs, real-world scenarios, and the latest hacking tools, enabling you to understand the hacker's mindset and how to defend against it. You'll explore the world of penetration testing, vulnerability assessment, and ethical hacking methodologies.
                                            <br />
                                            <br />
                                            Upon completing this program, you'll not only be a Certified Ethical Hacker but also an invaluable asset in the cybersecurity field. Join us on this exhilarating journey to become a skilled cybersecurity professional, capable of safeguarding digital assets and networks from cyber threats and vulnerabilities.
                                        </p> </div>
                                    <div className="descri">
                                        <h3>
                                            Program Content
                                        </h3>
                                        <p>
                                            Step into the world of Certified Ethical Hacking, where you'll unlock the secrets of cybersecurity and ethical hacking techniques. Our program is your passport to gaining in-depth knowledge and practical skills required to protect systems, networks, and data against malicious threats.
                                            <br />
                                            <br />
                                            Our expert instructors will lead you through hands-on labs, real-world scenarios, and the latest hacking tools, enabling you to understand the hacker's mindset and how to defend against it. You'll explore the world of penetration testing, vulnerability assessment, and ethical hacking methodologies.
                                            <br />
                                            <br />
                                            Upon completing this program, you'll not only be a Certified Ethical Hacker but also an invaluable asset in the cybersecurity field. Join us on this exhilarating journey to become a skilled cybersecurity professional, capable of safeguarding digital assets and networks from cyber threats and vulnerabilities.
                                        </p> </div>
                                </div>


                            </div>

                        </ScrollAnimation>


                    </div>
                </Fragment>
            )
            }
        </Fragment >
    );
};

export default CyberSecurity;
