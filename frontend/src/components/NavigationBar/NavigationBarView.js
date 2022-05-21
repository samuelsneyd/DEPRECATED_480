import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import MobileDrawer from '../MobileDrawer/MobileDrawer';

function NavigationBarView(props) {
  const { links, isMobile, tabValue, setTabValue } = props;

  return (
    <div>
      <AppBar position="fixed" sx={{}}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {isMobile
            ? <MobileDrawer links={links}/>
            : (
              <Tabs
                textColor={'inherit'}
                value={tabValue}
                onChange={(e, value) => setTabValue(value)}
              >
                {links.map((link) => {
                  return <Tab
                    key={link.title}
                    label={link.title}
                    sx={{ color: link.color || 'secondary.light' }}
                  >
                    <Link to={link.href}>{link.title}</Link>
                  </Tab>;
                })}
              </Tabs>
            )}
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}

export default NavigationBarView;

// function NavigationBarView(props) {
//   const { links, isMobile, tabValue, setTabValue } = props;
//
//   return (
//     <div>
//       <AppBar position="fixed" sx={{}}>
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           {isMobile
//             ? <MobileDrawer links={links}/>
//             : (
//               <Tabs
//                 textColor={'inherit'}
//                 value={tabValue}
//                 onChange={(e, value) => setTabValue(value)}
//               >
//                 {links.map((link) => {
//                   return <Tab
//                     key={link.title}
//                     label={link.title}
//                     href={link.href}
//                     sx={{ color: link.color || 'secondary.light' }}
//                   />;
//                 })}
//               </Tabs>
//             )}
//         </Toolbar>
//       </AppBar>
//       <Toolbar/>
//     </div>
//   );
// }

// function NavigationBarView(props) {
//   const { links } = props;
//
//   return (
//     <div>
//       <AppBar position="fixed">
//         <Toolbar sx={{ justifyContent: 'space-between' }}>
//           <Box sx={{
//             flex: 1,
//             display: 'flex',
//             justifyContent: 'flex-start'
//           }}>
//             {links.map((link) => (
//               <Link
//                 color="inherit"
//                 variant="caption"
//                 underline="none"
//                 key={link.title}
//                 href={link.href}
//                 sx={{
//                   fontSize: 16,
//                   ml: 3,
//                   color: link.color || 'secondary.light'
//                 }}
//               >
//                 {link.title}
//               </Link>
//             ))}
//           </Box>
//         </Toolbar>
//       </AppBar>
//       <Toolbar/>
//     </div>
//   );
// }
