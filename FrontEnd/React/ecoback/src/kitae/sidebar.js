import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from "react-router-dom";
import {Navigation} from 'react-minimal-side-navigation';
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import Icon from "awesome-react-icons";
const Sidebar=() => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(); // 사이드바 요소에 대한 ref를 생성

  // 클릭 이벤트 리스너
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // 사이드바 외부를 클릭하면 사이드바를 닫음
    }
  };

  // 컴포넌트가 마운트되었을 때 클릭 이벤트 리스너를 등록하고, 언마운트되었을 때 리스너를 제거
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
      <>
      <div
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />
      <div ref={sidebarRef} style={{position:"fixed",right:1,zIndex:1000, backgroundColor: 'white'}}>
        {!isSidebarOpen && (
          <button
            style={{position:"absolute",right:1 }}
            className="btn-menu"
            onClick={() => setIsSidebarOpen(true)}
            type="button"
          >
            <Icon name="burger" className="w-6 h-6" />
          </button>
        )}

        {isSidebarOpen &&(
        <Navigation 
            
            // you can use your own router's api to get pathname
            items={[
              {
                title: '이벤트',
                itemId: '/event',
                // you can use your own custom Icon component as well
                // icon is optional
                elemBefore: () => <Icon name="inbox" />
              },
              {
                title: '마이 페이지',
                itemId: '/mypage',
                elemBefore: () => <Icon name="user" />
                // subNav: [
                //   {
                //     title: 'Projects',
                //     itemId: '/management/projects',
                //   },
                //   {
                //     title: 'Members',
                //     itemId: '/management/members',
                //   },
                // ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                
              },
              {
                title: 'Another Item',
                itemId: '/another',
                
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
              {
                title: 'Another Item',
                itemId: '/another',
                subNav: [
                  {
                    title: 'Teams',
                    itemId: '/management/teams',
                  },
                ],
              },
              
            ]}
            
          />
          )}
        </div>
      </>
    );
};
export default Sidebar;