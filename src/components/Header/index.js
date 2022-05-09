import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

export default memo(function PglHeader() {
  return (
    <div>
      <NavLink to="/">dsicover</NavLink>
      <NavLink to="/mine">mine</NavLink>
      <NavLink to="/friend">friend</NavLink>
    </div>
  )
})
