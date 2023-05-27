import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';

const FooterBar = observer(() => {
    const user = true //useContext(Context)

    const navigate = useNavigate()
  return (
    <MDBFooter className=' bg-dark text-center text-white'>
        
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright: 
        <a className='text-white' href='#'>
          SkillSwap.com
        </a>
      </div>
    </MDBFooter>
  )
  })
export default FooterBar;