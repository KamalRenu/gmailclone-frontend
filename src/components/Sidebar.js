import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Link to="/compose"><button className="sidebar_compose">
          <span className="material-icons">add</span>
          compose
        </button></Link>
        <div className="sidebarOption sidebarOption_active">
          <span className="material-icons">inbox</span>
          <h3>Inbox</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">star</span>
          <h3>Starred</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">access_time</span>
          <h3>Snoozed</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">label_important</span>
          <h3>Important</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">near_me</span>
          <h3>Send</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">note</span>
          <h3>Draft</h3>
        </div>

        <div className="sidebarOption">
          <span className="material-icons">expand_more</span>
          <h3>More</h3>
        </div>

        <div className="sidebar_footer">
          <div className="sidebar_footerIcons">
            <span className="material-icons">person</span>
            <span className="material-icons">duo</span>
            <span className="material-icons">phone</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar