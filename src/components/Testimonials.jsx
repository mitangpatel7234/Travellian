import React from "react";
import styled from "styled-components";
import avatar1 from "../assets/blog1.jpg";
import avatar2 from "../assets/blog2.jpg";
import avatar3 from "../assets/blog3.jpg";
export default function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src="https://lh3.googleusercontent.com/a/ACg8ocJFVQbsbRwrSgONiwv-rnouhn2q8M8QS9oQh98tbJ9ZnZ0=s80-p-k-rw-no" alt="" />
            <div className="details">
              <h4>Mitang Patel</h4>
              <span>Developer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaqueLorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src="https://lh3.googleusercontent.com/cm/AOgkWRbtZi-nL5Pd9kbFi85dmGjIJhbuse2TPUhZO91znd5WK4QQMpC4E0c_lY7zJ3kM=s80-p-k-rw-no" alt="" />
            <div className="details">
              <h4>Rishi Raj</h4>
              <span>CEO - Neon Shark</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            asperiores eaque.
          </p>
          <div className="info">
            <img src="https://lh3.googleusercontent.com/a-/ALV-UjXIwsNTLMnCG9tump5mVkkSLwFmMUxOS5Rj7pg3H6d2ZGg=s80-p-k-rw-no" alt="" />
            <div className="details">
              <h4>Premanand Chowdhury</h4>
              <span>MD - Neon Shatrk</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: #FFF8F1;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
