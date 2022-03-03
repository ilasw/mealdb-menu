import React, {FC} from "react";
import {MealListItemProps} from "./MealList.props";
import styles from "./MealList.module.scss";
import {useCart} from "@/hooks";

export const MealListItem: FC<MealListItemProps> = ({meal}) => {
  const {strMeal, strMealThumb} = meal;
  const {isAdded, add, remove, quantity} = useCart(meal);

  return <div className={styles.item}>
    {/* todo: add Schema.org for recipes */}
    <img src={strMealThumb}
         alt={strMeal}
         className={styles.thumb}
    />
    <h3 className={styles.name}>{strMeal}</h3>
    <div className="add-to-card">
      {!isAdded && (
          <button className={'btn btn-round'}
                  onClick={add}
          >Aggiungi +</button>
      )}
      {isAdded && (
          <div>
            <button className={'btn btn-round'}
                    onClick={remove}
            >-</button>
            <span className={styles.quantity}> {quantity} </span>
            <button className={'btn btn-round'}
                    onClick={add}
            >+</button>
          </div>
      )}
    </div>
  </div>;
}

export default MealListItem;