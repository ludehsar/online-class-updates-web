import React from 'react';
import { Admin, ListGuesser, Resource, ShowGuesser } from 'react-admin';
import ComputerIcon from '@material-ui/icons/Computer';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CenterFocusStrongIcon from '@material-ui/icons/CenterFocusStrong';
import EventIcon from '@material-ui/icons/Event';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import PersonIcon from '@material-ui/icons/Person';

import './App.css';
import { firebaseAuthProvider, firestoreProvider } from './firestoreProvider.d';
import { JoinClassesCreate, JoinClassesEdit, JoinClassesListAsAdmin, JoinClassesListAsUser } from './views/join-classes';
import { AnnouncementList } from './views/announcements';

const App = () => {
  return (
    <Admin authProvider={firebaseAuthProvider} dataProvider={firestoreProvider}>
      {permissions => [
        permissions === 'admin' ?
          <Resource name="join_classes" list={JoinClassesListAsAdmin} icon={ComputerIcon} show={ShowGuesser} create={JoinClassesCreate} edit={JoinClassesEdit} /> :
          <Resource name="join_classes" list={JoinClassesListAsUser} icon={ComputerIcon} show={ShowGuesser} />,
        
        permissions === 'admin' ?
          <Resource name="exams" list={ListGuesser} icon={CenterFocusStrongIcon} show={ShowGuesser} /> :
          <Resource name="exams" list={ListGuesser} icon={CenterFocusStrongIcon} />,
        
        permissions === 'admin' ?
          <Resource name="assignments" list={ListGuesser} icon={AssignmentIcon} show={ShowGuesser} /> :
          <Resource name="assignments" list={ListGuesser} icon={AssignmentIcon} show={ShowGuesser} />,
        
        permissions === 'admin' ?
          <Resource name="announcements" list={AnnouncementList} icon={AnnouncementIcon} show={ShowGuesser} /> :
          <Resource name="announcements" list={AnnouncementList} icon={AnnouncementIcon} />,

        permissions === 'admin' ?
          <Resource name="courses" list={ListGuesser} icon={MenuBookIcon} show={ShowGuesser} /> :
          <Resource name="courses" list={ListGuesser} icon={MenuBookIcon} />,

        permissions === 'admin' ?
          <Resource name="routines" list={ListGuesser} icon={EventIcon} show={ShowGuesser} /> :
          <Resource name="routines" list={ListGuesser} icon={EventIcon} />,
        
        permissions === 'admin' ?
          <Resource name="users" list={ListGuesser} icon={PersonIcon} show={ShowGuesser} /> :
          null
      ]}
    </Admin>
  );
}

export default App;
