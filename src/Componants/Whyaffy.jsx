import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "../App.css";

export const Whyaffy = () => {

    useEffect(() => {
        // Register ScrollTrigger plugin with GSAP
        gsap.registerPlugin(ScrollTrigger);

        // Function to split text into spans
        const paragraphs = document.querySelectorAll(".text-container p");
        paragraphs.forEach(paragraph => {
            const text = paragraph.textContent;
            const splitText = text.split("");
            const wrappedText = splitText.map(char => `<span>${char}</span>`).join("");
            paragraph.innerHTML = wrappedText;
        });

        // GSAP animation for scrolling
        gsap.to(".text-container span", {
            color: "#17a2b8",
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".text-container",
                start: "top 80%", // Adjusted start point
                end: "bottom 20%", // Adjusted end point
                scrub: 1,
                markers: false // Set to true to see scroll markers
            }
        });

        // Cleanup function to remove any scroll triggers
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            <div class="section-title  text-center position-relative pb-3 mt-4 mx-auto" style={{ maxWidth: '600px' }}>
                <h1 class="mb-0 why_text">Why Affy Cloud Solutions</h1>
            </div>
            <div className='why'>
                <div className="text-container mt-4">
                    <p>Affycloud is the one stop destination for SAP services as per the particular demand and necessities. Here we are highly dedicated to offer you;</p>
                    <p>1 . Extensive Solutions: We offer you the diverse range of solutions suitable for all your business needs, being a one-stop destination for creative digital transformation.</p>
                    <p> 2. Verified Track Record: Our track record is completely verified as we have demonstrated a history of delivering the most meaningful outcomes as per the preference of our clients.</p>
                    <p> 3. Cutting-Edge Technology: We use the latest technological advancements to empower businesses with innovative ideas and tools. Our cutting-edge technology includes SAP’s suite of solutions,</p>
                    <p> 4. Customer services: Customer satisfaction is the top most priority at At AffyCloud Solutions. We closely interact with our clients to comprehend their unique challenges and find solutions accordingly that exceed their expectations.</p>
                    <p> 5. So let’s Experience the great journey with Affy Cloud Solutions. Join us now and unlock the best potential of your digital transformation journey.</p>
                </div>
            </div>
           
        </div>
    );
}
