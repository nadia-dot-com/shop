import { Button } from "../../../component/Button/Button";
import { SALE } from "../../../data/categories";
import { getImagePath } from "../../../utils/getImagePath";
import { useShoppingNavigation } from "../../../hooks/useShoppingNavigation";

import classes from './Sale.module.css';

export function Sale() {
    const { navigateToCategory } = useShoppingNavigation();

    return (
        <section className={classes.saleSection} >
            <div
                className={classes.bg}
                style={{ backgroundImage: `url(${getImagePath('img/sale/sale-bg.png')})` }}
            />

            <div className={classes.products}>
                <div className={classes.chair}>
                    <img src={getImagePath('img/sale/sale-chair.png')} alt="sale-chair" />
                    {/* <div className={classes.percentTag}> */}
                        <span className={classes.percent}>-10%</span>
                    {/* </div> */}
                </div>

                <div className={classes.table}>
                    <img src={getImagePath('img/sale/table-sale.png')} alt="sale-table" />
                    {/* <div className={classes.percentTag}> */}
                        <span className={classes.percent}>-20%</span>
                    {/* </div> */}
                </div>
                <div className={classes.vase}>
                    <img src={getImagePath('img/sale/sale-vase.png')} alt="sale-vase" />
                    {/* <div className={classes.percentTag}> */}
                        <span className={classes.percent}>-20%</span>
                    {/* </div> */}
                </div>

            </div>

            <div className={classes.text}>
                <h1 className={classes.title}>Spring Sale</h1>
                <h2 className={classes.desc}>Enjoy up to <span style={{ color: 'red' }}>40%</span> off a selection of furniture,
                    decor, and more.</h2>
                <Button
                    bgColor="#D74F0E"
                    textColor="white"
                    onClick={() => navigateToCategory(SALE)}
                    text={"• SHOP NOW"}
                />
            </div>
        </section>
    )
}