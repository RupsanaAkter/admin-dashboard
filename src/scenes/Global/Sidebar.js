
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";

import MapOutlinedIcon from "@mui/icons-material/MapOutlined";


import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
 
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <div className="SideMenu">
     
    
    <Menu
      className="SideMenuVertical"
      mode="vertical"
      onClick={(item) => {
        //item.key
        navigate(item.key);
      }}
      selectedKeys={[selectedKeys]}
      items={[
        
        {
          label: "Dashbaord",
          icon: <HomeOutlinedIcon />,
          key: "/",
        },
        {
          label: "Team managment",
          key: "/team",
          icon: <PeopleOutlinedIcon />,
        },
        {
          label: "Contacts Information",
          key: "/contacts",
          icon: <ContactsOutlinedIcon />,
        },
        {
          label: "Invoices Balances",
          key: "/invoices",
          icon: <ReceiptOutlinedIcon />,
        },
       
     
        {
          label: "Profile Form",
          key: "/form",
          icon: <PersonOutlinedIcon />,
        },
        {
          label: "Calendar",
          key: "/calendar",
          icon: <CalendarTodayOutlinedIcon />,
        },
       
        {
          label: "FAQ page",
          key: "/faq",
          icon: <HelpOutlineOutlinedIcon />,
        },
        {
          label: "Bar Chart",
          key: "/bar",
          icon: <BarChartOutlinedIcon />,
        },
        {
          label: "Pie Chart",
          key: "/pie",
          icon: <PieChartOutlineOutlinedIcon />,
        },
        {
          label: "Line Chart",
          key: "/line",
          icon: <TimelineOutlinedIcon />,
        },
        {
          label: "Geography Chart",
          key: "/geography",
          icon: <MapOutlinedIcon />,
        },
       
      ]}
    ></Menu>
   
  </div>
 
  );
};

export default Sidebar;



