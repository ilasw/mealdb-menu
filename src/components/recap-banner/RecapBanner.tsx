import React, {FC, useMemo} from "react";
import {RecapBannerProps} from "./RecapBanner.props";
import styles from './RecapBanner.module.scss'
import {useSelector} from "react-redux";
import {RootState, store} from "../../store";

export const RecapBanner: FC<RecapBannerProps> = (props) => {
  const {dispatch} = store;
  const cart = useSelector((state: RootState) => state.cart);
  const cartItems = useMemo(() => Object.entries(cart)
      .map(([id, item]) => ({...item, id}))
      .filter(({quantity = 0}) => quantity > 0), [cart])
  const cartCount = useMemo(
      () => cartItems.reduce((acc, {quantity = 0}) => acc + quantity, 0),
      [cartItems]
  )

  return <div className={`${styles.RecapBanner} ${(cartCount > 0) && styles['--status-open']}`}>
    <div className={styles.recap}>
      <h3>Il mio ordine ({cartCount} piatti)</h3>
      <div className={styles.list}>
        {cartItems?.map((item) => (
            <div className={styles.item}
                 key={item.id}
            ><span className={styles.name}>{item.name}</span> x{item.quantity}</div>
        ))}
      </div>
    </div>
    <div className={styles.actions}>
      <button className="btn btn-danger btn-round"
              onClick={() => dispatch.cart.clear()}
      >Annulla</button>
      <button className="btn btn-round"
              onClick={() => {
                alert('Tra poco arriverà il tuo ordine :)')
                dispatch.cart.clear()
              }}
      >Conferma</button>
    </div>
  </div>
}
export default RecapBanner;