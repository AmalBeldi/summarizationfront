import React, { useState } from 'react'

const DoctorDashboard = () => {
    const [selectedTab, setSelectedTab] = useState('dashboard');
    const handleTabChange = (tab) => {
        setSelectedTab(tab);
      };
  return (
   <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div
          className={`sidebar-item ${selectedTab === 'dashboard' && 'active'}`}
          onClick={() => handleTabChange('dashboard')}
        >
          Dashboard
        </div>
        <div
          className={`sidebar-item ${selectedTab === 'analytics' && 'active'}`}
          onClick={() => handleTabChange('analytics')}
        >
          Analytics
        </div>
        {/* Add more sidebar items as needed */}
      </div>

      {/* Main content area */}
      <div className="main-content">
        {selectedTab === 'dashboard' && <h2>tesst</h2>}
        {selectedTab === 'analytics' && <h2>tesst</h2>}
        {/* Add more content components based on selected tab */}
      </div>
    </div>
  )
}

export default DoctorDashboard