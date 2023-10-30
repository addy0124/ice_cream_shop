import React, { useState } from 'react';
import './header.scss';
import classnames from 'classnames';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/image/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';


type Props = {}

type HeaderListTypeProps = {
    key: string,
    path: string,
    title: string
}

const headerlist: HeaderListTypeProps[] = [
    {
    key:'home',
    path:'/home',
    title:'Home'
    },
    {
    key:'about',
    path:'/about',
    title:'About'
    },
    {
    key:'shop',
    path:'/shop',
    title:'Shop'
    },
    {
    key:'blog',
    path:'/blog',
    title:'Blog'
    },
    {
    key:'promote',
    path:'/promote',
    title:'Promote'
    },
    {
    key:'contact',
    path:'/contact',
    title:'Contact'
    }
]

const Header = (props: Props) => {
    const [expanded, setExpanded] = useState<boolean>(false);
    console.log("expanded : ", expanded);


  return (

    <div className={classnames("header")}>
        <div className={classnames("header_top", 'd-lg-flex', 'd-md-block')}>

            <div className={classnames("contactbox", 'col-lg-4', 'd-none', 'd-lg-flex')}>
                <span>
                    <HeadphonesIcon />
                </span>
                <div>
                    <p className='fw-lighter m-0'>CALL US</p>
                    <p className='fs-6 m-0 fw-bold'>Tel: 8888 8888</p>
                </div>
            </div>

            <div className={classnames("logobox", 'col-lg-4', 'col-12')}>
                <p className='fs-4 m-0 fw-bold'>ICE</p><span><img src={Logo}/></span><p className='fs-4 m-0 fw-bold'>CREAM</p>
            </div>

            <div className={classnames("loginbox", 'col-lg-4', 'd-none', 'd-lg-flex')}>
                <ul>
                    <li><a href='#' className='nav-link'><SearchIcon /></a></li>
                    <li><a href='#' className='nav-link'><FavoriteIcon /></a></li>
                    <li><a href='#' className='nav-link'><PersonIcon /></a></li>
                    <li><a href='#' className='nav-link'><ShoppingCartIcon /></a></li>
                </ul>
                
                <p className='m-0 fw-bold'>$100.00</p>
            </div>
        </div>

        <div className={classnames("header_bottom")}>

                <ul className={classnames("d-none d-lg-flex")}>
                    {headerlist.map((item) => {
                        return (
                            <li key={item.key}>
                                <a href='#' className='nav-link fw-lighter'>
                                {item.title.toLocaleUpperCase()}
                                </a>
                            </li>
                        )
                    })}
                </ul>
        </div>

    </div>

            

      
  );
}

export default Header;