import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi';

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>My Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/ UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User Research through surveys and interviews.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>I create low-fidelity wireframes & interactive prototypes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>User Interface Design with a keen eye for aesthetics.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I guarantee a consistent user experience across devices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> I conduct usability tests to evaluate the effectiveness.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I develop design systems and style guides for scalability.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I am tailoring user specific websites from scratch.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> I utilize responsive design techniques to optimize UX.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I specialize in creating captivating user interfaces.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I design and develop robust server-side architectures.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I can integrate popular CMS platforms like WordPress.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> I optimize websites for speed, performance, and search engine visibility.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> I provide ongoing maintenance and support services.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}


        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I work closely with you to develop a comprehensive content strategy.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I create persuasive and impactful written content.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I produce well-researched, and engaging blog articles.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Content Optimization by conducting keyword research.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Craft compelling content for social media platforms.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> I help promote your content through various channels.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

      </div>
    </section>
  )
}

export default Services