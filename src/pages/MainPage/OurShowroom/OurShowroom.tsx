// import { getImagePath, getImageURL } from '../../../utils/getImagePath';
import classes from './OurShowroom.module.css';
import { getImagePath } from '../../../utils/getImagePath';

export function OurShowroom() {

    return (
        <div className={classes.ourshowroom}>
            <div className={classes.text}>
                <h1 className={classes.title}>Our Showroom</h1>
                <p className={classes.desc}>Welcome to ErgoCraft showroom, where style meets comfort and functionality. Step into a world where every piece of furniture tells a story of craftsmanship and elegance. Transform your living spaces into expressions of your lifestyle. Visit ErgoCraft today and let us help you turn your vision for your home or office into a reality. Your dream space awaits!
                </p>
            </div>
            <img className={classes.img} src={getImagePath('/img/ourshowroom/ourshowroom.png')} alt="ourshowroom" />
        </div>
    )
}