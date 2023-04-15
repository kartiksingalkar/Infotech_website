import React, { useState, useEffect, useRef } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'react-phone-number-input/style.css'
import Validations from './Validations';
import axios from "axios";
import OtpResend from './Otpresend';
import { toast } from 'react-toastify';

const Popup_Form = () => {

    const [showpopup, setShowpopup] = useState(false)
    const [open, setOpen] = useState(false)
    const [secondOpen, setSecondOpen] = useState(false)
    const closeModal1 = () => setSecondOpen(false);
    const [filled, setFilled] = useState(false)


    const [data, setData] = useState({
        name: "",
        email: "",
        mobile: "",
        service: "B2B",
    });
    // Ip
    const [state, setState] = useState({
        ip: "",
        countryName: "",
        countryCode: "",
        city: "",
    });

    const [otp, setOpt] = useState({
        digit_1: "",
        digit_2: "",
        digit_3: "",
        digit_4: "",
        digit_5: "",
        digit_6: "",
    })
    const handelDataChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });

    };
    const handelOtpChange = (e) => {
        setOpt({
            ...otp,
            [e.target.name]: e.target.value
        });

    };

    const closeModal = () => {
        setOpen(false)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setOpen(true)
        }, 60000);
        return () => clearTimeout(timer);
    }, []);


    //ip
    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data;
                setState({
                    ...state,
                    ip: data.ip,
                    countryName: data.country_name,
                    countryCode: data.country_calling_code,
                    city: data.city,
                });
            })
            .catch((error) => {

            });
    };

    useEffect(() => {
        getGeoInfo();
    }, []);

    const handelSubmit = async (e) => {
        e.preventDefault()

        const response = await fetch("https://mainapi.ellorainfotech.com/api/popup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data, state }),
        });
        const json = await response.json();
        if (response.ok) {
            setShowpopup(false)
            if (json.show === "0") {
                setShowpopup(true)
                setSecondOpen(false)
                toast.success(json.msg)
                sessionStorage.setItem('form_filled', true);
            }
            else if (json.show === "1") {
                setShowpopup(false)
                toast.success(json.msg)
            }
        }
        else if (!response.ok) {
            setShowpopup(true)
            toast.error(json.error)
            sessionStorage.setItem('form_filled', false);

        }

    }

    const handelOTP = async (e) => {
        e.preventDefault();


        let fotp = otp.digit_1 + otp.digit_2 + otp.digit_3 + otp.digit_4 + otp.digit_5 + otp.digit_6
        const response = await fetch("https://mainapi.ellorainfotech.com/api/verify", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ fotp }),
        });
        const json = await response.json();
        if (response.ok) {
            sessionStorage.setItem('form_filled', true);
            toast.success(json.msg)
            setOpen(false)
            setSecondOpen(false)
        }
        else if (!response.ok) {
            toast.error(json.error)
            sessionStorage.setItem('form_filled', false);
        }
    }

    return (
        <>
            <Validations />
            {sessionStorage.getItem('form_filled') !== 'true' ? <Popup open={open} position="right center" onClose={closeModal}
                closeOnDocumentClick={false}>
                <div className='popup_form_box'>
                    <h3>Let's Get To <span>Know Each Other</span></h3>
                    <a className="close" onClick={closeModal}>
                        &times;
                    </a>
                    <form onSubmit={handelSubmit} className='popup-form'>
                        <div className='popup-error'>
                            <input placeholder='Your Name'
                                type="text"
                                id='name'
                                name="name"
                                value={data.name}
                                onChange={handelDataChange} />
                        </div>
                        <div className='email_service'>
                            <div className='popup-error-email'>
                                <input placeholder='Email'
                                    type="text"
                                    name="email"
                                    id='email1'
                                    value={data.email}
                                    onChange={handelDataChange}
                                />
                            </div>
                            <div className='popup-error-email'  >
                                <select name='service' onChange={handelDataChange} value={data.service} >
                                    <option value="B2B">B2B</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Mobile App Development" >Mobile App Development</option>
                                    <option value="Web Development" >Web Development</option>
                                    <option value="Ui Ux" >Ui Ux</option>
                                    <option value="CRM" >Custom HRMS Solution</option>
                                    <option value="CRM" >Custom CRM Solution</option>
                                    <option value="CRM" >Custom ERP Solution</option>
                                </select>
                            </div>
                        </div>
                        <div className='popup-error popup-error-contact'>
                            <div className='country-code'>
                                <label>{state.countryCode}</label>
                            </div>
                            <div className='popup-mobile'>
                                <input placeholder='Mobile No' type="text"
                                    name='mobile'
                                    id='mobile'
                                    value={data.mobile}
                                    initialValueFormat="national"
                                    onChange={handelDataChange}
                                />
                            </div>
                        </div>
                        <div className='otp-send-btn'>
                            <button type="submit" id='send_otp' onSubmit={handelSubmit} onClick={() => { setSecondOpen(o => !o); }}>
                                Send Otp
                            </button>
                        </div>
                    </form>
                </div>
            </Popup>
            : <></>}


            {!showpopup && <Popup open={secondOpen} position="right center" onClose={closeModal1}
                closeOnDocumentClick={false}>
                <div className='popup_form_box'>
                    <h3>Let’s Get To <span>Know Each Other</span></h3>
                    <a className="close" onClick={closeModal1}>
                        &times;
                    </a>
                    <h4>OTP successfully sent on {data.mobile}</h4>
                    <div className="digit-group otp-box" id='otp-container'>
                        <form onSubmit={handelOTP} data-group-name="digits" data-autosubmit="false" autoComplete="off">
                            <div className='otp-div'>
                                <input className='numeric' type="text" id="digit-1" name="digit_1" data-next="digit-2" maxLength={1} onKeyDown="return /[1-9]/i.test(event.key)" value={otp.digit_1} onChange={handelOtpChange} />
                                <input type="text" id="digit-2" name="digit_2" data-next="digit-3" data-previous="digit-1" maxLength={1} value={otp.digit_2} onChange={handelOtpChange} />
                                <input type="text" id="digit-3" name="digit_3" data-next="digit-4" data-previous="digit-2" maxLength={1} value={otp.digit_3} onChange={handelOtpChange} />
                                <input type="text" id="digit-4" name="digit_4" data-next="digit-5" data-previous="digit-3" maxLength={1} value={otp.digit_4} onChange={handelOtpChange} />
                                <input type="text" id="digit-5" name="digit_5" data-next="digit-6" data-previous="digit-4" maxLength={1} value={otp.digit_5} onChange={handelOtpChange} />
                                <input type="text" id="digit-6" name="digit_6" data-previous="digit-5" maxLength={1} value={otp.digit_6} onChange={handelOtpChange} />
                            </div>
                            <br></br>
                            <OtpResend />
                            <div className='otp-send-btn'>
                                <button type="submit">
                                    Verify
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Popup>}

        </>
    )
}

export default Popup_Form