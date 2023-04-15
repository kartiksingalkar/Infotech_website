import React, { useState } from "react";
import { useEffect, useRef } from "react";

const OtpResend = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(0);
  const min = useRef(minutes);
  const sec = useRef(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    sec.current = sec.current + 60;
    setSeconds(sec.current);

    if (sec.current > 59) {
      min.current = min.current + 1;
      setMinutes(min.current);
      sec.current = 59;
      setSeconds(sec.current);
      
    }
    
  };

  return (
    <>
      <div className="countdown-text">
        {seconds > 0 || minutes > 0 ? (
          <p>
            Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </p>
        ) : (
          <p>Didn't receive code?</p>
        )}

        <button
          type="button"
          className="btn btn-outline-primary-1"
          disabled={seconds > 0 || minutes > 0}
          style={{
            display: seconds > 0 || minutes > 0 ? "none" : "block",
          }}
          onClick={resendOTP}
        >
          Resend OTP
        </button>
      </div>
    </>
  );
};

export default OtpResend;
