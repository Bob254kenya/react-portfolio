import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="social-icons">
          <p>@Youtube</p>
          <a href="https://www.youtube.com/@DjRamz254thegameattacker" target="_blank" rel="noreferrer">
            Follow
          </a>
          <svg
            fill="#FF0000"
            xmlSpace="preserve"
            viewBox="0 0 461.001 461.001"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
          </svg>
        </div>

        <div className="social-icons">
          <p>@TikTok</p>
          <a href="https://www.tiktok.com/@ceoramz" target="_blank" rel="noreferrer">
            Follow
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#000">
            <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
          </svg>
        </div>

        <div className="social-icons">
          <p>@Instagram</p>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Follow
          </a>
          <svg fill="#FF1493" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06..." />
          </svg>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f172a;
  padding: 2rem;
  color: white;

  .card {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 1.2rem;
    width: 280px;
    height: 60px;
    background: #f8fafc;
    border-radius: 115px;
    padding: 0 20px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
    transition: transform 0.3s ease;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .social-icons {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s;
    position: relative;
    color: #000;
    font-weight: bold;
    font-size: 0.8rem;
  }

  .social-icons > p,
  .social-icons > a {
    opacity: 0;
    transition: all 0.7s;
    position: absolute;
    font-size: 0.7rem;
    border-radius: 7px;
    padding: 3px 7px;
  }

  .social-icons > p {
    background-color: dodgerblue;
    top: -60%;
  }

  .social-icons > a {
    background-color: crimson;
    bottom: -60%;
  }

  .social-icons:hover > p,
  .social-icons:hover > a {
    opacity: 1;
  }

  .social-icons:hover svg {
    transform: scale(1.2);
    transition: transform 0.3s;
  }

  .card svg {
    height: 26px;
    width: 26px;
  }
`;

export default Card;

