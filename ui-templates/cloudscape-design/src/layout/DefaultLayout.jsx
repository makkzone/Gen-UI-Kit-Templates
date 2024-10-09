// @author Manojkumar kotakonda
import React from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import TopNavigationComponent from '../components/TopNavigationComponent';
import { FaLinkedin,FaGithub,FaGlobe,FaMedium } from "react-icons/fa";
import { Link } from '@cloudscape-design/components';
const DefaultLayout = ({sidebarNavigation,view,disableSideBar}) => {


  return (
    <>
    <TopNavigationComponent/>
      <AppLayout
      disableContentPaddings
        headerSelector="#top-navigation"
        navigationHide={disableSideBar}
        navigation={
          sidebarNavigation
        }
        toolsHide={true}
        content={
          view
        }
        footerSelector='#custom-main-footer'
      />
      <footer class="custom-main-footer" id="f">
              <ul>
                <li>
                  For updates, follow me at
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/makkzone/" target='_blank'><FaLinkedin/></a>
                </li>
                <li>
                  <a href="https://github.com/makkzone" target='_blank'><FaGithub/></a>
                </li>
                <li>
                  <a href="https://makkzone.com" target='_blank'><FaGlobe/></a>
                </li>
                <li>
                  <a href="https://makkzone.medium.com" target='_blank'><FaMedium/></a>
                </li>
              </ul>
              <div class="made-with-love">
                <Link href="https://makkzone.com" target='_blank' variant='info'>MakkZone.com</Link>
              </div>
            </footer>
      </>
  );
};

export default DefaultLayout;
