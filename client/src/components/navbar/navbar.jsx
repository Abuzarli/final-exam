import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import style from './index.module.css'
const NAVBAR = () => {
  return (
    <div className={style.navbar}>
        <div className={style.nav_1}>
            <p>We believe we helps people
                <br />
               for happier lives</p>
               <img src="https://preview.colorlib.com/theme/gym/img/logo.png" alt="" />
               <div className={style.nav_contact}>
               <p>+880 123 12 658 439</p>
               <div className={style.nav_icon}><PhoneIcon style={{color:'white'}}/></div>
               </div>
        </div>
        <div className={style.nav_2}>
                <Link className={style.link} to=''>HOME</Link>
                <Link className={style.link} to='/add-exercise'>ADD EXERCISE</Link>
                <Link className={style.link}>WE OFFER</Link>
                <Link className={style.link}>TOP COURSE</Link>
                <Link className={style.link}>SCHEDULE</Link>
                <Link className={style.link}>TRAINER</Link>
                <Link className={style.link}>PLAN</Link>
                <Link className={style.link}>PAGES</Link>
               </div>
    </div>

  )
}

export default NAVBAR