import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import HomeContainer from './HomeContainer';
import ProjectsContainer from './ProjectsContainer';
import ResumeContainer from './ResumeContainer';
import ContactContainer from './ContactContainer';

const MainContainer = () => {
  return (
    <div className='maincontainer'>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/projects' element={<ProjectsContainer />} />
        <Route path='/resume' element={<ResumeContainer />} />
        <Route path='/contact' element={<ContactContainer />} />
      </Routes>
    </div>
  );
};

export default MainContainer;
