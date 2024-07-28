import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './DomainTabs.css';

const DomainTabs = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Dedicated Servers</Tab>
        <Tab>Virtual Cloud Servers</Tab>
        <Tab>WordPress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Services</Tab>
        <Tab>Free Hosting</Tab>
      </TabList>

      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">
            <h2>.COM</h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
            <h2>.Al</h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
            <h2>.HEALTH </h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
          <h2>.NET </h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
          <h2>.CO.UK</h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
          <h2>.ORG </h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
          <h2>.CO </h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
          <div className="domain-item">
          <h2>.SEA </h2>
            <h3>$5.99/yr</h3>
            <p>Instead of 10.99</p>
            <button>Buy now</button>
          </div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for Web Hosting</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for Dedicated Servers</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for Virtual Cloud Servers</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for WordPress Hosting</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for Email Hosting</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for VPS Hosting Services</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div className="domain-content">
          <div className="domain-item">Content for Free Hosting</div>
        </div>
      </TabPanel>
    </Tabs>
  );
};

export default DomainTabs;
