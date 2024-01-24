import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faGear } from '@fortawesome/free-solid-svg-icons';
import Pie from './Pie.png';
import colors from './colors.png';
import Pay from './Pay.png';


function App() {
  const [searchValue, setSearchValue] = useState('');

  const navigationItems = [
    { label: 'Home' },
    { label: 'Orders' },
    { label: 'Integration' },
    { label: 'Tracking', subItems: [] },
  ];

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-left">
          {navigationItems.map((item, index) => (
            <div key={index} className={`navbar-item${item.subItems ? ' with-dropdown' : ''}`}>
              {item.label}
              {item.subItems && (
                <>
                  <span className="dropdown-icon">&#9660;</span>
                  <div className="dropdown-content">
                    {item.subItems.map((subItem, subIndex) => (
                      <div key={subIndex} className="dropdown-item">
                        {subItem}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
          <div className="navbar-item">Partner with us</div>
        </div>

        <div className="navbar-right">
          <div className="search-container">
            <span className="search-icon">
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="navbar-item">
            <span className="account-icon">
              <FontAwesomeIcon icon={faUser} />
            </span> Account
          </div>
          <div className="navbar-item">
            <span className="settings-icon">
              <FontAwesomeIcon icon={faGear} />
            </span> Settings
          </div>
        </div>
      </nav>

      <div className="content">
        {/* Your page content goes here */}
        <h1>Welcome, John Mathew!!</h1>
        <div className="card-container">
          {[
            {
              title: 'Order Sync Successful!',
              description: 'Your order details from the last 30 days have been successfully synced. Check them out now!',
              buttonText: 'Explore Your Orders',

            },
            {
              title: 'Customize Customer Notification',
              description: 'Tailor Your Email Experience: Set the Sender Email and Choose Notification Triggers',
              buttonText: 'Configure Notifications',
              backgroundColor: '#FFF8DB',

            },
            {
              title: 'Your Tracking Link has been generated',
              description: 'Include the Link to Your Stores Navigation Menu.',
              buttons: [
                { text: 'Copy Link', action: 'copyLinkAction' },
                { text: 'Go To Navigation Menu', action: 'goToMenuAction' },
              ],
              backgroundColor: '#EAF4FF',
            },
          ].map((card, index) => (
            <div key={index} className="card" style={{ backgroundColor: card.backgroundColor }}>
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              {card.buttons ? (
                <div className="button-container">
                  {card.buttons.map((button, buttonIndex) => (
                    <button
                      key={buttonIndex}
                      className={button.text === 'Copy Link' ? 'copy-link-button' : 'navigation-menu-button'}
                    >
                      {button.text}
                    </button>
                  ))}
                </div>
              ) : (
                <button>{card.buttonText}</button>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='container'>
        <br />
        <br />
        <div classname="self-container">
          <h2>Instant Dive into Your Performance Metrics</h2>
          <div className="additional-buttons-container">
            {[
              { label: 'Lasttime' },
              { label: 'Last Week' },
              { label: 'Last Month' },
              { label: 'Last Year' },
              { label: 'Customize Time Line', icon: '📅' },
            ].map((button, index) => (
              <button key={index} className={button.icon ? 'calendar-button' : ''}>
                {button.label} {button.icon && <span className="calendar-icon">{button.icon}</span>}
              </button>
            ))}
          </div>

          <div className="customizable-card-container">
            {[
              {
                title: 'Shipment Updates',
                orderInfo: 'Total orders: 394',
                buttons: [
                  { label: 'Delivered', action: 'deliveredAction' },
                  { label: 'Out for Delivery', action: 'outForDeliveryAction' },
                  { label: 'Intransit', action: 'inTransitAction' },
                  { label: 'Pending', action: 'pendingAction' },
                ],
              },
              // Add two more cards as needed
            ].map((card, index) => (
              <div key={index} className="customizable-card">
                <div className="card-header">
                  <h2>{card.title}</h2>
                  <p>{card.orderInfo}</p>
                </div>
                <div className="button-container">
                  {card.buttons.map((button, buttonIndex) => (
                    <button key={buttonIndex} >
                      {button.label}
                    </button>
                  ))}
                </div>
                <img src={Pie} alt="" className="card-image" />
              </div>
            ))}

            <div className="card1">
              <h4>Star Facts about your orders!!!</h4>
              <p>There are 8 shipments that have been in out for delivery for more than 3 days.</p><br/>
              <p>There are 5 shipments in exception right now</p><br/>
              <p>The maximum charge backs are from Miami.</p>
              
              <button>Check Orders Page</button>
            </div>
            <br />
            <div className="card2">
              <h3>Tracking Page Views Vs Orders</h3>
              <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>
              <p>Understand user engagement patterns and optimize your tracking page for enhanced customer experiences.</p>

              <div className="minicard">
                <h3>Orders</h3>
                <p>80</p>
              </div>

              <div className="minicard2">
                <h3>Tracking Page Views</h3>
                <p>49</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className='container-three'>

        <div classname="self-container-three">
          <h2>Discover the Heart of Our Functionality</h2>

          <div className="card left-card">
            <h2>Elevate Your Brand Aesthetics with Custom Tracking Page Styles</h2>
            <p>Immerse your customers in a branded experience by personalizing the colors on your tracking page.</p>
            <img src={colors} alt="" className="card-image" />
            <div className="button-container">
              <button className="white-button">Preview</button>
              <button className="black-button">Apply Colors</button>
            </div>
          </div>
          <br />
          <br />

          <div className="card center-card">
            <h2>Exclusive Onboarding Support for High-Volume Brands</h2>
            <p>Unlock personalized guidance! Book a one-on-one
              onboarding call to streamline your experience.</p>
            <button className="center-button">Schdule a Call</button><br/>
          </div>

          <div className="card center-card1">
            <h2>Explore Our Integrated Ecosystem</h2>
            <p>Discover a variety of popular integrations tailored for your convenience. </p>
            <img src={Pay} alt="" className="image" /><br />
            <button className="center-button">Explore Integrations </button>
          </div>

          <div className="card-three">
            <h3>Seamlessly Integrate Custom HTML Elements</h3>
            <p>Unleash creativity with our Custom HTML feature. Add links, custom messages, or any HTML content to elevate the tracking page experience for your customers.</p>
            <div className="html-link">
              <h3>HTML Link:</h3>
              <textarea placeholder='Value'></textarea>
            </div>
            <div className="button-container">
              <button className="white-button">Preview</button>
              <button className="black-button">Apply Changes</button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>


    </div>
  );
}

export default App;
